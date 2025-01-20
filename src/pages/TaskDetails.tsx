    import { CiEdit ,  } from "react-icons/ci";
    import {   MdDelete} from "react-icons/md";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

import { useDispatch } from 'react-redux';
import { removeTask} from '../features/tasks/taskSlice'
import { useState } from "react";
import {EditTask} from "../components/EditTask";

interface Task {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

export const TaskDetails = () => {

  const [editStatus , setEdit ] = useState(false)
  console.log(editStatus)

  const dispatch = useDispatch();

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
    <main>

    <div className="p-4 space-y-4">
{editStatus?(
  
  <EditTask task= {task}></EditTask>

):(
  
  <div className='flex flex-col'>
  <h1 className="text-2xl font-bold text-gray-800 mu=y mylaptopscreen:text-sm">Topic:{task.title}</h1>
  <p className="text-gray-600 mylaptopscreen:text-xs">Details:{task.description}</p>
</div>
)}



        <div>







    <p className="text-gray-600 mylaptopscreen:text-sm" >Start Date: <span className=" mylaptopscreen:text-sm font-semibold">{task.startDate}</span></p>
    <p className="text-gray-600 mylaptopscreen:text-sm">End Date: <span className=" mylaptopscreen:text-sm font-semibold">{task.endDate}</span></p>
    <div className="flex space-x-4">


      <button onClick={()=>setEdit(!editStatus)}><CiEdit /></button>

      <button onClick={()=>dispatch(removeTask(task))}><MdDelete /></button>


    </div>
        </div>
    
      </div>
    
    <div className='flex flex-wrap justify-start gap-3 mylaptopscreen:justify-center'>

      {dateRange.map((date, index) => (



        <div key={index} className="   bg-black p-4 rounded-lg shadow-md flex flex-col  space-y-2 mb-2.5">
          
          <p className="text-white font-semibold">{date.toDateString()}</p>
          
            <form className="max-w-sm ">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
              <textarea id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </form>


        </div>



))}
    
</div>
  
  
    </main>
  );
};

export default TaskDetails;
