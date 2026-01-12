import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { multipartSchema } from "../schemas/multipartSchema";
import styles from "./signup-multi-style.module.css";

function MultiPartForm() {
  const [step, setStep] = useState(1);
  const {
    register,
    reset,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(multipartSchema),
    mode: "onSubmit",
  });

  const nextForm = async () =>{
    const isValid = await trigger(["email", "password"]);

    if (isValid) {
      setStep(2);
    }
  }

  const clearStep1 = () =>{
    reset({
        email: "",
        password: ""
    }, {
        keepErrors: false,
        keepDirty: false,
        keepTouched: false
    });
  }

  const clearStep2 = () =>{
    reset({
        name: "",
        city: ""
    }, {
        keepErrors: false,
        keepDirty: false,
        keepTouched: false
    });
  }

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  const goToStep1 = () => {
    setStep(1);
  }

  return (
    <div className={styles.formOuterContainer}>
      <div className={styles.formContainer}>
        <h1>Multi Part Sign Up Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            {step && step == 1 &&(
                <>
                  <input {...register("email")} placeholder="Email" />
                  {errors.email && (
                    <p className="error-text">{errors.email.message}</p>
                  )}

                  <input
                    type="password"
                    {...register("password")}
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="error-text">{errors.password.message}</p>
                  )}

                    <div className="form-buttons">
                        <button type="button" onClick={nextForm}>Next</button>
                        <button type="button" onClick={clearStep1}>Reset</button>
                    </div>                     
                </>
            )}  

            {step && step == 2 &&(
                <>
                  <input {...register("name")} 
                   placeholder="Name" />
                  {errors.name && (
                    <p className="error-text">{errors.name.message}</p>
                  )}

                  <input {...register("city")} placeholder="City" />
                  {errors.city && (
                    <p className="error-text">{errors.city.message}</p>
                  )}

                  <div className="form-buttons">
                      <button type="submit">Login</button>
                      <button type="button" onClick={clearStep2}>Reset</button>
                      <button type="button" onClick={goToStep1}>&lt;&lt;</button>
                  </div>                  
                </>
            )}
        </form>
      </div>
    </div>
  );
}

export default MultiPartForm;
