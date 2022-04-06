import React from "react";
import ThemeOn from "../../assets/themeOn.svg";
import ThemeOff from "../../assets/themeOff.svg";
import { Icone } from "../UI/index";

const claro = <Icone src={ThemeOn} alt="Tema Claro" />;
const escuro = <Icone src={ThemeOff} alt="Tema Escuro" />;

export default ({ tema }) => (tema ? escuro : claro);