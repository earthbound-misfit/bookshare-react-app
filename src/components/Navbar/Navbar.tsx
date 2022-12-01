import React from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        fontSize: '1.5rem'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        marginEnd: '10px'
    },
    navbar: {
        zIndex: 1,
        position: 'fixed',
        display: 'flex',
        overflow: 'hidden',
        top: 0,
        margin: 'auto',
        boxShadow: '12px 0 15px -4px rgba(31, 73, 125, 0.9)',
    },
    navbarItem: {
        color: 'black',
        textDecoration: 'none',
        fontSize: '1rem',
    },
    p5: {
        padding: '20px',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '60%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingRight: '10px',
        paddingLeft: '10px',
    },
})

export const Navbar = () => {
    const classes = useStyles();

    return (
        <>
          <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} ${classes.spaceBetween}`}>
            <div className={`${classes.navlogo} `}>
                    <h1>Yewy</h1>
            </div>
            <div className={`${classes.width60} ${classes.alignCenter}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides}`}>
                    <li>
                        <Button href='/CarListings' className={`${classes.navbarItem} ${classes.psides}`}>My Cars</Button>
                    </li>
                    <li>
                        <Button href='Contact' className={`${classes.navbarItem} ${classes.psides}`}>Contact Us
                        </Button>
                    </li>
                    <li>
                        <Button href='About' className={`${classes.navbarItem} ${classes.psides}`}>About Us</Button>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}
