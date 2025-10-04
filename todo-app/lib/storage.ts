import { Todo } from "@/types";

export const loadTodos = (): Todo[] => {
  if (typeof window === "undefined") return [];
  try {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  } catch (e) {
    console.error("Failed to parse todos from localStorage", e);
    return [];
  }
};

export const saveTodos = (todos: Todo[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};