import React from 'react';
import Header from '@/components/Header';
import EnrollmentChart from '@/components/EnrollmentChart';
import PredictionForm from '@/components/PredictionForm';
import DepartmentInfo from '@/components/DepartmentInfo';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto py-8 px-4 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Card className="p-6">
              <EnrollmentChart />
            </Card>
            <Card className="p-6">
              <DepartmentInfo />
            </Card>
          </div>
          <div className="space-y-8">
            <Card className="p-6">
              <PredictionForm />
            </Card>
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-futo-primary">Model Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700">Features Used</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Number of Applicants</li>
                    <li>Cutoff Score (JAMB)</li>
                    <li>Department Capacity</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold text-gray-700">Model Type</h3>
                  <p className="text-gray-600">Simple Linear Regression with feature engineering</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold text-gray-700">Accuracy Considerations</h3>
                  <p className="text-gray-600">
                    Predictions are based on historical trends from 2018-2023, 
                    considering the relationship between applicant numbers, 
                    cutoff scores, and final enrollment figures.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;