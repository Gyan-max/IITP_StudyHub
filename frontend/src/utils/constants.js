// Sample data - will be replaced with API calls later
export const SEMESTERS = [1, 2, 3, 4, 5, 6, 7, 8];

export const EXAM_TYPES = ['Mid Semester', 'End Semester', 'Quiz'];

export const RESOURCE_TYPES = {
  NOTES: 'notes',
  PYQ: 'pyq',
  BOOK: 'book',
  VIDEO: 'video'
};

export const SAMPLE_SUBJECTS = {
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
