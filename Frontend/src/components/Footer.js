import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SignUpText } from './Form/StyledForm';

export default function Header({currentPage}) {
    
    const page = currentPage;

    return (
        <FooterWrapper>
             <button type="submit">
                        <p>{page === 'login' ? 'Login' : 'Register'}</p>
                    </button>
                    <Link to={page === 'login' ? '/register' : '/'}>
                        <SignUpText >
                            <span> {page === 'login' ? 'Do not have an account? Click here' : 'Already have an account? Click here'}</span>
                        </SignUpText>
                    </Link>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 2.8em;

button{
    cursor: pointer;
}
`;