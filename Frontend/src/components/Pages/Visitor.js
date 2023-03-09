import styled from 'styled-components';

import Header from '../Header';
import HeaderTittle from '../HeaderTittle';

export default function Visitor({ currentPage }) {

    return (
        <>
            <Header currentPage={currentPage} />
            <HeaderTittle currentPage={currentPage} />
            <RankingTittleWraper>
                <ion-icon name="trophy"></ion-icon>
                <span>Ranking</span>
            </RankingTittleWraper>
            <RankingWrapper>
                <UserRanking>
                    <span>1. Fulaninha - 32 links - 1.703.584 visualizações</span>
                    <span>2. Ciclano - 20 links - 1.113.347 visualizações</span>
                </UserRanking>
            </RankingWrapper>
            <Footer>
                <span>Create your account to use our service!</span>
            </Footer>

        </>
    );
};

const RankingTittleWraper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 17px;
margin-bottom: 45px;

ion-icon{
width: 56px;
height: 50px;
color: #FFD233;
margin-right: 10px;
}

span{
font-weight: 700;
font-size: 36px;
color: #000000;
}
`;

const RankingWrapper = styled.div`
min-width:700px;
background: #FFFFFF;
border: 1px solid rgba(120, 177, 89, 0.25);
box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
border-radius: 24px 24px 0px 0px;
padding: 20px;

`;
const UserRanking = styled.div`
display: flex;
flex-direction: column;
span{
    margin: 6px 0px;
}


`;

const Footer = styled.div`
display: flex;
justify-content: center;
span{
margin: 26px 0px;
font-weight: 700;
font-size: 36px;
}


`;