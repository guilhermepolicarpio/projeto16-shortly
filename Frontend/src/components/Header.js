import styled from 'styled-components';

export default function Header({currentPage}) {
    
    const page = currentPage;

    return (
        <HeaderWrapper>
            <HeaderMenu>
                <ul>
                    <li><a href='/' className={page === 'login' ? 'active' : ''}>Login</a></li>
                    <li><a href='/register' className={page === 'register' ? 'active' : ''}>Signup</a></li>
                </ul>
            </HeaderMenu>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.div`
display: flex;
justify-content: center
`;

const HeaderMenu = styled.div`
display: flex;
right: 3.5em;
top: 3.5em;
position: absolute;

ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: #333;
    text-decoration: none;
    font-weight: normal;
    padding: 10px;
    transition: color 0.2s ease-in-out;
  }

  a:hover {
    color: #666;
  }

  a.active {
    color:  #5D9040;;
    font-weight: bold;
    font-weight: 700;
  }
`;

