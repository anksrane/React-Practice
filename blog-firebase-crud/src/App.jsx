import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import useAuthObserver from './hooks/useAuthObserver';

function App() {
  useAuthObserver();
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
}

export default App;