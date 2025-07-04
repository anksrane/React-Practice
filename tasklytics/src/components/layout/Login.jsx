import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input } from '../index';

function Login() {
    const { 
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
     } = useForm();
    const login = (data) => {
        const cleaned = {
            email: data.email.trim(),
            password: data.password.trim()
        };
        console.log(cleaned);
    };
  return (
    <div className='flex flex-col items-center justify-center h-screen'>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form onSubmit={handleSubmit(login)} className="space-y-4">
                <Input 
                    label="Email: "
                    placeholder="Enter your Email"
                    type="email"
                    {...register("email", {
                        required: "Email is Required",
                        pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Invalid email address"
                        }
                    })}
                    error={errors.email && errors.email.message}
                />
                <Input 
                    label="Password: "
                    placeholder="Enter your Password"
                    type="password"
                    {...register("password", {
                        required: "Password is Required",
                        minLength:  {
                                        value: 6,
                                        message: "Password must be at least 6 characters"
                                    }   
                    })}
                    error={errors.password && errors.password.message}
                />
                <div className='flex gap-2'>
                    <Button type="submit" 
                    variant='primary' className='w-full'
                    isLoading={isSubmitting}>Login</Button>
                    <Button type="reset" 
                    variant='danger' className='w-full'
                    onClick={()=>reset()}>Reset</Button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Login