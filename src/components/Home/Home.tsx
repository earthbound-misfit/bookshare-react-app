import React from 'react';
import { makeStyles } from '@material-ui/core';
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
      color: 'black',
      textAlign: 'center',
      position: 'relative',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    button_text: {
      color: 'black',
      textDecoration: 'none',
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderRadius: '30px',
      padding: '15px',
      marginTop: '12px',
      boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.4)',
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
                <h1>{ props.title }</h1>
                <Button href="/bookshelf" className={classes.button_text}>Curl Up With A Good Book!</Button> 
            </div>
            </div>
    </>
  )
}
