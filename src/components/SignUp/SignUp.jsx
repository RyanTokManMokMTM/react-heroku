import {Form,Button,Row,Alert,Col} from 'react-bootstrap'
import {React,useState} from 'react'
import {apiUserSiginUp} from '../../api/api'
import {Redirect,useHistory} from 'react-router-dom'
const SignUp = (props)=>{
    let history = useHistory()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [comfirmPassword,setComfirmPassword] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [message,setMessage] = useState("")
    const [siginUp,setSiginUp] = useState(false)

    const onChangeEmail=(event)=>{
        setEmail(event.target.value)
    }

    const onChangePassword=(event)=>{
        setPassword(event.target.value)
    }

    const onChangeComfirmPassword=(event)=>{
        setComfirmPassword(event.target.value)
    }

    const onChangeFirstName=(event)=>{
        setFirstName(event.target.value)
    }   

    const onChangeLastName=(event)=>{
        setLastName(event.target.value)
    }

    const handleRequest = (event) =>{
        //change all not null and send request
        console.log(email,password,comfirmPassword,firstName,lastName)
        event.preventDefault()
        if(email && password && comfirmPassword){
            const signUpData = {
                email:email,
                password:password,
                confirmPassword:comfirmPassword,
                firstName:firstName,
                lastName:lastName
            }
            apiUserSiginUp(signUpData)
            .then(res=>{
                const result = res.data
               if(!result.success){
                    //there are some failure message
                    setSiginUp(false)
                    setMessage(result.message)
               }
               else{
                setEmail("")
                setPassword("")
                setComfirmPassword("")
                setFirstName("")
                setMessage("")
                setSiginUp(true)
                   
               }
            })
            .catch(err =>{
                console.log(err)
            })
        }
        else{
            //it will setMessage
            //but now show alert
            alert("Your haven't finished the form!");
        }
    }
    
    
    
    return(
        <div>
            {props.auth == true ? history.push("/"):
                        <dir>
                        <div>
                            <Form style={{padding:"10px"}} onSubmit={handleRequest}>
                                <Form.Group  controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Your email" onChange={onChangeEmail} required={true}/>
                                </Form.Group>
            
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter Your password" onChange={onChangePassword}  required={true}/>
                                    </Form.Group>
            
                                    <Form.Group as={Col} controlId="formGridConfirmPassword">
                                    <Form.Label>Comfirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Your Password" onChange={onChangeComfirmPassword}  required={true}/>
                                    </Form.Group>
                                </Row>
            
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>FirstName</Form.Label>
                                    <Form.Control type="text" placeholder="First Name(user)" onChange={onChangeFirstName} />
                                    </Form.Group>
            
                                    <Form.Group as={Col} controlId="formGridConfirmPassword">
                                    <Form.Label>LastName</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name(anonymous)" onChange={onChangeLastName}/>
                                    </Form.Group>
                                </Row>
            
                                <Button variant="primary" type="submit">
                                    SignUp
                                </Button>
                            </Form>
                        </div>
            
                        <div>
                            {message === "" ? null
                            : <Alert variant="danger">
                                 {message}
                            </Alert>}
                        </div>
            
                        <div>
                            {siginUp == true ? <Redirect to="/login" />
                            : null}
                        </div>
                       
            
            
                        </dir>
            
            }


        </div>
    )
}

export default SignUp