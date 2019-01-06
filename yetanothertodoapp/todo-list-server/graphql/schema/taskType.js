export default `
  type Task {
    id: ID
    description: String
    complete: Boolean
    getList: List
  }


  input TaskInput {
    description: String
    complete: Boolean
    ListId: ID
  }

  type Query {
    getAllTasks(listId: ID): [Task]
  }


  type Mutation {
    createTask(taskInput: TaskInput!): Task
    updateTodo(id: ID!, taskInput: TaskInput!): Task
    deleteTodo(id: ID!): Boolean
  }
`;
