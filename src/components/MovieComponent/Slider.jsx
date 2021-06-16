import {React} from 'react'
import {Carousel} from 'react-bootstrap'

const Silder = (props)=>{
    return(
        <div >
            <Carousel >
                {props.SilderData.map((item)=>(
                <Carousel.Item key={item.movieId}>
                <img
                className="d-block w-100"
                src={item.moviePoster}
                alt={item.movieName}
                style={{minHeight:"200px",maxHeight:"600px",objectFit:"contain"}}
                />
                  <Carousel.Caption>
                <h3><a href={"/movieDetail/" +item.movieId } style={{listStyle:"none",color:"#b3a500"}}>{item.movieName}</a></h3>
                </Carousel.Caption>
                </Carousel.Item>

                   ))}

            </Carousel>
        </div>
    )
}

export default Silder