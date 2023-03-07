import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import UserContext from '../contexts/UserContext';
import useSignIn from '../hooks/api/useSignIn';
import Button from './Form/Button';
import Input from './Form/Input';
import { FormWrapper, InputWrapper, SignUpText } from './Form/StyledForm';


export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useSignIn();
    const { setUserData } = useContext(UserContext);

    const navigate = useNavigate();
    async function submit(event) {
        event.preventDefault();

        try {
            const userData = await signIn(email, password);
            completeLogin(userData);
            toast('Login com sucesso!');
            navigate('/menu');
        } catch (error) {
            toast('Não foi possível fazer o login!');
        }
    }

    async function completeLogin(userData) {
        setUserData(userData);
        toast('Login realizado com sucesso!');
        navigate('/');
      }

    return (

        <FormWrapper onSubmit={submit}>
            <InputWrapper>
                <Input
                    name="email"
                    placeholder="E-mail"
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </InputWrapper>
            <InputWrapper>
                <Input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </InputWrapper>
            <Button type="submit" >Login</Button>
            <Link to="/sign-up">
                <SignUpText >
                    <p> Não tem cadastro ? Clique aqui</p>
                </SignUpText>
            </Link>
        </FormWrapper>
    );
};