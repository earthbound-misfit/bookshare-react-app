import React from 'react';
import { makeStyles, Paper, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar'
// import { Link } from 'react-router-dom';
import RainbowBooks from '../../assets/images/rainbow-books.jpg'

interface Props {
  title?: string;
}

const useStyles = makeStyles(
  {
      background: {
      backgroundImage: `url(${RainbowBooks})`,
      backgroundSize: 'cover',
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      position: 'absolute',
      zIndex: -1,
    },
    main_text: {
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    backgroundPaper: {
      backgroundColor: 'rgb(234, 197, 84)',
      width: '50%',
      position: 'relative',
      left: '25%',
      borderRadius: '10px',
      marginTop: '60px',
      color: 'white',
      boxShadow: '0px 0px 15px 8px',
    },
    button_text: {
      textDecoration: 'none',
      backgroundColor: 'rgba(255,255,255,0.9)',
      borderRadius: '10px',
      padding: '15px',
      marginTop: '12px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.4)',
    }
  }
)

export const Home = ( props:Props ) => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
            <div className={`${classes.background}`}>
            
            <div className={classes.main_text}>
              <Paper className={classes.backgroundPaper} elevation={24}>
                <Box p={5}>
                <h1>{ props.title }</h1>
                <Button href="/bookshelf" className={classes.button_text}>Come On In!</Button> 
                </Box>
                </Paper>
            </div>
           
            </div>
    </>
  )
}
