import React from 'react';
import bankLogo from '../../assets/bank_logo.svg';
import { corPrimaria } from '../UI/variaveis';
import { BtnCabecalho, StyledCabecalho, Logo } from './style';

const Cabecalho = () => {
  return (
    <StyledCabecalho>
      <Logo src={bankLogo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho primary href="https://google.com">
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho href="https://google.com">Sair</BtnCabecalho>
      </div>
    </StyledCabecalho>
  );
}

export default Cabecalho;
