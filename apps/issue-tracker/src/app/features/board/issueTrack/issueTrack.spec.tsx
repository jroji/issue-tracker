import { render, screen } from '@testing-library/react';
import { IssueTrack } from './issueTrack';
import { genericIssuesListBuilder } from '@react-monorepo/shared-models';
import { Issue, Status } from '../../../models/issue';

describe('IssueTrack', () => {
  let issues: Issue[];
  
  beforeAll(() => {
    issues = genericIssuesListBuilder(1);
  })

  it('should render issue title for each issue', () => {
    render(<IssueTrack issues={issues} status={Status.Open}/>);
    issues.forEach(issue => expect(screen.getByText(issue.title)).toBeDefined());
  });

  it('should render status as title', () => {
    render(<IssueTrack issues={issues} status={Status.Open}/>);
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(Status.Open);
  });

});
