import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';

function RootLayout({ children, items }) {
  return (
    <div>
      <NavBarMenu items={items} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired, // Changed path to url
      })
  ).isRequired,
};


export default RootLayout;
