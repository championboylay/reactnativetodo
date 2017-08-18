const getFilteredForDeleteTaskList = (state, id) => {
  const newTasks = state.taskEntry.tasks.filter(item => {
    return item.id !== id;
  });
  return newTasks;
};
export default getFilteredForDeleteTaskList;
