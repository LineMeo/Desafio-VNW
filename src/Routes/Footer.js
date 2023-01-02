import React from "react";
import * as S from "../Components/Style/FooterStyles";
import GudiFooter from "../Images/GudiFooter.png";

const Footer = () => {
  return (
    <S.Div>
      <div>
        <img src={GudiFooter} />
        <S.P>Sobre nós</S.P>
        <S.P>Mural de memórias</S.P>
        <S.P>Eventos Gudi</S.P>
        <S.P>Nosso blog</S.P>
      </div>

      <div>
        <S.H3>Contato</S.H3>
        <S.P>Chat Virtual</S.P>
        <S.P>SAC Online</S.P>
        <S.P>Ouvidoria</S.P>
        <S.P>FAQ</S.P>
      </div>

      <div>
        <S.H3>Beneficios</S.H3>
        <S.P>Conta Digital Gudi</S.P>
        <S.P>Viage com Milhas</S.P>
        <S.P>C6 Átomos</S.P>
        <S.P>ID Jovem</S.P>
      </div>

      <div>
        <S.H3>Lugares</S.H3>
        <S.P>O melhor do Brasil</S.P>
        <S.P>Cidades frequentes</S.P>
        <S.P>Pontos turísticos</S.P>
        <S.P>Restaurantes</S.P>
      </div>

      <div>
        <S.H3>Curiosidades</S.H3>
        <S.P>Cultura e tradições </S.P>
        <S.P>Pratos típicos</S.P>
        <S.P>Mitos brasileiros</S.P>
        <S.P>Carnaval</S.P>
      </div>
    </S.Div>
  );
};

export default Footer;
