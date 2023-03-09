import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import UserContext from '../contexts/UserContext';
import useSignIn from '../hooks/api/useSignIn';
import Footer from './Footer';
import { FormWrapper } from './Form/StyledForm';
import Header from './Header';
import HeaderTittle from './HeaderTittle';

export default function SignIn({currentPage}) {

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

        <>
            <Header currentPage={currentPage}/>
            <FormWrapper onSubmit={submit}>
                <HeaderTittle/>
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
                <Footer currentPage={currentPage}/>
            </FormWrapper>

        </>
    );
};
