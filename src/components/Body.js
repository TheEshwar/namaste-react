import RestaurantCard from "./RestaurantCard";
import { RES_DATA } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState(RES_DATA);

	useEffect(()=>{
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.664548&lng=73.779339&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {mode: 'no-cors'});
		const json = await data.json();
		console.log("json :- ", json);
	}

	return (
		<div className="body">
			<div className="filter">
				<button className="filter-btn" onClick={() =>{
					console.log("button clicked");
					const filteredList = listOfRestaurants.filter(
						(res) => res.info.avgRating > 4
					);
					setListOfRestaurants(filteredList);
				}}>
					Top Rated Restaurants
				</button>
			</div>
			<div className="res-container">
				{
					listOfRestaurants.map(({info}) => {
						return (<RestaurantCard key={info.id} resData={info} />)
					})
				}
				
			</div>
		</div>
	);
};

export default Body;
