import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import Header from './components/Header'
import { addUser } from './redux/userSlice'
import Email from './components/Email'
function App() {

 const disptach = useDispatch()

 useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => disptach(addUser(data)))
    .catch((error) => console.log(error))
 }, [])

 
  return (
    <>
      <div className='App'>
        <Header />
        <Email />
      </div>
    </>
  )
}

export default App
