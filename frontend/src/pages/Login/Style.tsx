import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;

    background-image: url("src/assets/images/bg2.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    padding: 200px;

    width: 60%;

    h1 {
        margin-bottom: 20px;
        font-size: 5rem;
        text-align: center;
    }

    p {
        text-align: center;
        font-size: 1.1rem;
        font-weight: 300;
        line-height: 2rem;
        letter-spacing: 1px;
    }
`;

export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;

    width: 40%;

    h2 {
        margin-bottom: 20px;
        font-size: 2rem;
    }

    input {
        width: 300px;
        height: 40px;
        margin-bottom: 20px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        width: 300px;
        height: 40px;
        background-color: #000;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 20px;
        font-size: 0.9rem;
    }

    button:hover {
        background-color: #333;
    }

    .icon {
        position: relative;
        right: 25px;
        top: 3px;
        cursor: pointer;
    }

    span {
        font-size: 1rem;
        font-weight: 300;
        line-height: 2rem;
        letter-spacing: 1px;
        margin-top: 30px;
    }
`;
