import Prismic from "prismic-javascript";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export const apiEndpoint = "https://tylermcrobert.cdn.prismic.io/api/v2";
export const accessToken = "";

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption
  };
};

MyApp.getInitialProps = async ({ appContext, ctx }) => {
  const ctxData = await Client(ctx.req).query(
    Prismic.Predicates.at("document.type", "context")
  );

  console.log(ctxData.results.map(res => res.data));

  return { ctxData };
};

export default MyApp;
