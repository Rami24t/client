import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
 // - [ ] the login page should be at the `/login`
 // - [ ] the register page should be at the `/register`
// - [ ] build a register component and the submit button should send a `post` request to the server at the route `/users/register`
// - [ ] build a login component and the submit button should send a `post` request to the server at the route `/users/login`

return (
    <div>
    <Navbar />
        <h1 className='mb-3'>Record Shop App</h1>
        <Outlet />
    </div>
)

}

export default App