/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/nav/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const newPageProps = { ...pageProps };
  return (
    <>
      <NavBar />
      <Component {...newPageProps} />
    </>
  );
}

export default MyApp;
