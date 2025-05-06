import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';
import useAuthObserver from './hooks/useAuthObserver';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useAuthObserver();
  return (
    <Router>
      <Header />
      <AppRoutes />
      <ToastContainer 
        position='top-right'
        autoClose={1500}
        hideProgressBar ={false}
      />
    </Router>
  );
}

export default App;