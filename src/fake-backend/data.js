// ========== STUDENT DATA ==========
export const demoStudent = {
  id: 1,
  name: "Demo Student",
  ecoScore: 82,
  habitsTracked: 12,
  co2SavedKg: 4.1,
};

// ========== MODULE DATA ==========
export const demoModules = [
  {
    id: 1,
    title: "Climate Basics",
    level: "Beginner",
    videos: [
      {
        id: 1,
        title: "Introduction to Climate",
        url: "https://www.youtube.com/embed/Hy51gQxhAGE",
        watched: false
      },
      {
        id: 2,
        title: "What is sustainable development?",
        url: "https://www.youtube.com/embed/DVCNPhgC5wE",
        watched: false
      }
    ]
  },

  {
    id: 2,
    title: "Water Warriors",
    level: "Intermediate",
    videos: [
      {
        id: 1,
        title: "Water Cycle Explained",
        url: "https://www.youtube.com/embed/ncORPosDrjI",
        watched: false
      },
      {
        id: 2,
        title: "Saving Water at Home",
        url: "https://www.youtube.com/embed/nAdIUHu2cjA",
        watched: false
      },
      {
        id: 3,
        title: "Rain Water Harvesting System",
        url: "https://www.youtube.com/embed/2LtfEz2jimA",
        watched: false
      }
    ]
  },

  {
    id: 3,
    title: "Plastic-Free Campus",
    level: "Intermediate",
    videos: [
      {
        id: 1,
        title: "Understanding Plastic Pollution",
        url: "https://www.youtube.com/embed/DVCNPhgC5wE",
        watched: false
      },
      {
        id: 2,
        title: "Alternatives to Plastic",
        url: "https://www.youtube.com/embed/DVCNPhgC5wE",
        watched: false
      }
    ]
  },

  {
    id: 4,
    title: "Plantaion drive",
    level: "Advanced",
    videos: [
      {
        id: 1,
        title: "How to plant a tree",
        url: "https://www.youtube.com/embed/SJfpnGEMrKM",
        watched: false
      }
    ]
  }
];

// ========== FUNCTIONS USED BY STUDENT PAGES ==========

// LOGIN ALWAYS RETURNS STUDENT
export function fakeLogin(name) {
  return { ...demoStudent, name: name || "Demo Student" };
}

// RETURNS MODULE LIST (ONLY ONE FUNCTION!)
export function getStudentModules() {
  return demoModules;
}

// ========== ARTICLE LIST ==========
export const demoArticles = [
  {
    id: 1,
    title: "What Is Sustainable Development?",
    description: "Understand the basics of SDGs.",
    link: "https://www.un.org/sustainabledevelopment/sustainable-development-goals/"
  },
  {
    id: 2,
    title: "Plastic Pollution Explained",
    description: "How plastic waste affects the planet.",
    link: "https://www.britannica.com/science/plastic-pollution"
  }
];

// Return articles
// =======================================
// QUIZ DATA — FOR ALL MODULES
// =======================================

export const demoQuizzes = [
  // ---------- Module 1: Climate Basics ----------
  {
    id: 1,
    moduleId: 1,
    title: "Climate Basics Quiz",
    difficulty: "Easy",
    description: "Test your understanding of climate fundamentals.",
    questions: [
      {
        q: "What is the primary cause of global warming?",
        options: [
          "Carbon dioxide emissions",
          "Forest growth",
          "Increased rainfall",
          "Solar eclipses"
        ],
        answer: 0
      },
      {
        q: "Which gas is known as a greenhouse gas?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
        answer: 2
      },
      {
        q: "Which of the following is a renewable energy source?",
        options: ["Coal", "Petroleum", "Wind energy", "Natural gas"],
        answer: 2
      }
    ]
  },

  // ---------- Module 2: Water Warriors ----------
  {
    id: 2,
    moduleId: 2,
    title: "Water Warriors Quiz",
    difficulty: "Medium",
    description: "Check your understanding of water conservation.",
    questions: [
      {
        q: "What is the primary source of freshwater on Earth?",
        options: ["Rivers & lakes", "Oceans", "Atmosphere", "Underground magma"],
        answer: 0
      },
      {
        q: "Which practice saves the most water at home?",
        options: [
          "Taking long showers",
          "Turning off the tap while brushing",
          "Watering plants daily",
          "Keeping taps slightly open"
        ],
        answer: 1
      },
      {
        q: "Rainwater harvesting helps in:",
        options: [
          "Increasing groundwater levels",
          "Creating storms",
          "Polluting rivers",
          "None of the above"
        ],
        answer: 0
      }
    ]
  },

  // ---------- Module 3: Plastic-Free Campus ----------
  {
    id: 3,
    moduleId: 3,
    title: "Plastic-Free Campus Quiz",
    difficulty: "Medium",
    description: "Evaluate your knowledge about plastic pollution.",
    questions: [
      {
        q: "What is the biggest environmental problem caused by plastic?",
        options: [
          "It dissolves quickly",
          "It takes hundreds of years to break down",
          "It produces oxygen",
          "It cleans the ocean"
        ],
        answer: 1
      },
      {
        q: "Which of the following is a good alternative to single-use plastic?",
        options: ["Plastic bags", "Metal bottles", "Styrofoam cups", "Plastic straws"],
        answer: 1
      },
      {
        q: "Microplastics are:",
        options: [
          "Tiny pieces of plastic that pollute water",
          "Healthy minerals",
          "Recyclable plastic parts",
          "Pieces of broken glass"
        ],
        answer: 0
      }
    ]
  },

// ---------- Module 4: Plantation Drive ----------
{
  id: 4,
  moduleId: 4,
  title: "Plantation Drive Quiz",
  difficulty: "Easy",
  description: "Check your knowledge about planting and caring for trees.",
  questions: [
    {
      q: "What is the best season to plant most trees?",
      options: ["Summer", "Monsoon", "Winter", "All seasons"],
      answer: 1
    },
    {
      q: "Why is planting trees important?",
      options: [
        "They improve air quality",
        "Reduce soil erosion",
        "Provide habitat for animals",
        "All of the above"
      ],
      answer: 3
    },
    {
      q: "Which is the correct method to water a young plant?",
      options: [
        "Flood it with lots of water",
        "Water lightly near the roots",
        "Spray water on leaves only",
        "Never water it"
      ],
      answer: 1
    }
  ]
}

];

// Function to return all quizzes
export function getQuizzes() {
  return demoQuizzes;
}
export function getArticles() {
  return demoArticles;
}
