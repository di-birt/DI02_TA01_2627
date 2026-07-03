import { Component, signal, computed, inject } from '@angular/core';
import restaurantesJSON from '../../assets/datos/restaurantes.json';
import { IonicModule } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Restaurante } from '../interface/restaurante';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  //inyección de dependencias para el controlador de toasts de Ionic
  toastCtrl = inject(ToastController);

  //carga inicial de datos desde el JSON incluido en los assets restaurantesJSON, tipado como un array de Restaurante
  restaurantes: Restaurante[] = restaurantesJSON as Restaurante[];

  /*** SIGNALS para manejar el estado de la aplicación de forma reactiva y eficiente ***/
  //restaurantesCargados es el signal principal que contiene la lista de restaurantes actualmente cargados (inicialmente vacío)
  restaurantesCargados = signal<Restaurante[]>([]);
  //signals para los filtros de búsqueda: texto libre
  textoBusqueda = signal('');
  //filtro de territorio seleccionado, inicialmente vacío
  territorioSeleccionado = signal('');
  //filtro de localidades seleccionadas, usando un Set para evitar duplicados y facilitar la gestión de selección múltiple
  localidadesSeleccionadas = signal<string[]>([]);

  //computed para derivar datos basados en el estado actual de los signals
  //hayDatos indica si hay restaurantes cargados, utilizado para mostrar mensajes o la tabla de resultados
  hayDatos = computed(() => this.restaurantesCargados().length > 0);

  //hayFiltrosActivos indica si hay algún filtro activo (texto de búsqueda, territorio seleccionado o localidades seleccionadas) para mostrar mensajes o activar/desactivar botones de limpieza de filtros
  //De momento se hace uso de este método únicamente cuando introducimos un texto en el filtro de búsqueda, pero se podría ampliar su uso para mostrar un mensaje de "filtros activos" o activar un botón de "limpiar filtros" cuando haya alguno activo
  hayFiltrosActivos = computed(() =>
    !!this.textoBusqueda() ||
    !!this.territorioSeleccionado() ||
    this.localidadesSeleccionadas().length > 0
  );

  //territoriosFiltrados calcula la lista de territorios únicos disponibles en los restaurantes cargados, ordenados alfabéticamente, para mostrar en el dropdown de selección de territorio
  territoriosFiltrados = computed(() => {
    const territorios = this.restaurantesCargados().map(r => r.territory);
    return Array.from(new Set(territorios)).sort();
  });

  //localidadesFiltradasPorTerritorio calcula la lista de localidades únicas disponibles en los restaurantes que coinciden con el territorio seleccionado, ordenados alfabéticamente, para mostrar en el dropdown de selección de localidades (dependiente del territorio)
  localidadesFiltradasPorTerritorio = computed(() => {
    let lista = this.restaurantesCargados();
    const territorio = this.territorioSeleccionado().toLowerCase().trim();
    if (territorio) {
      lista = lista.filter(r => r.territory?.toLowerCase().trim() === territorio);
    }
    const localities = lista.map(r => r.locality?.trim()).filter((l): l is string => !!l);
    return Array.from(new Set(localities)).sort();
  });

  //restaurantesFiltrados calcula la lista de restaurantes que coinciden con todos los filtros activos (texto de búsqueda, territorio seleccionado y localidades seleccionadas) para mostrar en la tabla de resultados
  restaurantesFiltrados = computed(() => {
    let lista = this.restaurantesCargados();

    const texto = this.textoBusqueda().toLowerCase().trim();
    if (texto) {
      lista = lista.filter(r => r.documentName.toLowerCase().includes(texto));
    }

    const territorio = this.territorioSeleccionado().toLowerCase().trim();
    if (territorio) {
      lista = lista.filter(r => r.territory.toLowerCase().trim() === territorio);
    }

    const seleccionadas = this.localidadesSeleccionadas();
    if (seleccionadas.length > 0) {
      lista = lista.filter(r => seleccionadas.includes(r.locality?.trim() || ''));
    }

    return lista;
  });

  //localidadesSeleccionadasArray es un computed que convierte el Set de localidades seleccionadas en un array para facilitar su uso en el template (por ejemplo, para mostrar las localidades seleccionadas o para pasarlas a componentes de selección múltiple)
  /*get localidadesSeleccionadasArray(): string[] {
    return Array.from(this.localidadesSeleccionadas());
  }*/
  // Como computed
  localidadesSeleccionadasArray = computed(() => 
    this.localidadesSeleccionadas()
  );

  //método que se llama cuando cambia el filtro de territorio, actualiza el signal de territorio seleccionado y limpia las localidades seleccionadas que ya no son válidas para el nuevo territorio
  onTerritorioChange(event: any) {
    this.territorioSeleccionado.set(event.detail.value);
    const nuevasLocalidades = this.localidadesSeleccionadas().filter(loc =>
      this.localidadesFiltradasPorTerritorio().includes(loc)
    );
    this.localidadesSeleccionadas.set(nuevasLocalidades);
  }

  //método que se llama cuando cambia el filtro de localidades, actualiza el signal de localidades seleccionadas con las nuevas selecciones (recibidas como un array desde el evento)
  onLocalidadesChange(event: any) {
    this.localidadesSeleccionadas.set(event.detail.value);
  }

  //método privado para mostrar un toast con un mensaje y un color específico (success, danger o warning) utilizando el controlador de toasts de Ionic, utilizado para mostrar mensajes de éxito al cargar datos o mensajes de advertencia cuando no hay resultados que coincidan con los filtros
  private async mostrarToast(mensaje: string, color: 'success' | 'danger' | 'warning') {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      color,
      position: 'bottom',
      buttons: [{ text: 'X', role: 'cancel' }]
    });
    await toast.present();
  }

  //método para limpiar todos los filtros, reseteando los signals de texto de búsqueda, territorio seleccionado y localidades seleccionadas a sus valores iniciales (vacío o Set vacío)
  limpiarTodosFiltros() {
    this.textoBusqueda.set('');
    this.territorioSeleccionado.set('');
    this.localidadesSeleccionadas.set([]);
  }

  //método para cargar los datos de restaurantes desde el JSON incluido en los assets, actualizando el signal de restaurantes cargados con la lista de restaurantes obtenida y mostrando un toast de éxito con el número de restaurantes cargados
  cargarDatos() {
    this.restaurantesCargados.set(this.restaurantes);
    this.mostrarToast(`${this.restaurantes.length} restaurantes cargados`, 'success');
  }

  //métodos para obtener el número de estrellas Michelin y soles Repsol de un restaurante, manejando el caso en el que estos valores puedan ser nulos o no numéricos, devolviendo 0 en esos casos para evitar errores en la tabla de resultados
  estrellasMichelin(r: Restaurante): number {
    return Number(r.michelinStar) || 0;
  }

  //método para obtener el número de soles Repsol de un restaurante, manejando el caso en el que este valor pueda ser nulo o no numérico, devolviendo 0 en esos casos para evitar errores en la tabla de resultados
  repsolSoles(r: Restaurante): number {
    return Number(r.repsolSun) || 0;
  }
}