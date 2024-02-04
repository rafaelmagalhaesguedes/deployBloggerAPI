import styled from "styled-components";

export const UserPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 80%;
  margin: 0 auto;

  background-color: #fff;

  .message-not-found {
    margin: 10px;
    font-size: 20px;
    text-align: center;
    
    p {
      margin-bottom: 10px;
    }
  }
`;

export const MenuBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;

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
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 20px;
  border-bottom: 1px solid #f2f2f2;
  margin: 0 0 1rem 0;

  background-color: #f2f2f2;
  border-radius: 5px;

  margin: 0 1rem 1rem 1rem;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const PostTitle = styled.h3`
  font-size: 1.8rem;
`;

export const PostContent = styled.p`
  font-size: 16px;
  text-align: justify;

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 25px;
  font-size: 14px;

  div {
    display: flex;
    gap: 5px;
  }
`;

export const PostCategory = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;

  span {
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
  }
`;