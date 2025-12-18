import { useParams } from 'react-router-dom';
import { BookOpen, FileText, Target, Calendar } from 'lucide-react';
import ResourceCard from '../components/ResourceCard';

const SubjectDetail = () => {
  const { id } = useParams();

  // Sample data - will be replaced with API calls later
  const subject = {
    id: 'ma101',
    name: 'Mathematics I',
    code: 'MA101',
    description: 'Calculus and Linear Algebra',
    semester: 1,
    credits: 4,
    instructor: 'Dr. John Doe'
  };

  const syllabus = [
    { id: 1, topic: 'Limits and Continuity', status: 'important' },
    { id: 2, topic: 'Differentiation', status: 'important' },
    { id: 3, topic: 'Integration', status: 'important' },
    { id: 4, topic: 'Matrices and Determinants', status: 'normal' },
    { id: 5, topic: 'Vector Spaces', status: 'normal' },
    { id: 6, topic: 'Eigenvalues and Eigenvectors', status: 'important' }
  ];

  const resources = [
    {
      id: 1,
      title: 'Complete Notes - Calculus',
      description: 'Comprehensive notes covering all calculus topics',
      type: 'notes',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Mid Semester 2023',
      description: 'Previous year mid semester question paper',
      type: 'pyq',
      year: '2023',
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'Linear Algebra Textbook',
      description: 'Recommended textbook by Howard Anton',
      type: 'book',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <BookOpen className="h-10 w-10 text-primary-600 mr-4" />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{subject.name}</h1>
                  <p className="text-gray-600">{subject.code}</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-4">{subject.description}</p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Semester {subject.semester}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Target className="h-5 w-5 mr-2" />
                  <span>{subject.credits} Credits</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FileText className="h-5 w-5 mr-2" />
                  <span>{subject.instructor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Syllabus Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Syllabus</h2>
              <ul className="space-y-3">
                {syllabus.map((item) => (
                  <li key={item.id} className="flex items-center justify-between">
                    <span className="text-gray-700">{item.topic}</span>
                    {item.status === 'important' && (
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                        Important
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Resources Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Study Resources</h2>
              <div className="space-y-4">
                {resources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Preparation Tips
              </h3>
              <ul className="space-y-2 text-primary-800">
                <li>• Focus on important topics marked in the syllabus</li>
                <li>• Practice previous year questions regularly</li>
                <li>• Complete assignments and tutorials on time</li>
                <li>• Attend all lectures and take detailed notes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetail;
