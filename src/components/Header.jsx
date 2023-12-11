import React from 'react'
import { useSelector } from 'react-redux'


const Header = () => {

    const user = useSelector((state) => state.user)

  return (
    <nav>
        <h1>Redux Toolkit Example</h1>
        <ul>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Username: {user.username}</li>
        </ul>
    </nav>
  )
}

export default Header