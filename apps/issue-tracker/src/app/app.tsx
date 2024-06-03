import { useContext, useEffect, useMemo } from 'react';
import { IssuesContext } from './context/issuesContext/issuesContext';
import { Board } from './features/board/board';
import { Issue, Status } from './models/issue';

export function App() {
  const issuesContext = useContext(IssuesContext);
  const { fetchIssues } = issuesContext;

  const issues = useMemo(() => Object.values(Status).reduce((list, key) => {
    list[key] = issuesContext[key] as Issue[] ?? [];
    return list;
  }, {} as Record<Status, Issue[]>), [issuesContext]);

  useEffect(() => {
    async function fetchData() { fetchIssues(); }
    fetchData();
  }, []);

  return (
    <Board issues={issues}></Board>
  );
}

export default App;
