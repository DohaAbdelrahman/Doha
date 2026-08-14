// Portfolio data for Doha Adelrahman
// All information is placeholder-based — replace with verified real data

export const profile = {
  name: "Doha Abdelrahman",
  title: "Data Scientist",
  tagline: "Turning Data Into Meaningful Insights.",
  description:
    "Computer Science student specializing in Data Science, with hands-on experience in Python, SQL, Power BI, data analysis, and machine learning.",
  email: "dohaabdo757@gmail.com",
  github: "https://github.com/DohaAbdelrahman",
  linkedin: "https://www.linkedin.com/in/doha-abdelrahman-3540292a5/",
  resumeUrl: "#",
};

export const heroStats = [
  { label: "Machine Learning Projects", icon: "brain" },
  { label: "Technologies & Tools", icon: "code-2" },
  { label: "Certifications", icon: "award" },
  { label: "Data Science Focus", icon: "target" },
];

export const about = {
  bio: [
    "I am a Data Scientist passionate about uncovering patterns in data and building intelligent systems that drive real-world impact. My journey in data science began with a deep curiosity for how data can tell stories and guide decision-making across industries.",
    "My technical foundation spans data analysis, machine learning, predictive modeling, and deep learning — with hands-on experience building end-to-end data pipelines, training models, and deploying ML-powered solutions. I thrive on transforming messy, complex datasets into actionable insights.",
    "I am committed to continuous learning and staying at the forefront of the rapidly evolving AI and machine learning landscape. Whether it's exploring new architectures, fine-tuning models, or building dashboards — I believe in learning by building.",
    "Beyond technical skills, I value clear communication, collaboration, and the ability to translate complex analytical results into language that stakeholders can understand and act upon.",
  ],
  focusAreas: [
    {
      title: "Data Science",
      description:
        "End-to-end data analysis, statistical modeling, and extracting actionable insights from complex datasets.",
      icon: "bar-chart-3",
    },
    {
      title: "Machine Learning",
      description:
        "Building, evaluating, and deploying predictive models using supervised and unsupervised learning techniques.",
      icon: "brain",
    },
    {
      title: "Data Analysis",
      description:
        "Exploratory data analysis, data cleaning, feature engineering, and creating compelling visualizations.",
      icon: "search",
    },
    {
      title: "Artificial Intelligence",
      description:
        "Deep learning, NLP, transformer models, and applying cutting-edge AI research to practical problems.",
      icon: "sparkles",
    },
  ],
};

