// ==========================================
// MAIN CONTAINER: App
// ==========================================
// 1. Imports:
//    - React hooks: useState, useEffect
//    - Child components: Header, TaskInput, TaskFilter, TaskList
// 2. State management:
//    - `todos` (array)
//    - `filter` (string: "all", "pending", "completed")
//    - `error` (string)
//    - `loading` (boolean)
// 3. API Handlers:
//    - `useEffect` hook: call `fetchTodos()` on initial load.
//    - `fetchTodos()`: GET request to `/api/todos`, set `todos` state.
//    - `handleAddTask(title)`: POST request to `/api/todos` with body `{ title }`. Update `todos` state or display error.
//    - `handleToggle(id, currentCompleted)`: PUT request to `/api/todos/:id` with `{ completed: !currentCompleted }`. Update item in `todos` state.
//    - `handleDelete(id)`: DELETE request to `/api/todos/:id`. Filter out deleted task from `todos` state.
// 4. Derived Data calculations:
//    - Filter `todos` based on `filter` state ("all", "pending", "completed").
//    - Calculate `completedCount` by filtering completed items.
// 5. Return JSX:
//    - Outer card wrapper (`app-card`).
//    - `<Header completedCount={completedCount} totalCount={todos.length} />`
//    - `<TaskInput onAddTask={handleAddTask} error={error} />`
//    - `<TaskFilter currentFilter={filter} onFilterChange={setFilter} />`
//    - `<TaskList todos={filteredTodos} loading={loading} onToggle={handleToggle} onDelete={handleDelete} />`
//    - Footer quote div ("Keep going! You've got this. 🚀").

import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskFilter from "./components/TaskFilter";

function App() {
  return (
    <>
      <Header />
      <TaskInput />
      <TaskFilter />
    </>
  );
}

export default App;
