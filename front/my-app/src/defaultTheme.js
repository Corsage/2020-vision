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
            fontSize: '4rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '3rem',
        },
        h3: {
            fontSize: '2rem'
        },
        h4: {
            fontSize: '1rem'
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
            main: '#2C65FF'
        },
        secondary: {
            main: '#000000'
        },
        background: {
            default: '#e9e9ed',
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