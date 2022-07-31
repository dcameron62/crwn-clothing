/**
* Created by PHP Storm
* Author: Don Cameron
* File Type: SCSS
* Date: 7/30/2022
* Time: 8:56 AM
*/

import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;

`

export const CategoryTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`