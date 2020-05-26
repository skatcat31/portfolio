import { render } from '@testing-library/angular';
import { LandingComponent as Component } from './landing.component';

import '@testing-library/jest-dom';

describe('LandingComponent', () => {

  it('should render the Menu page', async () => {
    const { getByText, container } = await render(Component);
    expect(container.querySelector('header')).toBeInTheDocument();
    expect(getByText('About Me')).toBe(container.querySelector('h2'));

    // credence quote
    expect(getByText('Programming is Language Agnostic')).toBeInTheDocument();

    // make sure content is rendered
    expect(container.querySelectorAll('p')).toHaveLength(10);
  });
});
