import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import useSignUp from '../hooks/api/useSignUp';
import { FormWrapper, SignUpText } from './Form/StyledForm';
import Footer from './Footer';
import Header from './Header';
import HeaderTittle from './HeaderTittle';

export default function SignUp({currentPage}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { signUp } = useSignUp();

    const navigate = useNavigate();

    async function submit(event) {
        event.preventDefault();

        if (password !== confirmPassword) {
            toast('As senhas devem ser iguais!');
        } else {
            try {
                await signUp(name, email, password);
                toast('Inscrito com sucesso! Por favor, faça login.');
                navigate('/');
            } catch (error) {
                toast('Não foi possível fazer o cadastro!');
            }
        }
    }

    return (
        <>
            <Header currentPage={currentPage}/>
            <FormWrapper onSubmit={submit}  >
            <HeaderTittle/>
                <input
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    name="email"
                    placeholder="E-mail"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    name="confirmpassword"
                    placeholder="Password confirmation"
                    type="password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <Footer currentPage={currentPage}/>      
            </FormWrapper>
        </>
    );
}
