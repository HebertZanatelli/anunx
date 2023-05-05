import { Formik } from 'formik'
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from '@material-ui/core'


import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from './formValues'
import useStyles from './styles'




const Signup = () => {
  const classes = useStyles()
  return (
    <TemplateDefault>
      <Formik
        initialValues={initialValues}
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
          }) => {

            return (
              <form onSubmit={handleSubmit}>
                <Container maxWidth='sm' component='main'>
                  <Typography component='h1' variant='h2' align='center' color='textPrimary'>
                    Crie sua conta
                  </Typography>
                  <Typography component='h5' variant='h5' align='center' color='textPrimary'>
                    E anuncie para todo Brasil
                  </Typography>
                </Container>

                <Container maxWidth='md'>
                  <Box className={classes.boxContainer}>
                    <FormControl fullWidth error={errors.name && touched.name} className={classes.formControl}>
                      <InputLabel>Nome</InputLabel>
                      <Input
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.name && touched.name ? errors.name : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.email && touched.email} className={classes.formControl}>
                      <InputLabel>E-mail</InputLabel>
                      <Input
                        name='email'
                        type='email'
                        value={values.email}
                        onChange={handleChange} />
                      <FormHelperText>
                        {errors.email && touched.email ? errors.email : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.password && touched.password} className={classes.formControl}>
                      <InputLabel>Senha</InputLabel>
                      <Input
                        name='password'
                        type='password'
                        value={values.password}
                        onChange={handleChange} />
                      <FormHelperText>
                        {errors.password && touched.password ? errors.password : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl fullWidth error={errors.passwordConf && touched.passwordConf} className={classes.formControl}>
                      <InputLabel>Confirmação de senha</InputLabel>
                      <Input
                        name='passwordConf'
                        type='password'
                        value={values.passwordConf}
                        onChange={handleChange} />
                      <FormHelperText>
                        {errors.passwordConf && touched.passwordConf ? errors.passwordConf : null}
                      </FormHelperText>
                    </FormControl>

                    <Button
                      type='submit'
                      variant='contained'
                      color='primary'
                      fullWidth className={classes.espaco}
                    >
                      Cadastrar
                    </Button>
                    <Typography variant='body2' className={classes.espaco}>Já tem uma conta? Entre aqui</Typography>
                  </Box>
                </Container>
              </form>

            )
          }}
      </Formik>
    </TemplateDefault>
  )

}

export default Signup