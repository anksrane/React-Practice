import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RadioCheckbox, DatePicker, MultiSelect_Tag, ButtonWithIcon } from '../index';
import { IoMdCloseCircle } from "react-icons/io";

function AddTask({onClose, show}) {
    const {
      register,
      handleSubmit,
      reset,
      formState:{ errors, isSubmitting },
    } = useForm();

    const backdropRef = useRef(null);

    const handleMouseDown = (e) => {
          // Set a flag to determine if the mousedown started on the backdrop
      setTimeout(() => {
        backdropRef.current.clickedOnBackdrop = e.target === backdropRef.current;
      }, 0);
    };

    const handleMouseUp = (e) => {
      if (backdropRef.current.clickedOnBackdrop && e.target === backdropRef.current) {
        onClose(); // Close only if mouse started & ended on backdrop
      }
    };

    const login = (data) => {
        const cleaned = {
            title: data.title.trim(),
            description: data.description.trim(),
            taskPhase: data.taskPhase.trim(),
            taskStatus: data.taskStatus.trim(),
            startDate: data.startDate.trim(),
            endDate: data.endDate.trim(),
            priority: data.priority.trim(),
            coders: data.coders,   
            client:data.client,
        };
        console.log(cleaned);
    };

    return (
      <div ref={backdropRef} className='absolute bg-black bg-opacity-50 z-20 w-full h-full cursor-pointer'   onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <div className='absolute bg-white top-0 right-0 h-full w-96 p-4 overflow-y-auto cursor-auto' onMouseDown={(e) => e.stopPropagation()} onMouseUp={(e) => e.stopPropagation()} >
          <div className='flex justify-end mb-2'>
            <button onClick={onClose}><IoMdCloseCircle className='text-2xl'/></button>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-center">Add Task</h2>

          <form onSubmit={handleSubmit(login)} className='container mx-auto pt-5 pb-4 relative'> 
            {/* Title Input Start */}
              <div className="w-full">
                <Input 
                    label="Title"
                    placeholder="Enter Task Title"
                    type="text"
                    className="py-1 text-sm"
                    labelClass='font-semibold'
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
            {/* Title Input End */}

            {/* Description Input Start */}
              <div className="w-full">
                <Input 
                    label="Description"
                    placeholder="Enter Task Description"
                    isTextarea = {true}
                    className="py-1 text-sm"
                    labelClass='font-semibold mt-2'
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
            {/* Description Input End */}  

            {/* Task Phase Input Start */}
              <div className="w-full">
                <Select 
                  label="Phase"
                  defaultOption= "Select Phase"
                  className="py-1 text-sm"
                  labelClass='font-semibold mt-2'
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
            {/* Task Phase Input End */}  

            {/* Task Status Input Start */}
              <div className="w-full">
                <Select 
                className="py-1 text-sm"
                label="Status"
                defaultOption= "Select Status"
                labelClass='font-semibold mt-2'
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
            {/* Task Status Input End */}  

            {/* Date Input Start */}
            <div className='flex gap-2'>
                <div className="w-full">
                  <DatePicker
                    label="Start Date"
                    labelClass='font-semibold mt-2'
                    className="py-1 text-sm"
                    {...register("startDate",{
                      required:"Please Select Start Date"
                    })}
                    error={errors.startDate && errors.startDate.message}
                  />
                </div>

                <div className="w-full">
                  <DatePicker
                    label="End Date"
                    labelClass='font-semibold mt-2'
                    className="py-1 text-sm"
                    {...register("endDate",{
                      required:"Please Select End Date"
                    })} 
                    error={errors.endDate && errors.endDate.message}                   
                  />
                </div>
            </div>
            {/* Date Input End */}  

            {/* Priority Input Start */}
              <div className="w-full">
                <Select 
                className="py-1 text-sm"
                label="Priority"
                defaultOption= "Select Priority"
                labelClass='font-semibold mt-2'
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
            {/* Priority Input End */}  

            {/* assignedCoderNames Input Start */}
              <div className="w-full">
                  <MultiSelect_Tag 
                    label="Coders"
                    className='p-1 text-sm'
                    labelClass='font-semibold mt-2'
                    options={["React", "JavaScript", "HTML", "CSS"]}   
                    {...register("coders",{
                      required:"Please Select Coders"
                    })} 
                    error={errors.coders && errors.coders.message}                                      
                  />
              </div>
            {/* assignedCoderNames Input End */}   

            {/* Client Input Start */}
              <div className="w-full">
                <Select 
                  label="Client"
                  defaultOption= "Select Client"
                  className="py-1 text-sm"
                  labelClass='font-semibold mt-2'
                  options={[
                    { value: 'stockholding', label: 'Stockholding' },
                    { value: 'gmmco', label: 'Gmmco' },
                  ]}
                  {...register("client",{
                    required: "Please select Client",
                  })}
                  error={errors.client && errors.client.message}
                /> 
              </div>
            {/* Client Input End */}  

            <div className='flex items-center justify-center gap-2 mt-3'>
                <Button type="submit" variant='primary' className='py-2 text-sm' isLoading={isSubmitting}>Submit</Button>
                <Button type="reset" variant='danger' className='py-2 text-sm' onClick={()=>reset()}>Reset</Button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default AddTask
