import IconContainer from "@/components/shared/IconContainer";
import React from "react";
import {
  CSSIcon,
  GraphQLIcon,
  HTMLIcon,
  JestIcon,
  MUIIcon,
  NextIcon,
  ReactIcon,
  ReactQueryIcon,
  ReduxIcon,
  StoryBookIcon,
  WebPackIcon,
} from "@/components/icons";
import Grid from "@/components/shared/Grid";
import { rampartOne, roboto } from "@/fonts/fonts";
import Container from "@/components/shared/Container";

export default function FrontEnd() {
  return (
    <Container>
      <h3
        className={`${roboto.className} ${rampartOne.className}`}
        style={{ fontSize: "xx-large" }}
      >
        Front End
      </h3>
      <Grid>
        <IconContainer icon={ReactIcon} lable="ReactJS" />
        <IconContainer icon={NextIcon} lable="NextJS" />
        <IconContainer icon={HTMLIcon} lable="HTML" />
        <IconContainer icon={CSSIcon} lable="CSS" />
        <IconContainer icon={ReduxIcon} lable="Redux" />
        <IconContainer icon={ReactQueryIcon} lable="Query" />
        <IconContainer icon={GraphQLIcon} lable="GraphQL" />
        <IconContainer icon={MUIIcon} lable="MUi" />
        <IconContainer icon={StoryBookIcon} lable="StoryBook" />
        <IconContainer icon={JestIcon} lable="Jest" />
        <IconContainer icon={WebPackIcon} lable="Webpack" />
      </Grid>
    </Container>
  );
}
