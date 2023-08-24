# Dispatching a Command

## Understanding the Command Bus workflow
How does the Command Bus ecosystem work?

1. **Action Request:** When an application component or user interaction triggers an action (e.g., create a user, update a product), a command representing that action is created. The command contains the necessary data to perform the action.

2. **Command Dispatch:** The application sends the command to the command bus without needing to know how the command will be handled.

3. **Command Bus:** The command bus receives the command and determines which command handler is responsible for that command type. It maintains a mapping between command types and their respective handlers.

4. **Handler Lookup:** The command bus identifies the appropriate command handler based on the type of the command received.

5. **Command Handling:** The command bus delegates the command to the identified command handler for execution.

6. **Command Handler:** The command handler processes the command by executing the associated action using the provided data. This might involve interacting with services, repositories, or other components to fulfill the action's requirements.

7. **Action Execution:** The command handler performs the necessary actions and potentially updates the application state.

8. **Result Reporting:** After completing the action, the command handler may return a result, trigger further actions, or raise events to notify other parts of the application about the outcome.
