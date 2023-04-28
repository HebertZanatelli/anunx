import React, { useState } from 'react'
import {
    Box,
    Button,
    Container,
    IconButton,
    Select,
    TextField,
    Typography
} from '@material-ui/core'

import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/core/styles'
import { DeleteForever } from '@material-ui/icons'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles((theme) => {
    return (
        {
            mask: {},
            mainImage: {},
            container: {
                padding: theme.spacing(8, 0, 6)
            },
            box: {
                backgroundColor: theme.palette.background.white,
                padding: theme.spacing(3),
                marginTop: theme.spacing(3),
            },
            thumbsContainer: {
                display: 'flex',
                marginTop: 15,
                flexWrap: 'wrap',

            },
            dropzone: {
                width: 200,
                height: 150,
                border: '2px dashed black',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                padding: '10px',
                marginRight: 15,

                '&:hover': {
                    cursor: 'pointer'
                }
            },
            thumb: {
                width: 200,
                height: 150,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                position: 'relative',
                margin: '0 15px 15px 0',

                '& $mainImage': {
                    padding: '4px 10px',
                    backgroundColor: 'blue',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                },

                '&:hover $mask': {
                    display: 'flex',
                },

                '& $mask': {
                    display: 'none',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    height: '100%'

                }

            },
            espaco: {
                marginTop: theme.spacing(2)
            }
        }
    )
})

const Publish = () => {
    const classes = useStyles()
    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': [],
            'image/jpeg': [],
            'image/png': []
        },
        onDrop: (acceptedFile) => {
            const newFiles = acceptedFile.map(file => {
                return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                })
            })

            setFiles([
                ...files,
                ...newFiles
            ])
        }
    })

    const handleRemoveFile = (fileName) => {
        const newFileState = files.filter(file => file.name !== fileName)
        setFiles(newFileState)
    }
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
                    <Box className={classes.thumbsContainer}>

                        <Box className={classes.dropzone} {...getRootProps()}>
                            <input {...getInputProps()} />
                            <Typography variant='body2'>
                                Clique para adicionar ou arraste a imagem para upload.
                            </Typography>
                        </Box>
                        {
                            files.map((file, index) => {
                                return (

                                    <Box
                                        key={file.name}
                                        className={classes.thumb}
                                        style={{ backgroundImage: `url(${file.preview})` }}
                                    >

                                        {
                                            index === 0 ?
                                                <Box className={classes.mainImage}>
                                                    <Typography variant='body2' color='secondary'>
                                                        Principal
                                                    </Typography>
                                                </Box>
                                                : null
                                        }

                                        <Box className={classes.mask}>
                                            <IconButton color='secondary' onClick={ () => handleRemoveFile(file.name)}>
                                                <DeleteForever fontSize='large' />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Box>
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