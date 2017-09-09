import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
      <div *ngFor="let hero of heroes"
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
          <div class="row">
            <div *ngIf="selectedHero">
              <h2>{{selectedHero.name}} details!</h2>
              <div><label>id: </label>{{selectedHero.id}}</div>
              <div>
                <label>name: </label>
                <input [(ngModel)]="selectedHero.name" placeholder="name"/>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-xs-10">
              <div class="card">
                <div class="card-body">
                  <div class="card-block">
                    <div class="media">
                      <div class="media-body text-xs-left">
                        <h3 class="primary">{{hero.id}}</h3>
                        <span>{{hero.name}}</span>
                      </div>
                      <div class="media-right media-middle">
                        <i class="icon-user-follow primary font-large-2 float-xs-right"></i>
                      </div>
                    </div>
                    <progress class="progress progress-sm progress-primary mt-1 mb-0" value={{hero.id}} max="20"></progress>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>`
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
