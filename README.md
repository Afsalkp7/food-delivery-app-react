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
----------------------------
 - parent constructor
 - parent render
 - child constructor
 - child render
 - child didmount
 - parent didmount

IN CASE OF CLASS COMPONENT
----------------------------
 - constructor
 - render
 - dom update (dummy data)
 - componentDidMount
 - update data through setState()
 - render
 - dom update (actual data)
 - componentDidUpdate
 -------------------------
 Then Left from that page to another page that time 
 - componentUnMount
 is work

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

IN CASE OF FUNCTIONAL COMPONENT
------------------------------------
- render 
- dom update (with dummy data)
- useEffect work 
- render
- dom update (with actual data)
------------------------------------
 Then Left from that page to another page that time 
 -useEffect return
 is work

 # Custom hooks
 - made a file in utils with starting "use"
 - then create a function on it and export from there
 - import that function and use it on the required place

 # Optimization
 - Made bundle of code in to smaller parts its known in different names eg:-
  -Chunking
  -Code splitting
  -Dynamic Bundling
  