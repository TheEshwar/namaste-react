import { IMAGE_URL, RES_IMAGE } from "../utils/constants";

const RestaurantCard = ({resData}) => {
	const { name, cuisines, cloudinaryImageId, avgRating, sla} = resData;
	const {deliveryTime} = sla;
	return (
		<div className="res-card">
			<img className="res-logo" src={IMAGE_URL+'/'+cloudinaryImageId} alt="res-image" />
			<div className="res-details">
				<p className="res-name">{name}</p>
				<p className="res-cuisines">{cuisines.toString()}</p>
				<h4>{avgRating} stars</h4>
				<h4>{deliveryTime} Minutes</h4>
			</div>
		</div>
	);
};

export default RestaurantCard;
