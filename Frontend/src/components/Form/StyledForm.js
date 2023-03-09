import styled from 'styled-components';

export const FormWrapper = styled.form`
display: flex;
flex-direction: column;
width: 100%;
padding-right: 50px;

input{
background: #FFFFFF;
border: 1px solid rgba(120, 177, 89, 0.25);
box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
border-radius: 12px;
width: 769px;
height: 60px;
padding-left: 20px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
color: #9C9C9C;
}

button{
background: #5D9040;
border-radius: 12px;
width: 182px;
height: 60px;
margin-top: 68px;
border: none;
p{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 18px;
text-align: center;
color: #FFFFFF;
}
}
`;

export const SignUpText = styled.div`

margin-top: 15px;
font-size: 14px;


span {
  display: inline-block;
  margin: 0;
  padding: 0;
  border: none;
  color: black;
  background-color: transparent;
  font-size: 16px;

  
}
> p {
text-decoration: none;
}
:hover{
cursor: pointer;
}
`
