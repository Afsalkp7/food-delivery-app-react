import { DATA_URL } from "../utils/constants";
const RestaurentCard = (props) => {
    const { resData } = props;
    return (
      <div className="w-[200px] p-3 rounded-lg mx-2 h-[450px] mb-3 bg-gray-100 hover:bg-gray-200">
        <img
          className="w-56 h-44 rounded-lg"
          src={
            DATA_URL+
            resData.info.cloudinaryImageId
          }
          width="100%"
          height="150px"
        />
        <h4 className="font-bold">{resData.info.name}</h4>
        <h5 className="my-3">{resData.info.cuisines.join(", ")}</h5>
        <h5>{resData.info.avgRatingString} rating</h5>
        <p>{resData.info.costForTwo}</p>
        <p>{resData.info.sla.deliveryTime} minutes</p>
      </div>
    );
  };

  export const labelOptions = (RestaurentCard)=>{
    return (props) => {
      return (<><div className="absolute m-1 p-2 bg-green-400 rounded-lg">VEG</div><RestaurentCard {...props}/></>)
    }
  }

  export default RestaurentCard;