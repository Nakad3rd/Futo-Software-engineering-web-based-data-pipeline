import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, GraduationCap } from 'lucide-react';

interface PredictionResultsProps {
  results: {
    predictedStudents: number;
    applicants: number;
    cutoffScore: number;
    capacity: number;
  } | null;
}

const PredictionResults = ({ results }: PredictionResultsProps) => {
  if (!results) return null;

  return (
    <div className="mt-6 space-y-4">
      <h3 className="text-xl font-semibold text-futo-primary">Prediction Results</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4 bg-gradient-to-br from-futo-secondary to-white">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-futo-primary rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Predicted Enrollment</p>
              <p className="text-2xl font-bold text-futo-primary">
                {results.predictedStudents} students
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-futo-accent/20 rounded-lg">
              <Users className="h-6 w-6 text-futo-accent" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Applicants</p>
              <p className="text-2xl font-bold text-futo-accent">
                {results.applicants}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Cutoff Score</p>
              <p className="text-2xl font-bold text-blue-600">
                {results.cutoffScore}/400
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <GraduationCap className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Department Capacity</p>
              <p className="text-2xl font-bold text-purple-600">
                {results.capacity}
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex gap-2 flex-wrap">
        <Badge variant="secondary">
          Capacity Utilization: {Math.round((results.predictedStudents / results.capacity) * 100)}%
        </Badge>
        <Badge variant="secondary">
          Acceptance Rate: {Math.round((results.predictedStudents / results.applicants) * 100)}%
        </Badge>
      </div>
    </div>
  );
};

export default PredictionResults;