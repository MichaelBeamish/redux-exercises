export const ADD_GROCERY = "ADD_GROCERY";
export const REMOVE_GROCERY = "REMOVE_GROCERY";

// Your job is to write two action creators:

export const addGrocery = newGrocery => {
  return {
    type: ADD_GROCERY,
    payload: newGrocery
  };
};

export const removeGrocery = id => {
  return {
    type: REMOVE_GROCERY,
    payload: id
  };
};
