import { createTheme } from "@material-ui/core"

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#FFFFFF'
        },
        background: {
            default: 'rgb(242, 244, 245)',
            white: 'white'
        }
    }
})

export default theme