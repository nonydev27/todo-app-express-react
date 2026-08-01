// ==========================================
// BACKEND SERVER: Express & REST API
// ==========================================

// STEP 1: Dependencies & Initialization
// - Require 'express' and 'joi'.
// - Initialize Express app (`const app = express()`).
// - Apply JSON body-parser middleware (`app.use(express.json())`).

// STEP 2: In-Memory Database (Sample Data)
// - Create a mutable `todos` array containing sample task objects:
//   [{ id: 1, title: "Learn Express REST APIs", completed: true }, ...]

// STEP 3: Joi Validation Schemas
// - Define `todoSchema` for creation (POST):
//   - title: string, required, min 3 chars, max 100 chars.
// - Define `updateTodoSchema` for edits (PUT):
//   - title: string, optional.
//   - completed: boolean, optional.

// STEP 4: REST API Endpoints

// --- GET /api/todos ---
// - Fetch all tasks from the `todos` array.
// - Response: res.json(todos) with status 200.

// --- POST /api/todos ---
// - Validate `req.body` using `todoSchema.validate(req.body)`.
// - If error: Return early with status 400 and `{ message: error.details[0].message }`.
// - If valid:
//   - Generate a unique ID (e.g., auto-increment based on last item or 1).
//   - Construct new task object: `{ id, title: value.title, completed: false }`.
//   - Push to `todos` array.
//   - Response: res.status(201).json(newTodo).

// --- PUT /api/todos/:id ---
// - Extract `id` from `req.params.id` (parse to integer).
// - Find the task in `todos` array (`todos.find(...)`).
// - If task not found: Return early with status 404 and `{ message: "Task not found" }`.
// - Validate `req.body` using `updateTodoSchema.validate(req.body)`.
// - If error: Return status 400 with message.
// - If valid:
//   - Update `title` if provided in `req.body`.
//   - Update `completed` if provided in `req.body`.
// - Response: res.json(updatedTodo).

// --- DELETE /api/todos/:id ---
// - Extract `id` from `req.params.id` (parse to integer).
// - Find index of task using `todos.findIndex(...)`.
// - If index === -1: Return early with status 404 and `{ message: "Task not found" }`.
// - Remove item using `todos.splice(index, 1)`.
// - Response: res.json(deletedItem[0]).

// STEP 5: Start Server
// - Define port from `process.env.PORT || 5000`.
// - Start listening: `app.listen(PORT, callback)`.
