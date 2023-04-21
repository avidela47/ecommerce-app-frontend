import React, { useRef, useState } from "react";
import axios from "../axios";
import { Navbar, Button, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Navigation.css";
import { logout, resetNotifications } from "../features/userSlice";
import {
  BsFillCartFill,
  BsFillClipboardFill,
  BsFillPersonFill,
  BsMinecart,
  BsFillCalendarRangeFill,
} from "react-icons/bs";
import Logo from "../logo.png";

function Navigation() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const bellRef = useRef(null);
  const notificationRef = useRef(null);
  const [bellPos, setBellPos] = useState({});

  function handleLogout() {
    dispatch(logout());
  }

  const unreadNotifications = user?.notifications?.reduce((acc, current) => {
    if (current.status === "No leída") return acc + 1;
    return acc;
  }, 0);

  function handleToggleNotifications() {
    const position = bellRef.current.getBoundingClientRect();
    setBellPos(position);
    notificationRef.current.style.display =
      notificationRef.current.style.display === "block" ? "none" : "block";
    dispatch(resetNotifications());
    if (unreadNotifications > 0)
      axios.post(`/users/${user._id}/updateNotifications`);
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src={Logo} alt="" width={50} />
            Horus<br></br> Santeria
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* if no user*/}
            {!user && (
              <LinkContainer to="/login">
                <Nav.Link>
                  Ingresar
                  <BsFillPersonFill style={{ fontSize: "30px" }} />
                </Nav.Link>
              </LinkContainer>
            )}
            {user && !user.isAdmin && (
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                  {user?.cart.count > 0 && (
                    <span className="badge badge-warning" id="cartcount">
                      {user.cart.count}
                    </span>
                  )}
                </Nav.Link>
              </LinkContainer>
            )}
            {/* if user*/}
            {user && (
              <>
                <Nav.Link
                  style={{ position: "relative" }}
                  onClick={handleToggleNotifications}
                >
                  <i
                    className="fas fa-bell"
                    ref={bellRef}
                    data-count={unreadNotifications || null}
                  ></i>
                </Nav.Link>
                <NavDropdown title={`${user.email}`} id="basic-nav-dropdown">
                  {user.isAdmin && (
                    <>
                      <LinkContainer to="/admin">
                        <NavDropdown.Item>
                          Panel
                          <BsFillCalendarRangeFill className="Bs4" />
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/new-product">
                        <NavDropdown.Item>
                          Crear producto
                          <BsMinecart className="Bs3" />
                        </NavDropdown.Item>
                      </LinkContainer>
                    </>
                  )}
                  {!user.isAdmin && (
                    <>
                      <LinkContainer to="/cart">
                        <NavDropdown.Item>
                          Carrito
                          <BsFillCartFill className="Bs" />
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orders">
                        <NavDropdown.Item>
                          Ordenes
                          <BsFillClipboardFill className="Bs2" />
                        </NavDropdown.Item>
                      </LinkContainer>
                    </>
                  )}
                  <NavDropdown.Divider />
                  <Button
                    variant="danger"
                    onClick={handleLogout}
                    className="logout-btn"
                  >
                    Salir
                  </Button>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* notifications */}
      <div
        className="notifications-container"
        ref={notificationRef}
        style={{
          position: "absolute",
          top: bellPos.top + 30,
          left: bellPos.left,
          display: "none",
        }}
      >
        {user?.notifications.length > 0 ? (
          user?.notifications.map((notification) => (
            <p className={`notification-read ${notification.status}`}>
              {notification.message}
              <br />
              <span>
                {notification.time.split("T")[0] +
                  " " +
                  notification.time.split("T")[1]}
              </span>
            </p>
          ))
        ) : (
          <p>No hay notificaciones todavía</p>
        )}
      </div>
    </Navbar>
  );
}

export default Navigation;
