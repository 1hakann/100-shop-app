import React from "react";
import styled from "styled-components";
import logo from '../assets/logo/logo.png';
import { FaBars } from 'react-icons/fa'
import { Link } from "react-router-dom";
import {links} from "../utils/constants";
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'
import CartButtons from "./CartButtons";

const Navbar = () => {
    const {openSidebar} = useProductsContext();
    const {myUser} = useUserContext();
    return (
        <NavContainer>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img className="logo" src={logo} alt="Shop App" />
                    </Link>
                    <button type="button" className="nav-toggle" onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    {
                        links.map((link) => {
                            const {id, text, url} = link
                            return (
                                <li className="link" key={id}>
                                    <Link to={url}>{text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <CartButtons />
            </div>
        </NavContainer>
    );
}

const NavContainer = styled.nav`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;

    .nav-center {
        width: 90vw;
        margin: 40px auto;
        max-width: var(--max-width);
    }
    .nav-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        margin-top: 50px;
        width: 100px;
      }
    }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-logo);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
    
`;

export default Navbar;