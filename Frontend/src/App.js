import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
