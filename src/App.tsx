import { useRoutes } from 'react-router-dom';
import { routes as routeObjects } from './router';

function App() {
  const routes = useRoutes(routeObjects);
  return <>{routes}</>;
}

export default App;
