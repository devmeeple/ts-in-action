// 1. Array Type

type ShoppingCart = {
  userId: string;
  items: string[];
};

const processCart = (cart: ShoppingCart) => {};

processCart({
  userId: 'user123',
  items: ['item1', 'item2', 'item3'],
});

// 2. Arrays of Objects

type Ingredient = {
  name: string;
  quantity: string;
};

type Recipe = {
  title: string;
  instructions: string;
  ingredients: Ingredient[];
};

const processRecipe = (recipe: Recipe) => {};

processRecipe({
  title: 'Chocolate Chip Cookies',
  ingredients: [
    {
      name: 'Flour',
      quantity: '2 cups',
    },
    {
      name: 'Sugar',
      quantity: '1 cups',
    },
  ],
  instructions: '...',
});

// 3. Tuples

const setRange = (range: [x: number, y: number]) => {
  const x = range[0];
  const y = range[1];
};

setRange([1, 2]);

const goToLocation = (
  coordinates: [lattitude: number, logitude: number, elevation?: number],
) => {
  const latitude = coordinates[0];
  const longitude = coordinates[1];
  const elevation = coordinates[2];
};
