import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { COLORS } from "../../constants";

interface IBackground {
  children: ReactNode;
}

export default function Background({ children }: IBackground) {
  return (
    <LinearGradient
      style={styles.container}
      colors={[COLORS.secondary80, COLORS.secondary100]}
    >
      {children}
    </LinearGradient>
  );
}
