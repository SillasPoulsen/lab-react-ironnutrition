import { Card, Col, Button } from "antd";

function FodBox({ foodItem, deleteDishes }) {
  const calories = foodItem.calories * foodItem.servings;
  return (
    <Col>
      <Card
        title={foodItem.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={foodItem.image} alt="foodpicture" height={60} />
        <p>Calories: {foodItem.calories}</p>
        <p>Servings: {foodItem.servings}</p>
        <p>
          Total Calories:
          <b>
            {calories}
            kcal
          </b>
        </p>
        <Button type="primary" onClick={() => deleteDishes(foodItem.name)}>
          {" "}
          Delete{" "}
        </Button>
      </Card>
    </Col>
  );
}

export default FodBox;
