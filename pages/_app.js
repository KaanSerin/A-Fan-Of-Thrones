import "bootstrap/dist/css/bootstrap.min.css";
import Router from "next/router";
import NProgress from "nprogress";
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

const app = ({ Component, pageProps }) => <Component {...pageProps} />;

export default app;
