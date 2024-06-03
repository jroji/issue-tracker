import { useEffect, useReducer } from 'react';
import { DragContext, initialState } from './dragContext';
import { cardDraggingReducer } from './dragContext.reducer';
import { cardDraggingActions } from './dragContext.actions';
import { useMouse } from '@react-monorepo/shared-ui';

export function DragContextProvider<DragSelectionModel>({ children }: { children: React.ReactNode }) {

  const [state, dispatch] = useReducer(cardDraggingReducer, initialState);
  const mousePosition = useMouse(state.selectedCard !== undefined);

  useEffect(() => { 
    if (state.selectedCard && state.activeElement) {
      state.activeElement.style.position = 'absolute';  
      state.activeElement.style.left = `${mousePosition.x}px`;
      state.activeElement.style.top = `${mousePosition.y}px`;
      state.activeElement.style.zIndex = 1;
    }
  }, [mousePosition]);

  function selectCard(card: DragSelectionModel, activeElement?: Element) {
        dispatch({
          type: cardDraggingActions.SELECT_CARD,
          payload: { card, activeElement }
        });
      }

      function dropCard() {
        state.activeElement.style.position = 'static';  
        state.activeElement.style.zIndex = 0;
        state.activeElement.style.left = `0`;
        state.activeElement.style.top = `0`;
        dispatch({
          type: cardDraggingActions.DROP_CARD,
        });
      }
      
      return (
        <DragContext.Provider
          value={{
            selectedCard: state.selectedCard,
            activeElement: state.activeElement,
            selectCard,
            dropCard,
          }}
        >

        {children}
       </DragContext.Provider>)
}