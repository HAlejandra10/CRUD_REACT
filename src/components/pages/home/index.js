// @packages
import React from 'react'
import Button from '@mui/material/Button';

// @styles
import { withStyles } from '@mui/styles';
import styles from './styles';

const Home = ({ classes }) => {

        return (
        <div className='container'>
            <div className='py-4'>
                <h1>Home Page</h1>
                <Button className={classes.buttonHome} variant="contained">HOLA</Button>
            </div>
            
        </div>
    );
};

export default withStyles(styles)(Home);