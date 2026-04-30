import React, { useState } from 'react';
import { AppChangeMode } from '../../components';
import {darkLogo1, lightLogo1} from '../../assets';
import { useTheme } from '../../app/providers/ThemeProvider';
import styles from './AuthPage.module.css';

import { SignupLayout, LoginLayout } from '../../layouts';

function AuthPage() {
  const { theme } = useTheme();
  const[activeTab, setActiveTab] = useState('login');

  const changeActiveTab=(tabName)=>{
    setActiveTab(tabName);
  }

  return (
    <>
      <div className={styles.authBg}>
        <div className={styles.authInnerContainer}> 
          <div className={styles.authLeftImageContainer}>
            <div className={styles.logoContainer}>
              <img src={theme ? darkLogo1 : lightLogo1} alt="Logo" className={styles.logoImage} />
            </div>
            <h1 className={styles.heading}>
              Architect your<br/>
              workflow with<br/>
              precision depth.
            </h1>
            <p className={styles.para}>
              Experience the next generation of task management built for high-performance engineering teams.
            </p>
          </div>

          <div className={styles.authRightFormContainer}>
            <div className={styles.modeButtonContainer}>
              <AppChangeMode />
            </div>
            <div className={styles.formTabOuterContainer}>
              <div className={styles.buttonContainer}>
                <button
                  onClick={() => changeActiveTab('login')}
                  className={`${styles.authButtons} ${
                    activeTab === 'login' ? styles.active : ''
                  }`}
                >
                  Login
                </button>

                <button
                  onClick={() => changeActiveTab('signup')}
                  className={`${styles.authButtons} ${
                    activeTab === 'signup' ? styles.active : ''
                  }`}
                >
                  SignUp
                </button>
              </div>
              {activeTab=='login' ? <LoginLayout /> : <SignupLayout />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthPage