import satori from "satori";
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const FONT_PATH = join(process.cwd(), "src/assets/fonts/Switzer-Medium.ttf");

const WIDTH = 1200;
const HEIGHT = 630;
const BG = "#161616"; // from css var(--background)
const FG = "#ffffff"; // from css var(--foreground)
const FONT_SIZE = 96; // Default site title
const FONT_SIZE_RATIO_DEFAULT = 1.15; // Multiplies FONT_SIZE for default og image
const FONT_SIZE_RATIO_NAME = 2; // Divides FONT_SIZE for name underneath content titles

export async function generateOgImage(title?: string): Promise<Buffer> {
  const fontData = readFileSync(FONT_PATH);

  const children = [];

  if (title) {
    children.push({
      type: "div",
      props: {
        style: {
          fontSize: FONT_SIZE,
          fontWeight: 500,
          color: FG,
          lineHeight: 1.15,
          letterSpacing: "-0.03em",
        },
        children: title,
      },
    });
  }

  children.push({
    type: "div",
    props: {
      style: {
        fontSize: title
          ? FONT_SIZE / FONT_SIZE_RATIO_NAME
          : FONT_SIZE * FONT_SIZE_RATIO_DEFAULT,
        fontWeight: 500,
        color: FG,
        letterSpacing: "-0.03em",
      },
      children: "Max Fung",
    },
  });

  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: title ? "40px" : "0",
          padding: "80px",
          backgroundColor: BG,
          fontFamily: "Switzer",
        },
        children,
      },
    },
    {
      width: WIDTH,
      height: HEIGHT,
      fonts: [
        {
          name: "Switzer",
          data: fontData,
          weight: 500,
          style: "normal",
        },
      ],
    },
  );

  return sharp(Buffer.from(svg)).png().toBuffer();
}
