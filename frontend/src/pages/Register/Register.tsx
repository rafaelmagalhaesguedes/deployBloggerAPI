import Swal from 'sweetalert2';
import { useState } from 'react';
import { RegisterContainer, RegisterForm } from './Style';
import { Link } from 'react-router-dom';

function Register() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validatePassword = (password: string) => {
    if (password.length < 6) {
      return false;
    }
    return true;
  }

  const validatePasswordConfirmation = (password: string, passwordConfirmation: string) => {
    if (password !== passwordConfirmation) {
      return false;
    }
    return true;
  }

  const validateDisplayName = (displayName: string) => {
    if (displayName.length < 8) {
      return false;
    }
    return true;
  }

  const handleRegister = async () => {
    if (!displayName || !email || !password || !passwordConfirmation) {
      Swal.fire({
        icon: "error",
        title: "Empty fields",
        text: "Please fill all fields",
        timer: 3000,
      });
      return;
    } else if (!validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid email",
        text: "Please enter a valid email",
        timer: 3000,
      });
      return;
    } else if (!validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid password",
        text: "Password must have at least 6 characters",
        timer: 3000,
      });
      return;
    } else if (!validatePasswordConfirmation(password, passwordConfirmation)) {
      Swal.fire({
        icon: "error",
        title: "Invalid password confirmation",
        text: "Password and password confirmation do not match",
        timer: 3000,
      });
      return;
    } else if (!validateDisplayName(displayName)) {
      Swal.fire({
        icon: "error",
        title: "Invalid name",
        text: "Name must have at least 8 characters",
        timer: 3000,
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName,
          email,
          password,
          image,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`Erro ao criar usuário: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
  
      // Store the token in localStorage
      localStorage.setItem("@Auth:access_token", data.token);

      // Clear the form
      setDisplayName('');
      setEmail('');
      setPassword('');
      setImage('');
      setPasswordConfirmation('');
  
      Swal.fire({
        icon: "success",
        title: "User created",
        text: "User created successfully",
        timer: 3000,
      });

    } catch (error) {
      console.error(error);
    }
  }

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