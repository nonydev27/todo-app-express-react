//this is a simple task item component which is going to display individual tasks
// individual task row with checkbox && delete button

export default function Task() {
  return (
    <div>
      <input type="checkbox" />
      <span>Task Description</span>
      <button>Delete</button>
    </div>
  );
}
