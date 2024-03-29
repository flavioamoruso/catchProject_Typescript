enum Variant {
  Like = "like",
  Ignore = "ignore",
  SuperLike = "superLike",
}

declare module "styled-components";

export interface DefaultThemes {
  colors: {
    [key: string]: string;
  };
  fontFamily: string;
  variants: {
    [key in Variant]: {
      main: string;
      contrast: string;
    };
  };
}

type VariantType = `${Variant}`;

const emptyVariant = {
  main: "",
  contrast: "",
};

const defaultThemes: DefaultThemes = {
  colors: {},
  fontFamily: "",
  variants: {
    [Variant.Like]: emptyVariant,
    [Variant.Ignore]: emptyVariant,
    [Variant.SuperLike]: emptyVariant,
  },
};

defaultThemes.colors.blue = "#D7DEDC";
defaultThemes.colors.green = "#2E933C";
defaultThemes.colors.red = "#F02D3A";
defaultThemes.colors.white = "#D7DEDC";
defaultThemes.colors.black = "#092327";

defaultThemes.fontFamily = "Anton, sans-serif";

defaultThemes.variants.like = {
  main: defaultThemes.colors.green,
  contrast: defaultThemes.colors.white,
};

defaultThemes.variants.ignore = {
  main: defaultThemes.colors.red,
  contrast: defaultThemes.colors.white,
};

defaultThemes.variants.ignore = {
  main: defaultThemes.colors.blue,
  contrast: defaultThemes.colors.white,
};

export { defaultThemes };
export type { VariantType };
