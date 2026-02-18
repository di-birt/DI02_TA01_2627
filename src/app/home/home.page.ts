import { Component, signal, computed } from '@angular/core';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';
import restaurantesJSON from '../../assets/datos/restaurantes.json';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

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

  constructor(private firestore: Firestore) {}

  // Computed que filtra restaurantes
  restaurantesFiltrados = computed(() => {
    const texto = this.textoBusqueda().toLowerCase();
    if (!texto) return this.restaurantesCargados();
    return this.restaurantesCargados().filter(r =>
      r.documentName.toLowerCase().includes(texto)
    );
  });

  async importarJSON() {
    const datosCollection = collection(this.firestore, 'datos');
    try {
      for (const r of this.restaurantes) {
        await addDoc(datosCollection, r);
      }
      alert('JSON importado correctamente!');
    } catch (error) {
      console.error('Error al importar JSON:', error);
      alert('Error al importar JSON. Revisa la consola.');
    }
  }

  async cargarDatos() {
    const datosCollection = collection(this.firestore, 'datos');
    try {
      const snapshot = await getDocs(datosCollection);
      this.restaurantesCargados.set(snapshot.docs.map(doc => doc.data() as Restaurante));
    } catch (error) {
      console.error('Error al cargar datos:', error);
      alert('Error al cargar datos. Revisa la consola.');
    }
  }
}