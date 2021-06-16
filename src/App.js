import {React,useState,useEffect} from 'react'
import MainComponent from './components/mainComponent'
import {checkUserAuth} from './api/api'



// class App extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             userAuth:false
//         }

//     }

//     componentDidMount(){
//         console.log("test")
//         checkUserAuth({})
//         .then(result=>{
//             console.log(result.data)
//             this.setState({
//                 userAuth:result.data.auth
//             })
//             console.log(this.state.userAuth)
//         })
//         .catch(err =>{
//             console.log(err)
//         })
//     }

//     componentWillUnmount(){

//     }


//     render(){
//         return(
//         <div className = "main-body" >
//             <MainComponent auth={this.state.userAuth} movieData = {this.props.movieData} silderData = {this.props.silderData} />
//         </div>
//         )
//     }
// }



function App(props) {
    const [userAuth,setUserAuth] = useState(0)
    const [test,setTest] = useState(0)

    useEffect(()=>{
        console.log("test")
        checkUserAuth()
        .then(res => {
            if(res.data.auth != userAuth){
                setUserAuth(res.data.auth)
            }
        })
        .catch(err => console.log(err))
    },[test])

    const onClickLogin=(auth)=> {
        setUserAuth(auth)
    }


    return (
        <div className = "main-body" >
           
            <MainComponent onClickLogin = {onClickLogin} auth={userAuth} movieData = {props.movieData} silderData = {props.silderData} />

            
        </div>
    )
}

export default App;