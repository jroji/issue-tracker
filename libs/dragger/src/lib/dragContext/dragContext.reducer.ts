import { DragContextType } from "./dragContext";
import { cardDraggingActions } from "./dragContext.actions";

export function cardDraggingReducer(state: DragContextType, action: { type: string, payload?: any }) {
   console.log(action.type, action.payload)
   switch(action.type) {
      case cardDraggingActions.SELECT_CARD:
         return {
            ...state,
            selectedCard: action.payload.card,
            activeElement: action.payload.activeElement,
         };
      case cardDraggingActions.DROP_CARD:
         return {
            ...state,
            selectedCard: undefined,
            activeElement: undefined,
         };
      default:
         return state;
   }
}