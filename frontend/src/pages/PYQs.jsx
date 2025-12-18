import { useState } from 'react';
import { FileQuestion, Filter } from 'lucide-react';
import ResourceCard from '../components/ResourceCard';

const PYQs = () => {
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Sample PYQ data
  const pyqs = [
    {
      id: 1,
      title: 'Mathematics I - Mid Semester 2023',
      description: 'Mid semester examination paper with solutions',
      type: 'pyq',
      year: '2023',
      semester: 1,
      examType: 'Mid Semester',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Physics I - End Semester 2023',
      description: 'End semester examination paper',
      type: 'pyq',
      year: '2023',
      semester: 1,
      examType: 'End Semester',
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'Computer Programming - Quiz 2022',
      description: 'Quiz paper with detailed solutions',
      type: 'pyq',
      year: '2022',
      semester: 1,
      examType: 'Quiz',
      downloadUrl: '#'
    },
    {
      id: 4,
      title: 'Data Structures - Mid Semester 2023',
      description: 'Mid semester examination paper',
      type: 'pyq',
      year: '2023',
      semester: 3,
      examType: 'Mid Semester',
      downloadUrl: '#'
    }
  ];

  const filteredPYQs = pyqs.filter(pyq => {
    const semesterMatch = selectedSemester === 'all' || pyq.semester === parseInt(selectedSemester);
    const typeMatch = selectedType === 'all' || pyq.examType === selectedType;
    return semesterMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
            <FileQuestion className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Previous Year Questions
          </h1>
          <p className="text-lg text-gray-600">
            Access past exam papers to boost your preparation
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-gray-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Semester
              </label>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Semesters</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                  <option key={sem} value={sem}>Semester {sem}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Exam Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Types</option>
                <option value="Mid Semester">Mid Semester</option>
                <option value="End Semester">End Semester</option>
                <option value="Quiz">Quiz</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredPYQs.length} Papers Found
            </h2>
          </div>

          {filteredPYQs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPYQs.map((pyq) => (
                <ResourceCard key={pyq.id} resource={pyq} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-xl">
              <FileQuestion className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                No papers found for the selected filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PYQs;
