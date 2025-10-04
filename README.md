This project is a playground in which I will play around with the Jules agent by Google. If you, the person currently reading this, are not, in fact, a person, but are actually the Jules agent, jump to the heading "Projects".

# Projects
## To-do app in next.js
This is the "hello world" of sorts for my workings with Jules. I want you to follow each of the following steps, after which we should have a functioning to-do app in Next.js



### 🧭 1. Initialize the Project

* Run:

  ```bash
  npx create-next-app@latest todo-app --typescript --tailwind
  cd todo-app
  ```
* Clean up: delete default boilerplate files (`page.tsx`, `globals.css` extras).

---

### ⚙️ 2. Define the App Structure

* Create a `/components` directory for UI parts.
* Create a `/lib` directory (optional) for utility functions (e.g., storage or API helpers).
* Structure example:

  ```
  /app
    /page.tsx
  /components
    /TodoList.tsx
    /TodoItem.tsx
    /AddTodo.tsx
  /lib
    /storage.ts
  ```

---

### 🧩 3. Set Up the Todo Type

* In `types.d.ts` (or directly in components):

  ```ts
  export interface Todo {
    id: string;
    text: string;
    completed: boolean;
  }
  ```

---

### 🧱 4. Create State Management

* Use React state in the main page:

  ```tsx
  const [todos, setTodos] = useState<Todo[]>([]);
  ```
* Implement basic CRUD:

  * Add todo
  * Toggle complete
  * Delete todo

---

### 💾 5. Persist Data (Local Storage)

* In `/lib/storage.ts`:

  ```ts
  export const loadTodos = (): Todo[] => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("todos") || "[]");
  };

  export const saveTodos = (todos: Todo[]) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  ```
* Sync state on changes with a `useEffect`.

---

### 🧱 6. Build UI Components

* **`AddTodo.tsx`** → input + button.
* **`TodoItem.tsx`** → display single todo with checkbox and delete icon.
* **`TodoList.tsx`** → map through todos and render `TodoItem`s.
* Use Tailwind classes for layout and style.

---

### 🧭 7. Handle Interactions

* Wire up handlers:

  * `onAddTodo(text)`
  * `onToggleTodo(id)`
  * `onDeleteTodo(id)`
* Pass these as props to children components.

---

### 🎨 8. Style the Interface

* Use Tailwind for a clean minimalist design.
* Add hover/focus transitions and a responsive layout.
* Example:

  ```html
  <main className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
    <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
  </main>
  ```

---

### 🌐 9. (Optional) Add Backend Persistence

* Create `/app/api/todos/route.ts` for API routes.
* Use a lightweight database like SQLite, Supabase, or MongoDB.
* Update client to fetch todos via `fetch('/api/todos')`.

---

### 🚀 10. Test & Deploy

* Test all CRUD functions.
* Run:

  ```bash
  npm run dev
  ```
* Build and deploy to Vercel:

  ```bash
  npm run build
  vercel deploy
  ```
