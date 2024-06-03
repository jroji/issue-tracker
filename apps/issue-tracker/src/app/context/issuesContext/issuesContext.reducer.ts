import { Issue, Status, statusList } from "../../models/issue";
import { IssuesContextType } from "./issuesContext";
import { IssuesContextActionsType, issuesContextActions } from "./issuesContext.actions";

export function issuesReducer(state: IssuesContextType, action: IssuesContextActionsType) {
   switch(action.type) {
      case issuesContextActions.FETCH_ISSUES: {
        const list = { ...statusList } as Record<Status, Issue[]>;
        Object.keys(list).forEach((key) => {
          list[key as Status] = action.payload.issues[key as Status];
        });
        return {
          ...state,
          ...list,
        };
      }

      case issuesContextActions.ADD_ISSUE: {
        const status = action.payload.issue.status as Status;
        state[status as Status]?.push(action.payload.issue);
        return {
          ...state,
        };
      }

      case issuesContextActions.REMOVE_ISSUE: {
        const status = action.payload.issue.status as Status;
        const idx = state[status]?.findIndex(item => item.id === action.payload.issue.id);
        if (idx !== undefined) {
          state[status]?.splice(idx, 1);
        }
        return {
          ...state,
        };
      }

      case issuesContextActions.MOVE_ISSUE: {
        const newState = { ...state };
        const { card, status } = action.payload as { card: Issue, status: Status };
        const idx = newState[card.status as Status]?.findIndex(item => item.id === card.id);
        
        if (idx === undefined || newState[card.status as Status] === undefined) { return state; }
        
        newState[card.status as Status]?.splice(idx, 1);
        card.status = status;

        if (!newState[status]) newState[status] = [];
        
        newState[status]?.push(card);
        return newState;
      }

      default:
        return state;
   }
}
