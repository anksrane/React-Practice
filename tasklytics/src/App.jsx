import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TaskListPage from './pages/TaskListPage';
import AddTaskPage from './pages/AddTaskPage';
import { AppLayout } from './components';
import  ProtectedRoutes  from './routes/ProtectedRoutes'

function App() {
    return (
      <Routes>
        {/* Public Route */}
        <Route path='/login' element={<LoginPage />}></Route>

        {/* Private Route */}
        <Route element={<ProtectedRoutes />}>
          <Route element={<AppLayout />}>
            <Route path='/tasks' element={<TaskListPage />}/>
            <Route path='/addtask' element={<AddTaskPage />}/>
          </Route>
        </Route>

        <Route path='*' element={<Navigate to="/tasks" replace />} />
      </Routes>
    )
}

export default App
