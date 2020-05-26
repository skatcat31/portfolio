import { render, fireEvent, waitFor } from '@testing-library/angular';
import { SidebarComponent } from './sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';

import '@testing-library/jest-dom';
import { A11yModule } from '@angular/cdk/a11y';

const Component = SidebarComponent;

const renderComp = (mobile = false) => render(Component, {
  imports: [
    [
      RouterTestingModule.withRoutes([]),
      A11yModule
    ]
  ],
  componentProperties: { mobile }
});

describe('SideBarComponent', () => {
  it('should create the desktop sidebar', async () => {
    const { container, getByText } = await renderComp();
    expect(container.querySelector('nav')).toBeInTheDocument();
    expect(container.querySelectorAll('.cdk-focus-trap-anchor')).toHaveLength(0);
    expect(container.querySelector(`button`)).not.toBeInTheDocument();

    const links = container.querySelectorAll('a');
    expect(links).toHaveLength(2);
    expect(links[0]).not.toHaveAttribute('aria-hidden');
    expect(links[0]).toBe(getByText('About Me'));
    expect(links[1]).not.toHaveAttribute('aria-hidden');
    expect(links[1]).toBe(getByText('Technical'));
  });

  it('should create the mobile sidebar', async () => {
    const mobile = true;
    const { container, getByText } = await renderComp(mobile);

    // gather things to test against
    const button = container.querySelector(`button`);
    const links = container.querySelectorAll('a');

    // test the existance
    expect(button).toBeInTheDocument();
    expect(getByText('Navigation')).toBe(button);
    // check that the focustrap exists
    expect(container.querySelectorAll('.cdk-focus-trap-anchor')).toHaveLength(2);

    expect(links).toHaveLength(2);
    expect(links[0]).toBe(getByText('About Me'));
    expect(links[1]).toBe(getByText('Technical'));
    expect(links[0]).toHaveAttribute('aria-hidden', 'true');
    expect(links[0]).toHaveAttribute('tabindex', '-1');
    expect(links[1]).toHaveAttribute('aria-hidden', 'true');
    expect(links[1]).toHaveAttribute('tabindex', '-1');

    // test the behaviour
    fireEvent.click(button);
    await waitFor(() => expect(links[0]).toHaveAttribute('aria-hidden', 'false'));
    expect(links[0]).toBe(getByText('About Me'));
    expect(links[1]).toBe(getByText('Technical'));
    expect(links[1]).toHaveAttribute('aria-hidden', 'false');
    expect(links[0]).toHaveAttribute('tabindex', '0');
    expect(links[1]).toHaveAttribute('aria-hidden', 'false');
    expect(links[1]).toHaveAttribute('tabindex', '0');

    // navigate
    fireEvent.click(links[0]);
    await waitFor(() => expect(links[0]).toHaveAttribute('aria-hidden', 'true'));
    expect(links[0]).toBe(getByText('About Me'));
    expect(links[1]).toBe(getByText('Technical'));
    expect(links[0]).toHaveAttribute('aria-hidden', 'true');
    expect(links[0]).toHaveAttribute('tabindex', '-1');
    expect(links[1]).toHaveAttribute('aria-hidden', 'true');
    expect(links[1]).toHaveAttribute('tabindex', '-1');

    // close with button
    fireEvent.click(button);
    await waitFor(() => expect(links[0]).toHaveAttribute('aria-hidden', 'false'));
    fireEvent.click(button);
    await waitFor(() => expect(links[0]).toHaveAttribute('aria-hidden', 'true'));
  });
});
