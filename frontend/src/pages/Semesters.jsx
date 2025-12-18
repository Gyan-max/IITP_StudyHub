import { useState } from 'react';
import SubjectCard from '../components/SubjectCard';
import { GraduationCap } from 'lucide-react';

const Semesters = () => {
  const [selectedSemester, setSelectedSemester] = useState(1);

  // Sample data - will be replaced with API calls later
  const subjects = {
    1: [
      {
        id: 'ma101',
        name: 'Mathematics I',
        code: 'MA101',
        description: 'Calculus and Linear Algebra',
        semester: 1,
        topics: 12,
        resources: 8
      },
      {
        id: 'ph101',
        name: 'Physics I',
        code: 'PH101',
        description: 'Mechanics and Thermodynamics',
        semester: 1,
        topics: 10,
        resources: 6
      },
      {
        id: 'ch101',
        name: 'Chemistry',
        code: 'CH101',
        description: 'Basic Chemistry Concepts',
        semester: 1,
        topics: 8,
        resources: 5
      },
      {
        id: 'cs101',
        name: 'Introduction to Programming',
        code: 'CS101',
        description: 'Programming fundamentals with C',
        semester: 1,
        topics: 15,
        resources: 12
      }
    ],
    2: [
      {
        id: 'ma102',
        name: 'Mathematics II',
        code: 'MA102',
        description: 'Differential Equations and Vector Calculus',
        semester: 2,
        topics: 14,
        resources: 10
      },
      {
        id: 'ph102',
        name: 'Physics II',
        code: 'PH102',
        description: 'Electromagnetism and Optics',
        semester: 2,
        topics: 12,
        resources: 7
      }
    ]
  };

  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
            <GraduationCap className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Subjects by Semester
          </h1>
          <p className="text-lg text-gray-600">
            Select a semester to view all subjects and resources
          </p>
        </div>

        {/* Semester Selector */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {semesters.map((sem) => (
              <button
                key={sem}
                onClick={() => setSelectedSemester(sem)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedSemester === sem
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Semester {sem}
              </button>
            ))}
          </div>
        </div>

        {/* Subjects Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Semester {selectedSemester} Subjects
          </h2>
          
          {subjects[selectedSemester] ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subjects[selectedSemester].map((subject) => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Content for Semester {selectedSemester} will be available soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Semesters;
