import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  display: flex;
  justify-content: left;
  background: #000;
  padding: 0 50px;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 20px 10px;
  padding: 10px;

  &:hover {
    color: #f5b833;
  }
`;
