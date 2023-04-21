import Carousel from 'react-bootstrap/Carousel';
import "./UncontrolledExample.css";

function UncontrolledExample() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://laboticamilagrosa.com.ar/panel5/file/5/Banners/2021/11/41/09_010104_sagradamadre-coleccion-completa-001-960x400-004.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>.</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://laboticamilagrosa.com.ar/panel5/file/5/Banners/2023/03/81/16_061626_palo-santo.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>.</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://laboticamilagrosa.com.ar/panel5/file/5/Banners/2023/03/82/22_033744_tibetanos-aromanza.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>.</h3>
            <p>
              
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://laboticamilagrosa.com.ar/panel5/file/5/Banners/2022/10/77/31_041028_sahumerios-organicos-.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>.</h3>
            <p>
              
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://laboticamilagrosa.com.ar/panel5/file/5/Banners/2023/03/80/16_060737_sahumerios-magicos.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>.</h3>
            <p>
              
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default UncontrolledExample;