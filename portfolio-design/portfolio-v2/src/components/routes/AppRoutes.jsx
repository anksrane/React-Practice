import {Routes, Route} from 'react-router-dom';
import {Homepage} from '../../components';
import {ProjectDetailsPage} from '../../components';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects/:slug" element={<ProjectDetailsPage />} />
    </Routes>
  )
}

export default AppRoutes
