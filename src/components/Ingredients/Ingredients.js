import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredientsList from './IngredientList';
import Search from './Search';

function Ingredients() {

  const [userIngredients, setUserIngredients] = useState([])

  const addIngredientHandler = ingredient => {
    setUserIngredients(prevIngredientes => [
      ...prevIngredientes, 
      {id: Math.random.toString, ...ingredient}
    ]);
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler}/>

      <section>
        <Search />
        <IngredientsList ingredients={userIngredients} onRemoveItem={() => {}}/>
      </section>
    </div>
  );
}

export default Ingredients;
