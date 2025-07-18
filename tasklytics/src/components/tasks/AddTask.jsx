import React, { useRef, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, DatePicker, MultiSelect_Tag } from '../index';
import { IoMdCloseCircle } from "react-icons/io";
import { useSelector } from 'react-redux';
import { getDropdownOptions } from '../../firebase/dropdownService';
import { getCodersList } from '../../firebase/codersService';
import { addTaskFirebase } from '../../firebase/addTaskService';
import { toast } from 'react-toastify';

function AddTask({onClose, show}) {
    const {user}=useSelector((state)=>state.auth);
    const [priorityOptions, setPriorityOptions] = useState([]);
    const [phaseOptions, setPhaseOptions] = useState([]);
    const [statusOptions, setStatusOptions] = useState([]);
    const [clientOptions, setClientOptions] = useState([]);
    const [codersOptions, setCodersOptions] = useState([]);

    useEffect(()=>{
      async function fetchDropdowns(){
        const results = await Promise.allSettled([
          getDropdownOptions('priorities','sortOrder','asc'),
          getDropdownOptions('phases','sortOrder','asc'),
          getDropdownOptions('statuses','sortOrder','asc'),
          getDropdownOptions('clients','sortOrder','asc'),
          getCodersList(user.id),
        ]);

        if (results[0].status === 'fulfilled') setPriorityOptions(results[0].value);
        if (results[1].status === 'fulfilled') setPhaseOptions(results[1].value);
        if (results[2].status === 'fulfilled') setStatusOptions(results[2].value);
        if (results[3].status === 'fulfilled') setClientOptions(results[3].value);
        if (results[4].status === 'fulfilled') setCodersOptions(results[4].value);

        results.forEach((res, i) => {
          if (res.status === 'rejected') {
            console.error(`Dropdown fetch failed [${i}]:`, res.reason);
          }
        });
      }

      fetchDropdowns();
    },[])

    const {
      register,
      handleSubmit,
      reset,
      watch,
      formState:{ errors, isSubmitting },
    } = useForm();
    const startDateValue = watch("startDate");

    const backdropRef = useRef(null);

    const handleMouseDown = (e) => {
      setTimeout(() => {
        backdropRef.current.clickedOnBackdrop = e.target === backdropRef.current;
      }, 0);
    };

    const handleMouseUp = (e) => {
      if (backdropRef.current.clickedOnBackdrop && e.target === backdropRef.current) {
        onClose(); 
      }
    };

    const onSubmit = async (data) => {
        let selectedCoders;
        if(user.userRole=="Coder"){
          selectedCoders = [{ id: user.id, name: user.name }];
        }else{
          selectedCoders = data.coders.map(coderId => {
            const match = codersOptions.find(opt => opt.value === coderId);
            return { id: coderId, name: match?.label || "" };
          }); 
        }   
        
        const cleaned = {
            title: data.title.trim(),
            description: data.description.trim(),
            taskPhase: data.taskPhase.trim(),
            taskStatus: data.taskStatus.trim(),
            startDate: data.startDate.trim(),
            endDate: data.endDate.trim(),
            priority: data.priority.trim(),
            coders: selectedCoders,   
            client:data.client,
            createdBy:user.id,
            updatedBy:user.id,
            createdByName:user.name,
            updatedByName:user.name,
            managerId: user.userRole == "Manager" ? user.id : user.manager,
        };

        try {
          const response=await addTaskFirebase(cleaned);
          if(response.success){
            toast.success("Task Created Successfully");
            onClose();
            reset();
          }else{
            toast.error("Error Creating Task");
            throw response.error;
          }
        } catch (error) {
            console.error("Add Task Error:", error);
            toast.error("Failed to add task. Please try again.");
        }
    };

    return (
      <div ref={backdropRef} className='absolute bg-black bg-opacity-50 z-20 w-full h-full cursor-pointer'   onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <div className='absolute bg-white top-0 right-0 h-full w-96 p-4 overflow-y-auto cursor-auto' onMouseDown={(e) => e.stopPropagation()} onMouseUp={(e) => e.stopPropagation()} >
          <div className='flex justify-end mb-2'>
            <button onClick={onClose}><IoMdCloseCircle className='text-2xl'/></button>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-center">Add Task</h2>

          <form onSubmit={handleSubmit(onSubmit)} className='container mx-auto pt-5 pb-4 relative'> 
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
                  options={phaseOptions}
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
                options={statusOptions}
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
                    disabled={!startDateValue}
                    placeholder={!startDateValue ? "Please select Start Date first" : ""}
                    min={startDateValue}
                    {...register("endDate",{
                      required:"Please Select End Date",
                      validate: value => {
                        if (!startDateValue) return true; // skip check if start not selected yet
                        if (new Date(value) < new Date(startDateValue)) {
                          return "End Date cannot be before Start Date";
                        }
                        return true;
                      }                      
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
                options={priorityOptions}
                  {...register("priority",{
                    required: "Please Select Priority",
                  })}
                  error={errors.priority && errors.priority.message}
                /> 
              </div>
            {/* Priority Input End */}  

            {/* assignedCoderNames Input Start */}
            {user.userRole !== "Coder" && (
              <div className="w-full">
                  <MultiSelect_Tag 
                    label="Coders"
                    className='p-1 text-sm'
                    labelClass='font-semibold mt-2'
                    options={codersOptions}   
                    // options={["React", "JavaScript", "HTML", "CSS"]}  
                    {...register("coders",{
                      required:"Please Select Coders"
                    })} 
                    error={errors.coders && errors.coders.message}                                      
                  />
              </div>
            )}
            {/* assignedCoderNames Input End */}   

            {/* Client Input Start */}
              <div className="w-full">
                <Select 
                  label="Client"
                  defaultOption= "Select Client"
                  className="py-1 text-sm"
                  labelClass='font-semibold mt-2'
                  options={clientOptions}
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
