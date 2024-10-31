import NavBarMenu from "./NavBarMenu";
import Footer from './Footer';
import PropTypes from "prop-types";


function RootLayout ({children,items}) {
  return (
    <div>
        <NavBarMenu items={items} />
      <main>
        {children}
      </main>
        <Footer />
    </div>
  );
}

RootLayout.propTypes = {
  children:PropTypes.node.isRequired,
  items:PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      label:PropTypes.string.isRequired,
      path:PropTypes.string.isRequired
    }).isRequired,
  )
}


export default RootLayout
