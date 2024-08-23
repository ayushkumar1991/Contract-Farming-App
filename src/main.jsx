import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import SignInPage from './routes/SignInPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
