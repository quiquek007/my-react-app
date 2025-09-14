import { render, screen } from '@testing-library/react';

// Інструменты Jest для тэставання
import '@testing-library/jest-dom';

import { MessageChild } from './MessageChild.tsx';

test('павінна адлюстроўваць кнопку з тэкстам', () => {
  render(<MessageChild message="Клікні мяне" />);
  
  // Знаходзім элемент у DOM
  const buttonElement = screen.getByText('Child received: Клікні мяне');
  
  // Правяраем, ці ёсць кнопка ў дакуменце
  expect(buttonElement).toBeInTheDocument();
});