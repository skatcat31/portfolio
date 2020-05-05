import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

import '@testing-library/jest-dom';
import { Route } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';

const Component = AppComponent;

describe('AppComponent', () => {

  it('should create the app', async () => {
    const { getByText } = await render(Component, {
      imports: [
        RouterTestingModule.withRoutes([
          new Route('', MenuComponent)
      ])
      ]
    });
    expect(getByText('Hangman')).toBeInTheDocument();
  });
});
