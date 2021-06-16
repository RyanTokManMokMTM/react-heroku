import {Form,Button,Alert } from 'react-bootstrap'
import {React,useState} from 'react'
import { apiUserLogin } from '../../api/api'
import {Redirect,useHistory} from 'react-router-dom'
const Login  = (props)=> {
    let history = useHistory()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [message,setMessage] = useState("")
    const [islogin,setIsLogin] = useState(false)

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event)=>{
        setPassword(event.target.value)
        
    }

    const login = (event) =>{
        event.preventDefault();
        console.log(email)
        console.log(password)
        if(email && password){
            apiUserLogin({
                email:email,
                password:password
            })
            .then(res =>{
                //server will send back some message and state code
                //according to state code and message to set state
                if(!res.data.success){
                    setMessage(res.data.message)
                    setIsLogin(res.data.success)

                }
                else{
                    setIsLogin(res.data.success)
                    setMessage("")
                    props.onClickLogin(res.data.success)
                    history.push("/")
                }
            })
            .catch(err =>{
                console.log(err)
            })

        }
    }
    
    if(props.auth){
        return <Redirect to="/"/>
    }
    return(
        <div>
            <div>
            <div>
                <Form style={{padding:"10px"}} onSubmit={login}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={onChangeEmail} required={true}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={onChangePassword} required={true}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                </Form>
            </div>

            <div>
                {message === "" ? <span></span>:  <Alert variant="danger">
                    {message}
                 </Alert>}
            </div>
            </div>
        </div>
    )
}

export default Login