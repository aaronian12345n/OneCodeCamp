// import React, { useState } from 'react'; 

// const TodoList = () => {
//     const [todos, setTodos] = useState([]);
//     const [inputValue, setInputValue] = useState('');
//     const [editIndex, setEditIndex] = useState(-1); // -1 indicates no item is being edited

//     const addTodo = () => {
//         if (inputValue.trim()) {
//             if (editIndex === -1) {
//                 setTodos([...todos, inputValue]);
//             } else {
//                 const updatedTodos = [...todos];
//                 updatedTodos[editIndex] = inputValue;
//                 setTodos(updatedTodos);
//                 setEditIndex(-1); // Reset edit index after edit
//             }
//             setInputValue('');
//         }
//     };

//     const editTodo = (index) => {
//         setInputValue(todos[index]);
//         setEditIndex(index);
//     };

//     const deleteTodo = (index) => {
//         const updatedTodos = [...todos];
//         updatedTodos.splice(index, 1);
//         setTodos(updatedTodos);
//     };

//     return (
//         <div>
//             <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />

//             <button onClick={addTodo}>{editIndex === -1 ? 'Add Task' : 'Edit Task'}</button>

//             <ul>
//                 {todos.map((todo, index) => (
//                     <li key={index}>
//                         {todo}
//                         <button onClick={() => editTodo(index)}>Edit</button>
//                         <button onClick={() => deleteTodo(index)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TodoList;
