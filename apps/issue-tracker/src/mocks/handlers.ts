import { GenericIssue, genericIssuesListBuilder } from '@react-monorepo/shared-models';
import { http, HttpResponse } from 'msw'
import { Status } from '../app/models/issue';

/**
 * Invokes the genericIssuesListBuilder to create a list of issues using the Status Enum
 */
export const handlers = [
  http.get('https://example.com/issues?status=Open', () => {
    const list = Object.values(Status).reduce((list, status) => {
      list[status] = genericIssuesListBuilder(1).map((user) => ({ ...user, status }));
      return list;
    }, {} as Record<Status, GenericIssue[]>);
    
    return HttpResponse.json(list);
  }),
]