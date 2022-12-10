import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { Profile } from './Profile';

test('renders homepage', () => {
  render(<App />);
  const helloApp = screen.getByText(/Hello from App/i);
  expect(helloApp).toBeInTheDocument();
});


test("Profile component", () => {
  
    render(<Profile />);
    const helloProfile = screen.getByText(/Hello from Profile/i)
    expect(helloProfile).toBeInTheDocument()
  
}) 

test("App render", () => {
  const { container } = render(<App />)
  expect(container).toMatchSnapshot()
})


test('new heading after click', () => {
  render(<App />)

  const button = screen.getByRole("button", {name: "Use new Heading" })

  userEvent.click(button)

  expect(screen.getByRole("button").textContent).toMatch(/New heading/i)
})