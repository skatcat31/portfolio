import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { MenuComponent } from './menu/menu.component';

export class Route {
  path: string;
  component: any;
  constructor(path, component) {
    this.path = path;
    this.component = component;
  }
}

const routes: Routes = [
  new Route('', MenuComponent),
  new Route('game', GameComponent)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
