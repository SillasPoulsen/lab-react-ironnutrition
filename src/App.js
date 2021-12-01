import { useState } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [updateDishes, setUpdateDishes] = useState(foods);

  const addNewDish = (dishObj) => {
    const allUpdatedDishes = [...updateDishes, dishObj];
    const allFoodsUpdated = [...allFoods, dishObj];

    setUpdateDishes(allUpdatedDishes);
    setAllFoods(allFoodsUpdated);
  };

  const searchDishes = (word) => {
    const filteredDishes = updateDishes.filter((search) => {
      return search.name.toLowerCase().includes(word.toLowerCase());
    });

    setAllFoods(filteredDishes);
  };

  function deleteDishes(name) {
    setAllFoods(
      [...allFoods].filter((dish) => {
        return dish.name !== name;
      })
    );
  }

  return (
    <div className="App">
      <AddFoodForm addNewDish={addNewDish} />
      <SearchBar searchDishes={searchDishes} />
      <div className="foodItemsrow">
        {allFoods.map((foodItem) => {
          return <FoodBox foodItem={foodItem} deleteDishes={deleteDishes} />;
        })}
      </div>
    </div>
  );
}

export default App;
