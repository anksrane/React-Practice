import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../schemas/singupSchema";
import './signup-style.css';

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="">
      <div className="form-container">
        <h1>Sign Up Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input 
            {...register("name")}
            placeholder="Name"
          />
          {errors.name && <p className="error-text">{errors.name.message}</p>}
          
          <input 
            {...register("email")}
            placeholder="Email"
          />
          {errors.email && <p className="error-text">{errors.email.message}</p>}

          <input
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          {errors.password && <p className="error-text">{errors.password.message}</p>}

          <div className="form-buttons">
            <button type="submit">Sumbit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
