import PropTypes from "prop-types"

function Layout ({ children }) {
    return (
        <div>
          <nav>
            <ul>
              <li>Laboratorium 1</li>
              <li>Laboratorium 2</li>
            </ul>
          </nav>
          <div>{children}</div>
        </div>
      )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired, // children should be any renderable content
  };

export default Layout