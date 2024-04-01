import { JavascriptIcon, PythonIcon, TypescriptIcon } from "@/components/icons";
import IconContainer from "@/components/shared/IconContainer";
import Grid from "@/components/shared/Grid";
import { rampartOne, roboto } from "@/fonts/fonts";
import Container from "@/components/shared/Container";

export default function ProgrammingLanguage() {
  return (
    <Container>
      <h3
        className={`${roboto.className} ${rampartOne.className}`}
        style={{ fontSize: "xx-large" }}
      >
        Programming Languages
      </h3>
      <Grid>
        <IconContainer icon={JavascriptIcon} lable="JavaScript" />
        <IconContainer icon={TypescriptIcon} lable="TypeScript" />
        <IconContainer icon={PythonIcon} lable="Python" />
      </Grid>
    </Container>
  );
}
