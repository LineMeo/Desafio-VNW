import React from "react";
import * as S from "../Components/Style/FaleCStyles";

const FaleC = () => {
  return (
    <S.Div>
      <S.H3>Fale conosco</S.H3>
      <S.Input id="inputID" placeholder="Diga o seu melhor email" />
      <S.Input placeholder="Assunto" />
      <S.InputM placeholder="Escreva a sua mensagem" />
      <S.Button>Enviar</S.Button>
    </S.Div>
  );
};

export default FaleC;
