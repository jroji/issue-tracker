import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card, { CardProps } from './card';

describe('Card', () => {
  const titleSection = <h2>Title</h2>;
  const bodySection = <p>Body</p>;

  const defaultProps: CardProps = {
    titleSection,
    bodySection,
  };

  it('renders the title and body sections', () => {
    const { getByText } = render(<Card {...defaultProps} />);
    expect(getByText('Title')).toBeDefined();
    expect(getByText('Body')).toBeDefined();
  });

  it('applies the "selected" class when selected prop is true', () => {
    const { container } = render(<Card {...defaultProps} selected />);
    expect(container.firstChild?.className).toContain('selected');
  });

  it('calls the onClick function when clicked', () => {
    const onClick = vi.fn();
    const { container } = render(<Card {...defaultProps} onClick={onClick} />);
    fireEvent.click(container.firstChild);
    expect(onClick).toHaveBeenCalled();
  });
  
  it('does not apply the "selected" class when selected prop is false', () => {
    const { container } = render(<Card {...defaultProps} selected={false} />);
    expect(container.firstChild.className).not.toContain('selected');
  });

});