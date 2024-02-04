import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
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

    .createButton {
        padding: 10px;
        width: 100%;
        background-color: #000;
        color: #fff;
        border: none;
        cursor: pointer;
    }
`;

export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 20px;
`;

export const CreateCategory = styled.div`
    width: 50%;
    padding: 20px;

    input {
        width: 100%;
    }
`;

export const EditCategory = styled.div`
    width: 50%;
    padding: 20px;

    .name {
        width: 70%;
        padding: 0 10px;
    }

    .actions {
        display: flex;
        justify-content: space-around;
        width: 100%;

        button {
            border: none;
            cursor: pointer;
        }
    }
`;