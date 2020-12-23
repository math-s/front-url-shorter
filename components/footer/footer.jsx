import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/math-s/">
        Matheus Silva
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

function Footer() {
  return (
    <div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );
}

export default Footer;
