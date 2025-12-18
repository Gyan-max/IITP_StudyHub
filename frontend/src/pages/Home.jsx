import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Users, Award, ArrowRight, Search } from 'lucide-react';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Organized Resources",
      description: "Access semester-wise subjects, notes, and study materials all in one place"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Track Progress",
      description: "Monitor your preparation progress across subjects and topics"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Peer Collaboration",
      description: "Learn from seniors and contribute to help juniors succeed"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Exam Focused",
      description: "Access previous year questions and important topics for better preparation"
    }
  ];

  const stats = [
    { number: "500+", label: "Study Resources" },
    { number: "50+", label: "Subjects Covered" },
    { number: "1000+", label: "Active Students" },
    { number: "100+", label: "PYQ Papers" }
  ];

  const handleSearch = (query) => {
    // TODO: Implement search functionality
    // This will be connected to the backend API
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to IITP StudyHub
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Your Centralized Academic Preparation Platform
            </p>
            <p className="text-lg mb-8 text-primary-50 max-w-3xl mx-auto">
              Prepare for semester exams, quizzes, and competitive exams with structured resources,
              curated notes, and previous year questions - all designed for IIT Patna students.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBar onSearch={handleSearch} />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/semesters" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center">
                Browse Semesters
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/pyqs" className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors border-2 border-white">
                View PYQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose IITP StudyHub?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to excel in your academics, all in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of IITP students who are already using StudyHub
          </p>
          <Link to="/login" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-block">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