export const skillCategories = [
  {
    title: "Programming",
    icon: "code-2",
    skills: [
      {
        name: "Python",
        context: [
          "Data Analysis",
          "Machine Learning",
          "Automation",
          "Model Development",
        ],
      },
      {
        name: "SQL",
        context: [
          "Data Querying",
          "Database Management",
          "Data Extraction",
          "Reporting",
        ],
      },
    ],
  },
  {
    title: "Data Analysis",
    icon: "bar-chart-3",
    skills: [
      { name: "Pandas", context: ["Data Wrangling", "Data Cleaning", "ETL"] },
      { name: "NumPy", context: ["Numerical Computing", "Array Operations"] },
      { name: "Matplotlib", context: ["Visualization", "Charts", "Plots"] },
      { name: "Seaborn", context: ["Statistical Plots", "Heatmaps"] },
      { name: "Plotly", context: ["Interactive Dashboards", "Web Viz"] },
    ],
  },
  {
    title: "Machine Learning",
    icon: "brain",
    skills: [
      {
        name: "Scikit-learn",
        context: ["Classification", "Regression", "Clustering"],
      },
      { name: "Regression", context: ["Linear", "Polynomial", "Regularized"] },
      { name: "Classification", context: ["Binary", "Multi-class", "Ensemble"] },
      { name: "Clustering", context: ["K-Means", "DBSCAN", "Hierarchical"] },
      {
        name: "Feature Engineering",
        context: ["Selection", "Transformation", "Creation"],
      },
      { name: "Model Evaluation", context: ["Cross-validation", "Metrics"] },
      { name: "XGBoost", context: ["Gradient Boosting", "Ensemble Methods"] },
      { name: "Random Forest", context: ["Ensemble", "Bagging"] },
    ],
  },
  {
    title: "Deep Learning",
    icon: "cpu",
    skills: [
      { name: "PyTorch", context: ["Neural Networks", "Research", "Training"] },
      { name: "TensorFlow", context: ["Production ML", "Keras Models"] },
      { name: "Transformers", context: ["NLP", "Attention", "Fine-tuning"] },
    ],
  },
  {
    title: "Deployment / MLOps",
    icon: "rocket",
    skills: [
      { name: "Streamlit", context: ["ML Apps", "Dashboards", "Prototyping"] },
      { name: "Flask", context: ["APIs", "Web Services", "ML Serving"] },
      { name: "MLflow", context: ["Experiment Tracking", "Model Registry"] },
      { name: "DVC", context: ["Data Versioning", "Pipeline Management"] },
      { name: "Docker", context: ["Containerization", "Reproducibility"] },
      { name: "Git / GitHub", context: ["Version Control", "Collaboration"] },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  data: string;
  process: string;
  analysis: string;
  modeling: string;
  evaluation: string;
  results: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "hospital-er-dashboard",
    title: "Hospital ER Dashboard",
    shortDescription:
      "Interactive Power BI dashboard for analyzing emergency room operations, patient flow, waiting times, admissions, referrals, and patient satisfaction.",

    problem:
      "The project focuses on analyzing emergency room operations and providing insights into patient flow, hospital performance, waiting times, admissions, referrals, and patient satisfaction to support operational decision-making.",

    data:
      "Hospital ER_Data.csv containing patient records including admission status, visit date, age, gender, department referral, waiting time, satisfaction score, race, and attendance status.",

    process:
      "Cleaned and transformed the emergency room data using Power Query, built the data model, and developed DAX measures to support KPI calculations and interactive analysis.",

    analysis:
      "Analyzed patient trends, admissions, department referrals, waiting times, satisfaction scores, gender distribution, and age groups through interactive Power BI visualizations.",

    modeling:
      "Built a Power BI data model and created DAX measures to support the dashboard KPIs and analytical views.",

    evaluation:
      "Validated the dashboard through KPI and interactive visualization views covering patient volume, admissions, waiting time, referrals, and satisfaction.",

    results:
      "Delivered an interactive dashboard that helps monitor emergency room performance, track admissions, analyze waiting times, improve patient satisfaction, identify busy periods, and support operational decisions.",

    technologies: [
      "Power BI",
      "Power Query",
      "DAX",
      "Data Cleaning",
      "Data Modeling",
      "Data Visualization",
    ],

    githubUrl:
      "https://github.com/DohaAbdelrahman/Hospital-ER-PowerBI-Dashboard",

    category: "Data Analysis",
    featured: true,
  },
  {
    id: "hotel-booking-analysis",
    title: "Hotel Booking Analysis & Cancellation Prediction",

    shortDescription:
      "Analyzed hotel booking data to understand customer behavior, booking patterns, cancellation factors, and their impact on revenue management.",

    problem:
      "The project analyzes booking behavior and the factors that influence hotel cancellations, with the goal of helping hotels improve decision-making, reduce cancellation rates, and optimize revenue management strategies.",

    data:
      "Hotel Booking Demand Dataset containing booking details, customer information, stay duration, distribution channels, market segments, previous booking history, and cancellation status.",

    process:
      "Performed data understanding, preprocessing, exploratory data analysis, and feature engineering. The workflow included handling missing values, removing duplicates, treating outliers, encoding categorical variables, and creating booking-related features.",

    analysis:
      "Analyzed cancellation rates, booking trends, customer types, market segments, lead time, stay duration, deposit types, and distribution channels.",

    modeling:
      "Built a machine learning workflow to predict booking cancellations using the is_canceled target variable, following preprocessing, exploratory analysis, and feature engineering.",

    evaluation:
      "The project evaluates cancellation behavior through exploratory analysis and machine learning modeling, while the Power BI dashboard provides analytical views of booking and cancellation patterns.",

    results:
      "The analysis found that longer lead times were associated with higher cancellation probability, while deposit type, customer segments, and distribution channels also affected cancellation behavior.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "XGBoost",
      "Power BI",
      "Jupyter Notebook",
    ],

    githubUrl:
      "https://github.com/DohaAbdelrahman/Hotel-Booking-Analysis",

    category: "Data Science",
    featured: true,
  },
  {
    id: "fifa-23-dashboard",
    title: "FIFA 23 Players Dashboard",

    shortDescription:
      "Interactive dashboard built with Python, Dash, and Plotly to analyze FIFA player ratings, market values, positions, nationalities, clubs, and performance statistics.",

    problem:
      "The project explores FIFA player data and provides an interactive way to analyze player attributes, compare ratings, explore clubs and leagues, filter players, and understand market values and performance trends.",

    data:
      "FIFA player datasets from multiple seasons, including players_15.csv through players_20.csv, along with processed FIFA analysis datasets.",

    process:
      "Processed and analyzed FIFA player datasets using Python-based data analysis tools, preparing the data for interactive dashboard exploration.",

    analysis:
      "Analyzed overall rating distribution, player nationalities, top clubs, market values, player positions, age distribution, and relationships between player characteristics.",

    modeling:
      "The project is primarily an interactive data analysis and visualization dashboard rather than a predictive modeling project.",

    evaluation:
      "The dashboard provides interactive filters and dynamic visualizations for exploring player attributes, clubs, nationalities, positions, market values, and ratings.",

    results:
      "The dashboard enables users to explore FIFA player trends, identify countries producing highly rated players, compare valuable clubs and players, and examine position-wise and age-related patterns.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Plotly",
      "Dash",
      "Scikit-learn",
      "Jupyter Notebook",
    ],

    githubUrl:
      "https://github.com/DohaAbdelrahman/FIFA-23-Players-Dashboard",

    category: "Data Analysis",
    featured: true,
  },
  {
    id: "employee-management-system",
    title: "Employee Management System",

    shortDescription:
      "Web-based employee management application built with ASP.NET Core MVC, Entity Framework Core, and SQL Server, supporting full CRUD operations.",

    problem:
      "The application provides a simple way to manage employee records through creating, viewing, updating, and deleting employee information.",

    data:
      "Employee records stored in a SQL Server database.",

    process:
      "Built the application using ASP.NET Core MVC with Entity Framework Core for data access and SQL Server for database integration.",

    analysis:
      "The project focuses on managing employee records and providing a responsive interface for common employee management operations.",

    modeling:
      "Implemented application models, controllers, views, database access, and Entity Framework Core migrations.",

    evaluation:
      "The application supports CRUD operations for employee records and integrates with SQL Server for persistent data management.",

    results:
      "Delivered a responsive web-based Employee Management System supporting employee creation, viewing, editing, and deletion.",

    technologies: [
      "ASP.NET Core MVC",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript",
    ],

    githubUrl:
      "https://github.com/DohaAbdelrahman/EmployeeManagementSystem-",

    category: "Software Development",
    featured: false,
  },
 

