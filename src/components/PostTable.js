// // src/components/PostTable.js
// import React, { useEffect, useState } from 'react';
// import { fetchPosts } from '../api';
// import {
//   styled
// } from '@mui/material/styles';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';

// import {
//   Table,
//   TableBody,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Container,
//   Typography,
//   TextField,
// } from '@mui/material';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// const PostTable = () => {
//   const [posts, setPosts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     const getPosts = async () => {
//       const postsData = await fetchPosts();
//       setPosts(postsData);
//     };

//     getPosts();
//   }, []);

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredPosts = posts.filter(post =>
//     post.name.toLowerCase().includes(searchQuery.toLowerCase())
//      ||  post.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );


//   console.log(filteredPosts[0]);
//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Posts
//       </Typography>
//       <TextField
//         label="Search Posts"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//         onChange={handleSearch}
//       />
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Name</StyledTableCell>
//               <StyledTableCell>Username</StyledTableCell>
//               <StyledTableCell>Email</StyledTableCell>
//               <StyledTableCell>Phone</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredPosts.map((post) => (
//               <StyledTableRow key={post.id}>
//                 <StyledTableCell component="th" scope="row">
//                   {post.name}
//                 </StyledTableCell>
//                 <StyledTableCell>{post.username}</StyledTableCell>
//                 <StyledTableCell>{post.email}</StyledTableCell>
//                 <StyledTableCell>{post.phone}</StyledTableCell>

//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Container>
//   );
// };

// export default PostTable;
// src/components/PostTable.js
import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api';
import {
  styled
} from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
  TextField,
  Pagination,
Box} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const PostTable = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await fetchPosts();
      setPosts(postsData);
    };

    getPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.name.toLowerCase().includes(searchQuery.toLowerCase())
    || post.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const pageCount = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>
      <TextField
        label="Search Posts"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={handleSearch}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentPosts.map((post) => (
              <StyledTableRow key={post.id}>
                <StyledTableCell component="th" scope="row">
                  {post.name}
                </StyledTableCell>
                <StyledTableCell>{post.username}</StyledTableCell>
                <StyledTableCell>{post.email}</StyledTableCell>
                <StyledTableCell>{post.phone}</StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Stack spacing={2} sx={{ mt: 2 }}> */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>

        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handleChangePage}
          variant="outlined"
          color="primary"
        />
      </Box>
      {/* </Stack> */}
    </Container>
  );
};

export default PostTable;
