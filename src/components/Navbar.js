import React from "react";
import styled from "styled-components";
import logo from '../assets/logo/logo.png';
import { FaBars } from 'react-icons/fa'
import { Link } from "react-router-dom";
import {links} from "../utils/constants";
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context '

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
                <div className="nav-links">
                    {
                        links.map((link) => {
                            const {id, text, url} = link
                            return (
                                <a key={id}>
                                    <Link to={url}>{text}</Link>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </NavContainer>
    );
}

const NavContainer = styled.nav`
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--clr-primary-1);

    .nav-center {
        width: 90vw;
        margin: 0 auto;
        max-width: var(--max-width);
        .nav-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .logo {
                width: 64px;
                height: 64px;
                margin-top: 40px;
            },
            img {
                width: 175px;
                margin-left: -15px;
            }
            .nav-toggle {
                background: transparent;
                border: transparent;
                cursor: pointer;
            }
        }
        .nav-links {
            display: inline;
            color: var(--clr-white);
        }
    }

    @media (min-width: 994px) {
        .nav-center {
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
            .nav-header {
                .nav-toggle {
                    display: none;
                }
            }
            .nav-links {
                display: block;
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
                border-bottom: 2px solid var(--clr-primary-8);
              }
            }
        }
           
    }
    
`;

export default Navbar;