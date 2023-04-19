import { AppBar, Loading } from '@components';
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
      <AppBar></AppBar>
      <Component {...pageProps} />
    </SessionProvider>;
}
