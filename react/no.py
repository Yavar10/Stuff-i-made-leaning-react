def add_task(filename="todo.txt"):
  """Adds a new task to the to-do list."""
  description = input("Enter Task Description: ")
  try:
    with open(filename, "r") as f:
      tasks = f.readlines()
  except FileNotFoundError:
    tasks = []
  
  task_id = len(tasks) + 1
  new_task = f"{task_id} | {description} | Pending\n"
  tasks.append(new_task)

  with open(filename, "w") as f:
    f.writelines(tasks)
  print("Task added successfully.")


def view_tasks(filename="todo.txt"):
  """Views all tasks in the to-do list."""
  try:
    with open(filename, "r") as f:
      tasks = f.readlines()
  except FileNotFoundError:
    print("No tasks found.")
    return

  if not tasks:
    print("No tasks found.")
    return
  
  print("Task ID | Description | Status")
  print("-----------------------------------------")
  for task in tasks:
    print(task, end="")


def mark_completed(filename="todo.txt"):
    """Marks a task as completed."""
    try:
        with open(filename, "r") as f:
            tasks = f.readlines()
    except FileNotFoundError:
        print("No tasks found.")
        return
    
    if not tasks:
        print("No tasks found.")
        return

    task_id_to_complete = int(input("Enter Task ID to mark as completed: "))
    
    found = False
    for i, task in enumerate(tasks):
        parts = task.strip().split(" | ")
        if len(parts) == 3:  # Check if the task has the correct format
            current_id = int(parts[0])
            if current_id == task_id_to_complete:
                tasks[i] = f"{current_id} | {parts[1]} | Completed\n"
                found = True
                break

    if found:
        with open(filename, "w") as f:
            f.writelines(tasks)
        print("Task marked as completed successfully.")
    else:
        print("Task not found.")


def delete_task(filename="todo.txt"):
    """Deletes a task from the to-do list."""
    try:
        with open(filename, "r") as f:
            tasks = f.readlines()
    except FileNotFoundError:
        print("No tasks found.")
        return

    if not tasks:
        print("No tasks found.")
        return
    
    task_id_to_delete = int(input("Enter Task ID to delete: "))

    found = False
    updated_tasks = []
    for task in tasks:
      parts = task.strip().split(" | ")
      if len(parts) == 3:
        current_id = int(parts[0])
        if current_id != task_id_to_delete:
          updated_tasks.append(task)
        else:
          found = True
    
    if found:
      with open(filename, "w") as f:
        f.writelines(updated_tasks)
      print("Task deleted successfully.")
    else:
      print("Task not found.")

