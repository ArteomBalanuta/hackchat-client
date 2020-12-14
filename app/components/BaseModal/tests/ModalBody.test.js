/**
 * Base modal tests
 */

import React from 'react';
import { render } from 'react-testing-library';

import ModalBody from '../ModalBody';

describe('<ModalBody />', () => {
  it('should render a <div> tag', () => {
    const { container } = render(<ModalBody />);
    expect(container.querySelector('div')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<ModalBody />);
    expect(container.querySelector('div').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<ModalBody id={id} />);
    expect(container.querySelector('div').id).toEqual(id);
  });
});
