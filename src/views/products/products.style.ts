import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
    return {
        root: {
            '& p': {
                margin: 0,
            },
            padding:theme.spacing(3)
        },
        dark: {
            backgroundColor: '#ffffff',
            color: '#000000'
        },
        light: {
            backgroundColor: '#000000',
            color: '#ffffff'
        },
        addButton:{
            display:'flex',
            justifyContent:'flex-end'
        }
    }
});