import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data);
        const url = 'https://desolate-island-13153.herokuapp.com/product'
        fetch(url, {
            method:"POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Want to Add a new product?</h2>
            <p>Please fill in the form and click on the button.</p>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="text" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Image link' type="text" {...register("image")} />
                <input className='mb-2' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItems;