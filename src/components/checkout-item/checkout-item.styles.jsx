/**
* Created by PHP Storm
* Author: Don Cameron
* File Type: JSX
* Date: 7/28/2022
* Time: 3:07 PM
*/
import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`

export const Image = styled.img`
   width: 100%;
   height: 100%;
`

export const Name = styled.span`
  width: 23%;
`
export const Price = styled.span`
  width: 23%;
`

export const Quantity = styled.div`
  width: 23%;
  display: flex;
`
export const Value = styled.span`
margin: 0 10px;
`
  // button{
  //   border: none;
  //   background-color: white;
  // }

/*
  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }*/