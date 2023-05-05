import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
    return (
        {
            box: {
                backgroundColor: theme.palette.background.white,
                padding: theme.spacing(3),
                marginTop: theme.spacing(3),
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

export default useStyles
