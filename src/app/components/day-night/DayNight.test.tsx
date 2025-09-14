import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DayNight } from './DayNight.tsx';

test('клікаванне на кнопку выклікае падзею', () => {
  const hour = new Date().getHours();
  const day = 'day';
  const night = 'night';
  const expectedText = hour >= 6 && hour < 18 ? 'day' : 'night';

  render(<DayNight dayMessage={day} nightMessage={night} />);

  const elem = screen.getByText(expectedText);

  expect(elem).toBeInTheDocument();
});