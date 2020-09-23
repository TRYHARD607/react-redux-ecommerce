import axios from 'axios'

const GET_PRODUCTS = 'GET_PRODUCTS'
const CHANGE_SORT_PARAM = 'CHANGE_SORT_PARAM'
const CHANGE_SORT_DIRECTION = 'CHANGE_SORT_DIRECTION'
const ADD_TO_SELECTION = 'ADD_TO_SELECTION'
const REMOVE_FROM_SELECTION = 'REMOVE_FROM_SELECTION'
const DELETE_FROM_SELECTION = 'DELETE_FROM_SELECTION'
const DELETE_ALL_SELECTION = 'DELETE_ALL_SELECTION'
const GET_RATES = 'GET_RATES'
const UPDATE_BASE = 'UPDATE_BASE'

const initialState = {
  list: [],
  sortedParam: 'title',
  sortedDirection: 'asc', // desc
  selection: {},
  rates: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        list: action.list
      }
    case CHANGE_SORT_PARAM:
      return {
        ...state,
        sortedParam: action.sortedParam
      }
    case CHANGE_SORT_DIRECTION:
      return { ...state, sortedDirection: action.sortedDirection }
    case ADD_TO_SELECTION:
      return {
        ...state,
        selection: {
          ...state.selection,
          [action.id]: (state.selection[action.id] || 0) + 1
        }
      }
    case REMOVE_FROM_SELECTION: {
      const newSelection = {
        ...state.selection,
        [action.id]: (state.selection[action.id] || 0) - 1
      }
      if (newSelection[action.id] <= 0) {
        delete newSelection[action.id]
      }
      return {
        ...state,
        selection: newSelection
      }
    }
    case DELETE_FROM_SELECTION: {
      const newSelection = { ...state.selection }
      delete newSelection[action.id]
      return { ...state, selection: newSelection }
    }
    case DELETE_ALL_SELECTION: {
      return { ...state, selection: {} }
    }
    case GET_RATES:
      return {
        ...state,
        ...action.rates
      }
    case UPDATE_BASE:
      return {
        ...state,
        base: action.base
      }
    default:
      return state
  }
}

export function getProducts() {
  return (dispatch) => {
    axios('https://eccomerce-tryhard.herokuapp.com/api/v1/products').then(({ data }) => {
      dispatch({ type: GET_PRODUCTS, list: data })
    })
  }
}

export function changeSortedParam(sortedParam) {
  return { type: CHANGE_SORT_PARAM, sortedParam }
}

export function changeSortedDirection(sortedDirection) {
  return { type: CHANGE_SORT_DIRECTION, sortedDirection }
}

export function addToSelection(id) {
  return { type: ADD_TO_SELECTION, id }
}

export function removeFromSelection(id) {
  return { type: REMOVE_FROM_SELECTION, id }
}

export function deleteFromSelection(id) {
  return { type: DELETE_FROM_SELECTION, id }
}

export function deleteAllSelection() {
  return { type: DELETE_ALL_SELECTION }
}

export function getRates() {
  return (dispatch) => {
    fetch('/api/v1/rates')
      .then((res) => res.json())
      .then((rates) => {
        dispatch({ type: GET_RATES, rates })
      })
  }
}

export function updateBase(base) {
  return { type: UPDATE_BASE, base }
}
