import { useState } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [updateDishes, setUpdateDishes] = useState(foods);
  const [show, setShow] = useState(true);
  const [btnText, setBtnText] = useState("Hide");

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
    if (allFoods.length >= 1) {
      setAllFoods(
        [...allFoods].filter((dish) => {
          return dish.name !== name;
        })
      );
    } else {
      return (
        <div>
          <p>No more food</p>
        </div>
      );
    }
  }

  const setStateOfBtn = (event) => {
    setShow(!show);
    setBtnText("Show");
  };

  return (
    <div className="App">
      {show ? <AddFoodForm addNewDish={addNewDish} /> : null}
      <button type="primary" onClick={setStateOfBtn}>
        {btnText}
      </button>
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
