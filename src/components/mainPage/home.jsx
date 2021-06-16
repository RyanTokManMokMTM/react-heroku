import {React,useState,useEffect} from 'react'
import Silder from '../MovieComponent/Slider'
import CardScorllingList from '../MovieComponent/CardScrollingList'
import axios from 'axios'
import {apiGetMovieCategory,apiGetMoviePromote} from '../../api/api'
const Home = (props) =>{
    const [movieCat,setMovieCat] = useState([])
    const [promoteData,setPromoteData] = useState([])

    useEffect(()=>{
        axios.all([
            apiGetMovieCategory("popular"),
            apiGetMovieCategory("now_playing"),
            apiGetMovieCategory("top_rated"),
            apiGetMovieCategory("upcoming"),
            apiGetMoviePromote()
            
        ]).then(axios.spread((popular,NowPlaying,TopRate,UpComing,promoteData)=>{
            // console.log(popular.data)
            // console.log(NowPlaying.data)
            // console.log(TopRate.data)
            // console.log(UpComing.data)
            console.log(promoteData.data)
            setMovieCat([popular.data,NowPlaying.data,TopRate.data,UpComing.data])
            setPromoteData([...promoteData.data])
        })).catch(err=>console.log(err))
    },[])

    return(
        <div style={{margin:"10px"}}>
        <Silder SilderData={promoteData}/>
        {console.log(movieCat)}
              {movieCat.map((list)=>{
                return(
                    <CardScorllingList key={list.category} movieData={list.info} category={list.category}/>
                )
            })}
        </div>

    )
}

export default Home