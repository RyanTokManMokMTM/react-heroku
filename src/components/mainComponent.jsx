import {React,useState,useEffect} from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Login from './login/login'
import Home from './mainPage/home'
import SignUp from './SignUp/SignUp'
import MovieDetail from './MovieComponent/MovieDetail'
import CustionNavBar from './Nav/CustomNavBar'
import {checkUserAuth} from '../api/api'
import reactDom from 'react-dom'
import Profile from './userprofile/userprofile'

const MainComponent = (props) =>{
    const [userAuth,setUserAuth] = useState(false)
    const [userInfo,setUserInfo] = useState({})

    useEffect(()=>{
        console.log("test")
        checkUserAuth()
        .then(res => {
            console.log(res.data.auth)
            if(res.data.auth != userAuth){
                setUserAuth(res.data.auth)
            }
            if(res.data.auth === true){
                console.log(res.data)
                setUserInfo({...res.data.info})
            }
        })
        .catch(err => console.log(err))
    },[userAuth])

    const onClickAuth=(auth)=> {
        console.log(auth)
        setUserAuth(auth)
    }

    return(
        <div>
            <Router>
                <CustionNavBar onClickAuth={onClickAuth} info={userInfo} auth={userAuth}/>
                <Switch>
                    <Route exact path="/"><Home movieData = {props.movieData} silderData = {props.silderData}/></Route>
                    <Route exact path="/signup"><SignUp auth={userAuth}/></Route>
                    <Route exact path="/login"><Login  onClickLogin={onClickAuth} auth={userAuth}/></Route>
                    <Route exact path="/movieDetail/:movieID"><MovieDetail/></Route>
                    <Route exact path="/userprofile"><Profile auth = {userAuth} userInfo={userInfo}/></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default MainComponent