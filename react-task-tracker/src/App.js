import Header from './components/Header'
import Tasks from './components/Tasks'
import useState from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'sei la',
      day: 'Feb 5th at 2:30px',
      reminder: true
    }
  ])

  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
