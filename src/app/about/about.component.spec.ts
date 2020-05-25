import { render } from '@testing-library/angular';
import { GameComponent as Component } from './about.component';

import '@testing-library/jest-dom';

describe('AppComponent', () => {

  it('should create the app', async () => {
    const { getByText } = await render(Component);
    expect(getByText('game works!')).toBeInTheDocument();
  });
});
