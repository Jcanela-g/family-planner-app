// src/App.jsx
import "./App.css";

const weeklyMeals = [
  { day: "Monday", main: "Chicken tacos", side: "Rice & beans" },
  { day: "Tuesday", main: "Baked salmon", side: "Roasted broccoli" },
  { day: "Wednesday", main: "Turkey burgers", side: "Sweet potato fries" },
  { day: "Thursday", main: "Pasta with ground turkey", side: "Side salad" },
  { day: "Friday", main: "Homemade pizza", side: "Carrot sticks & hummus" },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Family Meal & Routine Planner</h1>
        <p>Day 1 – Getting the wheels rolling 🚀</p>
      </header>

      <main className="app-main">
        <section className="panel">
          <h2>Meals</h2>
          <p>
            This section will eventually help you plan dinners, grocery lists,
            and repeatable meal templates.
          </p>

          <div className="card">
            <h3>Tonight&apos;s Dinner (Example)</h3>
            <ul>
              <li>Protein: Grilled chicken</li>
              <li>Side: Simple salad</li>
              <li>Bonus: Kid-friendly fruit on the side</li>
            </ul>
          </div>

          <div className="card">
            <h3>This Week&apos;s Dinners</h3>
            <ul>
              {weeklyMeals.map((meal) => (
                <li key={meal.day}>
                  <strong>{meal.day}:</strong> {meal.main} — {meal.side}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="panel">
          <h2>Routines</h2>
          <p>
            This section will track family routines: bedtime, homework, sports,
            and chores.
          </p>

          <div className="card">
            <h3>Evening Routine (Example)</h3>
            <ol>
              <li>Homework / reading</li>
              <li>Shower & pajamas</li>
              <li>Family time</li>
              <li>Brush teeth & bedtime</li>
            </ol>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <small>Built by Jose + Clone Co-Pilot • Day 1 complete ✅</small>
      </footer>
    </div>
  );
}

export default App;
