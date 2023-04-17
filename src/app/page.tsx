'use client';
import { signIn, signOut, useSession } from 'next-auth/react';


import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default function Page() {
  const { data: session } = useSession();

  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      {session?.user ? (
        <>
          {session.user.image && (
            <span
              style={{ backgroundImage: `url('${session.user.image}')` }}
            />
          )}
          <span>
            <small>Signed in as</small>
            <br />
            <strong>{session.user.name ?? session.user.email}</strong>
          </span>
          <button onClick={() => signOut()}>Sign out</button>
        </>

      ) : (
        <>
          <span>
            You are not signed in
          </span>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  );
}
