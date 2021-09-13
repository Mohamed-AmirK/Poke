import React from 'react'
import { useForm } from 'react-hook-form';

export default function Login() {
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data) => {
        console.log("data" , data);
    }
    return (
        <>
           <p>LOGIN</p> 
        
                <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Your username"
                    {...register("username", { required: "Username is required !", maxLength:15})}
                />
                <input
                    type="password" 
                    name="password"
                    id="password"
                    placeholder="Your password"
                    {...register("password", { required: "Password is required !", minLength:6})}
                />
                 <ul>
                    <li>{errors.username && errors.username.message}</li>
                     <li>{errors.password && errors.password.message}</li>
               </ul>
               <button type="submit">Login</button>
                </form>
</>
    )
}
