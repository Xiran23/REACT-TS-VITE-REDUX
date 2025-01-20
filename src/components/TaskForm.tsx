import React,{useState,ChangeEvent} from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice'



interface FormData {
  title: string;
  description: string;
  startDate:string;
  endDate:string;
}

export const TaskForm: React.FC = () => {

  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');

  


  
  const dispatch = useDispatch();

    const [formData, setFormData] = useState<FormData>({
      title: '',
      description: '',
      startDate:'',
      endDate:''
      });
    ;

  
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  
    const { id, value } = e.target;
   
    setFormData({
      ...formData,
      [id]: value,
    });
    
  };


  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault()
    const newTask = {
      id: Date.now().toString(),
      title:formData.title,
      description:formData.description,
       startDate:formData.startDate,
      endDate:formData.endDate
    }
    dispatch(addTask(newTask))
  
  
    console.log('Form Data:', formData);
    setFormData({
      title: '',
      description: '',
      startDate:'',
      endDate:''
    });
   

  }





    


  return (
    <>
    
    
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>


            


                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input 
                    onChange={handleChange}
                    value={formData.title}
                    type="text"
                     id="title" 
                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                
                    <label htmlFor="task-description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descriptions</label>
                    <textarea 
                     id="description"
                     value={formData.description}
                     onChange={handleChange}
                    
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                  {/* date */}

                  <div className="flex items-center space-x-4">
      <div className="flex flex-col">
        <label htmlFor="startDate" className="text-sm font-medium text-gray-700">Start Date</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <span className="text-gray-500">to</span>

      <div className="flex flex-col">
        <label htmlFor="endDate" className="text-sm font-medium text-gray-700">End Date</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>
                  

      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

    </form>

    
    
    </>
  )
}
