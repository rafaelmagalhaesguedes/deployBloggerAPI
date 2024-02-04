// hooks/useRegister.ts
import { useState } from 'react';
import Swal from 'sweetalert2';
import { registerUser } from '../services/user.service';

export const useRegister = () => {
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
        if (!validateEmail(email)) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: 'Invalid email',
            });
            return;
        }
        if (!validatePassword(password)) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: 'Password must be at least 6 characters',
            });
            return;
        }
        if (!validatePasswordConfirmation(password, passwordConfirmation)) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: 'Passwords do not match',
            });
            return;
        }
        if (!validateDisplayName(displayName)) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: 'Display name must be at least 8 characters',
            });
            return;
        }

        try {
            await registerUser(displayName, email, password, image);
      
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
            Swal.fire({
                icon: "error",
                title: "Error",
                text: 'Error creating user. Please try again.',
            });
            console.log(error);
        }
    }

    return {
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
        handleRegister
    };
}