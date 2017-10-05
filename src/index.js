import React from 'react';
import ReactDOM from 'react-dom';
import RecipesBook from './components/RecipesBook';
import registerServiceWorker from './registerServiceWorker';

const demoBook = [
	{
      name: 'Pumpkin Pie',
      ingredients: [
      	'Pumpkin Puree',
      	'Sweetened Condensed Milk',
      	'Eggs',
      	'Pumpkin Pie Spice',
      	'Pie Crust'
      	]
   },
   {
      name: 'Spaghetti',
      ingredients: [
      	'Noodles',
      	'Tomato Sauce',
      	'(Optional) Meatballs'
      	]
   }
]

const recipeBook = JSON.parse(localStorage.getItem('recipeBook'));

ReactDOM.render(<RecipesBook demoBook={demoBook} recipeBook={recipeBook} />, document.getElementById('root'));
registerServiceWorker();

