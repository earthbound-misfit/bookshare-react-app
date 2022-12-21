import React, { useState } from 'react';
import firebase from 'firebase/app';
import { useAuth, AuthCheck } from 'reactfire';
import 'firebase/auth';
import { Input } from '../SharedComponents/Input';
import { Container, Button, makeStyles, Typography, Snackbar } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Navbar } from '../../components'
import RainbowBooks from '../../assets/images/rainbow-books.jpg'

const Alert = (props:AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles({
  googleButton: {
    backgroundColor: 'rgb(66,133,244)',
    marginTop: '2em',
    padding: '0',
    color: 'white',
    height: '50px',
    width: '100%',
    border: 'none',
    textAlign: 'center',
    justifyContent: 'center',
    boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
    fontSize: '16px',
    lineHeight: '48px',
    display: 'block',
    borderRadius: '1px',
    fontFamily: 'Roboto, arial, sans-serif',
    cursor: 'pointer',
  },
  googleLogo: {
    width: '48px',
    height: '48px',
    display: 'block'
  },
  typographyStyle: {
    fontFamily: 'Roboto, arial, sans-serif',
    textAlign: 'center',
    fontSize: '2em'
  },
  containerStyle: {
    backgroundColor: 'white',
    zIndex: 2,
    borderRadius: '10px',
    padding: '20px',
    marginTop: '12em',
    boxShadow: 'rgb(255 255 255 / 25%) 0px 2px 4px 0px',
  },
  snackBar: {
    color: 'white',
    backgroundColor: '#4caf50'
  },
  background: {
    backgroundImage: `url(${RainbowBooks})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    position: 'absolute',
    zIndex: -1,
    },
});

interface SignInProps {
  history: RouteComponentProps["history"];
  location: RouteComponentProps["location"];
  match: RouteComponentProps["match"];
}

export const SignIn = withRouter( (props:SignInProps) => {

  const auth = useAuth();
  const classes = useStyles();
  const { history } = props;
  const [ open, setOpen ] = useState(false);
  
  const handleSnackOpen = () => {
    setOpen(true);
  }
  const handleSnackClose = (event?: React.SyntheticEvent, reason?:string) => {
    if(reason === 'clickaway'){
      return;
    }
    setOpen(false);
    history.push('/bookshelf')
  };

  const sign_in = async () => {
    const response = await auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
    if(response.user) {
      handleSnackOpen();
    }
  };
  
  return (
    <>
      <Navbar />
          <div className={`${classes.background}`}>
      <Container maxWidth = 'sm' className={classes.containerStyle}>
        
        <Typography className={classes.typographyStyle}>Sign In Below</Typography>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <Input name="email" placeholder="Enter Email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Input name="password" placeholder="Enter Password" />
          </div>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>

        <AuthCheck fallback={
          <Button className={classes.googleButton} onClick={sign_in}>Sign In With Google</Button>
        }>
          <Button className={classes.googleButton} onClick={() => firebase.auth().signOut()}>Sign Out</Button>
          </AuthCheck>
          
        
        
        <Snackbar message={'Success'} open={open} autoHideDuration={6000} onClose={handleSnackClose}>
          <Alert onClose={handleSnackClose} severity="success">Successful Sign In - Redirect in 6 seconds</Alert>
        </Snackbar>

      </Container>
      
      </div>
      
    </>
  )
});