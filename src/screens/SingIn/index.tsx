import React from "react";
import { Container, Thumb, Content, Title, Subtitle } from "./styles";
import { SingInButton } from "../../components";
import { Images } from "../../constants";

export default function SingIn() {
  return (
    <Container>
      <Thumb source={Images.Ilustration} resizeMode="stretch" />
      <Content>
        <Title>
          Conecte-se{`\n`}e organize suas{`\n`}jogatinas
        </Title>
        <Subtitle>
          Crie grupos para jogar seus games{`\n`}favoritos com seus amigos
        </Subtitle>
        <SingInButton title="Entrar com o Discord" activeOpacity={0.7} />
      </Content>
    </Container>
  );
}
