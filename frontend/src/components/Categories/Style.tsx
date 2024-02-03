import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 200px;
    width: 80%;
    margin: 0 auto;
    border-top: 1px solid #ccc;
    background-color: #fff;

    a {
        border-radius: 5px;
        text-decoration: none;
        color: #000;
        font-weight: 400;
        padding-bottom: 15px;
    }

    h2 {
        margin: 20px 0;
    }

    input {
        padding: 10px;
        margin-bottom: 20px;
    }

    button {
        padding: 10px;
        width: 100%;
        background-color: #000;
        color: #fff;
        border: none;
        cursor: pointer;
    }
`;