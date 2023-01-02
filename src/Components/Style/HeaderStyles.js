import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  color: #005bd5;
`;

export const SubDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: #005bd5;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 600px;
  font-size: 20px;
`;

export const Li = styled.li`
  width: 100px;
  text-align: center;
  &:hover {
    color: #ffffff;
    cursor: pointer;
    border-radius: 10px;
    background-color: #005bd5;
    width: 100px;
    height: 25px;
  }
`;

export const SubDivSecond = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  position: relative;
`;

export const Sub = styled.div`
  position: relative;
  bottom: 380px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
`;

export const H2 = styled.h2`
  font-size: 40px;
  letter-spacing: 3px;
  text-align: center;
`;
export const Input = styled.input`
  position: relative;
  top: 15px;
  border-radius: 20px;
  border: 1px;
  width: 300px;
  height: 30px;
  font-size: 18px;
  &::placeholder {
    color: #afb3b8;
    position: absolute;
    top: 5px;
    left: 8px;
  }
`;

export const Button = styled.button`
  position: relative;
  top: 30px;

  border-radius: 20px;
  border: 1px solid;
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
