// pages/_app.js


import '../src/Styles/globals.css'
import '../src/Styles/md-editor.css';
import '../src/Styles/md-editor/TextArea.css';




function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
