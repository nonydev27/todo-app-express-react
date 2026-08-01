//this is a simple task list component which is going to display the list of tasks
// list mapping and empty state handling (no tasks to display)

// ==========================================
// COMPONENT: TaskList
// ==========================================
// 1. Accept props: { todos, loading, onToggle, onDelete }
// 2. Check loading/empty conditions:
//    - If `loading` is true, return a loading paragraph.
//    - If `todos.length === 0`, return a empty state message ("No tasks found...").
// 3. Return JSX:
//    - A <ul> element (`task-list`).
//    - Map over `todos` array and render `<TaskItem />` for each item:
//      - Pass `key={todo.id}`
//      - Pass `todo={todo}`, `onToggle={onToggle}`, `onDelete={onDelete}`.

export default function TaskList() {
  return (
    <div>
      <h2>My Tasks</h2>
    </div>
  );
}
