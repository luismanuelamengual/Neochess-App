import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { SessionProvider, useSession } from 'next-auth/react';
import type { AppProps } from 'next/app';
import './styles.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <SessionProvider session={pageProps.session}>
    <NavigationAppBar></NavigationAppBar>
    <Component {...pageProps} />
  </SessionProvider>;
}

export function NavigationAppBar() {
  const { data: session } = useSession();
  return (
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'fantasy' }}>
            NEOCHESS
        </Typography>
        <div>
          <IconButton
            size="large"
            color="inherit"
          >
            <Avatar alt={session?.user?.name ?? 'NN'} src={session?.user?.image ?? ''} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
