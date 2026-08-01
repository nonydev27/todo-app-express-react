//this is a simple task item component which is going to display individual tasks
// individual task row with checkbox && delete button

// ==========================================
// COMPONENT: TaskItem
// ==========================================
// 1. Accept props: { todo, onToggle, onDelete }
// 2. Return JSX:
//    - An <li> element (`task-item`).
//    - Left side container (`task-left`) with onClick triggering `onToggle(todo.id, todo.completed)`:
//      - A circular checkbox indicator div (`custom-check`), adding "completed" class if `todo.completed` is true.
//      - If `todo.completed` is true, render a checkmark icon/SVG inside the circle.
//      - A <span> displaying `todo.title` (`task-text`), adding "completed" class if `todo.completed` is true.
//    - Right side:
//      - A delete <button> (`delete-btn`) with an onClick triggering `onDelete(todo.id)`.
//      - Render a trash icon (SVG or text symbol).
export default function Task() {
  return (
    <div>
      <input type="checkbox" />
      <span>Task Description</span>
      <button>Delete</button>
    </div>
  );
}
