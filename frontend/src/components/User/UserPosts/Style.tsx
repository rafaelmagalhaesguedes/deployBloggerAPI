import styled from "styled-components";

export const UserPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 80%;
  margin: 0 auto;
  padding: 30px;
  gap: 5px;

    a {
        border-radius: 5px;
        text-decoration: none;
        color: #000;
        font-weight: 400;
        padding-bottom: 15px;
    }

    background-color: #fff;
    border-top: 1px solid #ccc;

    h2 {
        margin-bottom: 20px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #000;

        th, td {
            border: 1px solid #000;
            padding: 10px;
            text-align: center;
        }

        .buttons {
            display: flex;
            gap: 5px;
            justify-content: center;

            button {
                padding: 5px 10px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                background-color: #000;
                color: #fff;
            }
        }

        th {
            background-color: #000;
            color: #fff;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }
    }
`; 