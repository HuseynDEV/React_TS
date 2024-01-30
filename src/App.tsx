import goalsImg from './goals.jpg'
import Header from './components/Header'
import { useState } from "react"
import CourseGoalList from './components/CourseGoalList'
import NewGoal from './components/NewGoal'


export type CourseGoal = {
  title: string,
  description: string,
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  function handleAddGoal(goal:string, summary:string) {
    setGoals(prevGolas => {
      const newGoal: CourseGoal = {
        title: goal,
        id: Math.random(),
        description: summary
      }
      return [...prevGolas, newGoal]
    })
  }

  const handleDelete = (id: number) => {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))

  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "goal image" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDelete} />
    </main>
  )
}