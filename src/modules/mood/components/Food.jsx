export function Food() {
  const favoriteFood = ['Fried Chicken', 'Burger', 'Salard'];

  return (
    <div>
      {/* <div>Fried Chicken</div>
      <div>Burger</div>
      <div>Salard</div> */}
      {/* {favoriteFood.map((food) => {
        return <div>{food}</div>;
      })} */}

      {favoriteFood.map((food, index) => (
        <div key={index}>{food}</div>
      ))}
    </div>
  );
}
