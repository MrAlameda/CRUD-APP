import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

function UserForm ({createUser, updateUserById, objectUpdate, handleSubmit, reset, register}){

  const defaultValuesForm = {
    email:"",
    password:"",
    first_name:"",
    last_name:"",
    birthday:""
  }

  const submit = data => {
    if(objectUpdate !== undefined){
      updateUserById(objectUpdate.id, data)
      reset(defaultValuesForm)
    } else {
      createUser(data)
    }
    reset(defaultValuesForm)
  }

  return (
    <section className='form'>
    <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email">email: </label>
          <input type="text" id='email' {...register('email')} />
        </div>
        <div>
          <label htmlFor="password">password: </label>
          <input type="text" id='password' {...register('password')} />
        </div>
        <div>
          <label htmlFor="first_name">first_name: </label>
          <input type="text" id='first_name' {...register('first_name')} />
        </div>
        <div>
          <label htmlFor="last_name">last_name: </label>
          <input type="text" id='last_name' {...register('last_name')} />
        </div>
        <div>
          <label htmlFor="birthday">birthday: </label>
          <input type="date" id='birthday' {...register('birthday')} />
        </div>
        <button className='btnSubmit'>Submit</button>
      </form>
      </section>
  )
}

export default UserForm