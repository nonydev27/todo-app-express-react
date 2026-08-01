// filter tab buttons (All /Pending / Completed) to filter the tasks displayed in the task list
// ==========================================
// COMPONENT: TaskInput
// ==========================================
// 1. Accept props: { onAddTask, error }
// 2. Set up local state: `title` (string, defaults to "").
// 3. Create a form submit handler (`handleSubmit`):
//    - Prevent default form submit behavior (`e.preventDefault()`).
//    - Check if `title.trim()` is empty; if so, return early.
//    - Call `onAddTask(title)`.
//    - Reset `title` state to "".
// 4. Return JSX:
//    - A wrapper div (`task-form-container`).
//    - A <form> with onSubmit set to `handleSubmit`.
//    - A controlled <input> bound to `title` state (`task-input`), with placeholder "Enter a new task...".
//    - A submit <button> ("Add Task").
//    - If `error` prop exists, render a <p> element with class `error-banner` displaying `error`.
export default function TaskInput() {
  return (
    <div className="task-form-container flex  justify-between p-4 rounded-md">
      <div className="task-input-container flex-1 mr-2">
        <input
          type="text"
          placeholder="Add a new task..."
          className="task-input border w-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <button type="submit">Add Task</button>
      </div>
    </div>
  );
}
