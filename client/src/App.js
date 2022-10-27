import React from 'react';
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

function App() {
  return (
    <Container maxwidth="lg" >

      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Memories</Typography>
        <p align='center'>
          <img src='https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI' width={60} alt="icon" />
        </p>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={2} >

            <Grid item xs={6} xm={6}>
              <Posts />
            </Grid>

            <Grid item xs={6} xm={4}>
              <Form />
            </Grid>

          </Grid>
        </Container>
      </Grow>

    </Container>
  );
}

export default App;
