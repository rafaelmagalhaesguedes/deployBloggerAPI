import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
`;

export const MenuBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: #f2f2f2;
  padding: 10px;
  margin: 1rem;
  border-radius: 5px;

  span {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  a {
    border-radius: 5px;
    text-decoration: none;
    color: #000;
    font-weight: 400;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px 20px 20px;

  label {
    margin-bottom: 10px;
    font-size: 18px;
  }

  input {
    margin-bottom: 20px;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #999;
    border-radius: 5px;
    font-size: 16px;
  }

  textarea {
    margin-bottom: 20px;
    width: 100%;
    height: 300px;
    padding: 10px;
    border: 1px solid #999;
    border-radius: 5px;
    font-size: 13px;
    font-family: 'Poppins', sans-serif;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 30px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
`;