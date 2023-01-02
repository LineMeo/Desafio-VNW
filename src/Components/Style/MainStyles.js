import styled from "styled-components";

export const Div = styled.div`
  position: relative;
  bottom: 160px;
  display: flex;
`;

export const Img = styled.img`
  width: 50%;
`;

export const SubDiv = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  background: transparent linear-gradient(180deg, #005bd5 0%, #002e6b 100%) 0%
    0% no-repeat padding-box;
`;

export const Sub = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Border = styled.p`
  width: 8%;
  border-bottom: 2px solid white;
`;

export const P = styled.p`
  font-size: 20px;
`;

export const H4 = styled.h4`
  width: 300px;
  font-size: 40px;
  position: relative;
  left: 0px;
`;

export const Pp = styled.p`
  width: 400px;
  font-size: 18px;
  position: relative;
  left: 0px;
`;

export const Button = styled.button`
  position: relative;
  top: 10px;
  left: 0px;
  border-radius: 20px;
  border: 1px solid white;
  width: 100px;
  height: 35px;
  font-size: 14px;
  background-color: #002e6b;
  text-transform: uppercase;
  color: #ffffff;
  &:hover {
    background-color: #ffffff;
    color: #005bd5;
    cursor: pointer;
  }
`;

//2 parte main
export const SubDivS = styled.div`
  color: #005bd5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const SubS = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleS = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const BorderS = styled.p`
  width: 8%;
  border-bottom: 2px solid #005bd5;
`;

export const PP = styled.p`
  font-size: 20px;
`;

export const H4s = styled.h4`
  width: 300px;
  font-size: 40px;
  position: relative;
  left: 0px;
`;

export const Ppp = styled.p`
  width: 400px;
  font-size: 18px;
  position: relative;
  left: 0px;
`;

export const ButtonTwo = styled.button`
  position: relative;
  top: 10px;
  left: 0px;
  border-radius: 20px;
  border: 1px solid #005bd5;
  width: 100px;
  height: 35px;
  font-size: 14px;
  background-color: #ffffff;
  text-transform: uppercase;
  color: #005bd5;
  &:hover {
    background-color: #005bd5;
    color: #ffffff;
    cursor: pointer;
  }
`;

//4 imagens
export const Imagens = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 160px;
`;

export const ImgDiv = styled.div`
  display: flex;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
  bottom: 160px;
`;

export const ButtonT = styled.button`
  position: relative;
  top: 10px;
  border-radius: 20px;
  border: 1px solid #ffffff;
  width: 150px;
  height: 35px;
  font-size: 14px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.5);
  &:hover {
    background-color: #005bd5;
    color: #ffffff;
    cursor: pointer;
  }
`;

//last div
export const LastDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 160px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextP = styled.p`
  color: #8b8b8b;
  font-size: 20px;
`;

export const TextPP = styled.p`
  color: #8b8b8b;
  font-size: 30px;
  font-weight: bold;
`;

export const DivImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 50%;
  position: relative;
  left: 25%;
`;

export const ImgFirst = styled.img`
  position: relative;
  top: 15px;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: 1s;
  }
`;
export const ImgSecond = styled.img`
  position: relative;
  top: 30px;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: 1s;
  }
`;

//BEST
export const Best = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 50px;
`;

export const BestImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

export const Photo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  width: 23%;
  height: 180px;
  background-color: #eeeeee;
  color: #005bd5;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: 1s;
  }
`;

export const Photo2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  width: 23%;
  height: 180px;
  background-color: #005bd5;
  color: #ffffff;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    transition: 1s;
  }
`;
