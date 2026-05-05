import React from 'react';
import {AppButton, AppChangeMode, AppInput} from './index';
import {
  FiPlus,
  FiArrowRight,
  FiTrash2,
  FiCheck,
  FiInfo,
  FiMenu,
  FiMail,
  FiLock,
  FiEye,
  FiSearch,
  FiUser
} from 'react-icons/fi';

function LayoutTest() {
  return (
    <>
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

            <AppChangeMode >
            </AppChangeMode>

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

        <div
        style={{
            maxWidth: '420px',
            padding: '24px',
            display: 'grid',
            gap: '18px'
        }}
        >
        {/* EMAIL */}
        <AppInput
            label="Email"
            placeholder="Enter email"
            leftIcon={<FiMail />}
        />

        {/* PASSWORD like your design */}
        <AppInput
            label="Password"
            linkText="Forgot?"
            placeholder="••••••••"
            type="password"
            leftIcon={<FiLock />}
            rightIcon={<FiEye />}
        />

        {/* SEARCH */}
        <AppInput
            placeholder="Search tasks..."
            leftIcon={<FiSearch />}
        />

        {/* USER */}
        <AppInput
            label="Username"
            placeholder="John Doe"
            leftIcon={<FiUser />}
            helperText="Use your full name"
        />

        {/* ERROR */}
        <AppInput
            label="Password"
            type="password"
            leftIcon={<FiLock />}
            rightIcon={<FiEye />}
            error="Password is required"
        />
        </div>      
    </>
  )
}

export default LayoutTest
