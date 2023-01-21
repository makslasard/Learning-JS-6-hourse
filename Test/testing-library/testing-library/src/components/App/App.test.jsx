import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*

render - это обозначает render нашего приложения
screen - поиск по экрану 
expect - проверка
toBeInTheDocument - нахождение на странице

  План работы:
    1. Import нужных инструментов render, screen
    2. Import компонента который мы будем тестировать








*/