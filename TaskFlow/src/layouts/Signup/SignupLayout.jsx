import React, { use } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import  { signupSchema } from '../../utils/validations/authSchema';

import { FiMail, FiLock, FiEye, FiArrowRight } from 'react-icons/fi';
import { AppInput, AppButton } from '../../components';
import styles from './SignupLayout.module.css'

function SignupLayout() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting }
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data) => {
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
        {/* Full Name */}
        <AppInput
          label="Full Name"
          placeholder="Enter your name"
          {...register('fullName')}
          error={errors.fullName?.message}
        />

        {/* Email */}
        <AppInput
          label="Email"
          placeholder="Enter email"
          {...register('email')}
          error={errors.email?.message}
        />

        {/* Password */}
        <AppInput
          label="Password"
          type="password"
          placeholder="••••••••"
          {...register('password')}
          error={errors.password?.message}
        />

        {/* Confirm Password */}
        <AppInput
          label="Confirm Password"
          type="password"
          {...register('confirmPassword')}
          error={errors.confirmPassword?.message}
        />

        {/* Terms Checkbox */}
        <label>
          <input type="checkbox" {...register('terms')} />
          I agree to Terms & Conditions
        </label>

        {errors.terms && (
          <p style={{ color: 'red' }}>
            {errors.terms.message}
          </p>
        )}

        {/* Submit */}
        <AppButton
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </AppButton>        
      </form>
    </div>
  )
}

export default SignupLayout
