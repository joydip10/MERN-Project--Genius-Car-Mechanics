import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://sleepy-dawn-60653.herokuapp.com/services',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Successfully Added a service');
                reset();
            }
        })
    }
    return (
        <div className="px-5 py-4">
            <h1>Add <span className="text-warning"> Service </span></h1>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center">

                <input placeholder="Name" {...register("name", { required: true, maxLength: 120 })} />
                <br/>
                <textarea placeholder="Description" {...register("desc",{ required: true })} />
                <br/>
                <input placeholder="Price" {...register("price",{required:true})} />
                <br/>
                <input placeholder="Image Url" {...register("img",{required:true})} />
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;