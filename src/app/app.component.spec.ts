import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

import '@testing-library/jest-dom';
import { Route } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';

const Component = AppComponent;

describe('AppComponent', () => {

  it('should create the app', async () => {
    const { getByText } = await render(Component, {
      imports: [
        RouterTestingModule.withRoutes([
          new Route('', LandingComponent)
      ])
      ]
    });
    expect(getByText('Hangman')).toBeInTheDocument();
  });
});
