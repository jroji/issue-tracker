import { render, screen } from '@testing-library/react';
import { genericIssuesListBuilder} from '@react-monorepo/shared-models';
import { Issue, Status } from '../../models/issue';
import { Board } from './board';

describe('Board', () => {
  let issues: Record<Status, Issue[]>;
  
  beforeAll(() => {
    issues = {
      [Status.Open]: genericIssuesListBuilder(1),
      [Status.OnGoing]: genericIssuesListBuilder(2),
      [Status.Blocked]: genericIssuesListBuilder(1),
      [Status.Done]: genericIssuesListBuilder(1),
    };
  })

  it('should render issue title for each issue', () => {
    render(<Board issues={issues}/>);
    // TODO: Too specific, mock the IssueTrack component
    Object.keys(issues).forEach(issue => expect(screen.getByRole('heading', {
      name: issue,
      level: 2,
    })).toBeDefined());
  });

});
