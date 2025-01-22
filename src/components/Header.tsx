import React from 'react';
import { GraduationCap } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-futo-primary to-futo-primary/90 text-white py-8 px-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex items-center gap-4">
          <GraduationCap className="w-10 h-10" />
          <div>
            <h1 className="text-4xl font-bold">FUTO Software Engineering</h1>
            <p className="text-lg mt-2 text-gray-100">Enrollment Prediction Dashboard</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-100">Historical Data Range</h3>
            <p className="text-2xl font-bold">2018-2023</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-100">Prediction Accuracy</h3>
            <p className="text-2xl font-bold">85-90%</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h3 className="text-sm font-medium text-gray-100">Latest Intake</h3>
            <p className="text-2xl font-bold">245 Students</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;