export default {
    typography: {
        fontFamily: "-apple-system, BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
        fontSize: 16,
        htmlFontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,

        h1: {
            fontSize: '3rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '2rem',
        },
        h3: {
            fontSize: '1.5rem'
        },
        h4: {
            fontSize: '1rem',
            fontWeight: 700
        },
        h5: {
            fontSize: '0.625rem'
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 300,
        },
    },
    palette: {
        primary: {
            main: '#123c69'
        },
        secondary: {
            main: '#ac3b61'
        },
        background: {
            default: '#dcdcdc',
            paper: '#f6f6f6'
        }
    },
    overrides: {
        // Style sheet name ⚛️
        MuiTextField: {
            // Name of the rule
            root: {
                // Some CSS
                color: '#939393',
                fontWeight: 300,
            },
        },
    },
    shape: {
        borderRadius: 10,
    }
}