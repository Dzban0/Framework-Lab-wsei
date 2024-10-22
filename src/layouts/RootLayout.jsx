import NavBarMenu from "./NavBarMenu";
import Footer from './Footer';


function RootLayout ({children,items}) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar fixed-top bg-light w-100 ps-3">
        <NavBarMenu items={items} />
      </nav>

      <main className="flex-grow-1 flex-column w-50 overflow-auto" style={{ marginTop: '60px', marginBottom: '60px' }}>
        {children}
      </main>

      <footer className="footer bg-body-tertiary text-center text-lg-start text-muted w-100 mt-auto m-b-0">
        <Footer />
      </footer>
    </div>
  );
}



export default RootLayout
