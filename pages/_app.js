function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// MyApp.getInitialProps = async ({ appContext, ctx }) => {
//   const ctxData = await Client(ctx.req).query(
//     Prismic.Predicates.at("document.type", "context")
//   );

//   const data = parseCuration(ctxData);

//   return { ctxData };
// };

export default MyApp;
