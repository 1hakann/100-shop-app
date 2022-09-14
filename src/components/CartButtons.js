import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
    return (
        <Wrapper className="cart-btn-wrapper">
            <Link to="/cart" className="cart-btn" onClick="" >
                Cart
                <span className="cart-container">
                    <FaShoppingCart />
                    <span className="cart-value">1</span>
                </span>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 225px;

    .cart-btn {
        color: var(--clr-primary-4);
        font-size: 1.5rem;
        letter-spacing: var(--spacing);
    }
`;

export default CartButtons;