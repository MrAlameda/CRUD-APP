import axios from 'axios'
import React from 'react'

function UserList ({user, getAllUsers, URL, setObjectUpdate, setIsShowForm, reset}) {

  const deleteUser = id => {
    axios.delete(`${URL}${id}/`)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUser = () => {
    setIsShowForm(true)

    const obj = {
      email:user.email,
      password:user.password,
      first_name: user.first_name,
      last_name:user.last_name,
      birthday:user.birthday
    }

    reset(obj)
    setObjectUpdate(user)
  }

  return (
    <div className='userCard'>
      <div className='sec1'>
      <p>{`#${user.id}`}</p>
      <p>{`${user.first_name} ${user.last_name}`}</p>
      <p>{`Birthday: ${user.birthday}`}</p>
      <p>{`email: ${user.email}`}</p>
      <p>{`password: ${user.password}`}</p>
      </div>
      <div className='sec1'>
      <button className='btnDelete' onClick={() => deleteUser(user.id)}>Trash</button>
      <button className='btnUpdate' onClick={updateUser}>Update</button>
      </div>
    </div>
  )
}

export default UserList