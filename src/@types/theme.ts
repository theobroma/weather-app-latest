// https://stackoverflow.com/questions/40275832/typescript-has-unions-so-are-enums-redundant
export enum THEME_COLORS {
  DARK = 'dark',
  LIGHT = 'light',
  DEEP_PURPLE_AMBER = 'deepPurpleAmber',
  PINK_BLUE_GREY_THEME = 'pinkBlueGrey',
}

export type ThemeColorsType =
  | 'light'
  | 'dark'
  | 'deepPurpleAmber'
  | 'pinkBlueGrey';
