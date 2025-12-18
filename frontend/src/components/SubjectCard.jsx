import { BookOpen, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubjectCard = ({ subject }) => {
  return (
    <Link to={`/subject/${subject.id}`}>
      <div className="card hover:scale-105 transition-transform cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {subject.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3">{subject.code}</p>
            <p className="text-gray-700 text-sm">{subject.description}</p>
          </div>
          <BookOpen className="h-8 w-8 text-primary-500 ml-4" />
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <FileText className="h-4 w-4 mr-1" />
              <span>{subject.topics || 0} Topics</span>
            </div>
            <div className="flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span>{subject.resources || 0} Resources</span>
            </div>
          </div>
          <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
            Semester {subject.semester}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard;
