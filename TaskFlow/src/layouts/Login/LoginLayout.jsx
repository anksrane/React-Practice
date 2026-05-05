// 
import React from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import  { loginSchema } from '../../utils/validations/authSchema';

import { FiMail, FiLock, FiEye, FiArrowRight } from 'react-icons/fi';
import { AppInput, AppButton } from '../../components';
import styles from './LoginLayout.module.css';

function LoginLayout() {
  const {
    register,
    handleSubmit,
    reset,
    formState : { errors, isValid, isSubmitting },
  } = 
  useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },    
  });

  const onSubmit = async(data) => {
    try {
      console.table(data);

      // simulate delay
      await new Promise((res) => setTimeout(res, 1000));

      reset(); // only after success
    } catch (error) {
      console.error(error);
    }    
  }

  const onError = (errors) => {
    console.error("Validation Error: ",errors);
  }

  return (
    <div className={styles.formOuterContainer}>
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate className={styles.formInnerContainer}>
          {/* Email */}
          <AppInput
              label="Email Address"
              placeholder="Enter email"
              leftIcon={<FiMail />}
              {...register('email')}
              error={errors.email?.message}
          />

          {/* Password */}
          <AppInput
              label="Password"
              linkText="Forgot?"
              placeholder="••••••••"
              type="password"
              leftIcon={<FiLock />}
              rightIcon={<FiEye />}
              {...register('password')}
              error={errors.password?.message}
          />    

          <AppButton
              variant="primary"
              type="submit"
              iconRight={<FiArrowRight />}
              disabled={ !isValid || isSubmitting }
          >
              {isSubmitting ? "Signing In..." : "Sign In to FlowTrack"}
          </AppButton>                
        </form>
    </div>
  )
}

export default LoginLayout