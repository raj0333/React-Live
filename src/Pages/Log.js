import { useState } from 'react';
import SignupForm from '../Components/SignupForm';
import LoginForm from '../Components/LoginForm';

const Log = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSignup = (data) => {
    setUserData(data);
    setIsSignedUp(true);
  };

  const handleLogin = (data) => {
    if (data.email === userData.email && data.password === userData.password) {
      alert('Login successful');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {!isSignedUp ? (
        <SignupForm onSignup={handleSignup} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Log;
