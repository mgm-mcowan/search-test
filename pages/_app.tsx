import '../styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const handlePageShowEvent = (event: any) => {
      event?.preventDefault();
      if (event.persisted) {
        console.log("@@@ - Page was PERSISTED - SHOULD RELOAD.");
        document.body.style.opacity = '0';
      }
    }
    window.addEventListener('pageshow', handlePageShowEvent);
    return () => {
      window.removeEventListener('pageshow', handlePageShowEvent);
    }
  }, []);

  return <Component {...pageProps} />
}
