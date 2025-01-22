import React from 'react';
import { Book, Users, Clock, Award } from 'lucide-react';

const DepartmentInfo = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-futo-primary">Department Overview</h2>
      <p className="text-gray-700 leading-relaxed">
        The Software Engineering Department at FUTO is committed to producing world-class software engineers through a comprehensive curriculum and practical training.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-futo-secondary rounded-lg p-4 flex items-start space-x-3">
          <Clock className="w-5 h-5 text-futo-primary" />
          <div>
            <h3 className="font-semibold text-futo-primary">Program Duration</h3>
            <p className="text-gray-600">5 Years</p>
          </div>
        </div>
        <div className="bg-futo-secondary rounded-lg p-4 flex items-start space-x-3">
          <Award className="w-5 h-5 text-futo-primary" />
          <div>
            <h3 className="font-semibold text-futo-primary">Degree Awarded</h3>
            <p className="text-gray-600">B.Eng Software Engineering</p>
          </div>
        </div>
        <div className="bg-futo-secondary rounded-lg p-4 flex items-start space-x-3">
          <Book className="w-5 h-5 text-futo-primary" />
          <div>
            <h3 className="font-semibold text-futo-primary">Course Load</h3>
            <p className="text-gray-600">180 Units</p>
          </div>
        </div>
        <div className="bg-futo-secondary rounded-lg p-4 flex items-start space-x-3">
          <Users className="w-5 h-5 text-futo-primary" />
          <div>
            <h3 className="font-semibold text-futo-primary">Class Size</h3>
            <p className="text-gray-600">250 Max Capacity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentInfo;