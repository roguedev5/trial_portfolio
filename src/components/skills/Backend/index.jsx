import {
  AWSIcon,
  DockerIcon,
  ExpressIcon,
  GrpcIcon,
  JWTIcon,
  JenkinsIcon,
  LinuxIcon,
  MongodbIcon,
  MysqlIcon,
  NestIcon,
  NginxIcon,
  Nodeicon,
  PostgresIcon,
  PostmanIcon,
  RedisIcon,
  SequelizeIcon,
  SwaggerIcon,
} from "@/components/icons";
import IconContainer from "@/components/shared/IconContainer";
import Grid from "@/components/shared/Grid";
import { rampartOne, roboto } from "@/fonts/fonts";
import Container from "@/components/shared/Container";

export default function Backend() {
  return (
    <Container>
      <h3
        className={`${roboto.className} ${rampartOne.className}`}
        style={{ fontSize: "xx-large" }}
      >
        Back End
      </h3>
      <Grid>
        <IconContainer icon={Nodeicon} lable="NodeJs" />
        <IconContainer icon={ExpressIcon} lable="ExpressJs" />
        <IconContainer icon={NestIcon} lable="NestJs" />
        <IconContainer icon={PostgresIcon} lable="PostgreSQL" />
        <IconContainer icon={MysqlIcon} lable="MySQL" />
        <IconContainer icon={MongodbIcon} lable="MongoDB" />
        <IconContainer icon={RedisIcon} lable="Redis" />
        <IconContainer icon={JWTIcon} lable="JWT" />
        <IconContainer icon={AWSIcon} lable="AWS" />
        <IconContainer icon={DockerIcon} lable="Docker" />
        <IconContainer icon={JenkinsIcon} lable="Jenkins" />
        <IconContainer icon={LinuxIcon} lable="Linux" />
        <IconContainer icon={NginxIcon} lable="Nginx" />
        <IconContainer icon={PostmanIcon} lable="Postman" />
        <IconContainer icon={SwaggerIcon} lable="Swagger" />
        <IconContainer icon={GrpcIcon} lable="gRPC" />
        <IconContainer icon={SequelizeIcon} lable="Sequelize" />
      </Grid>
    </Container>
  );
}
