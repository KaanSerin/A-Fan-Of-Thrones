import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  NavLink,
} from "reactstrap";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const Search = styled.input`
  margin: auto 30px;
  padding: 8px 16px;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  width: 300px;
  color: #444;
  outline: none;
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => setIsOpen(!isOpen);
  const router = useRouter();

  return (
    <Navbar dark={true} color="dark" expand="md">
      <NavbarBrand href="/">A Fan of Thrones</NavbarBrand>
      <NavbarToggler onClick={onToggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link href="/" passHref>
              <NavLink className={router.pathname === "/" ? "active" : ""}>
                Home
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/characters?page=1" passHref>
              <NavLink
                className={
                  router.pathname === "/characters?page=1" ? "active" : ""
                }
              >
                Characters
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/cities" passHref>
              <NavLink
                className={router.pathname === "/cities" ? "active" : ""}
              >
                Cities
              </NavLink>
            </Link>
          </NavItem>

          {/* Search Box */}
          <NavItem>
            <Search type="text" placeholder="Search for a character!" />
          </NavItem>

          <NavItem>
            <Link href="/about" passHref>
              <NavLink className={router.pathname === "/about" ? "active" : ""}>
                About
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/contact" passHref>
              <NavLink
                className={router.pathname === "/contact" ? "active" : ""}
              >
                Contact
              </NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
