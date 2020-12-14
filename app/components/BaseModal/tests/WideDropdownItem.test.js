/**
 * Base modal tests
 */

import React from 'react';
import { render } from 'react-testing-library';

import WideDropdownItem from '../WideDropdownItem';

describe('<WideDropdownItem />', () => {
  it('should render a <button> tag', () => {
    const { container } = render(<WideDropdownItem />);
    expect(container.querySelector('button')).not.toBeNull();
  });

  it('should have a class attribute', () => {
    const { container } = render(<WideDropdownItem />);
    expect(container.querySelector('button').hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<WideDropdownItem id={id} />);
    expect(container.querySelector('button').id).toEqual(id);
  });
});
