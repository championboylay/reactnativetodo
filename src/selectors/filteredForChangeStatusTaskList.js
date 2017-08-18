const filteredForChangeStatusTaskList = (state, id, complete) => {
  const newTasks = state.taskEntry.tasks.map(task => {
    if (task.id !== id) return task;
    return {
      ...task,
      complete: !complete
    };
  });
  return newTasks;
};
export default filteredForChangeStatusTaskList;
