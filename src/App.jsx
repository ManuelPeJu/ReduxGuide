import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import Header from './components/Header'
import { addUser } from './redux/userSlice'
function App() {

 const disptach = useDispatch()

 useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => disptach(addUser(data)))
 }, [])

 
  return (
    <>
      <div className='App'>
        <Header />
      </div>
    </>
  )
}

export default App
