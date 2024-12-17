import { Controller, Post, Get, Param, Body, Patch, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './schemas/todo.schema';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  // Create a new Todo
  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

  // Get all Todos
  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  // Get a Todo by ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  // Update a Todo by ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoService.update(id, updateTodoDto);
  }

  // Delete a Todo by ID
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.todoService.remove(id);
  }
}
