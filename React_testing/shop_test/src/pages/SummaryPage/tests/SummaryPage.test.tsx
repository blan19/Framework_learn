import { render, screen } from '@testing-library/react';
import SummaryPage from '..';

test('checkbox and button', () => {
  render(<SummaryPage />);

  const checkbox = screen.getByRole('checkbox', {
    name: '주문을 확인하셨나요?',
    checked: false,
  });

  expect(checkbox).toEqual(false);

  const confirmButton = screen.getByRole('button', { name: '주문 확인' });

  expect(confirmButton.ariaDisabled).toBeTruthy();
});
