import React from 'react';
import { Query } from 'react-apollo';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { FETCH_GREETING_MESSAGE } from './queries';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const HomePage = (props) => (
  <Query query={FETCH_GREETING_MESSAGE}>
    {({ loading, error, data }) => {
      if(loading) return <p>Loading...</p>;
      const { classes } = props;

      return(
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paper}>xs=9</Paper>
            </Grid>
          </Grid>
        </div>
      );
    }}
  </Query>
);

export default withStyles(styles)(HomePage);
