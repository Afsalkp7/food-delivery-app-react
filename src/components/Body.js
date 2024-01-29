import RestaurentCard from "./RestaurentCard";
import resData from "../utils/resData";

const Body = () => {
    return (
        
      <div className="body">
        <div className="search">search</div>
        <div className="res-container">
          {resData.map((restuarent) => (<RestaurentCard key={restuarent.info.id} resData={restuarent}/>))}
        </div>
      </div>
    );
  };

  export default Body;