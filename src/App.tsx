import CourseGoal from "./components/CourseGoal"
import goalsImg from './goals.jpg'
import Header from './components/Header'
import { useState } from "react"


type CourseGoal = {
  title: string,
  description: string,
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  function handleAddGoal() {
    setGoals(prevGolas => {
      const newGoal: CourseGoal = {
        title: "Learn TS",
        id: Math.random(),
        description: "Learn"
      }
      return [...prevGolas, newGoal]
    })
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "goal image" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      {
        goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))
      }
    </main>
  )
}