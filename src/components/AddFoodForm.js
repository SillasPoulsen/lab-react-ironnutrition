import { Input } from "antd";
import { useState } from "react";

function AddFoodForm({ addNewDish }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(50);
  const [servings, setServings] = useState(2);

  const handleName = (event) => setName(event.target.value);
  const handleImage = (event) => setImage(event.target.value);
  const handleCalories = (event) => setCalories(event.target.value);
  const handleServings = (event) => setServings(event.target.checked);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newDish = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    console.log(newDish);
    addNewDish(newDish);

    setName("");
    setImage("");
    setCalories(50);
    setServings(2);
  };

  return (
    <div className="addNewFoodForm">
      <h2>Add new Dish</h2>

      <form onSubmit={handleSubmit} name="basic">
        <label>Name</label>
        <Input type="text" value={name} name="name" onChange={handleName} />

        <label>Image</label>
        <Input type="text" value={image} name="image" onChange={handleImage} />

        <label>Calories</label>
        <Input
          type="number"
          value={calories}
          name="calories"
          onChange={handleCalories}
        />

        <label>Servings</label>
        <Input
          type="number"
          value={servings}
          name="servings"
          onChange={handleServings}
        />
        <button type="submit">Add new dish</button>
      </form>
    </div>
  );
}

export default AddFoodForm;
