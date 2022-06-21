import { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from './components/UsersList'
import UserForm from './components/UsersForm'
import { useForm } from 'react-hook-form'
import "./index.css"

const URL = 'https://users-crud1.herokuapp.com/users/'

function App() {

  const {handleSubmit, register, reset} = useForm()

  const [users, setusers] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const [objectUpdate, setObjectUpdate] = useState()

  const getAllUsers = () => {
    axios.get(URL)
      .then(res => setusers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const createUser = newUser => {
    axios.post(URL, newUser)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, updateUser) => {

    axios.patch(`${URL}${id}/`, updateUser)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setObjectUpdate()
        setIsShowForm(false)
      })
      .catch(err => console.log(err))
  }

  const showForm = () => {
    const obj = {
      duration: "",
      genre: "",
      name: "",
      release_date: ""
    }
    reset(obj)
    setIsShowForm(!isShowForm)
  }

  return (
    <div className="Users">
      <div className='btnForm'>
        <button className='btnCreate' onClick={showForm}>{isShowForm ? 'Hide Form' :'Create a new User'}</button>
      </div>
        {
          isShowForm && 
          <UserForm 
            createUser={createUser}
            updateUserById={updateUserById}
            objectUpdate={objectUpdate}
            handleSubmit={handleSubmit}
            reset={reset}
            register={register}
          />
        }
      <section className='userSection'>
      {
        users?.map(res => (
          <UserList
            key={res.id}
            user={res}
            URL={URL}
            getAllUsers={getAllUsers}
            setObjectUpdate={setObjectUpdate}
            setIsShowForm={setIsShowForm}
            reset={reset}
          />
        ))
      }
      </section>
        
    </div>
  )
}

export default App
