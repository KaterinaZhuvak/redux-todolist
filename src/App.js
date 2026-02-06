import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
