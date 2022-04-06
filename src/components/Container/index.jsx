import React from "react";
import Titulo from "../Titulo/index";
import Conta from "../Conta/index";
import Extrato from "../Extrato/index";
import { Container, Conteudo } from './style';

export default () => {
  return (
    <Container>
      <Titulo>Olá Fulano!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </Container>
  );
};
