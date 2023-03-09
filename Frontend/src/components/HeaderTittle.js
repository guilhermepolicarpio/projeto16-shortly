import styled from 'styled-components';

import shortly from './assets/Logo.png';

export default function Header({currentPage}) {

    const page = currentPage;

    return (
        <WelcomeMessage>
             <span>{page === 'home' ? 'Welcome, NAME' : ''}</span>
            <HeaderWrapper>

                <img src={shortly} alt='' />
            </HeaderWrapper>
        </WelcomeMessage>
    );
};
const HeaderWrapper = styled.div`

display: flex;
justify-content: center;
align-items: center;
margin-top: 2.0em;

img{
    margin: 35px 0px;
}
`;

const WelcomeMessage = styled.div`

span{
top: 4.5em;
left: 15%;
position: absolute;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #5D9040;
}
`;