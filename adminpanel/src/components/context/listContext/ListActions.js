export const getListsStart = () => ({
    type: "GET_LISTS_START",
  });
  
  export const getListsSuccess = (movies) => ({
    type: "GET_LISTS_SUCCESS",
    payload: movies,
  });
  
  export const getListsFailure = () => ({
    type: "GET_LISTS_FAILURE",
  });

  export const createListStart = () => ({
    type: "CREATE_LIST_START",
  });
  
  export const createListSuccess = (movie) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: movie,
  });
  
  export const createListFailure = () => ({
    type: "CREATE_LIST_FAILURE",
  });
  export const deleteListStart = () => ({
    type: "DELETE_LIST_START",
  });
  
  export const deleteListSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id,
  });
  
  export const deleteListFailure = () => ({
    type: "DELETE_LIST_FAILURE",
  });