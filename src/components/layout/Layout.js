import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";


const Layout = (props) => {
  return (

        <div>
          <Head>
            <title>Onzombie</title>
            {/* <link rel="shortcut icon" href={header?.favicon}/> */}
          </Head>
          <Header />
          {props.children}
          <Footer />
        </div>

  );
};

export default Layout;
