import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import { Analytics } from '@vercel/analytics/react';
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png?v=2" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
      <ToastContainer position="bottom-right" autoClose={3000} newestOnTop />
    </>
  );
}
