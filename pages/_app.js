import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import Router from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";
NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const app = ({ Component, pageProps }) => {
  // useEffect(() => {
  //   document.querySelector("body").classList.add("full-height-grow");
  // }, []);

  return <Component {...pageProps} />;
};

export default app;
