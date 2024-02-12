import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: "transparent",
          border: "2px solid white",
          borderRadius: "50%",
          fontSize: "28px",
          "&.Mui-active": {
            color: "#bfe2fd",
            fontSize: "28px",
            text: {
              fill: "black",
            },
          },
          "&.Mui-completed": {
            color: "white",
            border: "2px solid white",
            borderRadius: "50%",
            fontSize: "28px",
            
          },
        },
        text: {
          fill: "white",
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          color: "#d6d9e6",
          fontSize: "12px",
          "&.Mui-active": {
            color: "#d6d9e6",
          },
          "&.Mui-completed": {
            color: "#d6d9e6",
          },
        },
        labelContainer: {
          color: "white",
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: "transparent",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100px",
          textTransform: "none",
        },
        text: {
          color: "#9699ab",
          "&:hover": {
            backgroundColor: "transparent",
            color: "#02295a",
          },
        },
        contained: {
          backgroundColor: "#02295a",
          "&:hover": {
            backgroundColor: "#0048a0",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          paddingTop: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        switchBase: {
          "&.Mui-checked": {
            transform: "translateX(20px)",
          },
          transform: "translateX(6px)",
        },
        track: {
          width: "40px",
          height: "20px",
          borderRadius: "10px",
        },
        thumb: {
          width: "14px",
          height: "14px",
          color: "white",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#d6d9e6",
          "&:hover": {
            borderColor: "#473dff",
          },
        },
      },
    },
  },
});

  export default theme