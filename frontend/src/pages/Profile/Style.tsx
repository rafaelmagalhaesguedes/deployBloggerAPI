import styled from "styled-components";

export const ProfileContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: 0 auto;
        display: block;
    }

    h2 {
        color: #000;
    }
    
    p {
        color: #000;
    }

    button {
        padding: 10px 20px;
        border: none;
        background-color: #000;
        color: #fff;
        cursor: pointer;
        transition: 0.3s;
        font-size: 0.9rem;
    }

    a {
        color: #000;
        text-decoration: none;
        transition: 0.3s;
    }
    `;