import RestaurantCard from "./RestaurantCard";
import { RES_DATA } from "../utils/mockData";

const Body = () => {
	return (
		<div className="body">
			<div className="filter">
				<button className="filter-btn" onClick={() =>{console.log("button clicked");} }>Top Rated Restaurants</button>
			</div>
			<div className="res-container">
				{
					RES_DATA.map(({info}) => {
						return (<RestaurantCard key={info.id} resData={info} />)
					})
				}
				
			</div>
		</div>
	);
};

export default Body;
