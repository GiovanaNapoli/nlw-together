import styled from "styled-components/native";
import { COLORS } from "../../constants";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const Container = styled.TouchableOpacity`
  width: ${wp(75)}px;
  height: ${hp(8)}px;
  background: ${COLORS.primary};
  border-radius: ${wp(2.1)}px;
  flex-direction: row;
  align-items: center;
`;
export const IconWrapper = styled.View`
  width: ${wp(15)}px;
  height: ${hp(8)}px;
  align-items: center;
  justify-content: center;
  border-right-width: ${wp(1)}px;
  border-color: ${COLORS.line};
`;
export const Icon = styled.Image`

`;
export const Title = styled.Text`
  flex: 1;
  color: ${COLORS.heading};
  font-size: ${hp(2.25)}px;
  text-align: center;
`;
