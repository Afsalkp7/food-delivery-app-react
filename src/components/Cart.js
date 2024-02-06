
import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();
    const clearALlCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="p-10 m-10">
            <h1 className="text-center font-bold text-2xl">cart</h1>
            <div className="text-center"><button className="bg-red-500 px-5 font-bold text-white rounded-lg" onClick={clearALlCart}>Clear all</button></div>
            <div className="w-6/12 mx-auto shadow-lg">
                <ItemList list={cartItems}/>
            </div>

        </div>
    )
}

export default Cart