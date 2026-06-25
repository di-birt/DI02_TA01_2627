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

  toastCtrl = inject(ToastController);

  restaurantesCargados = signal<Restaurante[]>([]);

  textoBusqueda = signal('');
  localidadesSeleccionadas = signal<string[]>([]);
  territorioSeleccionado = signal('');

  territoriosFiltrados = computed(() => {
    const territorios = this.restaurantesCargados().map(r => r.territory);
    return Array.from(new Set(territorios)).sort();
  });

  localidadesFiltradas = computed(() => {
    let lista = this.restaurantesCargados();
    const territorio = this.territorioSeleccionado().toLowerCase().trim();
    if (territorio) {
      lista = lista.filter(r => r.territory?.toLowerCase().trim() === territorio);
    }
    const localidades = lista.map(r => r.locality?.trim()).filter((l): l is string => !!l);
    return Array.from(new Set(localidades)).sort();
  });

  restaurantesFiltrados = computed(() => {
    let lista = this.restaurantesCargados();
    const texto = this.textoBusqueda().toLowerCase().trim();
    if (texto) {
      lista = lista.filter(r => r.documentName.toLowerCase().includes(texto));
    }
    const localidades = this.localidadesSeleccionadas();
    if (localidades.length > 0) {
      lista = lista.filter(r => localidades.includes(r.locality?.trim() ?? ''));
    }
    const territorio = this.territorioSeleccionado().toLowerCase().trim();
    if (territorio) {
      lista = lista.filter(r => r.territory?.toLowerCase().trim() === territorio);
    }
    return lista;
  });

  onTerritorioChange(event: any) {
    this.territorioSeleccionado.set(event.detail.value ?? '');
    this.localidadesSeleccionadas.set([]);
  }

  onLocalidadChange(event: any) {
    this.localidadesSeleccionadas.set(event.detail.value ?? []);
  }

  async cargarDatos() {
    this.restaurantesCargados.set(restaurantesJSON as Restaurante[]);
    const total = this.restaurantesCargados().length;
    const toast = await this.toastCtrl.create({
      message: `✅ ${total} restaurantes cargados correctamente`,
      duration: 3000,
      color: 'success',
      position: 'bottom',
      buttons: [{ text: 'X', role: 'cancel' }]
    });
    await toast.present();
  }
}