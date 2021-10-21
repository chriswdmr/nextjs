import '../styles/globals.css'

throw new Error('this should break the deployment')

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
