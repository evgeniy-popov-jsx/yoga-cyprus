import { BrowserRouter } from 'react-router-dom';
import { RouterConfig } from 'application/routes/routesConfig';

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <RouterConfig />
    </BrowserRouter>
  );
}

export default App;
