import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
    return (
        {
            mask: {},
            mainImage: {},
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
        }
    )
})

export default useStyles