import {Routes, Route} from 'react-router-dom';
import {Homepage} from '../../components';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  )
}

export default AppRoutes
