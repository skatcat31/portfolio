import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

import '@testing-library/jest-dom';
import { Route } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { A11yModule } from '@angular/cdk/a11y';
import { SidebarComponent } from './sidebar/sidebar.component';

const Component = AppComponent;

const renderComp = () => render(Component, {
  imports: [
    RouterTestingModule.withRoutes([
      new Route('', LandingComponent)
    ]),
    A11yModule,
  ],
  declarations: [
    SidebarComponent
  ]
});

describe('AppComponent', () => {

  it('should create the app', async () => {
    const { getByText, getByTitle, getByAltText, getAllByText } = await renderComp();
    expect(getByText('Robert Mennell')).toBeInTheDocument();
    expect(getByTitle('Robert\'s LinkedIn Profile')).toBeInTheDocument();
    expect(getByAltText('Robert\'s GitHub Profile')).toBeInTheDocument();
    // renders both the mobile and dekstop navigation, just confirm About Me link is present
    expect(getAllByText('About Me')).toHaveLength(2);
  });
});
