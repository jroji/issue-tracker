import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { IssuesContextProvider } from './app/context/issuesContext/issuesContext.provider';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
 
  const { worker } = await import('./mocks/browser')
 
  return worker.start()
}
 
enableMocking().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  root.render(
      <IssuesContextProvider>
          <App />
      </IssuesContextProvider>
  );  
})
