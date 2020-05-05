import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

const Component = AppComponent;

describe('AppComponent', () => {

  it('should create the app', async () => {
    const { getByText } = await render(Component);
    expect(getByText('Hangman')).toBeInTheDocument();
  });
});
