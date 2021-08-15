import { makeStyles } from '@material-ui/core/styles';
import { url } from 'inspector';

export const useStyles = makeStyles((theme) => {
    return {
        root: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

        },
        container: {
            minWidth: 400,
            background: 'white',
            padding: '30px',
            borderRadius: '8px'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            '& .MuiSvgIcon-root': {
                color: '#f59900cc',
            }
        },
        loginBtn: {
            marginBottom: theme.spacing(0.5),
            background: '#f59900cc',
            color: 'white'
        }
    };
});
