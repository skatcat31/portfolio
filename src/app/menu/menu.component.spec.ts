import { render } from '@testing-library/angular';
import { MenuComponent as Component } from './menu.component';

import '@testing-library/jest-dom';

describe('Menu component', () => {

  it('should render the Menu page', async () => {
    const { getByText, container } = await render(Component);
    expect(getByText('menu works!')).toBeInTheDocument();
    expect(getByText('New Game')).toBeInTheDocument();
    expect(container.querySelectorAll('a')).toHaveLength(1);
  });
});
