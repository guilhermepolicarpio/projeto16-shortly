import styled from 'styled-components';

import shortly from './assets/shortly.png';

export default function Header() {
    return (
        <HeaderWrapper>
        <p>Shortly</p>
        <img src={shortly} alt='' />
    </HeaderWrapper>
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