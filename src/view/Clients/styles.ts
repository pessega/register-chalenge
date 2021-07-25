import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  text-align: center;

  form {
    margin: 20px;

    h1 {
      margin: 20px 0;
    }

    input {
      margin: 20px 20px 0 10px;
      border: 1px solid #d1d1d1;
      border-radius: 8px;
      height: 30px;
      width: 300px;
    }

    button {
      cursor: pointer;
      margin-top: 30px;

      color: rgb(218, 168, 31);
      background-color: #000;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;

      &:hover {
        background-color: #555;
      }
    }
  }

  section {
    width: 100%;
    background: #0101;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px;
    margin-top: 40px;

    .product-content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: left;

      height: 150px;
      width: 100%;
      max-width: 300px;
      background: #fff;
      border-radius: 20px;
      padding: 12px;
      margin: 10px;

      box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.15);

      transition: transform 0.5s;

      &:hover {
        transform: scale(1.05);
        transition: transform 0.5s;
      }
    }
  }
`;
