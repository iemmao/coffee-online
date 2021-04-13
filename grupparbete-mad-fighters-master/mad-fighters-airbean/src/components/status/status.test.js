// fireEvent simulerar att denna functionen körs igenom
// npm test i terminalen, evenutellt enter
import { render, getByTestId, fireEvent } from '@testing-library/react';

import Status from './status';

test('mad-fighters-airbean', () => {
  const { container } = render(<Status />); 
  // Button
  /* const button = getByTestId(container, 'testButton');
  fireEvent.click(button);
  
  // Heading
  const heading = getByTestId(container, 'heading');
  fireEvent.click(heading);

  // Drone
  const drone = getByTestId(container, 'droneImg');
  fireEvent.click(drone);

  //Time
  const time = getByTestId(container, 'time');
  fireEvent.click(time);

  // OrderNr
  const orderNr = getByTestId(container, 'orderNr');
  fireEvent.click(orderNr); */

  // Main
  const test = getByTestId(container, 'test');
  fireEvent.click(test);
  
})


