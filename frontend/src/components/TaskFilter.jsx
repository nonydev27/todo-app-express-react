// over here, there's going to be form input + validation error banner
// ==========================================
// COMPONENT: TaskFilter
// ==========================================
// 1. Accept props: { currentFilter, onFilterChange }
// 2. Define an array of options: `["all", "pending", "completed"]`.
// 3. Return JSX:
//    - A container div (`filter-tabs`).
//    - Map over the array to render a <button> for each filter tab:
//      - `key={filter}`
//      - ClassName: include "active" class if `currentFilter === filter`.
//      - `onClick`: call `onFilterChange(filter)`.
//      - Display capitalized filter label (e.g., "All", "Pending", "Completed").

export default function TaskFilter() {
  return (
    <div>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
}
