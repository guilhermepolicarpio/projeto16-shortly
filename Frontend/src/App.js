import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignIn from './components/Pages/SignIn';
import SignUp from './components/Pages/SignUp';
import Home from './components/Pages/Home';
import Ranking from './components/Pages/Ranking';
import Visitor from './components/Pages/Visitor';
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
                <Route path="/Home" element={<Home currentPage='home'/>} />
                <Route path="/ranking" element={<Ranking/>} />
                <Route path="/visitor" element={<Visitor/>} />
              </Routes>
            </Router>
          </ConfigProvider>
        </UserProvider>

    </>
  );
}

export default App;
