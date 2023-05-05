import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
    return ({
        boxContainer: {
            backgroundColor: theme.palette.background.white,
            padding: theme.spacing(3),
            marginTop: theme.spacing(3),
        },
        espaco: {
            marginTop: theme.spacing(2)
        },
        formControl: {
            marginBottom: theme.spacing(1)
        },
        
    }
    )
})

export default useStyles
