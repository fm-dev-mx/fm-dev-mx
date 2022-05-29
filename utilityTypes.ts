interface Task {
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
  }

  interface CreateTaskDto extends Omit<Task, 'id' | 'createdAt'> {}
  interface UpdateTaskDto extends Omit<Partial<Task>, 'id'> {}
  interface FindTaskDto extends Readonly<Partial<Task>> {}


  export class TodoService {
    private tasks: Task[] = [];

    getTasks(): Task[] {
      return this.tasks;
    }

    find(params: FindTaskDto) {
      return this.tasks;
    }

    addTask(dto: CreateTaskDto): Task  {
      const newTask = {
        id: Math.random(),
        createdAt: new Date(),
        ...dto,
      }
      this.tasks.push(newTask);
      return newTask;
    }

    updateTasks(id: number, changes: UpdateTaskDto): Task{
      const index = this.tasks.findIndex(item => item.id === id);
      this.tasks[index] = {
        ...this.tasks[index],
        ...changes
      };
      return this.tasks[index];
    }
  }

  const service = new TodoService();

  const myTasks = service.getTasks();

  const myNewTask = {
    title: '',
    completed: false,
  }
  service.addTask(myNewTask);

  const id = 9;
  const changes = {
    title: 'newTitle',
    completed: true
  }
  service.updateTasks(9, changes);
