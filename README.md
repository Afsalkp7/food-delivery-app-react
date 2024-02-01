# REACT FOOD APP 🍔
- Props like argument of javascript function
- Its just pass like argumrents


# template
/**
 *
 * Header
 *  - logo
 *  - nav items
 * Body
 *  - search
 *  - restuarant containers
 *  - restuarant cards
 * Footer
 *  - links
 *  - address
 *  - contact
 *  - copyright
 *
 */

 # export default
 export default Component
 import component from "path"

 # Named export function
 export const component
 import {component} from "path"

 # Reacyt Hooks
 (Normal javascript utility function)
 - its an utility function it make some utility
 example:-
 - useState()
 - useEffect()

 whenever a state variable updates react re render the component

# React reconciliation algorithm (React fiber)

# state variable 
when ever a set variable update , react triggers a reconciliation cycle (re render the component)

# useEffect
 - Take 2 arguments
 - 1-callback function
 - 2-dependency array
 The use effect called in every rendering of that component on without dependency array
 The use effect called only at initial render with an empty array as dependency array
 The use effect called only at when the dependency changes on array with values

 if no dependency array => useEffect is called on every render
 if dependency array is empty = [] => useEffect is called on initial render (just once)
 if dependency array is [logStatus] => useEffect is called when the logStatus update 

 - Never create state variable on inside any condition loop or function

 # Routing
  - npm i react-router-dom
  - createBrowserRouter
  - RouterProvoider (component)

# useRouterError
 - Hook for showing error details

# Outlet 
 - Its a component that displays the component on responsible route

# Link
 - import {Link} from "react-router-dom";
 - Its a component that helps to navigate another router without rendering whole pages
 
 # 2 Types of routes
 - server side routes
 - client side routes

# useParams
 - use params for navigation params dynamically

# Life cycle method
 - parent constructor
 - parent render
 - child constructor
 - child render
 - child didmount
 - parent didmount

- In mutiple child 

- parent constructor
- parent render
- first child constructor
- first child render
- second child constructor
- second child render
- first didmount
- second didmount
- parent didmount