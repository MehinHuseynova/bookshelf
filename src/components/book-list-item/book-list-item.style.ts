import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => {
  return {
    root: {
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    media: {
        height: 200,
        objectFit: 'contain',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }, 
  }
});
