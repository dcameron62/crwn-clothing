/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: JSX
 * Date: 7/30/2022
 * Time: 7:32 AM
 */

import styled from "styled-components";
import {Link} from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`
export const Title = styled(Link)`
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
`
export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
`