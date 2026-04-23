import AppButton from './components/AppButton/AppButton';
import './styles/variables.css';
import './styles/global.css';
import './App.css'
import {
  FiPlus,
  FiArrowRight,
  FiTrash2,
  FiCheck,
  FiInfo,
  FiMenu
} from 'react-icons/fi';

function App() {

  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '24px' }}>
      {/* TEXT ONLY */}
      <AppButton variant="primary">
        Save Changes
      </AppButton>

      {/* ICON + TEXT */}
      <AppButton
        variant="primary"
        iconLeft={<FiPlus />}
      >
        Add Task
      </AppButton>

      {/* TEXT + ICON */}
      <AppButton
        variant="secondary"
        iconRight={<FiArrowRight />}
      >
        Continue
      </AppButton>

      {/* ICON + TEXT + ICON */}
      <AppButton
        variant="success"
        iconLeft={<FiCheck />}
        iconRight={<FiArrowRight />}
      >
        Completed
      </AppButton>

      {/* ICON ONLY */}
      <AppButton
        variant="warning"
        iconOnly
        aria-label="Menu"
        iconLeft={<FiMenu />}
      />

      {/* FULL WIDTH */}
      <AppButton
        variant="info"
        fullWidth
        iconLeft={<FiInfo />}
      >
        View Details
      </AppButton>

      {/* DANGER STYLE (use secondary if not added yet) */}
      <AppButton
        variant="secondary"
        iconLeft={<FiTrash2 />}
      >
        Delete
      </AppButton>
    </div>
  )
}

export default App
