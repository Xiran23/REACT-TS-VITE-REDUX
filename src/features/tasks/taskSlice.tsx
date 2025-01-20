import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: string;
  title: string;
  description: string;
   startDate:string,
      endDate:string
//   submissionDate: string;
}

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
