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
    children: PropTypes.node.isRequired, // children to dowolny renderowalny element
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default RootLayout;
