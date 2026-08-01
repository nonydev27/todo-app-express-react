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

export default function TaskFilter({ currentFilter, onFilterChange }) {
  const filter = ["all", "pending", "completed"];
  return (
    <div>
      {filter.map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 rounded-md ${currentFilter === filter ? "bg-[#0076d7] text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}
