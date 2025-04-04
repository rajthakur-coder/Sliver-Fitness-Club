import { useState } from "react";
import { motion } from "framer-motion";
import "./CalorieTracker.css";
import ScanCalorie from "../pages/ScanCalorie";

const foodCalories = {
  Apple: 95,
  Banana: 105,
  Rice: 200,
  Chicken: 165,
  Egg: 70,
  Pizza: 285,
  Salad: 50,
  Bread: 80,
};

function CalorieTracker() {
  const [calories, setCalories] = useState("");
  const [food, setFood] = useState("");
  const [logs, setLogs] = useState([]);

  const addLog = () => {
    if (food && calories) {
      setLogs([...logs, { food, calories: Number(calories) }]);
      setFood("");
      setCalories("");
    }
  };

  return (
    <div className="scan">
      <motion.div
        className="tracker-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Calorie & Nutrition Tracker 🍏</h2>

        <input
          type="text"
          placeholder="Food Item"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          className="input"
        />
        <button onClick={addLog} className="button">Add Entry</button>

        <h3>Total Calories: {logs.reduce((total, log) => total + log.calories, 0)} kcal</h3>

        <div className="log-container">
          {logs.map((log, index) => (
            <div key={index} className="log-item">{log.food} - {log.calories} kcal</div>
          ))}
        </div>
      </motion.div>
      <ScanCalorie />
    </div>
  );
}

export default CalorieTracker;
