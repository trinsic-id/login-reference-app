import { ModalProvider } from 'react-simple-hook-modal';

import '../styles/globals.css'
import 'react-simple-hook-modal/dist/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
}

export default MyApp
