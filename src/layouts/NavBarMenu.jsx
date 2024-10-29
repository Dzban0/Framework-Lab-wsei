
import {Nav, Navbar} from 'react-bootstrap'
import PropTypes from "prop-types";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function NavBarMenu ({items}){

    const [id, setId] = useState(''); // State to hold the input ID
    const navigate = useNavigate(); // Hook to programmatically navigate
  
    const handleNavigate = () => {
      if (id) {
        navigate(`/lab2/${id}`); // Navigate to the Lab2 page with the entered ID
        setId(''); // Clear the input field
      }
    };

    return(
            <Navbar expand="lg" className="bg-body-tertiary">
            <Navbar.Brand  href="/">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='mr-auto'>
                    {items.map((item)=>(
                            <Nav.Link as={Link} to={item.url} key={item.id}>
                                {item.label}
                            </Nav.Link>
                ))}
                </Nav>
                <input
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)} // Update ID state on input change
                placeholder="Enter ID"
                style={{ marginRight: '10px', padding: '5px' }} // Inline styling for spacing
                />
                <button onClick={handleNavigate} style={{ padding: '5px 10px' }}>
                Go to Lab2
                </button>
            </Navbar.Collapse>
            </Navbar>
    )
}

NavBarMenu.propTypes={
    items:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            label:PropTypes.string.isRequired,
            url:PropTypes.string.isRequired
        })
    ).isRequired,
};



export default NavBarMenu