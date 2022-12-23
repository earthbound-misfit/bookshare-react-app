import React from 'react';
import { Navbar } from '../../components';
import { makeStyles, Paper, Box } from '@material-ui/core';
import RainbowBooks from '../../assets/images/rainbow-books.jpg'

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
      display: 'flex',
      textAlign: 'center',
      position: 'relative',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    backgroundPaperYellow: {
      backgroundColor: 'rgb(234, 197, 84)',
      width: '45%',
      position: 'relative',
      left: '15%',
      borderRadius: '10px',
      color: 'white',
      boxShadow: '0px 0px 15px 8px',
      display: 'flex',
    },
    backgroundPaperBlue: {
      backgroundColor: 'rgba(49, 86, 173, 0.9)',
      width: '60%',
      position: 'relative',
      left: '15%',
      borderRadius: '10px',
      color: 'white',
      boxShadow: '0px 0px 15px 8px',
      display: 'flex',
      marginBottom: '5px',
    },
    backgroundPaperSalmon: {
      backgroundColor: 'rgb(231,78,85)',
      position: 'relative',
      left: '15%',
      borderRadius: '10px',
      color: 'white',
      boxShadow: '0px 0px 15px 8px',
      width: '70%',
      marginTop: '5px',
      display: 'flex',
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

export const About = () => {
  const classes = useStyles()
  return (
    <>
    <Navbar />
     <div className={`${classes.background}`}>
            
            <div className={classes.main_text}>
              <Paper className={classes.backgroundPaperYellow} elevation={24}>
                <Box p={4}>
                <h1>About BookWorm</h1>
                </Box>
                </Paper>
            </div>
            <div className={classes.main_text}>
              <Paper className={classes.backgroundPaperBlue} elevation={24}>
                <Box p={3}>
                <p>BookWorm is a book sharing website for people who love books...and sharing.</p>
                </Box>
                </Paper>
            </div>
            <div className={classes.main_text}>
              <Paper className={classes.backgroundPaperSalmon} elevation={24}>
                <Box p={3}>
                <p>It is a shared library which for a small fee you can borrow other people's books and share your own.</p>
                </Box>
                </Paper>
            </div>
           
            </div>
    </>
  )
}
