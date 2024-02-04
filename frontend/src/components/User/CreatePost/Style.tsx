import styled from "styled-components";

export const CreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 80%;
  margin: 0 auto;
  padding: 30px 50px;
  gap: 5px;
  background-color: #fff;
  border-top: 1px solid #ccc;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 5px;
  }

  span {
      display: flex;
      align-items: center;
      gap: 7px;
      cursor: pointer;
      font-size: 16px;
  }

  a {
    border-radius: 5px;
    text-decoration: none;
    color: #000;
    font-weight: 400;
  }

  .title-categories {
    margin-top: 20px;

    h3 {
      margin: 0;
      padding: 0;
    }
  }

  input, select, textarea {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
  }
  
  textarea {
    height: 200px;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
  }

  label {
    margin: 0;
    padding: 0;
    margin-top: 5px;
    cursor: pointer;
  }

  input[type="checkbox"] {
    cursor: pointer;
    margin: 0;
    padding: 0;
  }
`;

export const CreatePostButton = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
`;