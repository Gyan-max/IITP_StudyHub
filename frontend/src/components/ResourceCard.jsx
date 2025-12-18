import { FileText, Download, ExternalLink } from 'lucide-react';

const ResourceCard = ({ resource }) => {
  const getTypeColor = (type) => {
    switch (type) {
      case 'notes':
        return 'bg-blue-100 text-blue-700';
      case 'pyq':
        return 'bg-green-100 text-green-700';
      case 'book':
        return 'bg-purple-100 text-purple-700';
      case 'video':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="card">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            {resource.title}
          </h4>
          <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
        </div>
        <FileText className="h-6 w-6 text-primary-500 ml-3" />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${getTypeColor(resource.type)}`}>
            {resource.type?.toUpperCase()}
          </span>
          {resource.year && (
            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
              {resource.year}
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          {resource.link && (
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
          {resource.downloadUrl && (
            <a
              href={resource.downloadUrl}
              download
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              <Download className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
