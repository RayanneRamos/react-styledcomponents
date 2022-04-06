import React from "react";
import { Itens } from "./style";
import Item from "../Item/index";
import ImageFilter from "../ImageFilter";

export default (props) => {
  return (
    <Itens>
      {ImageFilter(props.type)}
      <Item {...props} />
      <span>{props.date}</span>
    </Itens>
  );
};