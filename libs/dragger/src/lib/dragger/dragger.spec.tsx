import { render, fireEvent } from '@testing-library/react';
import Dragger from './dragger';
import { DragContext } from '../dragContext/dragContext';

describe('Dragger', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <Dragger value={123}>
        <div>Child Component</div>
      </Dragger>
    );
    expect(getByText('Child Component')).toBeDefined();
  });

  it('calls selectCard when mouse down', () => {
    const mockDragFunction = vi.fn();
    const { getByTestId } = render(
      <DragContext.Provider value={{ selectCard: mockDragFunction, dropCard: vi.fn() }}>
        <Dragger value={123}>
          <div data-testid="draggable">
            Drag Me
          </div>
        </Dragger>
      </DragContext.Provider>)

    const draggableElement = getByTestId('draggable');
    fireEvent.mouseDown(draggableElement);
    expect(mockDragFunction).toHaveBeenCalled();
  });


});