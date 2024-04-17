import React from "react";

import {Container} from "./styles";
import {LogoIcon, ProfileIcon} from "@assets/icons";

export const Header = () => {
  return (
    <Container>
      <LogoIcon />

      <ProfileIcon width={42} height={42}/>
    </Container>
  );
};
