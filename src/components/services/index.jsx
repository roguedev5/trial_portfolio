import React from "react";
import Container from "../shared/Container";
import { rampartOne, roboto } from "@/fonts/fonts";

export default function Services() {
  return (
    <Container>
      <div className={`${roboto.className} ${rampartOne.className}`}>
        <h2>Services</h2>
      </div>
    </Container>
  );
}
