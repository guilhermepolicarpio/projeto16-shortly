import { useState } from 'react';
import styled from 'styled-components';

import { FormWrapper } from '../Form/StyledForm';
import Header from '../Header';
import HeaderTittle from '../HeaderTittle';

export default function Main({ currentPage }) {

    const [url, setUrl] = useState('');

    async function submit(event) {
        event.preventDefault();

        try {

        } catch (error) {

        }
    }


    return (

        <>
            <Header currentPage={currentPage} />
            <HeaderTittle currentPage={currentPage} />
            <FormWrapper onSubmit={submit}>
                <UrlWrapper>
                    <input
                        name="email"
                        placeholder="Links that fit in your pocket"
                        type="text"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                    />
                    <Button>
                        <span>Short link</span>
                    </Button>
                </UrlWrapper>
                <ShortUrlContainer>
                    <ShortUrlWrapper>
                        <span>URL</span>
                        <span>SHORTEN</span>
                        <span>VIEWS</span>
                    </ShortUrlWrapper>
                    <IonIconWrapper>
                    <ion-icon name="trash"></ion-icon>
                    </IonIconWrapper>
                   
                </ShortUrlContainer>
                <ShortUrlContainer>
                    <ShortUrlWrapper>
                        <span>URL</span>
                        <span>SHORTEN</span>
                        <span>VIEWS</span>
                    </ShortUrlWrapper>
                </ShortUrlContainer>
                <ShortUrlContainer>
                    <ShortUrlWrapper>
                        <span>URL</span>
                        <span>SHORTEN</span>
                        <span>VIEWS</span>
                    </ShortUrlWrapper>
                </ShortUrlContainer>

            </FormWrapper>

        </>
    );
};

const UrlWrapper = styled.div`
display: flex;
align-items: center;
margin-bottom: 17px;

input{
    min-width: 600px;
    width: 88%;
    margin-right: 65px;
    height: 60px;
}
`;

const ShortUrlWrapper = styled.div`
background: #80CC74;
border-radius: 12px;
width: 82%;
height: 60px;
border: none;
display: flex;
justify-content: space-around;
align-items: center;
span{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
}
`;

const Button = styled.div`
background: #5D9040;
border-radius: 12px;
width: 182px;
height: 60px;
border: none;
display: flex;
justify-content: center;
align-items: center;
span{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
}
`;

const ShortUrlContainer = styled.div`
display: flex;
align-items: center;
border: 1px solid rgba(120, 177, 89, 0.25);
border-radius: 12px;
margin: 21px 0px;
width:100%;
`;

const IonIconWrapper = styled.div`
display: flex;
align-items: center;
background: #FFFFFF;
ion-icon{
width: 33px;
height: 38px;
color: #EA4F4F;
margin-left: 67px;
cursor: pointer;
}
`;