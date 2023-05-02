import { Box, makeStyles } from '@material-ui/core'

import Header from '../components/Header'
import Footer from '../components/Footer'
import theme from '../theme'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(6, 0, 6)
    }
}))

const Default = ({ children }) => {
    const classes = useStyles()
    
    return (
        <>
            <Header />
            <Box className={classes.container}>
                {children}
            </Box>
            <Footer />
        </>
    )
}

export default Default