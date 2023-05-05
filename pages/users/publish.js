import React, { useState } from 'react'
import { Formik } from 'formik'
import { object, string, number, date, InferType, array } from 'yup';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Input,
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
      },

      inputLabel: {
        fontWeight: 400,
        color: theme.palette.primary.main
      }
    }
  )
})

const validationSchema = object({
  title:
    string()
      .required('Campo obrigatório')
      .min(6, 'Escreva um titulo maior')
      .max(100, 'Titulo muito grande, deixe um pouco para descrição.'),
  category:
    string()
      .required('Campo obrigatório'),
  description:
    string()
      .required('Campo Obrigatório')
      .min(50, 'Escreva uma descrição detalhada, com pelo menos 50 caracteres'),
  price:
    number()
      .required('Campo Obrigatório'),
  email:
    string()
      .email('Digite um e-mail válido')
      .required('Campo Obrigatório'),
  name:
    string()
      .required('Campo Obrigatório'),
  phone:
    number()
      .required('Campo Obrigatório'),
  files:
    array()
      .min(2, 'Insira pelo menos 2 fotos')
      .required('Campo Obrigatório')
});

const Publish = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Formik
        initialValues={{
          title: '',
          category: '',
          description: '',
          price: '',
          email: '',
          name: '',
          phone: '',
          files: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('ok enviou o form', values)
        }}
      >
        {
          ({
            touched,
            values,
            errors,
            handleChange,
            handleSubmit,
            setFieldValue
          }) => {

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

                setFieldValue('files', [
                  ...values.files,
                  ...newFiles
                ])
              }
            })

            const handleRemoveFile = (fileName) => {
              const newFileState = values.files.filter(file => file.name !== fileName)
              setFieldValue('files', newFileState)
            }

            return (
              <form onSubmit={handleSubmit}>
                <Container maxWidth='sm'>
                  <Typography component='h1' variant='h2' align='center' color='textPrimary'>
                    Publicar Anúncio
                  </Typography>
                  <Typography component='h5' variant='h5' align='center' color='textPrimary' className={classes.espaco}>
                    Quanto mais detalhado, melhor!
                  </Typography>
                </Container>

                <Container maxWidth='md'>
                  <Box className={classes.box}>
                    <FormControl error={errors.title && touched.title} fullWidth>
                      <InputLabel className={classes.inputLabel}>Título do Anúncio</InputLabel>
                      <Input
                        name='title'
                        value={values.title}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.title && touched.title ? errors.title : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl error={errors.category && touched.category} fullWidth>
                      <InputLabel className={classes.inputLabel}>Categoria</InputLabel>
                      <Select
                        name='category'
                        value={values.category}
                        fullWidth
                        onChange={handleChange}
                      >
                        <MenuItem value='Bebê e Crianças'>Bebê e Crianças</MenuItem>
                        <MenuItem value='Agricultura'>Agricultura</MenuItem>
                        <MenuItem value='Moda'>Moda</MenuItem>
                        <MenuItem value='Carros, Motos e Barcos'>Carros, Motos e Barcos</MenuItem>
                        <MenuItem value='Serviços'>Serviços</MenuItem>
                        <MenuItem value='Lazer'>Lazer</MenuItem>
                        <MenuItem value='Animais'>Animais</MenuItem>
                        <MenuItem value='Móveis, Casa e Jardim'>Móveis, Casa e Jardim</MenuItem>
                        <MenuItem value='Imóveis'>Imóveis</MenuItem>
                        <MenuItem value='Equipamentos e Ferramentas'>Equipamentos e Ferramentas</MenuItem>
                        <MenuItem value='Celulares e Tablets'>Celulares e Tablets</MenuItem>
                        <MenuItem value='Esporte'>Esporte</MenuItem>
                        <MenuItem value='Tecnologia'>Tecnologia</MenuItem>
                        <MenuItem value='Empregos'>Empregos</MenuItem>
                        <MenuItem value='Outros'>Outros</MenuItem>
                      </Select>
                      <FormHelperText>
                        {errors.category && touched.category ? errors.category : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>

                </Container>

                <Container maxWidth='md'>
                  <Box className={classes.box}>
                    <Typography component='h6' variant='h6' color={errors.files && touched.files ? `error` : `textPrimary`}>
                      Imagens
                    </Typography>
                    <Typography component='div' variant='body2' color={errors.files && touched.files ? `error` : `textPrimary`}>
                      A primeira imagem é a foto principal do seu anúncio.
                    </Typography>
                    {
                      errors.files && touched.files
                        ? <Typography variant='body2' color='error' gutterBottom>{errors.files}</Typography>
                        : null
                    }
                    <Box className={classes.thumbsContainer}>

                      <Box className={classes.dropzone} {...getRootProps()}>
                        <input name='files' {...getInputProps()} />
                        <Typography variant='body2' color={errors.files && touched.files ? `error` : `textPrimary`}>
                          Clique para adicionar ou arraste a imagem para upload.
                        </Typography>
                      </Box>


                      {
                        values.files.map((file, index) => {
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
                                <IconButton color='secondary' onClick={() => handleRemoveFile(file.name)}>
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
                    <FormControl error={errors.description && touched.description} fullWidth>
                      <InputLabel className={classes.inputLabel}>Escreva os detalhes do produto que está vendendo.</InputLabel>
                      <Input
                        name='description'
                        value={values.description}
                        multiline
                        minRows={6}
                        variant='outlined'
                        onChange={handleChange}
                        className={classes.espaco}
                      />
                      <FormHelperText>
                        {errors.description && touched.description ? errors.description : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth='md'>
                  <Box className={classes.box}>
                    <FormControl error={errors.price && touched.price} fullWidth>
                      <InputLabel className={classes.inputLabel}>Preço de venda</InputLabel>
                      <Input
                        name='price'
                        value={values.price}
                        variant='outlined'
                        onChange={handleChange}
                        startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
                        className={classes.espaco}
                      />
                      <FormHelperText>
                        {errors.price && touched.price ? errors.price : null}
                      </FormHelperText>
                    </FormControl>
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
                    <FormControl error={errors.name && touched.name} fullWidth>
                      <InputLabel className={classes.inputLabel}>Nome</InputLabel>
                      <Input
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.name && touched.name ? errors.name : null}
                      </FormHelperText>
                    </FormControl>
                    <FormControl error={errors.email && touched.email} fullWidth>
                      <InputLabel className={classes.inputLabel}>E-mail</InputLabel>
                      <Input
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.email && touched.email ? errors.email : null}
                      </FormHelperText>
                    </FormControl>
                    <FormControl error={errors.phone && touched.phone} fullWidth>
                      <InputLabel className={classes.inputLabel}>Telefone</InputLabel>
                      <Input
                        name='phone'
                        value={values.phone}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.phone && touched.phone ? errors.phone : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>

                </Container>

                <Container maxWidth='md' className={classes.espaco}>
                  <Box align='right'>
                    <Button type='submit' variant='contained' color='primary'>Publicar Anúncio</Button>
                  </Box>
                </Container>
              </form>
            )
          }
        }
      </Formik>
    </TemplateDefault>
  )
}

export default Publish