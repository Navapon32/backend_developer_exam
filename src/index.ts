import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

let todos: Todo[] = [];
let nextId = 1;

// Get all todos
app.get('/todos', (req: Request, res: Response) => {
  res.json(todos);
});

// Get a single todo by ID
app.get('/todos/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).send({ error: 'Todo not found' });
  }
});

// Create a new todo
app.post('/todos', (req: Request, res: Response) => {
  const { title } = req.body;
  if (title) {
    const newTodo: Todo = {
      id: nextId++,
      title,
      completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  } else {
    res.status(400).send({ error: 'Title is required' });
  }
});

// Update a todo by ID
app.put('/todos/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;
  const todo = todos.find(t => t.id === id);
  if (todo) {
    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;
    res.json(todo);
  } else {
    res.status(404).send({ error: 'Todo not found' });
  }
});

// Delete a todo by ID
app.delete('/todos/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(t => t.id === id);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send({ error: 'Todo not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
