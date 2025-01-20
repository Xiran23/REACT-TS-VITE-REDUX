import React, { useState } from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

interface EditTaskProps {
  task: Task;
  onSubmit: (updatedTask: Task) => void; // Callback for submitting the form
}

export const EditTask: React.FC<EditTaskProps> = ({ task, onSubmit }) => {
  const [formData, setFormData] = useState<Task>(task); // Initialize state with task data

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Submit updated task
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">
        Title
      </label>
      <input
        value={formData.title}
        onChange={handleChange}
        type="text"
        id="title"
        name="title"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">
        Description
      </label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[25rem]"
        placeholder="Leave a comment..."
      ></textarea>

      {/* Date inputs */}
      <div className="flex items-center space-x-4">
        <div className="flex flex-col">
          <label htmlFor="startDate" className="text-sm font-medium text-gray-700">
            Start Date
          </label>
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
          <label htmlFor="endDate" className="text-sm font-medium text-gray-700">
            End Date
          </label>
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

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};
