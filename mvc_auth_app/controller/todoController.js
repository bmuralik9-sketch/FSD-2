import Todo from "../model/todoModel.js";

const createTodo = async (req, res) => {

  try {
    const savedTodo = await Todo.create({ todo: req.body.todo, userId: req.userId });
    res
      .status(201)
      .json({ message: "Todo created successfully", todo: savedTodo });
  } catch (err) {
    res.status(500).json({ message: "Failed to create todo" });
  }
};

const readTodos = async (req, res) => {
  const { completed } = req.query;
  try {
    const filter = { userId: req.userId };
    if (completed !== undefined) {
      filter.completed = completed === "true";
    }
    const todos = await Todo.find(filter);
    res
      .status(200)
      .json({ message: "Todos retrieved successfully", todos: todos });
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve todos" });
  }
};

const readTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findOne({ _id: id, userId: req.userId });
    if (todo) {
      res
        .status(200)
        .json({ message: "Todo retrieved successfully", todo: todo });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve todo" });
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const updateTodo = req.body;
  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: id, userId: req.userId },
      updateTodo,
      { new: true }
    );
    if (updatedTodo) {
      res
        .status(200)
        .json({ message: "Todo updated successfully", todo: updatedTodo });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to update todo" });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.findOneAndDelete({ _id: id, userId: req.userId } );
    if (deletedTodo) {
      res
        .status(200)
        .json({ message: "Todo deleted successfully", todo: deletedTodo });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to delete todo" });
  }
};

export { createTodo, readTodos, readTodo, updateTodo, deleteTodo };