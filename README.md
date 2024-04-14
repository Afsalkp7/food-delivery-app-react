# REACT FOOD APP 🍔
- Props like argument of javascript function
- Its just pass like argumrents


# template


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
  -Lazy loading
  -On demand loading
  -Dynamic import

 # Lazy 
 Lazy is an function from react by named exporting
 Lazy takes a callback function
 In this callback function return a funcion import with path of component as argument
  -----------------------------------------------------------------------
  eg:- const Grocery = lazy(()=> import ('../components/Grocery'))
  -----------------------------------------------------------------------
 Regularly in our app all the scripts are bundled in a single bundle 
 In case of large applications there are somany scripts are included so that file need big storage space and take too time to load
 That time this lazy loading is make small multiple bundles for that 
 when we render that component that time only the lazy script work

 1 big bundler ---split---> 2 small bundles 

 # Suspense
 Its an Component from react exporting by named
 
 In case of lazy loading the js file not in our app even we run the component import in lazy
 when we click to enter that component that time only load that js file and it take some time (12ms)
 but react is very fast , during that time react try to load that component and cant find js file so render an error

 In this case we use Suspense component 
 we wrap the component with suspense component and this take an prop named "fallback" , that prop are a jsx
 This jsx run between the time taken to load js file
  --------------------------------------------------------------
  <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
  --------------------------------------------------------------

  # methods to styling
  - normal css
  - scss sass
  - style component
  - bootstrap
  - chakra ui
  - meterial ui
  - antstyle ui
  - tailwind css

# Higher order component
 Its a function that take a component and return a component (same with some extra features)


# REDUX toolkit
 - install @redux/toolkit
 - install react-redux
 - build a store
 - connect store to app
 - create slice
