import React,{useState} from 'react';

const Login = () => {
    const initialState = { username: '', email: '', password: '' };
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/users/login', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(res=> console.log(res))
        .catch(err => console.log(err))
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={handleChange} value={formData.password} />
        <button type="submit">Login</button>
    </form>
    </div>
  )
}
export default Login