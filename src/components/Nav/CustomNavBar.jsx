
//NavDropdown,Form,Button,FormControl
import {Navbar,Nav,Button,NavDropdown} from 'react-bootstrap'
import {apiUserLogout} from '../../api/api'
import {Link} from 'react-router-dom'
const CustionNavBar = (props) =>{
    const logOut = ()=>{
        apiUserLogout()
        .then(res=>{
            console.log(res.data)
            props.onClickAuth(false)
        })
        .catch(err => console.log(err))
        
    }

    const renderItem = ()=>{
        if(props.auth){
            return <div>
                    <b style={{color:"white",marginRight:"10px"}}>Welcome,<Link to="/userprofile">{props.info.firstName + "," + props.info.lastName}</Link></b>
                    <Button onClick={logOut}  size="sm" style={{marginRight:"10px"}}>logout</Button> 
                </div>
        }
        else{
            return <div>
            <Button  size="sm" style={{marginRight:"10px"}}><Link to="/login" style={{color:"white"}}>login</Link></Button> 
            <Button  size="sm" style={{marginRight:"10px"}}><Link to="/signup" style={{color:"white"}}>SignUp</Link></Button> 
            </div>
        }
    }


    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand href="/">Movie</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="More Movie" id="basic-nav-dropdown" disabled={true}>
                    <NavDropdown.Item href="">Popular</NavDropdown.Item>
                    <NavDropdown.Item href="">NowPlaying</NavDropdown.Item>
                    <NavDropdown.Item href="">Upcoming</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="">Top_Rated</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/" disabled={true}>About us</Nav.Link>
                <Nav.Link href="/" disabled={true}>Contact us</Nav.Link>
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}
                {renderItem()}
             

            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default CustionNavBar