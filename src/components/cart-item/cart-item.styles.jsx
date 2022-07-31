/**
 * Created by PHP Storm
 * Author: Don Cameron
 * File Type: SCSS
 * Date: 7/28/2022
 * Time: 10:49 AM
 */
import styled from "styled-components"

export const CartItemContainer = styled.div`
width: 100%;
display: flex;
height: 80px;
margin-bottom: 15px;
`

export const Image = styled.img`
width: 30%;    
`

export const ItemDetails = styled.div`
width: 70%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 10px 20px;        
`

export const Name = styled.div`
font-size: 16px;
`