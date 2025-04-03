import React, { useState } from "react";
import "./WorkoutProgress.css";

const WorkoutProgress = ({ onCapture }) => {
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState("");
  const [reps, setReps] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  // Add workout
  const addWorkout = () => {
    if (!exercise.trim() || !reps.trim()) {
      setError("Please enter both exercise name and reps.");
      return;
    }
    if (isNaN(reps) || reps <= 0) {
      setError("Reps should be a valid positive number.");
      return;
    }

    setWorkouts([...workouts, { exercise, reps, image }]);
    setExercise("");
    setReps("");
    setImage(null);
    setError("");
  };

  return (
    <div className="workout-container">
      <h2>My Workout Progress Sliver Fitness </h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Exercise Name"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="workout-input"
          autoFocus
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="workout-input"
        />
      </div>

      {/* Image Upload */}
      <label className="upload-label">
        📸 Upload Image
        <input type="file" accept="image/*" onChange={handleImageUpload} className="image-input" />
      </label>

      {/* Image Preview */}
      {image && <img src={image} alt="Workout" className="workout-preview" />}

      {error && <p className="error-message">{error}</p>}

      <button onClick={addWorkout} className="workout-button">
        ➕ Add Workout
      </button>

      <div className="workout-list">
        {workouts.length === 0 ? (
          <p className="empty-message">No workouts added yet.</p>
        ) : (
          workouts.map((workout, index) => (
            <div key={index} className="workout-card">
              <p className="workout-text">{workout.exercise} - {workout.reps} reps</p>
              {workout.image && <img src={workout.image} alt="Workout" className="workout-preview" />}
            </div>
          ))
        )}
      </div>

      <button onClick={onCapture} className="capture-btn">
        📷 Capture & Share
      </button>
    </div>
  );
};

export default WorkoutProgress;
