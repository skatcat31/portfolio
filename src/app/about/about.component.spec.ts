import { render } from '@testing-library/angular';
import { AboutComponent as Component } from './about.component';
import { RouterTestingModule } from '@angular/router/testing';
import { A11yModule } from '@angular/cdk/a11y';

import '@testing-library/jest-dom';

const renderComp = () => render(Component, {
  imports: [
    RouterTestingModule.withRoutes([]),
    A11yModule
  ]
});

describe('AboutComponent', () => {

  it('should create the app', async () => {
    const { getByText, container } = await renderComp();
    expect(getByText('Accessibility')).toBeInTheDocument();
    expect(getByText('Angular')).toBeInTheDocument();
    expect(getByText('Testing')).toBeInTheDocument();
    expect(getByText('Styles')).toBeInTheDocument();
    expect(getByText('Browser Support')).toBeInTheDocument();
    expect(getByText('Semantic HTML')).toBeInTheDocument();
    expect(getByText('Check it out on GitHub!')).toBeInTheDocument();
    expect(container.querySelectorAll('a')).toHaveLength(7);
    expect(container.querySelectorAll('p')).toHaveLength(7);
  });
});
