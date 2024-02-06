import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice";

const ItemList = ({list}) => {
    const dispatch = useDispatch();
    const addToCart = (item)=> dispatch(addItem(item))
    return (
        <div>   
            {list.map(item=>
                
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left">
                   <div className="flex justify-between">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>₹{item.card.info.price/100 || item.card.info.defaultPrice/100}/-</span>
                            <p className="text-xs">{item.card.info.category}</p>
                        </div>
                        <div className="py-2">
                            <button className="bg-white p-2 rounded-lg" onClick={()=>addToCart(item)}>Add+</button>
                        </div>

                   </div>
                    
                </div>
                )}
        </div>
    )
}
export default ItemList