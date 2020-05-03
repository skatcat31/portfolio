import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  it('should create the app', async () => {
    const { getByText } = await render(AppComponent);
    expect(getByText('Hangman')).toBeInTheDocument();
  });
});
