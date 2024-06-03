import { useReducer } from 'react';
import { IssuesContext, initialState } from './issuesContext';
import { Issue, Status } from '../../models/issue';
import { issuesReducer } from './issuesContext.reducer';
import { issuesContextActions } from './issuesContext.actions';
import { Endpoints, requestUrl } from '../../utils/request-url';

export function IssuesContextProvider({ children }: { children: React.ReactNode }) {

  const [state, dispatch] = useReducer(issuesReducer, initialState);

      async function fetchIssues() {
        // TODO: llevar a un enum
        const issues = await requestUrl(Endpoints.GET_ISSUES);
        dispatch({
          type: issuesContextActions.FETCH_ISSUES,
          payload: { issues },
        });
      }

      function addIssue(issue: Partial<Issue>) {
        //TODO: Refactor on pro
        const id = Math.floor(Math.random() * 1000000);
        dispatch({
          type: issuesContextActions.ADD_ISSUE,
          payload: { 
            issue: {
              id,
              title: issue.title || 'user',
              user: {
                name: issue.user?.name || 'user',
                avatar: issue.user?.avatar || 'https://avatars.githubusercontent.com/u/1101010?v=4',
              },
              status: issue.status || Status.Open,
            }
          },
        });
      }

      function removeIssue(issue: Issue) {
        dispatch({
          type: issuesContextActions.REMOVE_ISSUE,
          payload: { issue },
        });
      }

      function moveIssue(card: Issue, status: Status) {
        dispatch({
          type: issuesContextActions.MOVE_ISSUE,
          payload: { card, status: status, },
        });
      }

      
      return (
        <IssuesContext.Provider
          value={{
            ...state,
            fetchIssues,
            addIssue,
            removeIssue,
            moveIssue,
            open: state.open || [],
            ongoing: state.ongoing || [],
            done: state.done || [],
            blocked: state.blocked || [],
          }}
        >
          {children}
        </IssuesContext.Provider>
      );
}
