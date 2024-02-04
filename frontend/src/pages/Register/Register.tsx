import { RegisterContainer, RegisterForm } from './Style';
import { Link } from 'react-router-dom';
import { useRegister } from '../../hooks/registerHook';

function Register() {
  const {
    displayName,
    setDisplayName,
    email,
    setEmail,
    password,
    setPassword,
    image,
    setImage,
    passwordConfirmation,
    setPasswordConfirmation,
    handleRegister,
  } = useRegister();

  return (
    <RegisterContainer>
      <RegisterForm>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Url image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
        <span>Already have an account?</span>
        <Link to="/">Login</Link>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;