export interface Experience {
  type: "education" | "program" | "milestone";
  title: string;
  organization: string;
  date: string;
  description: string;
  tags?: string[];
}

export const experiences: Experience[] = [
  {
    type: "program",
    title: "Data Science Program",
    organization: "DEPI — Digital Egypt Pioneers Initiative",
    date: "2024 — Present",
    description:
      "Intensive data science and AI program covering machine learning, deep learning, NLP, and MLOps. Participated in hands-on projects, competitions, and collaborative learning with industry practitioners.",
    tags: ["Machine Learning", "Deep Learning", "Python", "MLOps"],
  },
  {
    type: "program",
    title: "Software Engineering Program",
    organization: "ALX Africa",
    date: "2023 — 2024",
    description:
      "Full-stack software engineering program emphasizing problem-solving, clean code principles, and collaborative development. Built multiple projects using C, Python, and JavaScript.",
    tags: ["Software Engineering", "Python", "Problem Solving", "Teamwork"],
  },
  {
    type: "education",
    title: "Bachelor's Degree",
    organization: "Faculty of Computers and Information",
    date: "Expected Graduation",
    description:
      "Studying Computer Science with a focus on data science, algorithms, artificial intelligence, and software development. Actively participating in data science competitions and research projects.",
    tags: ["Computer Science", "AI", "Algorithms"],
  },
  {
    type: "milestone",
    title: "Machine Learning Specialization",
    organization: "Self-Directed Learning & Online Courses",
    date: "Ongoing",
    description:
      "Continuously expanding expertise through specialized courses and certifications in machine learning, deep learning, NLP, and data engineering from leading educational platforms.",
    tags: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Continuous Learning",
    ],
  },
];

export const certifications = [
  {
    title: "Data Science Professional",
    organization: "DEPI",
    date: "2024",
    skills: ["Machine Learning", "Python", "Data Analysis", "Deep Learning"],
    credentialUrl: "#",
  },
  {
    title: "Software Engineering",
    organization: "ALX Africa",
    date: "2024",
    skills: [
      "Software Engineering",
      "Python",
      "C Programming",
      "Problem Solving",
    ],
    credentialUrl: "#",
  },
  {
    title: "Machine Learning",
    organization: "Online Course",
    date: "2024",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Model Evaluation",
      "Scikit-learn",
    ],
    credentialUrl: "#",
  },
  {
    title: "Python for Data Science",
    organization: "Online Course",
    date: "2023",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
    credentialUrl: "#",
  },
];

export const githubProfile = {
  username: "dohadelrahman",
  url: "https://github.com/dohadelrahman",
  featuredRepos: [
    {
      name: "customer-churn-prediction",
      description: "Machine learning pipeline for predicting customer churn",
      language: "Python",
      stars: 0,
      url: "#",
    },
    {
      name: "sentiment-analysis-nlp",
      description: "NLP-based sentiment analysis with transformer models",
      language: "Python",
      stars: 0,
      url: "#",
    },
    {
      name: "sales-forecasting-dashboard",
      description: "Interactive sales forecasting with Streamlit",
      language: "Python",
      stars: 0,
      url: "#",
    },
    {
      name: "image-classification-cnn",
      description: "CNN-based image classification with PyTorch",
      language: "Python",
      stars: 0,
      url: "#",
    },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
