import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => {
  return {
    root: {
      padding: '30px'
    },
    progressBar: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& .MuiCircularProgress-svg': {
        color: '#f59900cc',
      }
    }
  };
});
