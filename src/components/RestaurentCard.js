import { DATA_URL } from "../utils/constants";
const RestaurentCard = (props) => {
    const { resData } = props;
    
    return (
      <div className="res-card" style={{ background: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={
            DATA_URL+
            resData.info.cloudinaryImageId
          }
          width="100%"
          height="150px"
        />
        <h4>{resData.info.name}</h4>
        <h5>{resData.info.cuisines.join(", ")}</h5>
        <h5>{resData.info.avgRatingString} rating</h5>
        <p>{resData.info.costForTwo}</p>
        <p>{resData.info.sla.deliveryTime} minutes</p>
      </div>
    );
  };

  export default RestaurentCard;