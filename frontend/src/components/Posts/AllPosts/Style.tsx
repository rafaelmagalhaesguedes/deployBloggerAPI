import styled from "styled-components";

export const ContainerPosts = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  h2 {
    width: 20%;
    color: #000;
  }

  a {
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    letter-spacing: 1px;
    line-height: 1.5;
    color: #222;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  width: 30%;
  gap: 10px;

  input {
    width: 70%;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid #000;
  }

  button {
    padding: 5px 15px;
    border-radius: 10px;
    border: 1px solid #000;
    cursor: pointer;
  }
`;

export const Post = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border-bottom: 5px solid #000;
  border-top: 5px solid #000;
`;

export const PostCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 20px 0;
    border-bottom: 1px solid #999;
    
    h3 {
        font-size: 1.8rem;
        color: #000;
        padding: 5px 0;
    }

    div {
        display: flex;
        justify-content: start;
        gap: 1rem;
    }

    .content-value {
        display: flex;
        flex-direction: column;

        a {
            text-decoration: none;
        }
    }
    
    .read-more {
        padding-bottom: 10px;
    }

    span {
        font-size: 0.8rem;
    }
    
    p {
        font-size: 1.1rem;
        padding: 20px 0;
        color: #000;
    }

    .category-item {
      display: inline-block;
      padding: 5px 10px;
      margin: 5px 10px 0 0;
      border-radius: 50px;
      border: 1px solid #ccc;
      background-color: #f5f5f5;
    }
`;