import React from "react";
import { Container, Title, Icon, IconWrapper } from "./styles";
import { Images } from "../../constants";
import { TouchableOpacityProps } from "react-native";

interface IButtonSingIn extends TouchableOpacityProps {
  title: string;
}

export default function SingInButton({ title, ...rest }: IButtonSingIn) {
  return (
    <Container {...rest}>
      <IconWrapper>
        <Icon source={Images.DiscordPng} />
      </IconWrapper>
      <Title>{title}</Title>
    </Container>
  );
}
