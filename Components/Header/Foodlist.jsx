import React, { useEffect, useState } from "react";
import Header from "./Header";

export default function Foodlist() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Sign Up for Key',
		'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};


      try {
        console.log("Fetching data..."); // Debugging log
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Full API Response:", data); // Debugging log

        // Check how data is structured
        if (Array.isArray(data)) {
          setFoods(data); // If the response is a direct array
        } else if (data.menu && Array.isArray(data.menu.items)) {
          setFoods(data.menu.items);
        } else if (Array.isArray(data.items)) {
          setFoods(data.items);
        } else {
          throw new Error("Unexpected API response format");
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
  }, []);

  return (
    <div>
      <Header />
      <h1>Food List</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {foods.length > 0 ? (
          foods.map((food, index) => <li key={index}>{food.name}</li>)
        ) : (
          !loading && <p>No food items available</p>
        )}
      </ul>
    </div>
  );
}
