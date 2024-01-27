// export const addTodo = (Text) => {
//     return{
//         type : 'ADD_TASK',
//         payload : {
//             id: new Date().getTime(),
//             Text: Text,
//         },
//     };
// };

// export const deleteTodo = (id) => {
//     return{
//         type : 'DELETE_TASK',
//         payload : id,
//     };
// };

// actions.js
export const addTodo = (task) => {
    return {
      type: 'ADD_TASK',
      payload: task,
    };
  };
  
  export const deleteTodo = (id) => {
    return {
      type: 'DELETE_TASK',
      payload: id,
    };
  };

  export const editTodo = (id, updatedTask) => ({
    type: 'EDIT_TASK', // Change this to 'EDIT_TASK'
    payload: { id, updatedTask },
  });