import React from "react";
import * as S from "../Components/Style/HeaderStyles";
import GudiHeader from "../Images/GudiHeader.png";
import Van from "../Images/van.png";

const Header = () => {
  return (
    <S.Div>
      <S.SubDiv>
        <img src={GudiHeader} />

        <S.Nav>
          <S.Li>Sobre</S.Li>
          <S.Li>Beneficios</S.Li>
          <S.Li>Contato</S.Li>
          <S.Li>Agendar</S.Li>
        </S.Nav>
      </S.SubDiv>

      <S.SubDivSecond>
        <S.Img src={Van} />
        <S.Sub>
          <S.H2>Para qual estado você deseja ir?</S.H2>
          <S.Input placeholder="Pesquisar" />
          <S.Button>Buscar</S.Button>
        </S.Sub>
      </S.SubDivSecond>
    </S.Div>
  );
};

export default Header;
