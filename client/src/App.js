import React from 'react';
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

function App() {
  return (
    <Container maxwidth="lg" >
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>Memories</Typography>
        <img src='https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI' height={60} alt='memories' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3} >
            <Grid item xs={12} xm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} xm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
