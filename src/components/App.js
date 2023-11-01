/*
1. After firing up your server, render the list of pizzas in to the table.(done)

2. Each row in the table should be a pizza component and when you click the "Edit" button, it should send the pizza associated with that component into the Pizza form.

3. The pizza form will then render the information about the pizza in the form, which will be editable.

4. When the form is submitted, the information should be reflected in your table and persist in the backend.

*/
import React,{useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";
import Pizza from "./Pizza";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [editPizza, setEditPizza] = useState({})

  useEffect(()=>{
    fetch(' http://localhost:3001/pizzas')
    .then(res => res.json())
    .then(pizzasData => setPizzas(pizzasData))
  }, [])

  const handleEditPizza =(pizzObj)=>{
    console.log(pizzObj)
  }
  return (
    <>
      <Header />
      <PizzaForm editPizza={editPizza} />
      <PizzaList>
        {pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} onEditPizza={handleEditPizza} />)}
      </PizzaList>
    </>
  );
}

export default App;
