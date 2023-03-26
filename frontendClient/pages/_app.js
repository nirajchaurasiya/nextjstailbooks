import '../styles/globals.css'
import '../styles/Nav.css'
import '../styles/body.css'
import '../styles/rightbar.css'
import '../styles/feed.css'
import '../styles/sidebar.css'
import '../styles/share.css'
import '../styles/posts.css'
import '../styles/rightbarprofile.css'
import '../styles/profile.css'
import '../styles/login.css'
import '../styles/register.css'
import '../styles/responsive/navresponsive.css'
import '../styles/responsive/body.css'
import '../styles/responsive/feed.css'
import '../styles/responsive/rightbar.css'
import '../styles/responsive/sidebar.css'
import { useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }) {
  const loadingRef = useRef(null);
  const router = useRouter();

  useEffect(() => {

    const handleRouteChange = (url, { shallow }) => {

      //Start the progress bar because the route is changed !
      try {
        loadingRef.current.continuousStart();
      }
      catch (err) {

      }

    }

    const handleRouteComplete = (url, obj) => {

      //Make the progress bar 100% because our route load is completed !
      try {
        loadingRef.current.complete();
      }
      catch (err) {

      }
    }

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete)

    return () => {

      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);

      //Complete the progress if component unmounted !
      try {
        loadingRef.current.complete();
      }
      catch (err) {

      }

    }


  }, []);
  return (
    <>
      <LoadingBar color='#F44336' height={2} ref={loadingRef} />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
