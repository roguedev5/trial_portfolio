import { Rampart_One, Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const rampartOne = Rampart_One({ subsets: ["latin"], weight: "400" });
