import React, { useEffect, useState } from 'react'

const Register = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }



    useEffect(() => {
        fetch('/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: 'test', email: '', password: 'test' })
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" onChange={handleChange} value={formData.username} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleChange} value={formData.password} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register