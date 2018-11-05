import { ADD_GROCERY, REMOVE_GROCERY } from "./grocery.actions";

let initialState = [
  {
    id: 1,
    item: "Apples",
    quantity: 3
  },
  {
    id: 2,
    item: "Oranges",
    quantity: 2
  },
  {
    id: 3,
    item: "Pears",
    quantity: 5
  }
];

// Create your reducer function below

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROCERY:
      let newGrocery = {
        id: 4,
        item: action.payload,
        quantity: 3
      };
      return [...state, newGrocery];

    case REMOVE_GROCERY:
      return state.filter(item => item.id !== Number(action.payload));

    default:
      return state;
  }
};
