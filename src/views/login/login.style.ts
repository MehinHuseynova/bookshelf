import { makeStyles } from '@material-ui/core/styles';
import { url } from 'inspector';

export const useStyles = makeStyles((theme) => {
    const Background = 'https://images.unsplash.com/photo-1457276587196-a9d53d84c58b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3NoZWxmJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    return {
        root: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${Background})`,
            backgroundPosition: 'center center'
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
