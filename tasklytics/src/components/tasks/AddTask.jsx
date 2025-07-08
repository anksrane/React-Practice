import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RadioCheckbox, DatePicker } from '../index';

function AddTask() {
    const {
      register,
      handleSubmit,
      reset,
      formState:{ errors, isSubmitting },
    } = useForm();

    const login = (data) => {
        const cleaned = {
            email: data.email.trim(),
            password: data.password.trim()
        };
        console.log(cleaned);
    };

    return (
      <div className='mx-auto p-4'>
        <h2 className="text-2xl font-bold mb-4 text-center">Add Task</h2>

        <form onSubmit={handleSubmit(login)} className='container mx-auto pt-5 pb-4'> 
          {/* Title Input Start */}
          <div className='flex flex-col sm:flex-row sm:items-center gap-2 mb-3'>  
            <div className="w-full sm:w-[30%]">
              <p className="font-semibold">Title</p>
            </div>
            <div className="w-full sm:w-[70%]">
              <Input 
                  labelVisible = {false} 
                  placeholder="Enter Task Title"
                  type="text"
                  className="py-1 text-sm"
                  {...register("title", {
                      required: "Title is Required",
                      pattern: {
                          value: /^[a-zA-Z0-9 _.-]{1,100}$/,
                          message: "Title can only contain letters, numbers, spaces, -, _, and ."
                      }
                  })}
                  error={errors.title && errors.title.message}
              />  
            </div>
          </div>
          {/* Title Input End */}

          {/* Description Input Start */}
          <div className='flex flex-col sm:flex-row sm:items-center gap-2 mb-3'>  
            <div className="w-full sm:w-[30%]">
              <p className="font-semibold">Description</p>
            </div>
            <div className="w-full sm:w-[70%]">
              <Input 
                  labelVisible = {false} 
                  placeholder="Enter Task Description"
                  isTextarea = {true}
                  className="py-1 text-sm"
                  {...register("description", {
                      required: "Description is Required",
                      pattern: {
                          value: /^[a-zA-Z0-9 _.-]{1,100}$/,
                          message: "Description can only contain letters, numbers, spaces, -, _, and ."
                      }
                  })}
                  error={errors.description && errors.description.message}
              />  
            </div>
          </div>
          {/* Description Input End */}  

          {/* Task Phase Input Start */}
          <div className='flex flex-col sm:flex-row sm:items-center gap-2 mb-3'>  
            <div className="w-full sm:w-[30%]">
              <p className="font-semibold">Task Phase</p>
            </div>
            <div className="w-full sm:w-[70%]">
              <Select 
                labelVisible = {false} 
                defaultOption= "Select Phase"
                className="py-1 text-sm"
                options={[
                  { value: 'planning', label: 'Planning' },
                  { value: 'designing', label: 'Designing' },
                  { value: 'implementation', label: 'Implementation' },
                  { value: 'testing', label: 'Testing' },
                  { value: 'delivered', label: 'Delivered' },
                  { value: 'hold', label: 'Hold' }
                ]}
                {...register("taskPhase",{
                  required: "Please select Phase",
                })}
                error={errors.taskPhase && errors.taskPhase.message}
              /> 
            </div>
          </div>
          {/* Task Phase Input End */}  

          {/* Task Status Input Start */}
          <div className='flex flex-col sm:flex-row sm:items-center gap-2 mb-3'>  
            <div className="w-full sm:w-[30%]">
              <p className="font-semibold">Task Status</p>
            </div>
            <div className="w-full sm:w-[70%]">
              <Select 
              className="py-1 text-sm"
              labelVisible = {false} 
              defaultOption= "Select Status"
              options={[
                { value: 'pending', label: 'Pending' },
                { value: 'completed', label: 'Completed' },
                { value: 'inProgress', label: 'In-Progress' },
                { value: 'overdue', label: 'Overdue' }

              ]}
                {...register("taskStatus",{
                  required: "Please Select Status",
                })}
                error={errors.taskStatus && errors.taskStatus.message}
              /> 
            </div>
          </div>
          {/* Task Status Input End */}  

          {/* Date Input Start */}
          <div className='flex flex-col sm:flex-row sm:items-center gap-2 mb-3'>  
            <div className="w-full sm:w-[30%]">
              <p className="font-semibold">Start Date</p>
            </div>
            <div className="w-full sm:w-[70%]">
              <DatePicker
                labelVisible={false}
                className="py-1 text-sm"
              />
            </div>
          </div>

          <div className='flex flex-col sm:flex-row sm:items-center gap-2 mb-3'>  
            <div className="w-full sm:w-[30%]">
              <p className="font-semibold">End Date</p>
            </div>
            <div className="w-full sm:w-[70%]">
              <DatePicker
                labelVisible={false}
                className="py-1 text-sm"
              />
            </div>
          </div>
          {/* Date Input End */}  

          {/* Priority Input Start */}
          <div className='flex flex-col sm:flex-row sm:items-center gap-2 mb-3'>  
            <div className="w-full sm:w-[30%]">
              <p className="font-semibold">Task Priority</p>
            </div>
            <div className="w-full sm:w-[70%]">
              <Select 
              className="py-1 text-sm"
              labelVisible = {false} 
              defaultOption= "Select Priority"
              options={[
                { value: 'low', label: 'Low' },
                { value: 'medium', label: 'Medium' },
                { value: 'high', label: 'High' },

              ]}
                {...register("priority",{
                  required: "Please Select Priority",
                })}
                error={errors.priority && errors.priority.message}
              /> 
            </div>
          </div>
          {/* Priority Input End */}  

          <div className='flex items-center justify-center gap-2'>
              <Button type="submit" variant='primary' className='py-2 text-sm' isLoading={isSubmitting}>Submit</Button>
              <Button type="reset" variant='danger' className='py-2 text-sm' onClick={()=>reset()}>Reset</Button>
          </div>
        </form>

        {/* <RadioCheckbox
          type="radio"
          name="gender"
          value="male"
          label="Male"
        />
        <RadioCheckbox
          type="radio"
          name="gender"
          value="female"
          label="Female"
        />

        <RadioCheckbox
          type="checkbox"
          name="terms"
          label="I accept the terms"
        /> */}

      </div>
    )
}

export default AddTask
