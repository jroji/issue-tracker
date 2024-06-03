
import { render, fireEvent } from '@testing-library/react';
import DraggerDropArea from './draggerDropArea';
import { DragContext } from '../dragContext/dragContext';

describe('DraggerDropArea', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <DraggerDropArea>
        <div>Child 1</div>
        <div>Child 2</div>
      </DraggerDropArea>
    );

    expect(getByText('Child 1')).toBeDefined();
    expect(getByText('Child 2')).toBeDefined();
  });

  it('calls onCardDrop callback when card is dropped', () => {
    const onCardDrop = vi.fn();
    const { getByTestId } = render(
      <DragContext.Provider value={{ selectedCard: {}, dropCard: onCardDrop, selectCard: vi.fn() }}>
        <DraggerDropArea>
          <div data-testid="card">Card</div>
        </DraggerDropArea>
      </DragContext.Provider>
    );

    const card = getByTestId('card');
    fireEvent.mouseUp(card);

    expect(onCardDrop).toHaveBeenCalledTimes(1);
  });
});