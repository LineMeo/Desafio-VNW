import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: #005bd5;
  color: #ffffff;
  height: 350px;
`;

export const H3 = styled.h3`
  font-size: 35px;
`;

export const Input = styled.input`
  border-radius: 20px;
  border: 1px;
  width: 400px;
  height: 30px;
  font-size: 18px;
  &::placeholder {
    color: #afb3b8;
    position: absolute;
    top: 5px;
    left: 8px;
  }
`;

export const InputM = styled.input`
  border-radius: 20px;
  border: 1px;
  width: 400px;
  height: 70px;
  font-size: 18px;
  &::placeholder {
    color: #afb3b8;
    position: absolute;
    top: 10px;
    left: 8px;
  }
`;
export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid white;
  width: 100px;
  height: 35px;
  font-size: 18px;
  background-color: #005bd5;
  color: #ffffff;
  &:hover {
    background-color: #ffffff;
    color: #005bd5;
    cursor: pointer;
  }
`;
