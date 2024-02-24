import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/system';
import './Home.css';
import Footer from './Footer';

const StyledPaper = styled(Paper)({
  width: '80%',
  margin: '20px auto',
  padding: '20px',
});

const StyledTable = styled(Table)({
  width: '100%',
});

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div style={{ textAlign: 'center' }} className="home-container">
      <StyledPaper className={`paper-container table-margin`}>
        <StyledTable className="table-container" aria-label="simple table">
          <TableHead className="table-head">
            <TableRow>
              <TableCell className={`table-cell table-cell-first`} style={{ fontWeight: 'bold', textAlign: 'center' }}>
                ID
              </TableCell>
              <TableCell className={`table-cell`} style={{ fontWeight: 'bold', textAlign: 'center' }}>
                Name
              </TableCell>
              <TableCell className={`table-cell table-cell-last`} style={{ fontWeight: 'bold', textAlign: 'center' }}>
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className={`table-cell table-cell-first`} style={{ textAlign: 'center' }}>
                  {row.id}
                </TableCell>
                <TableCell className={`table-cell`} style={{ textAlign: 'center' }}>
                  {row.name}
                </TableCell>
                <TableCell className={`table-cell table-cell-last`} style={{ textAlign: 'center' }}>
                  {row.email}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledPaper>
      <Footer backgroundColor="cream" />
    </div>
  );
};

export default Home;