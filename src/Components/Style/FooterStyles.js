import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const H3 = styled.h3`
  color: #005bd5;
  font-size: 20px;
  line-height: 40px;
`;

export const P = styled.p`
  color: #005bd5;
  font-size: 18px;
  line-height: 25px;
  &:hover {
    color: #002e6b;
    cursor: pointer;
  }
`;
