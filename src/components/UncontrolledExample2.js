import Carousel from 'react-bootstrap/Carousel';
import "./UncontrolledExample.css";

function UncontrolledExample() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            src="https://laboticamilagrosa.com.ar/panel5/file/5/Banners/2021/11/62/19_061942_defumacion-activada-960x400_001.jpg"
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
            src="https://laboticamilagrosa.com.ar/panel5/file/5/Banners/2022/05/71/17_030638_siete-charkras.png"
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
            src="https://laboticamilagrosa.com.ar/panel5/file/5/Banners/2021/11/61/19_042728_vela-soja--2021-960x400_001.jpg"
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
            src="https://laboticamilagrosa.com.ar/panel5/file/5/Banners/2021/11/49/18_115829_sahumitos-2021-960x400_002.jpg"
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
            src="https://laboticamilagrosa.com.ar/panel5/file/5/Banners/2021/11/59/19_032157_linea-hierbas-y-puro-original-2021-960x400_001.jpg"
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