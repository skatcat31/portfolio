import { render } from '@testing-library/angular';
import { LandingComponent as Component } from './landing.component';

import '@testing-library/jest-dom';

describe('LandingComponent', () => {

  it('should render the Menu page', async () => {
    const { getByText, container, debug } = await render(Component);
    expect(getByText('menu works!')).toBeInTheDocument();
    const newGameText = getByText('New Game');
    expect(newGameText).toBeInTheDocument();
    const links = container.querySelectorAll('a');
    const newGameLink = links[0];
    expect(links).toHaveLength(1);
    expect(newGameLink).toBe(newGameText);
  });
});
