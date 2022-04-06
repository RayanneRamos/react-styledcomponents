import React, { useState } from "react";
import privado from "../../assets/privado.svg";
import olhoIcone from "../../assets/olho.svg";
import dinheiro from "../../assets/dinheiro.svg";
import { Icone, Box, Botao, Saldo, Detalhe, IconeTema } from '../../components/UI/index';
import { IconeMargin } from './style';

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <IconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe>R$</Detalhe> 0,00{" "}
          </Saldo>
        ) : null}
      </div>

      <Botao onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? privado : olhoIcone}
          alt="Privacidade do Saldo"
        />
      </Botao>
    </Box>
  );
};

export default Conta;