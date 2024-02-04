import styled from "styled-components";

export const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  margin: 0 auto;
  padding: 1rem 2rem;

  background-color: #fff;
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

    a {
        text-decoration: none;
        color: #000;
    }

    span {
        display: flex;
        align-items: center;
        gap: 7px;
        cursor: pointer;
        font-size: 16px;
    }
}`;

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 2.3rem;
  margin: 1rem 0 0 0;
`;

export const Published = styled.div`
    display: flex;
    justify-content: start;
    margin: 0 0 1rem 0;
    font-size: 0.9rem;
    gap: 3rem;
    `;

export const Content = styled.div`
    margin: 0.5rem 0 2rem 0;
    font-size: 1rem;
    line-height: 1.5;
    `;