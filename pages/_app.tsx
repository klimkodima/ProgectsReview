import Head from 'next/head';
import localFont from 'next/font/local';
import type { AppProps } from 'next/app';
import '.@/styles/globals.css';

const sfProDisplay = localFont({
  src: [
    {
      path: '../public/fonts/SFProDisplay-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/SFProDisplay-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/SFProDisplay-Semibold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/fonts/SFProDisplay-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Projects Review</title>
        <meta name='description' content='Projects review CMS' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='images/general/favicon.ico' />
      </Head>
      <main className={sfProDisplay.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
