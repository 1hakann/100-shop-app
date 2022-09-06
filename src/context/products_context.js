import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import { products_url as url } from '../utils/constants'
import reducer from '../reducers/products_reducers'

import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
  } from '../actions/actions.js'

  const initialState = {}

  const ProductsContext = React.createContext()

  export const ProductProvider = ({children}) => {
    return (
        <ProductsContext.Provider value='products context'>
          {children}
        </ProductsContext.Provider>
      )
  } 

  // make sure use
export const useProductsContext = () => {
    return useContext(ProductsContext)
  }