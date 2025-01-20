import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

interface Task {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

export const TaskDetails = () => {
  const { id } = useParams<{ id: string }>();  
  const tasks = useSelector((state: RootState) => state.taskss.tasks);  


  const task = tasks.find((task: Task) => task.id === id);

  if (!task) {
    return <div>Task not found</div>;
  }

 
  const generateDateRange = (start: string, end: string): Date[] => {
    const dates: Date[] = [];
    const  currentDate = new Date(start);
    const endDate = new Date(end);
    
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
  
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };





  const dateRange = generateDateRange(task.startDate, task.endDate);
  
  console.log(task);
  console.log(dateRange);

  return (
    <div className="p-4 space-y-4">
    <h1 className="text-2xl font-bold text-gray-800">{task.title}</h1>
    <p className="text-gray-600">{task.description}</p>
    <p className="text-gray-600">Start Date: <span className="font-semibold">{task.startDate}</span></p>
    <p className="text-gray-600">End Date: <span className="font-semibold">{task.endDate}</span></p>
    
    <ul className="space-y-4">
      {dateRange.map((date, index) => (
        <li key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col space-y-2">
          <p className="text-gray-800 font-semibold">{date.toDateString()}</p>
          <textarea
            className="border border-gray-300 p-2 rounded-md w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add comment or update"
          />
        </li>
      ))}
    </ul>
  </div>
  
  );
};

export default TaskDetails;
