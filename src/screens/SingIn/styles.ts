import styled from "styled-components/native";
import { COLORS } from "../../constants";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FONTS } from "../../constants/theme";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.secondary90};
`;

export const Thumb = styled.Image`
  width: ${wp(100)}px;
  height: ${hp(54)}px;
`;
export const Content = styled.View`
  margin-top: -${hp(6)}px;
`;
export const Title = styled.Text`
  color: ${COLORS.heading};
  text-align: center;
  font-size: ${hp(6)}px;
  margin-bottom: ${hp(2.25)}px;
  font-family: ${FONTS.title700};
  line-height: ${hp(6)}px;
`;
export const Subtitle = styled.Text`
  color: ${COLORS.heading};
  font-size: ${hp(2.28)}px;
  text-align: center;
  margin-bottom: ${hp(9.7)}px;
  font-family: ${FONTS.title500};
  line-height: ${hp(3.14)}px;
`;
