import React from "react";
import { Container, Thumb, Content, Title, Subtitle } from "./styles";
import { SingInButton } from "../../components";
import { Images } from "../../constants";
import { StatusBar } from "react-native";

export default function SingIn() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Thumb source={Images.Ilustration} resizeMode="stretch" />
      <Content>
        <Title>
          Organize {`\n`} suas jogatinas {`\n`} facilmente
        </Title>
        <Subtitle>
          Crie grupos para jogar seus games {`\n`} favoritos com seus amigos
        </Subtitle>
        <SingInButton title="Entrar com o Discord" activeOpacity={0.7} />
      </Content>
    </Container>
  );
}
