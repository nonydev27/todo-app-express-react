//this is a simple header component which is going to display the app title && task completion stats

export default function Header({ completedTasks, totalTasks }) {
  return (
    <div className="header">
      <div>
        <h1 className="title">Task Tracker</h1>
        <p className="subtitle">
          Organize your tasks efficiently and stay productive!
        </p>
      </div>

      <div className="task-stats">
        <p>
          Tasks {completedTasks}/{totalTasks} completed
        </p>
      </div>
    </div>
  );
}
