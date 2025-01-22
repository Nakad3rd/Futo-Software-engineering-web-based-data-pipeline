import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { predictEnrollment } from '@/utils/predictionModel';
import PredictionResults from './PredictionResults';

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    applicants: '',
    cutoffScore: '',
    capacity: '',
  });

  const [results, setResults] = useState(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const predicted = predictEnrollment(
      Number(formData.applicants),
      Number(formData.cutoffScore),
      Number(formData.capacity)
    );

    setResults({
      predictedStudents: predicted,
      applicants: Number(formData.applicants),
      cutoffScore: Number(formData.cutoffScore),
      capacity: Number(formData.capacity),
    });

    toast({
      title: "Prediction Complete",
      description: "Scroll down to see the detailed results",
    });
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-futo-primary">Predict Future Enrollment</h2>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="applicants">Number of Applicants</Label>
            <Input
              id="applicants"
              type="number"
              value={formData.applicants}
              onChange={(e) => setFormData({ ...formData, applicants: e.target.value })}
              placeholder="Enter number of applicants"
              required
            />
          </div>

          <div>
            <Label htmlFor="cutoffScore">Cutoff Score (0-400)</Label>
            <Input
              id="cutoffScore"
              type="number"
              min="0"
              max="400"
              value={formData.cutoffScore}
              onChange={(e) => setFormData({ ...formData, cutoffScore: e.target.value })}
              placeholder="Enter cutoff score"
              required
            />
          </div>

          <div>
            <Label htmlFor="capacity">Department Capacity</Label>
            <Input
              id="capacity"
              type="number"
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
              placeholder="Enter department capacity"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-futo-primary hover:bg-futo-primary/90">
            Generate Prediction
          </Button>
        </div>
      </form>

      <PredictionResults results={results} />
    </div>
  );
};

export default PredictionForm;