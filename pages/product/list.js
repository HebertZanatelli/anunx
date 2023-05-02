import {
    Box,
    Container,
    Grid,
    IconButton,
    InputBase,
    Paper,
    Typography,
    makeStyles
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'



const useStyles = makeStyles((theme) => ({
    searchBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(0, 2),
        marginBottom: 30,
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    espaco: {
        marginTop: theme.spacing(2)
    }

}))

const List = () => {
    const classes = useStyles()
    return (
        <TemplateDefault>
            <Container maxWidth='lg'>
                <Paper className={classes.searchBox}>
                    <InputBase
                        placeholder='Ex: Produto buscado'
                        fullWidth
                    />
                    <IconButton type='submit' aria-label='search'>
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <Box className={classes.box}>
                    <Typography component='h6' variant='h6'>Anúncios</Typography>
                    <Typography component='span' variant='subtitle2'>ENCONTRADOS 200 ANÚNCIOS</Typography>
                    <Grid container spacing={4} className={classes.espaco}>
                        <Grid item xs={12} sm={6} md={4} >
                            <Card
                                image={'https://source.unsplash.com/random?a'}
                                title={'Produto 1'}
                                subtitle={'R$ 60,00'}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <Card
                                image={'https://source.unsplash.com/random?b'}
                                title={'Produto 2'}
                                subtitle={'R$ 60,00'}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <Card
                                image={'https://source.unsplash.com/random?c'}
                                title={'Produto 3'}
                                subtitle={'R$ 60,00'}

                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </TemplateDefault>
    )
}

export default List