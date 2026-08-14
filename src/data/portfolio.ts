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
    id: "customer-churn",
    title: "Customer Churn Prediction",
    shortDescription:
      "Built a machine learning pipeline to predict customer churn for a telecom company, achieving high accuracy with ensemble methods and thorough feature engineering.",
    problem:
      "Telecom companies face significant revenue loss when customers switch to competitors. The challenge was to identify at-risk customers early enough to implement targeted retention strategies, reducing churn rates and improving customer lifetime value.",
    data:
      "Used a telecom customer dataset with demographics, account information, service usage patterns, and churn labels. The dataset included both numerical features (tenure, monthly charges) and categorical features (contract type, payment method, internet service).",
    process:
      "Performed comprehensive data cleaning including handling missing values, encoding categorical variables, and addressing class imbalance using SMOTE. Conducted exploratory data analysis to identify key churn drivers and correlations between features.",
    analysis:
      "Discovered that contract type, tenure, monthly charges, and customer support interactions were the strongest predictors of churn. Customers on month-to-month contracts with shorter tenure showed significantly higher churn rates.",
    modeling:
      "Trained and compared multiple models including Logistic Regression, Decision Trees, Random Forest, XGBoost, and a Stacked Ensemble. Used cross-validation and hyperparameter tuning with GridSearchCV to optimize each model.",
    evaluation:
      "Evaluated models using Accuracy, Precision, Recall, F1-Score, and ROC-AUC. The XGBoost model achieved the best balance of precision and recall, critical for minimizing false negatives in churn prediction.",
    results:
      "The final model demonstrated strong predictive capability, identifying high-risk customers with reliable accuracy. Key feature importance analysis revealed actionable business insights for targeted retention campaigns.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "SMOTE",
      "Matplotlib",
      "Seaborn",
      "Jupyter",
    ],
    githubUrl: "#",
    category: "Machine Learning",
    featured: true,
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis with NLP",
    shortDescription:
      "Developed an NLP-powered sentiment analysis pipeline to classify customer reviews, leveraging transformer models for nuanced understanding of opinion and emotion.",
    problem:
      "Understanding customer sentiment at scale is crucial for product improvement and brand management. Manual review analysis is impractical for large volumes of feedback, necessitating an automated, accurate NLP solution.",
    data:
      "Worked with a large dataset of customer reviews containing text, ratings, and metadata. The dataset presented challenges including slang, mixed languages, sarcasm, and varying review lengths requiring careful preprocessing.",
    process:
      "Implemented text preprocessing including tokenization, stop-word removal, lemmatization, and handling class imbalance. Experimented with both traditional feature extraction (TF-IDF, Word2Vec) and contextual embeddings from transformer models.",
    analysis:
      "Found that product quality, customer service, and delivery speed were the primary sentiment drivers. Negative reviews frequently cited shipping delays and product defects, while positive reviews emphasized value and usability.",
    modeling:
      "Built and compared models including Naive Bayes, LSTM networks, and fine-tuned transformer models (BERT-based). The transformer approach significantly outperformed traditional methods on nuanced sentiment classification.",
    evaluation:
      "Used Accuracy, Precision, Recall, F1, and Confusion Matrices for evaluation. The transformer model achieved strong results across all sentiment classes, particularly in distinguishing between neutral and negative sentiments.",
    results:
      "The final NLP pipeline successfully categorized reviews with high accuracy, providing actionable sentiment insights. The system could process new reviews in real-time, enabling continuous monitoring of customer feedback.",
    technologies: [
      "Python",
      "PyTorch",
      "Transformers",
      "NLTK",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
    ],
    githubUrl: "#",
    category: "NLP / Deep Learning",
    featured: true,
  },
  {
    id: "sales-forecasting",
    title: "Sales Forecasting Dashboard",
    shortDescription:
      "Created an end-to-end sales forecasting system with an interactive dashboard, combining time series analysis with machine learning for accurate revenue predictions.",
    problem:
      "Accurate sales forecasting is essential for inventory management, resource planning, and financial projections. Traditional spreadsheet-based forecasts were insufficient for handling the complexity and volume of multi-product sales data.",
    data:
      "Utilized historical sales data with daily records across multiple product categories, including date, product details, quantity, price, promotions, and seasonal indicators. The dataset spanned multiple years to capture trends and seasonality.",
    process:
      "Performed time series decomposition to separate trend, seasonality, and residual components. Engineered features including lag values, rolling statistics, and holiday indicators. Built automated data pipelines for continuous updates.",
    analysis:
      "Identified strong seasonal patterns with peak sales periods, promotional impacts, and long-term growth trends. Product categories showed varying sensitivity to promotions and economic factors, requiring category-specific models.",
    modeling:
      "Implemented and compared forecasting approaches including ARIMA, Prophet, and ML-based methods using XGBoost and LSTM networks. Developed ensemble strategies combining statistical and machine learning forecasts for improved accuracy.",
    evaluation:
      "Evaluated forecast accuracy using MAE, RMSE, MAPE, and directional accuracy metrics. The ensemble approach consistently outperformed individual models across all product categories and time horizons.",
    results:
      "Delivered an interactive Streamlit dashboard enabling stakeholders to view forecasts, adjust parameters, and explore scenario analysis. The system improved forecast accuracy over previous methods and supported data-driven planning decisions.",
    technologies: [
      "Python",
      "Streamlit",
      "Prophet",
      "XGBoost",
      "Scikit-learn",
      "Pandas",
      "Plotly",
      "Docker",
    ],
    githubUrl: "#",
    demoUrl: "#",
    category: "Data Science",
    featured: true,
  },
  {
    id: "image-classification",
    title: "Image Classification with CNN",
    shortDescription:
      "Built a convolutional neural network for image classification, implementing data augmentation and transfer learning to achieve robust performance on visual recognition tasks.",
    problem:
      "Automated image classification is needed across industries from medical imaging to quality control. The challenge was building an efficient model that generalizes well to new images while minimizing computational requirements.",
    data:
      "Worked with a labeled image dataset containing multiple classes. Addressed class imbalance through augmentation strategies and ensured a proper train/validation/test split for unbiased evaluation.",
    process:
      "Implemented comprehensive data preprocessing including resizing, normalization, and data augmentation (rotation, flipping, brightness adjustment). Used transfer learning with pre-trained models as a foundation for fine-tuning.",
    analysis:
      "Explored dataset characteristics including class distribution, image quality patterns, and inter-class similarity. Identified challenging cases and determined optimal augmentation strategies to improve model robustness.",
    modeling:
      "Built CNN architectures from scratch and compared with transfer learning approaches using pre-trained models. Implemented progressive fine-tuning, learning rate scheduling, and early stopping to optimize training.",
    evaluation:
      "Evaluated using classification accuracy, precision, recall, F1-score per class, and confusion matrix analysis. The transfer learning model achieved strong performance with significantly less training time than training from scratch.",
    results:
      "The final model demonstrated reliable classification accuracy across all categories. The project showcased the effectiveness of transfer learning for image classification tasks and the importance of data augmentation for model generalization.",
    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "NumPy",
      "Matplotlib",
    ],
    githubUrl: "#",
    category: "Deep Learning",
    featured: false,
  },
  {
    id: "house-price",
    title: "House Price Prediction",
    shortDescription:
      "Developed a regression model to predict house prices based on property features, applying advanced feature engineering and ensemble methods for accurate real estate valuation.",
    problem:
      "Accurately predicting property values is valuable for buyers, sellers, and real estate professionals. The goal was to build a model that captures the complex relationships between property features and market prices.",
    data:
      "Used a real estate dataset containing property attributes including location, size, rooms, age, amenities, neighborhood quality scores, and historical sale prices. Handled missing values and outliers during preprocessing.",
    process:
      "Conducted thorough exploratory analysis of feature distributions and correlations. Engineered new features including price per square foot, neighborhood aggregates, and temporal features. Addressed multicollinearity and performed feature selection.",
    analysis:
      "Found that location, property size, condition, and neighborhood quality were the strongest price predictors. Identified non-linear relationships between certain features and price, informing model selection decisions.",
    modeling:
      "Trained and evaluated multiple regression models including Linear Regression, Ridge, Lasso, Random Forest Regressor, XGBoost, and Gradient Boosting. Used cross-validation and hyperparameter optimization for each approach.",
    evaluation:
      "Evaluated models using RMSE, MAE, and R-squared metrics. The XGBoost model achieved the lowest error rates, with feature importance analysis confirming the dominance of location and size-related features.",
    results:
      "The model provided reliable price estimates with quantified uncertainty. Feature importance analysis delivered actionable insights for both buyers and sellers about which property attributes most significantly impact value.",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Seaborn",
      "Jupyter",
    ],
    githubUrl: "#",
    category: "Machine Learning",
    featured: false,
  },
  {
    id: "recommender-system",
    title: "Movie Recommender System",
    shortDescription:
      "Designed and implemented a hybrid movie recommender system combining collaborative filtering and content-based methods for personalized movie suggestions.",
    problem:
      "With the vast amount of available content, users need personalized recommendations to discover relevant movies. The challenge was building a system that handles the cold-start problem while providing accurate, diverse suggestions.",
    data:
      "Worked with a movie ratings dataset containing user ratings, movie metadata (genre, director, cast, year), and user demographic information. The sparse nature of the rating matrix presented a key challenge.",
    process:
      "Preprocessed data to handle sparse ratings and missing movie information. Built user-item interaction matrices and content feature vectors. Implemented evaluation protocols using train-test splits with temporal ordering.",
    analysis:
      "Explored rating patterns, genre popularity trends, and user behavior clusters. Identified that combining collaborative signals with content features significantly improved recommendation quality, especially for users with few ratings.",
    modeling:
      "Implemented collaborative filtering (user-based and item-based), content-based filtering using movie features, and matrix factorization techniques. Built a hybrid model that combines recommendations from multiple approaches using weighted scoring.",
    evaluation:
      "Evaluated using RMSE for rating prediction and Precision@K, Recall@K, and NDCG for ranking quality. The hybrid approach consistently outperformed individual methods, particularly in recommendation diversity and coverage.",
    results:
      "The hybrid recommender system delivered personalized and diverse movie suggestions. The system effectively addressed the cold-start problem for new users through content-based fallback recommendations and demonstrated scalability for real-world deployment.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Surprise",
      "Streamlit",
    ],
    githubUrl: "#",
    category: "Machine Learning",
    featured: false,
  },
];

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
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
