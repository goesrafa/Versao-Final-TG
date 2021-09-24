import React from "react";
import styled from "styled-components/native";

export const KeyboardView = styled.KeyboardAvoidingView `
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #9932CC;
`

export const Container = styled.View `
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    width: 90%;
`

export const Title = styled.Text`
    color: #fff;
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 30px;

`

export const Input = styled.TextInput`
    border: 2px solid #fff;
    margin-bottom: 30px;
    padding: 15px 20px;
    color: #fff;
    font-size: 20px;
    border-radius: 9px;
    width: 90%;
`

export const ButtonSubmit = styled.TouchableOpacity`
    background-color:#BA55D3;
    border-radius: 9px;
    width: 90%;
    padding: 20px;
    align-items: center;


`
 
export const TextButton = styled.Text `
    color: #fff;
    font-size: 20px;
    font-weight: bold;
`

export const TextButtonCriar = styled.Text`
color: #fff;
font-size: 20px;
font-weight: bold;
`

export const ButtonSubmitCriar = styled.TouchableOpacity`
    background-color:#BA55D3;
    border-radius: 9px;
    width: 90%;
    padding: 20px;
    align-items: center;
`