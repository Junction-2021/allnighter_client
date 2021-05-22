import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import MainLayout from '../layout/mainlayout';

const mint = '#00B5CE';

const useStyles = makeStyles((theme) => ({
  middleGrid: {
    height: '100vh',
    width: '100vw',
    spacing: 0,
    direction: 'column',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mint,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <MainLayout hideFooter={true}>
      <Grid className={classes.middleGrid}>
        <Link href="/login">
          <img src={'/logo1.png'} />
        </Link>
      </Grid>
    </MainLayout>
  );
}

export default App;
