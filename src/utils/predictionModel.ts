import { SimpleLinearRegression } from 'ml-regression';

// Extended historical data with more features
export const historicalData = [
  { year: 2018, students: 150, applicants: 450, cutoffScore: 180, capacity: 200 },
  { year: 2019, students: 180, applicants: 520, cutoffScore: 200, capacity: 200 },
  { year: 2020, students: 165, applicants: 480, cutoffScore: 190, capacity: 200 },
  { year: 2021, students: 200, applicants: 600, cutoffScore: 220, capacity: 250 },
  { year: 2022, students: 220, applicants: 650, cutoffScore: 230, capacity: 250 },
  { year: 2023, students: 245, applicants: 700, cutoffScore: 240, capacity: 250 },
];

export const trainModel = () => {
  // Create a composite feature that combines applicants and cutoff score
  const x = historicalData.map(d => 
    d.applicants * (d.cutoffScore / 400) + d.capacity
  );
  
  const y = historicalData.map(d => d.students);
  
  return new SimpleLinearRegression(x, y);
};

export const predictEnrollment = (
  applicants: number,
  cutoffScore: number,
  capacity: number
): number => {
  const model = trainModel();
  
  // Prepare input feature in the same way as training data
  const compositeFeature = applicants * (cutoffScore / 400) + capacity;
  
  // Make prediction
  const predicted = Math.round(
    model.predict(compositeFeature)
  );
  
  // Ensure prediction doesn't exceed capacity
  return Math.min(predicted, capacity);
};