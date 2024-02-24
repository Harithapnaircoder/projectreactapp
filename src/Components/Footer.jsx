import React from 'react';
import Typography from '@mui/material/Typography';

const Footer = ({ backgroundColor }) => {
  return (
    <div style={{ marginTop: '20px', textAlign: 'center', backgroundColor }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Technologent All rights reserved. 
        Contact us www.Technologent@gmail.com
      </Typography>
    </div>
  );
};
export default Footer;
