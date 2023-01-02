import React from "react";
import * as S from "../Components/Style/MainStyles";
import Couple from "../Images/couple.png";
import Friends from "../Images/friendsFirst.png";
import FriendsSe from "../Images/friendsSecond.png";

import RJ from "../Images/rioDeJaneiro.png";
import RO from "../Images/RioDasOstras.png";
import CN from "../Images/CaldasNovas.png";
import AM from "../Images/Amazonia.png";

import ManAndKid from "../Images/ManAndKid.png";
import FriendsBeach from "../Images/FriendsBeach.png";
import ManDog from "../Images/ManDog.png";

import Man from "../Images/Man.png";
import WomanBike from "../Images/WomanBike.png";
import Women from "../Images/Women.png";

import Travel from "../Images/travel.png";
import Street from "../Images/street.png";
import Coco from "../Images/coco.png";
import Restaurantes from "../Images/Restaurantes.png";

const Main = () => {
  return (
    <main>
      <S.Div>
        <S.Img src={Couple} />
        <S.SubDiv>
          <S.Sub>
            <S.Title>
              <S.Border></S.Border>
              <S.P>Viagens Nacionais</S.P>
            </S.Title>
            <S.H4>O clima perfeito, no lugar perfeito</S.H4>
            <S.Pp>
              Planeje sua viagem com a sua paquera, compartilhar momentos
              preciosos juntos não tem preço.
            </S.Pp>
            <S.Button>Agendar</S.Button>
          </S.Sub>
        </S.SubDiv>
      </S.Div>
      <S.Div>
        <S.SubDivS>
          <S.SubS>
            <S.TitleS>
              <S.BorderS></S.BorderS>
              <S.PP>Viagens Nacionais</S.PP>
            </S.TitleS>
            <S.H4s>Curta uma nova vibe entre amigos</S.H4s>
            <S.Ppp>
              Rachando a conta ou rachando o bico, a melhor hora pra curtir é
              entre amigos. Conheça nossos <h4>Planos Multi</h4>.
            </S.Ppp>
            <S.ButtonTwo>Agendar</S.ButtonTwo>
          </S.SubS>
        </S.SubDivS>
        <S.Img src={Friends} />
      </S.Div>
      <S.Div>
        <S.Img src={FriendsSe} />
        <S.SubDiv>
          <S.Sub>
            <S.Title>
              <S.Border></S.Border>
              <S.P>Viagens Nacionais</S.P>
            </S.Title>
            <S.H4>Algumas experiências são inexplicáveis</S.H4>
            <S.Pp>
              Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes,
              num clima sereno, relaxante e natural.
            </S.Pp>
            <S.Button>Agendar</S.Button>
          </S.Sub>
        </S.SubDiv>
      </S.Div>
      <S.Imagens>
        <S.ImgDiv>
          <S.Img src={RJ} />
          <S.Img src={RO} />
          <S.Img src={CN} />
          <S.Img src={AM} />
        </S.ImgDiv>

        <S.ButtonDiv>
          <S.ButtonT>Rio de Janeiro</S.ButtonT>
          <S.ButtonT>Rio das Ostras</S.ButtonT>
          <S.ButtonT>Caldas Novas</S.ButtonT>
          <S.ButtonT>Amazônia</S.ButtonT>
        </S.ButtonDiv>
      </S.Imagens>
      <S.LastDiv>
        <S.Text>
          <S.TextP>use a hashtag #brasilisverigudi</S.TextP>
          <S.TextPP>Nosso mural de Experiências</S.TextPP>
        </S.Text>
        <S.DivImg>
          <S.ImgFirst src={ManAndKid} />
          <S.ImgFirst src={FriendsBeach} />
          <S.ImgFirst src={ManDog} />
          <S.ImgSecond src={Man} />
          <S.ImgSecond src={WomanBike} />
          <S.ImgSecond src={Women} />
        </S.DivImg>
      </S.LastDiv>
      <S.Best>
        <S.BestImg>
          <S.Photo>
            <img src={Travel} />
            <p>O melhor do Brasil</p>
          </S.Photo>

          <S.Photo2>
            <img src={Street} />
            <p>Cidades mais frequentadas</p>
          </S.Photo2>

          <S.Photo>
            <img src={Coco} />
            <p>Pontos turísticos</p>
          </S.Photo>

          <S.Photo2>
            <img src={Restaurantes} />
            <p>Restaurantes</p>
          </S.Photo2>
        </S.BestImg>
      </S.Best>
    </main>
  );
};

export default Main;
