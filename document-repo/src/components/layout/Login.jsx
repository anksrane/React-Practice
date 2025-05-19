import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input } from '../index';

function Login() {
    const { register, handleSubmit } = useForm();
    const login = (data) => {
        console.log(data);
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
                        required: true,
                        pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Invalid email address"
                        }
                    })}
                />
                <Input 
                    label="Password: "
                    placeholder="Enter your Password"
                    type="password"
                    {...register("password", {
                        required: true,
                        minLength: 6
                    })}
                />
                <div className='flex gap-1'>
                    <Button type="submit" className="w-full">Login</Button>
                    <Button type="reset" className='w-full bg-red-500 hover:bg-red-700'>Reset</Button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Login
