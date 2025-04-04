import { useState, useEffect } from "react";
import BarcodeScanner from "../Component/BarcodeScanner";
import { fetchNutritionInfo } from "../utils/api";
import "./CalorieTracker.css";

export default function ScanCalorie() {
  const [logs, setLogs] = useState([]);
  const [latestLog, setLatestLog] = useState(null);

  const handleScan = async (barcode) => {
    const product = await fetchNutritionInfo(barcode);
    console.log("🎯 Product Data:", product); // Debug Log

    setLatestLog({ food: product.name, calories: product.calories });
  };

  useEffect(() => {
    if (latestLog) {
      setLogs((prevLogs) => [...prevLogs, latestLog]);
      console.log("📝 Updated Logs:", logs); // Debug Log
    }
  }, [latestLog]);

  return (
    <div className="tracker-container">
      <h2>Calorie & Nutrition Tracker Scan Barcode 🍏</h2>
      <BarcodeScanner onScan={handleScan} />
      <div className="log-container">
        {logs.map((log, index) => (
          <div key={index} className="log-item">
            {log.food} - {log.calories} kcal
          </div>
        ))}
      </div>
    </div>
  );
}
