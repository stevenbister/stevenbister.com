import Header from './Header';
import Footer from './Footer';
import Notice from './Notice';

const Layout = ({ children }) => {
  return (
    <>
      <Notice>
        <p>
          Hello! Welcome to my site, it&apos;s under contstruction at the moment
          so please excuse the mess.
        </p>
      </Notice>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
