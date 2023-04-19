import { AppBar, Loading } from '@components';
import { Box } from '@mui/material';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import './styles.scss';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    import('@neochess/components');
    setLoading(false);
  }, []);

  return loading ? <Loading /> :
    <SessionProvider session={pageProps.session}>
      <Box sx={{
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%'
      }}>
        <AppBar></AppBar>
        <Box sx={{
          flex: '1',
          overflow: 'auto',
        }}>
          <Component {...pageProps} />
        </Box>
      </Box>
    </SessionProvider>;
}
