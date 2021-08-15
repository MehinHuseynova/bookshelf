import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => {
    return {
        root: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background:'#e4e5dc'
        },
        container: {
            minWidth: 400
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
