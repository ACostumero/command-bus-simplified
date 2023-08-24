# Command Bus explained

A command bus is a design pattern used in software architecture to separate the sending of a command (a request to perform an action) from the actual handling of that command. It acts as a mediator between components, helping to decouple the sender of a command from the receiver, or handler, of that command.

## Actors

In the context of a command bus:

* **Command**: A command represents a single action or request that needs to be performed within an application. It encapsulates the necessary information to execute that action.

* **Command Handler**: A command handler is responsible for receiving and processing a specific type of command. It contains the logic to execute the action associated with the command.

* **Command Bus**: The command bus is responsible for dispatching commands to their corresponding handlers. It takes a command, determines which handler is responsible for that command type, and then delegates the execution of the command to the appropriate handler.

## Benefits

1. **Separation of Concerns**: The sender of a command doesn't need to know how the command will be handled; it only needs to know what action it wants to execute.

2. **Single Responsibility Principle**: Each command handler focuses on a single task, making it easier to maintain and understand.

3. **Flexibility**: You can add, modify, or remove command handlers without affecting the components sending the commands.

4. **Testability**: Command handlers can be easily tested in isolation from other parts of the application.

5. **Centralized Logic**: The command bus provides a central point for managing and controlling the execution of commands.

