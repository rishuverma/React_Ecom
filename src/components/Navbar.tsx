import { Button, Container, Nav, Navbar as NavbarBoot } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <>
      <NavbarBoot className="bg-white shadow-sm mb-3" sticky="top">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
              Store
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
          </Nav>
          {cartQuantity > 0 ? (
            <Button
              style={{
                width: "3rem",
                height: "3rem",
                position: "relative",
              }}
              variant="outline-primary"
              className="rounded-circle d-flex justify-content-center"
              onClick={openCart}
            >
              cart
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%,25%)",
                }}
              >
                {cartQuantity}
              </div>
            </Button>
          ) : null}
        </Container>
      </NavbarBoot>
    </>
  );
}
