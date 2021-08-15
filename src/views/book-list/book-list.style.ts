import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => {
  return {
    root: {
      padding: '30px',
      '& .MuiButton-label':{
        color: '#f59900cc',
        fontWeight:600
      }
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
