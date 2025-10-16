import React from 'react';
import { render, screen } from '@testing-library/react';
import DateText from './DateText.jsx';

describe('DateText component', () => {
  it('muestra la fecha pasada por props', () => {
    const testDate = '16/10/2025';
    render(<DateText date={testDate} />);
    const element = screen.getByText(testDate);
    expect(element).toBeDefined();
  });
});
