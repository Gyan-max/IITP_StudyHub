import { FolderOpen } from 'lucide-react';
import ResourceCard from '../components/ResourceCard';

const Resources = () => {
  // Sample resources data
  const resources = [
    {
      id: 1,
      title: 'Complete C Programming Notes',
      description: 'Comprehensive notes for Introduction to Programming',
      type: 'notes',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Physics Laboratory Manual',
      description: 'Complete lab manual with all experiments',
      type: 'notes',
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'Linear Algebra - Gilbert Strang',
      description: 'Recommended textbook for Mathematics courses',
      type: 'book',
      link: '#'
    },
    {
      id: 4,
      title: 'Data Structures Video Lectures',
      description: 'Complete video series on DSA concepts',
      type: 'video',
      link: '#'
    },
    {
      id: 5,
      title: 'Chemistry Lab Report Format',
      description: 'Standard format for chemistry lab reports',
      type: 'notes',
      downloadUrl: '#'
    },
    {
      id: 6,
      title: 'Digital Logic Design Notes',
      description: 'Complete notes with circuit diagrams',
      type: 'notes',
      downloadUrl: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
            <FolderOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Study Resources
          </h1>
          <p className="text-lg text-gray-600">
            Access curated notes, books, videos, and other learning materials
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {['All', 'Notes', 'Books', 'Videos'].map((category) => (
            <button
              key={category}
              className="bg-white px-6 py-3 rounded-lg font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-all shadow-sm"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>

        {/* Upload Section */}
        <div className="mt-12 bg-primary-50 rounded-xl p-8 border border-primary-200 text-center">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            Want to Contribute?
          </h3>
          <p className="text-primary-800 mb-6">
            Help your fellow students by sharing your notes and resources
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Upload Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
