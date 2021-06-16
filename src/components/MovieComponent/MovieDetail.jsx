import {React,useEffect,useState} from 'react'
import {Container,Row,Col,Card,ResponsiveEmbed} from 'react-bootstrap'
import './movieDetail.css'
import {useParams} from 'react-router-dom'
import {apiGetMovieById,apiGetMovieTrailerById,apiGetMovieCastById} from '../../api/api'
import axios from 'axios'
const MovieDetail = (props)=>{
    var {movieID} = useParams()
    const [movieInfo,setMovieInfo] = useState({
        info:{},
        trailer:[],
        cast:[]
    })

    useEffect(()=>{
        //get movie via movieID
        axios.all([
            apiGetMovieById(movieID),
            apiGetMovieTrailerById(movieID),
            apiGetMovieCastById(movieID)
        ]).then(axios.spread((info,tailer,cast)=>{
            console.log("info",info.data)
            console.log("tailer",tailer.data)
            console.log("cast",cast.data)
            setMovieInfo({
                info:info.data,
                trailer:tailer.data,
                cast:cast.data
            })
        })).catch(err => console.log(err))
    },[])

    const checkEmptyData =()=>{
        if(movieInfo.trailer.length <= 0){
            return <div style={{color:"Red",marginBottom:"5%",fontSize:"20px"}}>Ops! Sorry,This movie has no any trailer!</div>
        }else{
            return <div style={{ width: "80%", height: 'auto',background:"black",marginBottom:"15px"}}>
            {movieInfo.trailer.map(info=>{
                return <ResponsiveEmbed aspectRatio="16by9" style={{marginBottom:"20px"}}>
                <embed type="video/mp4" src={info.src} />
            </ResponsiveEmbed>

            })}
        </div>
        }
    }

    return(
        <div>
        {console.log(movieID)}
    <div className="movie_detail" style={{"--img":"url('"+ movieInfo.info.backDrop + "')"}} >
    <Container  >
        <Row xs = {1} sm={1} md={2}>
        <Col md={5}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movieInfo.info.poster}/>
            </Card>
        </Col>

        <Col  style={{paddingTop:"75px"}}>
            <Container >
                <Row xs={1} md={1}style={{Padding:"25px",color:"white"}}>
                    <Col>
                    <h1 style={{color:"#FFB84D"}}><span >{movieInfo.info.movieName}</span></h1>
                    </Col>
                    <Col>
                    <h4 style={{color:"gray"}} >More Movie Info</h4>
                    </Col>

                    <Col style={{marginTop:"15px"}}>
                    <b style={{margin:"10px"}} >Release Date:<span style={{color:"gray",marginLeft:"10px"}}>{movieInfo.info.releaseDate}</span></b>
                    </Col>
                    <Col>
                    <b style={{margin:"10px"}}>Language:<span style={{color:"gray",marginLeft:"10px"}}>{movieInfo.info.language}</span></b>
                    </Col>
                    <Col>
                    <b style={{margin:"10px"}}>Cast:{movieInfo.cast.map((info,index)=>{
                        console.log(info)
                        return <span style={{color:"gray",marginLeft:"10px"}}>{info.name}
                        {index < movieInfo.cast.length -1 ? "," : null }
                        </span>
                    })} </b>
                    </Col>
                    <Col>
                    <b style={{margin:"10px"}}>Movie Time(mins):<span style={{color:"gray",marginLeft:"10px"}}>{movieInfo.info.movieTime + "mins"}</span></b>
                    </Col>
                </Row>

            </Container>
        </Col>
    </Row>
    </Container>
   </div>
    
        
        <Container>
            <Row xs={1} md={1}>
                 <Col>
                    <h3 style={{color:"#1a82ff",marginTop:"20px"}}>ABOUT THE STORY</h3>
                </Col>    

                <Col>
                <p style={{color:"white",marginTop:"35px",lineHeight:3}}>
                {movieInfo.info.overview}
                </p>
                </Col>
             </Row>

            <Row>
                <Col>
                <div>
                <h3 style={{color:"#1a82ff",marginTop:"20px",marginBottom:"20px"}}>Movie Trailer</h3>
                </div>
                    {checkEmptyData()}
                </Col>
            </Row>
        </Container>

        </div>
  )
}

export default MovieDetail