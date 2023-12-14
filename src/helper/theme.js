import { createTheme } from '@mui/material/styles';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

// THIS OBJECT SHOULD BE SIMILAR TO ../tailwind.config.js
const themeConstants = {
  paper: '#fff',
  primary: {
    dark: fullConfig.theme.colors.primary[900],
    main: fullConfig.theme.colors.primary[500],
    light: fullConfig.theme.colors.primary[25],
  },
  secondary: {
    main: fullConfig.theme.colors.secondary[500],
  },
  white: {
    main: '#FFF',
  },
  tertiary: {
    25: fullConfig.theme.colors.tertiary[25],
    main: fullConfig.theme.colors.tertiary[700],
    light: fullConfig.theme.colors.tertiary[400],
  },
  warning: {
    main: fullConfig.theme.colors.warning[500],
  },
  info: {
    main: fullConfig.theme.colors.info[500],
  },
  error: {
    main: fullConfig.theme.colors.error[500],
  },
  success: {
    main: fullConfig.theme.colors.success[500],
  },

  // default: {
  //   main: fullConfig.theme.colors.jet[100],
  //   contrastText: fullConfig.theme.colors.jet[700],
  // },
  fg: {
    main: fullConfig.theme.colors.tertiary[600],
    dark: '#fff',
    black: fullConfig.theme.colors.black
  },
  linear: {
    main: '#F66D22',
  },

  breakpoints: {
    xs: 0,
    mb: 350,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1528,
    "3xl": 1920,
    "4xl": 2560,
    "5xl": 3840
  },
};

const themeComponent = {
  MuiContainer: {
    styleOverrides: {
      root: {
        maxWidth: '1440px !important',
      },
      maxWidthXl: {
        // // maxWidth: "1440px",
        width: '100%',

        // lg:w-[85%] 2xl:w-[75%] max-w-[1440px]
        '@media (min-width: 1024px)': {
          width: '90% !important',
          paddingLeft: "0px !important",
          paddingRight: "0px !important",
        },
        '@media (min-width: 1528px)': {
          width: '85%  !important',
        },

        // width: {xs: "100%",}
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: ({ ownerState }) => ({
        padding: '0px 20px',
        fontSize: '1rem',
        borderRadius: '12px',
        height: '44px',
        textTransform: "capitalize",

        ...(ownerState.variant === 'contained' && {
          boxShadow: "none",
        }),
        ...(ownerState.variant === 'contained' &&
          ownerState.color === 'primary' && {
          backgroundColor: themeConstants.primary,
          color: themeConstants.fg.dark,
        }),
      }),
    },
  },
};
const headingLineHeight = 1.1
const typography = {
  fontFamily: 'var(--netflix-inter)',
  h1: {
    fontSize: 34,
    lineHeight: headingLineHeight,
    fontWeight: 700,
  },
  h2: {
    fontSize: 28,
    lineHeight: headingLineHeight,
    fontWeight: 700,
  },
  h3: {
    fontSize: 24,
    lineHeight: headingLineHeight,
    fontWeight: 700,
  },
  h4: {
    fontSize: 22,
    lineHeight: headingLineHeight,
    fontWeight: 700,
  },
  h5: {
    fontSize: 17,
    lineHeight: headingLineHeight,
    fontWeight: 600,
  },
  h6: {
    fontSize: 15,
    lineHeight: headingLineHeight,
    fontWeight: 600,
  },
  body1: {
    fontSize: '1rem',
  },
  body2: {
    fontSize: '0.9rem',
  },
  subtitle1: {
    fontSize: '0.875rem',
  },
  subtitle2: {
    fontSize: '0.8rem',
  },
}

const theme = createTheme({
  typography,
  palette: {
    mode: 'light',
    primary: themeConstants.primary,
    white: themeConstants.white,
    secondary: themeConstants.secondary,
    tertiary: themeConstants.tertiary,
    info: themeConstants.info,
    success: themeConstants.success,
    error: themeConstants.error,
    warning: themeConstants.warning,
    linear: themeConstants.linear,
    background: { paper: themeConstants.paper },
    text: {
      primary: themeConstants.fg.main,
      secondary: themeConstants.fg.dark,
      dark: themeConstants.fg.black
    },

  },
  breakpoints: {
    values: themeConstants.breakpoints,
  },
  components: {
    ...themeComponent,
  },
});

export { theme };
