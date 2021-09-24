import React from "react";
import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
  TextButtonCriar,
  ButtonSubmitCriar
} from "./styles";
import Header from "../../components/Header";

function Signin() {
  return (
    <KeyboardView>
      <Header />
      <Container>
        <Title>Amamente e Ame</Title>
        <Input 
        placeholderTextColor="#fff" 
        placeholder="E-mail" 
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="Senha"
          secureTextEntry
        />
        <ButtonSubmit>
          <TextButton>
              Entrar
          </TextButton>
          
        </ButtonSubmit>
        <ButtonSubmitCriar>
        <TextButtonCriar>
              Criar Conta
          </TextButtonCriar>
        </ButtonSubmitCriar>
      </Container>
    </KeyboardView>
  );
}

export default Signin;
