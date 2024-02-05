import ItemList from "./ItemList";
const ResCategory = ({data , showItems , setIndexShow}) => {
    const btnHandle = () => {
        setIndexShow()
    }
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className=" flex justify-between">
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                 <span className="cursor-pointer" onClick={btnHandle}>🔽</span>
            </div>
            
            {showItems && <ItemList list={data.itemCards}/>}
        </div>
    )
}
export default ResCategory
