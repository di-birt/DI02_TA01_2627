import { Component, signal, computed } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, deleteDoc, doc } from '@angular/fire/firestore';
import restaurantesJSON from '../../assets/datos/restaurantes.json';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { addIcons } from 'ionicons'; // Importar addIcons
import { star, sunny } from 'ionicons/icons';

interface Restaurante {
  documentName: string;
  documentDescription: string;
  templateType: string;
  locality: string;
  localityQ: string,
  qualityQ : string,
  qualityIconDescription : string,
  accesibility : string,
  accesibilityIconDescription : string,
  phone : string,
  address : string,
  marks : string,
  physical : string,
  visual : string,
  auditive : string,
  intellectual : string,
  organic : string,
  qualityAssurance : string,
  tourismEmail : string,
  web : string,
  importance : string,
  room : string,
  productClub : string,
  visit : string,
  capacity : string,
  store : string,
  gastronomical : string,
  surfing : string,
  postalCode : string,
  restorationType : string,
  recomended : string,
  recomendedURLIcon : string,
  recomendedIconDescription : string,
  restaurant : string,
  bodega : string,
  michelinStar : string,
  repsolSun : string,
  latitudelongitude : string,
  latwgs84 : string,
  lonwgs84 : string,
  placename : string,
  municipality : string,
  municipalitycode : string,
  postalcode : string,
  territory : string,
  territorycode : string,
  country : string,
  countrycode : string,
  email : string,
  webpage : string,
  friendlyUrl : string,
  physicalUrl : string,
  dataXML : string,
  metadataXML : string,
  zipFile : string
  // añade más campos si quieres
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: 'home.page.html',
})
export class HomePage {
  restaurantes: Restaurante[] = restaurantesJSON as Restaurante[];
  restaurantesCargados = signal<Restaurante[]>([]);
  textoBusqueda = signal('');
  //Signal para filtrar por localidad
  //Si habría campos nulos habría que controlar esos valores --> territorioSeleccionado = signal<string | null>(null);
  territorioSeleccionado = signal('');
  cargando = signal(false);
  importando = signal(false);
  localidadesSeleccionadas = signal<Set<string>>(new Set());
  estadoCarga = signal('');
  estadoImportacion = signal('');

  constructor(private firestore: Firestore) {
    addIcons({star, sunny}); // Registrar los iconos que se van a usar
  }

  //Comprobamos si hay datos cargados para mostrar los filtros
  hayDatos = computed(() => this.restaurantesCargados().length > 0);

  // Extraemos territorios únicos de los restaurantes cargados
  territoriosFiltrados = computed(() => {
    const territorios = this.restaurantesCargados().map(r => r.territory);
    // elimina duplicados y ordena alfabéticamente
    return Array.from(new Set(territorios)).sort(); 
  });

  // Localidades que se muestran en el multi-select, filtradas por territorio seleccionado
  localidadesFiltradasPorTerritorio = computed(() => {
    let lista = this.restaurantesCargados();

    const territorio = this.territorioSeleccionado().toLowerCase().trim();
    if (territorio) {
      lista = lista.filter(r => r.territory?.toLowerCase().trim() === territorio);
    }

    // Extraer localidades únicas de la lista filtrada
    const localities = lista
      .map(r => r.locality?.trim())
      .filter(l => !!l);

    return Array.from(new Set(localities)).sort();
  });

  // Devuelve un array de las localidades seleccionadas para el select múltiple
  get localidadesSeleccionadasArray(): string[] {
    return Array.from(this.localidadesSeleccionadas());
  }

  // Computed que filtra restaurantes según texto de búsqueda, territorio y localidades seleccionado
  restaurantesFiltrados = computed(() => {
    let lista = this.restaurantesCargados();

    const texto = this.textoBusqueda().toLowerCase().trim();
    if (texto) {
      lista = lista.filter(r =>
        r.documentName.toLowerCase().includes(texto)
      );
    }

    const territorio = this.territorioSeleccionado().toLowerCase().trim();
    if (territorio) {
      lista = lista.filter(r =>
        r.territory.toLowerCase().trim() === territorio
      );
    }

    const seleccionadas = this.localidadesSeleccionadas();
    if (seleccionadas.size > 0) {
      lista = lista.filter(r =>
        seleccionadas.has(r.locality?.trim() || '')
      );
    }

    return lista;
  });

  onTerritorioChange(event: any) {
    this.territorioSeleccionado.set(event.detail.value);

    // Limpiar localidades que no pertenezcan al nuevo territorio
    const nuevasLocalidades = new Set(
      Array.from(this.localidadesSeleccionadas()).filter(loc =>
        this.localidadesFiltradasPorTerritorio().includes(loc)
      )
    );
    this.localidadesSeleccionadas.set(nuevasLocalidades);
  }

  onLocalidadesChange(event: any) {
  // event.detail.value es un array de strings seleccionados
  this.localidadesSeleccionadas.set(new Set(event.detail.value));
}

  limpiarLocalidades() {
    this.localidadesSeleccionadas.set(new Set());
  }

  async importarJSON() {
    this.importando.set(true);
    const datosCollection = collection(this.firestore, 'restaurantesColleccion');
    
    try {
      this.estadoImportacion.set('Borrando datos de Firebase...'); 
      // Borrar todos los documentos existentes
      const snapshot = await getDocs(datosCollection);
      for (const d of snapshot.docs) {
        await deleteDoc(doc(this.firestore, 'restaurantesColleccion', d.id));
      }

      this.estadoImportacion.set('Importando JSON a Firebase...');

      // Insertar los documentos nuevos
      for (const r of this.restaurantes) {
        await addDoc(datosCollection, r);
      }

      this.estadoImportacion.set('JSON importado correctamente!');
    } catch (error) {
      console.error('Error al importar JSON:', error);
      this.estadoImportacion.set('Error al importar JSON. Revisa la consola.');
    } finally {
      this.importando.set(false);
    }
  }

  async cargarDatos() {
    this.cargando.set(true);
    this.estadoCarga.set('Cargando restaurantes...');
    const datosCollection = collection(this.firestore, 'restaurantesColleccion');
    try {
      const snapshot = await getDocs(datosCollection);
      this.restaurantesCargados.set(snapshot.docs.map(doc => doc.data() as Restaurante));
      this.estadoCarga.set('Se han cargado '+ snapshot.docs.length +' restaurantes.');
    } catch (error) {
      console.error('Error al cargar datos:', error);
      this.estadoCarga.set('Error al cargar datos. Revisa la consola.');
    } finally {
      this.cargando.set(false);
    }
  }

  estrellasMichelin(r: Restaurante): number[] {
    const count = Number(r.michelinStar) || 0;
    return Array.from({ length: count }, (_, i) => i);
  }

  // Devuelve un array para mostrar iconos de Sol Repsol
  repsolSoles(restaurante: Restaurante): any[] {
    const n = Number(restaurante.repsolSun) || 0; // Si es nulo o no numérico, pone 0
    return Array.from({ length: n }, (_, i) => i); // Devuelve un array con n elementos
  }
}