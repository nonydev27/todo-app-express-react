//this is a simple header component which is going to display the app title && task completion stats
// ==========================================
// COMPONENT: Header
// ==========================================
// 1. Accept props: { completedCount, totalCount }
// 2. Return a header container div (`header-top`).
// 3. Inside the left side:
//    - Render an <h1> with the title "Task Tracker".
//    - Render a <p> subtitle: "Organize your work and stay productive."
// 4. Inside the right side:
//    - Render a stats badge container (`stats-badge`).
//    - Display a check icon/symbol along with: `${completedCount} of ${totalCount} completed`.

export default function Header({ completedTasks, totalTasks }) {
  return (
    <div className="header flex justify-between items-center p-4 shadow-md">
      <div className="header-left">
        <h1 className="title text-3xl font-bold">Task Tracker</h1>
        <p className="subtitle">
          Organize your tasks efficiently and stay productive!
        </p>
      </div>

      <div className="task-stats stats-badge">
        <p>
          Tasks {completedTasks}/{totalTasks} completed
        </p>
      </div>
    </div>
  );
}
