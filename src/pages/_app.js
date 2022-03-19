import { ModalProvider } from 'react-simple-hook-modal';

import '../styles/globals.css'
import 'react-simple-hook-modal/dist/styles.css';
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ModalProvider>
  );
}

export default MyApp
