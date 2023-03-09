import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { ConfigProvider } from './contexts/ConfigContext';
import { UserProvider } from './contexts/UserContext';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
        <UserProvider>
          <ConfigProvider>
            <Router>
              <Routes>
                <Route path="/" element={<SignIn currentPage={'login'} />} />
                <Route path="/register" element={<SignUp currentPage='register'/>} />
              </Routes>
            </Router>
          </ConfigProvider>
        </UserProvider>

    </>
  );
}

export default App;
