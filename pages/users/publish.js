import {
    Box,
    Button,
    Container,
    Select,
    TextField,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => {
    return (
        {
            container: {
                padding: theme.spacing(8, 0, 6)
            },
            box: {
                backgroundColor: theme.palette.background.white,
                padding: theme.spacing(3),
                marginTop: theme.spacing(3),
            },
            espaco: {
                marginTop: theme.spacing(2)
            }
        }
    )
})

const Publish = () => {
    const classes = useStyles()
    return (
        <TemplateDefault>
            <Container maxWidth='sm' className={classes.container}>
                <Typography component='h1' variant='h2' align='center' color='textPrimary'>
                    Publicar Anúncio
                </Typography>
                <Typography component='h5' variant='h5' align='center' color='textPrimary'>
                    Quanto mais detalhado, melhor!
                </Typography>
            </Container>

            <Container maxWidth='md'>
                <Box className={classes.box}>
                    <Typography component='h6' variant='h6' color='textPrimary'>
                        Título do Anúncio
                    </Typography>
                    <TextField
                        label='ex.: Biclicleta Aro 18'
                        size='small'
                        fullWidth
                    />
                    <Typography component='h6' variant='h6' color='textPrimary' className={classes.espaco}>
                        Categoria
                    </Typography>
                    <Select
                        native
                        value=''
                        fullWidth
                        onChange={() => { }}
                        inputProps={{
                            name: 'age'
                        }}
                    >
                        <option value=''>Selecione</option>
                        <option value={1}>Bebê e Crianças</option>
                        <option value={1}>Agricultura</option>
                        <option value={1}>Moda</option>
                        <option value={1}>Carros, Motos e Barcos</option>
                        <option value={1}>Serviços</option>
                        <option value={1}>Lazer</option>
                        <option value={1}>Animais</option>
                        <option value={1}>Móveis, Casa e Jardim</option>
                        <option value={1}>Imóveis</option>
                        <option value={1}>Equipamentos e Ferramentas</option>
                        <option value={1}>Celulares e Tablets</option>
                        <option value={1}>Esporte</option>
                        <option value={1}>Tecnologia</option>
                        <option value={1}>Empregos</option>
                        <option value={1}>Outros</option>
                    </Select>

                </Box>

            </Container>

            <Container maxWidth='md'>
                <Box className={classes.box}>
                    <Typography component='h6' variant='h6' color='textPrimary'>
                        Imagens
                    </Typography>
                    <Typography component='div' variant='body2' color='textPrimary'>
                        A primeira imagem é a foto principal do seu anúncio.
                    </Typography>
                </Box>
            </Container>

            <Container maxWidth='md'>
                <Box className={classes.box}>
                    <Typography component='h6' variant='h6' color='textPrimary'>
                        Descrição
                    </Typography>
                    <Typography component='div' variant='body2' color='textPrimary'>
                        Escreva os detalhes do produto que está vendendo.
                    </Typography>
                    <TextField
                        multiline
                        minRows={6}
                        variant='outlined'
                        fullWidth
                        className={classes.espaco}
                    />
                </Box>
            </Container>

            <Container maxWidth='md'>
                <Box className={classes.box}>
                    <Typography component='h6' variant='h6' color='textPrimary'>
                        Dados de Contato
                    </Typography>
                    <Typography component='div' variant='body2' color='textPrimary'>
                        Escreva os detalhes do produto que está vendendo.
                    </Typography>
                    <TextField
                        label='Nome'
                        size='small'
                        variant='outlined'
                        fullWidth
                        className={classes.espaco}
                    />
                    <TextField
                        label='E-mail'
                        size='small'
                        variant='outlined'
                        fullWidth
                        className={classes.espaco}
                    />
                    <TextField
                        label='Telefone'
                        size='small'
                        variant='outlined'
                        fullWidth
                        className={classes.espaco}
                    />
                </Box>

            </Container>

            <Container maxWidth='md' className={classes.espaco}>
                <Box align='right'>
                    <Button variant='contained' color='primary'>Publicar Anúncio</Button>
                </Box>
            </Container>

        </TemplateDefault>

    )
}

export default Publish