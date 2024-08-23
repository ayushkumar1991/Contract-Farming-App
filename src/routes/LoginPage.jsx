import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

// const Background = styled(Box)({
//   backgroundImage: 'url(/path-to-farming-background.jpg)',
//   backgroundSize: 'cover',
//   height: '100vh',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// });

function LoginPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
    // handle login logic
  };

  return (
    <Background>
      <Container maxWidth="xs">
        <Box
          sx={{ bgcolor: 'white', padding: 3, borderRadius: 2, boxShadow: 3 }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Buyer Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              {...register('email')}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              {...register('password')}
            />
            <TextField
              label="GSTIN"
              fullWidth
              margin="normal"
              {...register('gstin')}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3 }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </Background>
  );
}

export default LoginPage;
