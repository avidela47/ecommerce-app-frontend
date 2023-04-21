import React, { useEffect } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import categories from "../categories";
import axios from "../axios";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import UncontrolledExample from '../components/UncontrolledExample';
import UncontrolledExample2 from '../components/UncontrolledExample2'
import Footer from "../components/Footer";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);
  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, [dispatch]);
  return (
    <div>

      <UncontrolledExample />

      <div className="featured-products-container container mt-4">
        <h2>Nuestros productos</h2>
        {/* last products here */}
        <div className="d-flex justify-content-center flex-wrap">
          {lastProducts.map((product) => (
            <ProductPreview {...product} />
          ))}
        </div>
        <div>
          <Link
            to="/category/Todos los productos"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          ><Button className="vm mt-4">Ver más...</Button>           
          </Link>
        </div>
      </div>

      {/* sale banner */}
      <div>
        <UncontrolledExample2
        />
      </div>
      
      <div className="recent-products-container container mt-4">
        <h2>Categorias</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer
              to={`/category/${category.name.toLocaleLowerCase()}`}
            >
              <Col md={6}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${category.img})`,
                    gap: "5px",
                  }}
                  className="category-tile"
                >
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
      <Footer />
    </div>
  );
}
