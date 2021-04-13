import { render, getByTestId, fireEvent } from '@testing-library/react';

import Menu from './menu';

test('mad-fighters-airbean', () => {
    const { container } = render(<Menu />); 
    // Button
    const mainContainerTest = getByTestId(container, 'test-img');
    fireEvent.click(mainContainerTest);
    
})