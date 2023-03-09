import styled from 'styled-components';

import shortly from './assets/shortly.png';

export default function Header({currentPage}) {

    const page = currentPage;

    return (
        <WelcomeMessage>
             <span>{page === 'home' ? 'Welcome, NAME' : ''}</span>
            <HeaderWrapper>
                <p>Shortly</p>
                <img src={shortly} alt='' />
            </HeaderWrapper>
        </WelcomeMessage>
    );
};
const HeaderWrapper = styled.div`

display: flex;
justify-content: center;
align-items: center;
margin-top: 2.8em;
p{
font-family: 'Lexend Deca';
font-weight: 200;
font-size: 64px;
color: #000000;
margin-right: 2%;
}

img{
width: 102px;
height: 96.33px;
}
`;

const WelcomeMessage = styled.div`

span{
top: 4.5em;
left: 10%;
position: absolute;
font-family: 'Lexend Deca';
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #5D9040;
}
`;