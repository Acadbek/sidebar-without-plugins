import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
color: ${({ active }) => active ? 'blue' : 'black'}
` 