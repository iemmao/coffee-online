import { render, getByTestId, fireEvent } from '@testing-library/react';

import Cart from './cart';

test('mad-fighters-airbean', () => {
    const { container } = render(<Cart />);

    const test = getByTestId(container, 'test');
    fireEvent.click(test);

})
