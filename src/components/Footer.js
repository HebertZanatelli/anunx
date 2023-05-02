import { Box, Container, Grid, Typography, makeStyles } from "@material-ui/core"
import Link from "next/link"


const useStyles = makeStyles ((theme) => ({
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]:{
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        }
    },
    txtLink: {
        textDecoration: 'none'
    }
   
}))
const Footer = () => {

    const classes = useStyles()
    return(
        <Container maxWidth='lg'  component='footer' className={classes.footer}>
            <Grid container spacing={3} justifyContent="space-around">
                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                        <Link href='#' passHref className={classes.txtLink}><Typography color="textSecondary" variant="subtitle1"> Ajuda e Contato  </Typography></Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                        <Link href='#' passHref className={classes.txtLink}><Typography color="textSecondary" variant="subtitle1"> Dicas de Segurança </Typography></Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                        <Link href='#' passHref className={classes.txtLink}><Typography color="textSecondary" variant="subtitle1"> Anunciar e Vender </Typography></Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Box textAlign='center'>
                        <Link href='#' passHref className={classes.txtLink}><Typography color="textSecondary" variant="subtitle1"> Plano profissional </Typography></Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer