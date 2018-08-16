import * as brandActionTypes from '../actionTypes/brands'

export function fetchBrands() {
  return {
    type: brandActionTypes.FETCH_BRANDS
  }
}

export function showBrands(brands) {
  return {
    type: brandActionTypes.FETCH_BRANDS_SUCCESS,
    brands
  }
}

export function showBrandsError(error) {
  return {
    type: brandActionTypes.FETCH_BRANDS_ERROR,
    error
  }
}

export function fetchBrandWithChocolates(brandId) {
  return {
    type: brandActionTypes.FETCH_BRAND_WITH_CHOCOLATES,
    brandId
  }
}

export function showBrandWithChocolates(brand, chocolates) {
  return {
    type: brandActionTypes.FETCH_BRAND_WITH_CHOCOLATES_SUCCESS,
    brand,
    chocolates
  }
}

export function showBrandWithChocolatesError(error) {
  return {
    type: brandActionTypes.FETCH_BRAND_WITH_CHOCOLATES_ERROR,
    error
  }
}