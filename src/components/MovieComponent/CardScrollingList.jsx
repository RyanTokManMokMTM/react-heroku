import {React} from 'react'
import MovieCard from '../MovieComponent/Card'
import {Container,Row,Col,Carousel} from 'react-bootstrap'
//props will passing a JSON array abot some infomation of movie
//we are going to render as a list of movie card
const CardScorllingList = (props)=>{
    return(
        <div style={{marginBottom:"30px"}}>
            <h3 style={{color:"#bf00ff",marginTop:"15px",marginBottom:"10px"}}>{props.category}</h3>
            <Container fluid >
                <div style={{color:"purple"}}>
                    <Row xl={6} md={3} sm={3} xs={2}> 
                    {props.movieData.map((item) => {
                        return(
                            <Col >
                                <MovieCard key={item.movieId}  movie={item}/>
                            </Col>
                        )

                        })}
                    </Row>
                
                </div>
            </Container>
        </div>
    )
}

export default CardScorllingList