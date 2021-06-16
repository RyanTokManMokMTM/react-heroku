import {Grid,Paper,Avatar}from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import MailIcon from '@material-ui/icons/Mail';
import {React} from 'react'
import MainComponent from '../mainComponent'
import {useHistory} from 'react-router-dom'

const Profile=(props)=>{
const history = useHistory()
const paperStyle={padding:40,height:'20vh',width:300,margin:"20px auto",background:'grey'}
// const btnStyle={margin:'6px 0'}
return(
    <div style={{fontSize:"18px"}}>
        {props.auth === false ? history.push("/"): 
              <Grid>
              <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar fontsize={60} icon="user" />
                </Grid>
                <h5>email:<br/></h5><b>{props.userInfo.email}</b>
                <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                }}>
            <div>Name: {`${props.userInfo.lastName},${props.userInfo.firstName}`}</div>
            </div>


        </Paper>
        </Grid>  
    }


    </div>
  
)
}
export default Profile