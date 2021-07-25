import React from "react";
import * as S from "./styles";

const Header: React.FC = (props) => {
  return (
    <>
      <S.Navbar>
        {props.children}
        <S.StyledLink to="/">Produtos</S.StyledLink>
        <S.StyledLink to="/clients">Clientes</S.StyledLink>
      </S.Navbar>
    </>
  );
};

export default Header;
