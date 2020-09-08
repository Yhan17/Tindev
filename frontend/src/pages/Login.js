import React, { useState } from 'react';
import logo from '../assets/logo.svg'
import './Login.css';

import api from '../services/api';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    async function handleSumbit(e){
        e.preventDefault();

        const response = await api.post('/devs', {
            username,

        })

        const { _id: id } = response.data;

        history.push(`/dev/${id}`);
    }
    return (
        <div className="login-container">
            <form onSubmit={handleSumbit}>
                <img src={logo} alt="Tindev" />
                <input 
                value={username} 
                onChange={e => {
                    setUsername(e.target.value)
                }}
                placeholder="Digite o seu usuário do github"
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}