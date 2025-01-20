import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Link } from 'react-router-dom';

export const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.taskss.tasks);
  const defaultStartDate = '2025-02-01';
  const defaultEndDate = '2025-01-30';





  return (
    // <div>
    //   <h2>Task List</h2>
    //   <ul>
    //     {tasks.map((task) => (
    //       <li key={task.id}>
    //         <h3>{task.title}</h3>
    //         <p>{task.description}</p>
    //         <p>Submission Date: {task.startDate}</p>
    //         <p>Submission Date: {task.endDate}</p>
    //       </li>
    //     ))}
    //   </ul>
    // </div>



    <main>
      <h1>Task List</h1>
      <div className='flex flex-wrap justify-evenly'>

     
    {tasks.map((task)=>{
      
      const startDate = task.startDate || defaultStartDate;
      const endDate = task.endDate || defaultEndDate;
   
      
      return (
      <div  key={task.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{task.title}</h5>
       
    
    <div className='flex items-end space-x-10'>
      


    <Link to= {`/taskdetails/${task.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Take Task
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </Link>



        <span className=" text-sm  hover:cursor-pointer font-semibold hover:underline hover:decoration-blue-400  text-gray-900 dark:text-white">{startDate} - {endDate}</span>
        
    </div>
</div>)
    }
)}
   
   
    </div>
</main>

  );
};


