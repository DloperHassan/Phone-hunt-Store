import  Carousel from 'react-bootstrap/Carousel';
import './carosel.css'
import { Button, CarouselCaption, CarouselItem, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import slide_image_1 from "./hassan/hass.png"
import slide_image_2 from "./hassan/hass1.png"
import slide_image_3 from "./hassan/hass2.png"
import slide_image_4 from "./hassan/img4.png"
import slide_image_5 from "./hassan/img5.png"
import slide_image_6 from "./hassan/img6.png"
import slide_image_7 from "./hassan/img7.png"

const Coarousel = () => {
    return (
        <div className='container-fluid'>
            <Carousel variant='' className='carosel container-fluid'>
                <Carousel.Item interval={1000} s  >
                 
                        <Row  >
                            <Col xs={8} md={7} sm={12}>
                            <h1><span style={{fontSize:'100px',color:'rgb(245, 138, 119)'}}>X-</span><span style={{fontSize:'100px',color:'rgb(239, 87, 61)'}}>Box</span>FOR YOUR LIVING ROOM.</h1>
                            <p>This is best X-box in the world for people just want to waste time in front of X-box.</p>
                            <a target='-blank' href="https://www.google.com/"><u>Se more...</u></a>
                            <h2 id="price">$70.06</h2>
                            <a target='_blank' href="https://www.ubuy.com.bd/en/product/AYEJP5P4O-xbox-series-x-s-wireless-controller-stellar-shift"><Button>Buy Now</Button></a>                            </Col>
                            <Col xs={4} md={5} sm={12}>
                            <img  className='d-block w-100 imgPO3'    src={slide_image_1} alt="" />
                            </Col>
                        </Row>
                     
                    
                    </Carousel.Item>

                <Carousel.Item interval={1000} className='Dposi'>
                 
                        <Row  >
                            <Col className='posit' xs={8} md={7} sm={12}>
                            <h1>MEGA <span style={{fontSize:'100px',color:'rgb(245, 138, 119)'}}>4</span><span style={{fontSize:'100px',color:'rgb(239, 87, 61)'}}>K</span>LED TV.</h1>
                            <p>This is best SMART LED TV in the world for people just want to waste time in front of TV.</p>
                            <a target='-blank' href="https://www.google.com/"><u>Se more...</u></a>
                            <h2 id="price">$250.5</h2>
                            <a target='_blank' href="https://www.sencor.com/television/sle-40fs701tcs"><Button>Buy Now</Button></a>
                             </Col>
                            <Col xs={4} md={5} sm={12}>
                            <img  className='d-block w-100 imgPO'    src={slide_image_2} alt="" />
                            </Col>
                        </Row>
                     
                     
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                 
                        <Row  >
                            <Col xs={8} md={7} sm={12}>
                            <h1>Cool Dude<span style={{fontSize:'100px',color:'rgb(245, 138, 119)'}}>Head</span><span style={{fontSize:'100px',color:'rgb(239, 87, 61)'}}>Phone</span></h1>
                            <p>This is best Headphone in the world for people just want to waste time in front of Headphone.</p>
                            <a target='-blank' href="https://www.google.com/"><u>Se more...</u></a>
                            <h2 id="price">$32.08</h2>
                            <a target='_blank' href="https://www.rokomari.com/electronics/420614/iclever-bth18-kids-bluetooth-headphones"><Button>Buy Now</Button></a>
                            </Col>
                            <Col xs={4} md={5} sm={12}>
                            <img  className='d-block w-100 imgPO2'    src={slide_image_3} alt="" />
                            </Col>
                        </Row>
                   
                     
                    </Carousel.Item>

                {/* <Carousel.Item interval={1000}>
                    <img  className='d-block w-100' src={slide_image_3} alt="" />
                    </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img  className='d-block w-100' src={slide_image_4} alt="" />
                    </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img  className='d-block w-100' src={slide_image_5} alt="" />
                    </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img  className='d-block w-100' src={slide_image_6} alt="" />
                    </Carousel.Item>

                <Carousel.Item interval={1000}>
                    <img  className='d-block w-100' src={slide_image_7} alt="" />
                    </Carousel.Item> */}

            </Carousel>
              
        </div>
    );
};

export default Coarousel;