import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Goku', 'Ironman', 'Hulk', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe(){

    const heroeBorrado = this.heroes.shift();
    this.heroeBorrado = heroeBorrado || '';
  }
}
