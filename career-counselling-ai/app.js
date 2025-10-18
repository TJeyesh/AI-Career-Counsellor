// Application State
let appState = {
    currentSection: 'home',
    testData: {
        currentStep: 0,
        currentQuestion: 0,
        totalQuestions: 24,
        answers: {},
        personalInfo: {},
        completed: false
    },
    results: null,
    chatHistory: []
};

// Career Data
const careerData = {
    streams: {
        science: {
            description: "For students interested in mathematics, physics, chemistry, and biology",
            subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science"],
            careers: [
                {
                    name: "Engineering (B.Tech)",
                    specializations: ["Computer Science", "Mechanical", "Civil", "Electrical", "Electronics", "Aerospace"],
                    education_path: "12th (PCM) → JEE Main/Advanced → B.Tech (4 years) → Optional M.Tech",
                    salary_range: "₹5-15 LPA",
                    skills: ["Problem-solving", "Analytical thinking", "Mathematics", "Technical skills"],
                    riasec_match: ["Realistic", "Investigative"],
                    future_prospects: "High demand, especially in software and emerging tech",
                    description: "Design, build, and maintain systems, structures, and technology solutions"
                },
                {
                    name: "Medicine (MBBS)",
                    specializations: ["General Medicine", "Surgery", "Pediatrics", "Cardiology", "Neurology"],
                    education_path: "12th (PCB) → NEET → MBBS (5.5 years) → MD/MS (3 years)",
                    salary_range: "₹8-20 LPA",
                    skills: ["Empathy", "Decision-making", "Attention to detail", "Communication"],
                    riasec_match: ["Investigative", "Social"],
                    future_prospects: "Always in demand, prestigious, high earning potential",
                    description: "Diagnose, treat, and prevent diseases and injuries"
                },
                {
                    name: "Data Science & AI",
                    specializations: ["Machine Learning", "AI", "Big Data Analytics", "Business Intelligence"],
                    education_path: "12th (PCM) → B.Tech/B.Sc CS → Certifications/M.Sc",
                    salary_range: "₹6-16 LPA",
                    skills: ["Programming", "Statistics", "Problem-solving", "Critical thinking"],
                    riasec_match: ["Investigative", "Conventional"],
                    future_prospects: "Extremely high growth field, future-ready career",
                    description: "Extract insights from data to drive business decisions"
                },
                {
                    name: "Pharmacy (B.Pharm)",
                    specializations: ["Clinical Pharmacy", "Research", "Hospital Pharmacy"],
                    education_path: "12th (PCB/PCM) → B.Pharm (4 years) → M.Pharm (optional)",
                    salary_range: "₹4-7 LPA",
                    skills: ["Chemistry knowledge", "Attention to detail", "Patient care"],
                    riasec_match: ["Investigative", "Social"],
                    future_prospects: "Stable career with good growth in pharmaceutical industry",
                    description: "Develop, dispense, and manage medications for patient care"
                },
                {
                    name: "Architecture",
                    specializations: ["Urban Planning", "Landscape Architecture", "Interior Design"],
                    education_path: "12th (PCM) → NATA → B.Arch (5 years)",
                    salary_range: "₹5-12 LPA",
                    skills: ["Creativity", "Technical drawing", "Visualization", "Problem-solving"],
                    riasec_match: ["Artistic", "Realistic"],
                    future_prospects: "Good opportunities in construction boom",
                    description: "Design buildings and spaces that are functional and aesthetically pleasing"
                },
                {
                    name: "Biotechnology",
                    specializations: ["Genetic Engineering", "Bioinformatics", "Medical Biotechnology"],
                    education_path: "12th (PCB) → B.Tech Biotech/B.Sc Biotech (4 years) → M.Sc/M.Tech",
                    salary_range: "₹4-10 LPA",
                    skills: ["Research skills", "Laboratory techniques", "Analytical thinking"],
                    riasec_match: ["Investigative"],
                    future_prospects: "Growing field with applications in medicine and agriculture",
                    description: "Apply biological processes to develop products and technologies"
                }
            ]
        },
        commerce: {
            description: "For students interested in business, finance, and economics",
            subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics"],
            careers: [
                {
                    name: "Chartered Accountancy (CA)",
                    specializations: ["Auditing", "Taxation", "Financial Management", "Corporate Finance"],
                    education_path: "12th Commerce → CA Foundation → CA Intermediate → CA Final (4-5 years total)",
                    salary_range: "₹8-15 LPA",
                    skills: ["Numerical ability", "Attention to detail", "Analytical skills", "Ethics"],
                    riasec_match: ["Conventional", "Investigative"],
                    future_prospects: "Highly prestigious, excellent earning potential",
                    description: "Provide financial expertise, auditing, and business advisory services"
                },
                {
                    name: "Company Secretary (CS)",
                    specializations: ["Corporate Law", "Compliance", "Governance"],
                    education_path: "12th Commerce → CS Foundation → CS Executive → CS Professional (3-4 years)",
                    salary_range: "₹5-12 LPA",
                    skills: ["Legal knowledge", "Communication", "Organizational skills"],
                    riasec_match: ["Conventional", "Enterprising"],
                    future_prospects: "Growing demand in corporate sector",
                    description: "Ensure corporate compliance and governance standards"
                },
                {
                    name: "Business Management (BBA/MBA)",
                    specializations: ["Marketing", "Finance", "HR", "Operations", "Entrepreneurship"],
                    education_path: "12th → BBA (3 years) → MBA (2 years optional)",
                    salary_range: "₹4-12 LPA",
                    skills: ["Leadership", "Communication", "Strategic thinking", "Problem-solving"],
                    riasec_match: ["Enterprising", "Social"],
                    future_prospects: "Versatile degree, multiple career paths",
                    description: "Lead teams and organizations to achieve business objectives"
                },
                {
                    name: "Banking & Finance",
                    specializations: ["Investment Banking", "Risk Management", "Financial Planning"],
                    education_path: "12th Commerce → B.Com/BBA Finance (3 years) → Banking exams/Certifications",
                    salary_range: "₹3-10 LPA",
                    skills: ["Numerical skills", "Market knowledge", "Client management"],
                    riasec_match: ["Conventional", "Enterprising"],
                    future_prospects: "Stable with good growth opportunities",
                    description: "Manage financial resources and provide banking services"
                },
                {
                    name: "Digital Marketing",
                    specializations: ["SEO", "Social Media Marketing", "Content Marketing", "Analytics"],
                    education_path: "12th → BBA/B.Com → Digital Marketing Certifications",
                    salary_range: "₹3-8 LPA",
                    skills: ["Creativity", "Analytical skills", "Communication", "Tech-savvy"],
                    riasec_match: ["Enterprising", "Artistic"],
                    future_prospects: "Rapidly growing with digital transformation",
                    description: "Promote products and services through digital channels"
                }
            ]
        },
        arts_humanities: {
            description: "For students interested in social sciences, languages, and creative fields",
            subjects: ["History", "Political Science", "Psychology", "Sociology", "Literature", "Languages"],
            careers: [
                {
                    name: "Law (LLB)",
                    specializations: ["Corporate Law", "Criminal Law", "Civil Law", "IP Law"],
                    education_path: "12th → 5-year integrated LLB OR BA (3 years) → LLB (3 years)",
                    salary_range: "₹4-12 LPA",
                    skills: ["Analytical thinking", "Communication", "Research", "Argumentation"],
                    riasec_match: ["Enterprising", "Investigative"],
                    future_prospects: "High earning potential, prestigious career",
                    description: "Advocate for clients and provide legal counsel and representation"
                },
                {
                    name: "Psychology",
                    specializations: ["Clinical Psychology", "Counseling", "Industrial Psychology", "Research"],
                    education_path: "12th Arts → BA Psychology (3 years) → MA Psychology (2 years) → M.Phil (optional)",
                    salary_range: "₹3-8 LPA",
                    skills: ["Empathy", "Listening", "Analytical skills", "Research"],
                    riasec_match: ["Social", "Investigative"],
                    future_prospects: "Growing awareness about mental health increasing demand",
                    description: "Study behavior and mental processes to help individuals"
                },
                {
                    name: "Journalism & Mass Communication",
                    specializations: ["Print Media", "Broadcast", "Digital Media", "Public Relations"],
                    education_path: "12th → BA Journalism/Mass Com (3 years) → PG Diploma/MA (optional)",
                    salary_range: "₹3-10 LPA",
                    skills: ["Writing", "Communication", "Creativity", "Current affairs knowledge"],
                    riasec_match: ["Artistic", "Enterprising"],
                    future_prospects: "Evolving field with digital media growth",
                    description: "Research, write, and report news and information"
                },
                {
                    name: "Teaching/Education",
                    specializations: ["Primary Education", "Secondary Education", "Special Education", "Educational Administration"],
                    education_path: "12th → BA/B.Sc (3 years) → B.Ed (2 years) → Teaching career",
                    salary_range: "₹3-7 LPA",
                    skills: ["Communication", "Patience", "Subject expertise", "Creativity"],
                    riasec_match: ["Social", "Conventional"],
                    future_prospects: "Stable career, respected profession, pension benefits",
                    description: "Educate and inspire students to reach their potential"
                },
                {
                    name: "Civil Services (IAS/IPS/IFS)",
                    specializations: ["Administrative Service", "Police Service", "Foreign Service"],
                    education_path: "12th → Any degree (3-4 years) → UPSC preparation → Civil Services Exam",
                    salary_range: "₹8-20 LPA",
                    skills: ["General knowledge", "Analytical thinking", "Decision-making", "Leadership"],
                    riasec_match: ["Enterprising", "Social"],
                    future_prospects: "Most prestigious career in India, high respect",
                    description: "Serve the nation through various administrative and public service roles"
                },
                {
                    name: "Content Writing/Creative Writing",
                    specializations: ["Technical Writing", "Copywriting", "Fiction Writing", "Blogging"],
                    education_path: "12th Arts → BA English/Journalism (3 years) → Freelancing/Jobs",
                    salary_range: "₹2-8 LPA",
                    skills: ["Writing", "Creativity", "Research", "SEO knowledge"],
                    riasec_match: ["Artistic", "Investigative"],
                    future_prospects: "Growing demand in digital age, flexible work options",
                    description: "Create engaging content for various media and platforms"
                },
                {
                    name: "Fashion Design",
                    specializations: ["Textile Design", "Apparel Design", "Fashion Marketing"],
                    education_path: "12th → Fashion Design diploma/degree (3-4 years) → NIFT entrance",
                    salary_range: "₹3-10 LPA",
                    skills: ["Creativity", "Design sense", "Market trends awareness", "Technical skills"],
                    riasec_match: ["Artistic", "Enterprising"],
                    future_prospects: "Good opportunities in growing fashion industry",
                    description: "Create clothing and accessory designs for various markets"
                }
            ]
        },
        vocational: {
            description: "Skill-based courses for immediate employment and entrepreneurship",
            careers: [
                {
                    name: "ITI Courses",
                    specializations: ["Electrician", "Fitter", "Welder", "Computer Operator", "Mechanic", "Plumber"],
                    education_path: "After 10th → ITI diploma → Job/Apprenticeship",
                    salary_range: "₹2-5 LPA",
                    skills: ["Technical skills", "Practical knowledge", "Problem-solving"],
                    riasec_match: ["Realistic"],
                    future_prospects: "Good job opportunities in manufacturing and services",
                    description: "Develop practical skills for immediate employment"
                },
                {
                    name: "Polytechnic Diploma",
                    specializations: ["Civil Engineering", "Mechanical", "Electrical", "Computer Science", "Electronics"],
                    education_path: "After 10th → Polytechnic (3 years) → Job OR Lateral entry to B.Tech",
                    salary_range: "₹3-7 LPA",
                    skills: ["Technical knowledge", "Practical application", "Problem-solving"],
                    riasec_match: ["Realistic", "Investigative"],
                    future_prospects: "Good stepping stone to engineering or direct employment",
                    description: "Technical education for mid-level engineering positions"
                },
                {
                    name: "Hotel Management",
                    specializations: ["Food & Beverage", "Housekeeping", "Front Office"],
                    education_path: "After 10th/12th → Diploma in Hotel Management → Jobs in hospitality",
                    salary_range: "₹3-8 LPA",
                    skills: ["Customer service", "Communication", "Management", "Cultural awareness"],
                    riasec_match: ["Social", "Enterprising"],
                    future_prospects: "Growing tourism industry offers good opportunities",
                    description: "Manage hospitality services and customer experiences"
                },
                {
                    name: "Animation & Multimedia",
                    specializations: ["2D Animation", "3D Animation", "VFX", "Graphic Design"],
                    education_path: "After 10th/12th → Animation courses → Jobs in media/gaming",
                    salary_range: "₹3-7 LPA",
                    skills: ["Creativity", "Technical software skills", "Visual design", "Storytelling"],
                    riasec_match: ["Artistic", "Realistic"],
                    future_prospects: "Growing entertainment and digital media industry",
                    description: "Create visual content for entertainment and digital media"
                }
            ]
        }
    },
    riasecPersonalities: {
        Realistic: {
            description: "Practical, hands-on workers who enjoy physical activities and working with tools",
            traits: ["Practical", "Independent", "Hands-on", "Technical", "Physical"],
            work_preferences: ["Outdoor work", "Using tools and machines", "Physical labor", "Building things"]
        },
        Investigative: {
            description: "Analytical thinkers who enjoy solving complex problems and conducting research",
            traits: ["Analytical", "Curious", "Intellectual", "Methodical", "Independent"],
            work_preferences: ["Research", "Problem-solving", "Analysis", "Scientific work"]
        },
        Artistic: {
            description: "Creative individuals who value self-expression and originality",
            traits: ["Creative", "Expressive", "Original", "Imaginative", "Intuitive"],
            work_preferences: ["Creative projects", "Artistic expression", "Innovation", "Non-routine work"]
        },
        Social: {
            description: "People-oriented individuals who enjoy helping and working with others",
            traits: ["Helpful", "Empathetic", "Communicative", "Patient", "Cooperative"],
            work_preferences: ["Working with people", "Helping others", "Teaching", "Counseling"]
        },
        Enterprising: {
            description: "Confident leaders who enjoy persuading others and taking charge",
            traits: ["Confident", "Persuasive", "Ambitious", "Energetic", "Risk-taking"],
            work_preferences: ["Leadership roles", "Business activities", "Sales", "Managing projects"]
        },
        Conventional: {
            description: "Organized individuals who prefer structured environments and clear procedures",
            traits: ["Organized", "Detail-oriented", "Methodical", "Practical", "Efficient"],
            work_preferences: ["Structured work", "Clear procedures", "Data organization", "Administrative tasks"]
        }
    }
};

// Test Questions
const testQuestions = [
    // Step 1: Personal Information (3 questions)
    {
        step: 1,
        stepTitle: "Personal Information",
        type: "text",
        question: "What is your name?",
        key: "name",
        required: true
    },
    {
        step: 1,
        stepTitle: "Personal Information",
        type: "number",
        question: "What is your age?",
        key: "age",
        required: true,
        min: 14,
        max: 20
    },
    {
        step: 1,
        stepTitle: "Personal Information",
        type: "select",
        question: "Which class are you currently in?",
        key: "currentClass",
        required: true,
        options: [
            { value: "10th", label: "10th Grade" },
            { value: "11th", label: "11th Grade" },
            { value: "12th", label: "12th Grade" },
            { value: "completed12th", label: "Completed 12th" }
        ]
    },
    
    // Step 2: Interest Assessment - RIASEC Model (12 questions)
    {
        step: 2,
        stepTitle: "Interest Assessment",
        type: "likert",
        question: "I enjoy working with tools, machines, or mechanical objects",
        key: "realistic1",
        category: "Realistic"
    },
    {
        step: 2,
        stepTitle: "Interest Assessment",
        type: "likert",
        question: "I like solving complex problems that require deep thinking",
        key: "investigative1",
        category: "Investigative"
    },
    {
        step: 2,
        stepTitle: "Interest Assessment",
        type: "likert",
        question: "I prefer creative activities like drawing, writing, or designing",
        key: "artistic1",
        category: "Artistic"
    },
    {
        step: 2,
        stepTitle: "Interest Assessment",
        type: "likert",
        question: "I enjoy helping others and working in teams",
        key: "social1",
        category: "Social"
    },
    {
        step: 2,
        stepTitle: "Interest Assessment",
        type: "likert",
        question: "I like leading projects and making business decisions",
        key: "enterprising1",
        category: "Enterprising"
    },
    {
        step: 2,
        stepTitle: "Interest Assessment",
        type: "likert",
        question: "I prefer working with data, files, and following established procedures",
        key: "conventional1",
        category: "Conventional"
    },
    {
        step: 2,
        stepTitle: "Interest Assessment",
        type: "likert",
        question: "I enjoy outdoor activities and physical work",
        key: "realistic2",
        category: "Realistic"
    },
    {
        step: 2,
        stepTitle: "Interest Assessment",
        type: "likert",
        question: "I like conducting experiments and analyzing results",
        key: "investigative2",
        category: "Investigative"
    },
    {
        step: 2,
        stepTitle: "Interest Assessment",
        type: "likert",
        question: "I enjoy expressing myself through art, music, or performance",
        key: "artistic2",
        category: "Artistic"
    },
    {
        step: 2,
        stepTitle: "Interest Assessment",
        type: "likert",
        question: "I like teaching or mentoring others",
        key: "social2",
        category: "Social"
    },
    {
        step: 2,
        stepTitle: "Interest Assessment",
        type: "likert",
        question: "I enjoy persuading people and negotiating deals",
        key: "enterprising2",
        category: "Enterprising"
    },
    {
        step: 2,
        stepTitle: "Interest Assessment",
        type: "likert",
        question: "I prefer working in organized and structured environments",
        key: "conventional2",
        category: "Conventional"
    },
    
    // Step 3: Academic Strength (3 questions)
    {
        step: 3,
        stepTitle: "Academic Strengths",
        type: "select",
        question: "Which subject do you find most interesting?",
        key: "favoriteSubject",
        required: true,
        options: [
            { value: "mathematics", label: "Mathematics" },
            { value: "science", label: "Science (Physics/Chemistry/Biology)" },
            { value: "languages", label: "Languages (English/Hindi/Regional)" },
            { value: "socialStudies", label: "Social Studies (History/Geography/Civics)" },
            { value: "arts", label: "Arts (Drawing/Music/Dance)" },
            { value: "computer", label: "Computer Science/IT" }
        ]
    },
    {
        step: 3,
        stepTitle: "Academic Strengths",
        type: "select",
        question: "What type of problems are easiest for you to solve?",
        key: "problemType",
        required: true,
        options: [
            { value: "mathematical", label: "Mathematical calculations and formulas" },
            { value: "logical", label: "Logical reasoning and puzzles" },
            { value: "creative", label: "Creative and open-ended problems" },
            { value: "practical", label: "Practical, real-world problems" },
            { value: "research", label: "Research and analysis problems" }
        ]
    },
    {
        step: 3,
        stepTitle: "Academic Strengths",
        type: "select",
        question: "How do you prefer to learn new things?",
        key: "learningStyle",
        required: true,
        options: [
            { value: "visual", label: "Visual (diagrams, charts, videos)" },
            { value: "auditory", label: "Auditory (listening, discussions)" },
            { value: "handson", label: "Hands-on (practical experiments, activities)" },
            { value: "reading", label: "Reading and writing" },
            { value: "group", label: "Group discussions and collaboration" }
        ]
    },
    
    // Step 4: Personality Assessment (3 questions)
    {
        step: 4,
        stepTitle: "Personality Assessment",
        type: "select",
        question: "In a group project, what role do you naturally take?",
        key: "groupRole",
        required: true,
        options: [
            { value: "leader", label: "Leader - I organize and guide the team" },
            { value: "researcher", label: "Researcher - I gather and analyze information" },
            { value: "creative", label: "Creative contributor - I come up with innovative ideas" },
            { value: "supporter", label: "Supporter - I help others and maintain team harmony" },
            { value: "implementer", label: "Implementer - I focus on getting things done" }
        ]
    },
    {
        step: 4,
        stepTitle: "Personality Assessment",
        type: "select",
        question: "When facing a challenging situation, you typically:",
        key: "challengeApproach",
        required: true,
        options: [
            { value: "analytical", label: "Analyze the problem systematically" },
            { value: "creative", label: "Think of creative and unique solutions" },
            { value: "collaborative", label: "Seek help and advice from others" },
            { value: "practical", label: "Look for the most practical solution" },
            { value: "persistent", label: "Keep trying until I find a solution" }
        ]
    },
    {
        step: 4,
        stepTitle: "Personality Assessment",
        type: "select",
        question: "What kind of work environment appeals to you most?",
        key: "workEnvironment",
        required: true,
        options: [
            { value: "office", label: "Structured office environment" },
            { value: "outdoor", label: "Outdoor or field work" },
            { value: "laboratory", label: "Laboratory or research facility" },
            { value: "creative", label: "Creative studio or artistic space" },
            { value: "social", label: "People-oriented environment" },
            { value: "entrepreneurial", label: "Dynamic business environment" }
        ]
    },
    
    // Step 5: Skills Self-Assessment (4 questions with 1-5 scale)
    {
        step: 5,
        stepTitle: "Skills Assessment",
        type: "likert",
        question: "How confident are you in your mathematical abilities?",
        key: "mathSkills"
    },
    {
        step: 5,
        stepTitle: "Skills Assessment",
        type: "likert",
        question: "How confident are you in your communication and presentation skills?",
        key: "communicationSkills"
    },
    {
        step: 5,
        stepTitle: "Skills Assessment",
        type: "likert",
        question: "How confident are you in your creative and artistic abilities?",
        key: "creativeSkills"
    },
    {
        step: 5,
        stepTitle: "Skills Assessment",
        type: "likert",
        question: "How confident are you in your leadership and decision-making abilities?",
        key: "leadershipSkills"
    },
    
    // Step 6: Career Values (2 questions)
    {
        step: 6,
        stepTitle: "Career Values",
        type: "select",
        question: "What matters most to you in a future career?",
        key: "careerValues",
        required: true,
        options: [
            { value: "salary", label: "High salary and financial security" },
            { value: "passion", label: "Following my passion and interests" },
            { value: "helping", label: "Helping others and making a difference" },
            { value: "recognition", label: "Recognition and social status" },
            { value: "balance", label: "Work-life balance and flexibility" },
            { value: "growth", label: "Learning and career growth opportunities" }
        ]
    },
    {
        step: 6,
        stepTitle: "Career Values",
        type: "select",
        question: "What interests you most about the future?",
        key: "futureInterest",
        required: true,
        options: [
            { value: "technology", label: "Technological advancement and innovation" },
            { value: "society", label: "Social change and helping communities" },
            { value: "environment", label: "Environmental sustainability" },
            { value: "business", label: "Business and entrepreneurship" },
            { value: "arts", label: "Arts, culture, and creative expression" },
            { value: "science", label: "Scientific discovery and research" }
        ]
    }
];

// Chatbot responses
const chatbotResponses = {
    greetings: {
        patterns: ["hi", "hello", "hey", "good morning", "good evening"],
        responses: [
            "Hello! 👋 I'm your AI Career Counsellor. I'm here to help you with any career-related questions. You can ask me about career options, stream selection, entrance exams, or anything else related to your future!",
            "Hi there! 🎯 I'm here to guide you through your career journey. What would you like to know about?"
        ]
    },
    streamSelection: {
        patterns: ["which stream", "what stream", "science or commerce", "stream selection", "choose stream"],
        responses: [
            "Great question! The best stream depends on your interests and strengths. Here's a quick guide:\n\n🔬 **Science**: Choose if you love math, problem-solving, and want careers in engineering, medicine, or research.\n\n💼 **Commerce**: Perfect if you're interested in business, finance, and want careers in CA, business management, or banking.\n\n🎨 **Arts/Humanities**: Ideal if you enjoy creative thinking, social sciences, and want careers in law, psychology, journalism, or civil services.\n\nI recommend taking our aptitude test for a personalized recommendation!"
        ]
    },
    engineering: {
        patterns: ["engineering", "become engineer", "b tech", "jee"],
        responses: [
            "Engineering is a great choice! 🚀\n\n**Path**: 12th (PCM) → JEE Main/Advanced or State Engineering Entrance → B.Tech (4 years)\n\n**Popular branches**: Computer Science, Mechanical, Civil, Electrical, Electronics\n\n**Salary**: ₹5-15 LPA for freshers\n\n**Skills needed**: Problem-solving, mathematics, logical thinking\n\n**Future**: High demand especially in software, AI, and emerging technologies!"
        ]
    },
    medicine: {
        patterns: ["doctor", "mbbs", "medicine", "medical", "neet"],
        responses: [
            "Medicine is a noble and prestigious career! 🩺\n\n**Path**: 12th (PCB) → NEET exam → MBBS (5.5 years) → Optional MD/MS (3 years)\n\n**Specializations**: Surgery, Pediatrics, Cardiology, Neurology, etc.\n\n**Salary**: ₹8-20 LPA\n\n**Skills needed**: Empathy, decision-making, stamina, attention to detail\n\n**Note**: Requires dedication and long study hours, but very rewarding!"
        ]
    },
    salary: {
        patterns: ["salary", "how much earn", "pay", "income", "money"],
        responses: [
            "Salaries vary by career and experience. Here are starting salaries in India:\n\n💰 **High paying** (₹8-20 LPA): CA, Medicine, IIT Engineering, Data Science, AI/ML\n\n💰 **Good pay** (₹5-12 LPA): Engineering, Law, Architecture, CS, Management\n\n💰 **Moderate** (₹3-7 LPA): Teaching, Journalism, Psychology, most Arts careers\n\nRemember: Salaries grow significantly with experience and expertise! Choose based on interest, not just money."
        ]
    },
    confused: {
        patterns: ["confused", "don't know", "not sure", "help me", "what should i do"],
        responses: [
            "It's completely normal to feel confused! 😊 Career decisions are important. Here's what you can do:\n\n1. Take our comprehensive aptitude test - it's scientifically designed to match your personality with careers\n\n2. Talk to your teachers and parents about your interests\n\n3. Research careers that interest you\n\n4. Consider your academic strengths\n\n5. Think about what activities make you happy\n\nWould you like to take the aptitude test now? It only takes 10-15 minutes!"
        ]
    },
    default: [
        "I understand you have a question about careers. I can help you with:\n\n• Stream selection (Science/Commerce/Arts)\n• Career options and requirements\n• Entrance exam information\n• Salary expectations\n• Study paths and roadmaps\n\nCould you please be more specific about what you'd like to know? Or take our aptitude test for personalized career recommendations!",
        "That's an interesting question! While I specialize in career guidance, I can help you with:\n\n📚 Stream selection after 10th\n💼 Career options and paths\n📝 Entrance exam preparation\n💰 Salary and job prospects\n🎯 Skills development\n\nWhat specific aspect of career planning would you like to explore?"
    ]
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    showSection('home');
    updateNavigation();
    populateCareerExplorer();
    initializeChatbot();
}

// Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        appState.currentSection = sectionId;
        updateNavigation();
    }
}

function updateNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${appState.currentSection}`) {
            link.classList.add('active');
        }
    });
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Test functionality
function startTest() {
    appState.testData = {
        currentStep: 1,
        currentQuestion: 0,
        totalQuestions: 24,
        answers: {},
        personalInfo: {},
        completed: false
    };
    
    document.getElementById('testHome').classList.add('hidden');
    document.getElementById('testContent').classList.remove('hidden');
    document.getElementById('testResults').classList.add('hidden');
    
    loadQuestion();
}

function loadQuestion() {
    const question = testQuestions[appState.testData.currentQuestion];
    const container = document.getElementById('questionContainer');
    
    // Update progress
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const progress = ((appState.testData.currentQuestion + 1) / appState.testData.totalQuestions) * 100;
    
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Question ${appState.testData.currentQuestion + 1} of ${appState.testData.totalQuestions}`;
    
    // Generate question HTML
    let questionHTML = `
        <div class="question-step">Step ${question.step}: ${question.stepTitle}</div>
        <h3 class="question-title">${question.question}</h3>
    `;
    
    switch (question.type) {
        case 'text':
            questionHTML += `
                <input type="text" class="form-control" id="answer" 
                       placeholder="Enter your ${question.key}" 
                       value="${appState.testData.answers[question.key] || ''}">
            `;
            break;
            
        case 'number':
            questionHTML += `
                <input type="number" class="form-control" id="answer" 
                       placeholder="Enter your ${question.key}" 
                       min="${question.min || ''}" max="${question.max || ''}"
                       value="${appState.testData.answers[question.key] || ''}">
            `;
            break;
            
        case 'select':
            const currentValue = appState.testData.answers[question.key] || '';
            questionHTML += '<div class="answer-options">';
            question.options.forEach(option => {
                const selected = currentValue === option.value ? 'selected' : '';
                questionHTML += `
                    <div class="answer-option ${selected}" onclick="selectOption('${option.value}')">
                        ${option.label}
                    </div>
                `;
            });
            questionHTML += '</div>';
            break;
            
        case 'likert':
            const currentLikert = appState.testData.answers[question.key] || '';
            questionHTML += `
                <div class="likert-scale">
                    <div class="likert-option ${currentLikert === '1' ? 'selected' : ''}" onclick="selectLikert(1)">
                        <div class="likert-number">1</div>
                        <div class="likert-label">Strongly Disagree</div>
                    </div>
                    <div class="likert-option ${currentLikert === '2' ? 'selected' : ''}" onclick="selectLikert(2)">
                        <div class="likert-number">2</div>
                        <div class="likert-label">Disagree</div>
                    </div>
                    <div class="likert-option ${currentLikert === '3' ? 'selected' : ''}" onclick="selectLikert(3)">
                        <div class="likert-number">3</div>
                        <div class="likert-label">Neutral</div>
                    </div>
                    <div class="likert-option ${currentLikert === '4' ? 'selected' : ''}" onclick="selectLikert(4)">
                        <div class="likert-number">4</div>
                        <div class="likert-label">Agree</div>
                    </div>
                    <div class="likert-option ${currentLikert === '5' ? 'selected' : ''}" onclick="selectLikert(5)">
                        <div class="likert-number">5</div>
                        <div class="likert-label">Strongly Agree</div>
                    </div>
                </div>
                <div class="likert-descriptions">
                    <span>Strongly Disagree</span>
                    <span>Strongly Agree</span>
                </div>
            `;
            break;
    }
    
    container.innerHTML = questionHTML;
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.style.display = appState.testData.currentQuestion === 0 ? 'none' : 'block';
    nextBtn.textContent = appState.testData.currentQuestion === appState.testData.totalQuestions - 1 ? 
                         'Complete Test' : 'Next';
    nextBtn.innerHTML = appState.testData.currentQuestion === appState.testData.totalQuestions - 1 ? 
                       'Complete Test <i class="fas fa-check"></i>' : 'Next <i class="fas fa-arrow-right"></i>';
}

function selectOption(value) {
    // Remove previous selection
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    event.target.classList.add('selected');
    
    // Store answer
    const question = testQuestions[appState.testData.currentQuestion];
    appState.testData.answers[question.key] = value;
}

function selectLikert(value) {
    // Remove previous selection
    document.querySelectorAll('.likert-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    event.target.classList.add('selected');
    
    // Store answer
    const question = testQuestions[appState.testData.currentQuestion];
    appState.testData.answers[question.key] = value.toString();
}

function previousQuestion() {
    if (appState.testData.currentQuestion > 0) {
        appState.testData.currentQuestion--;
        loadQuestion();
    }
}

function nextQuestion() {
    const question = testQuestions[appState.testData.currentQuestion];
    
    // Validate current question
    if (question.type === 'text' || question.type === 'number') {
        const input = document.getElementById('answer');
        if (input && input.value.trim()) {
            appState.testData.answers[question.key] = input.value.trim();
        } else if (question.required) {
            alert('Please answer this question before continuing.');
            return;
        }
    } else if (question.required && !appState.testData.answers[question.key]) {
        alert('Please answer this question before continuing.');
        return;
    }
    
    if (appState.testData.currentQuestion < appState.testData.totalQuestions - 1) {
        appState.testData.currentQuestion++;
        loadQuestion();
    } else {
        completeTest();
    }
}

function completeTest() {
    // Show loading
    document.getElementById('loadingOverlay').classList.remove('hidden');
    
    setTimeout(() => {
        // Calculate results
        appState.results = calculateResults();
        
        // Hide loading
        document.getElementById('loadingOverlay').classList.add('hidden');
        
        // Show results
        displayResults();
    }, 2000);
}

function calculateResults() {
    const answers = appState.testData.answers;
    
    // Calculate RIASEC scores
    const riasecScores = {
        Realistic: 0,
        Investigative: 0,
        Artistic: 0,
        Social: 0,
        Enterprising: 0,
        Conventional: 0
    };
    
    // Sum up RIASEC scores from likert questions
    Object.keys(answers).forEach(key => {
        const question = testQuestions.find(q => q.key === key);
        if (question && question.category && question.type === 'likert') {
            riasecScores[question.category] += parseInt(answers[key]) || 0;
        }
    });
    
    // Normalize scores to percentages (max possible score per category is 10)
    Object.keys(riasecScores).forEach(category => {
        riasecScores[category] = Math.round((riasecScores[category] / 10) * 100);
    });
    
    // Find top 3 personality types
    const sortedPersonalities = Object.entries(riasecScores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 3);
    
    // Get career recommendations based on top personalities
    const recommendedCareers = getCareerRecommendations(sortedPersonalities, answers);
    
    return {
        personalityScores: riasecScores,
        topPersonalities: sortedPersonalities,
        recommendedCareers: recommendedCareers,
        personalInfo: {
            name: answers.name || 'Student',
            age: answers.age || '',
            currentClass: answers.currentClass || ''
        }
    };
}

function getCareerRecommendations(topPersonalities, answers) {
    const recommendations = [];
    const allCareers = [];
    
    // Collect all careers from all streams
    Object.keys(careerData.streams).forEach(streamKey => {
        const stream = careerData.streams[streamKey];
        if (stream.careers) {
            stream.careers.forEach(career => {
                allCareers.push({ ...career, stream: streamKey });
            });
        }
    });
    
    // Score careers based on RIASEC match
    allCareers.forEach(career => {
        let matchScore = 0;
        
        // Calculate match score based on RIASEC alignment
        if (career.riasec_match) {
            career.riasec_match.forEach(trait => {
                const personalityScore = topPersonalities.find(([name]) => name === trait);
                if (personalityScore) {
                    matchScore += personalityScore[1];
                }
            });
        }
        
        // Bonus points for subject preferences
        if (answers.favoriteSubject) {
            if (answers.favoriteSubject === 'mathematics' || answers.favoriteSubject === 'science') {
                if (career.stream === 'science') matchScore += 20;
            } else if (answers.favoriteSubject === 'socialStudies' || answers.favoriteSubject === 'languages') {
                if (career.stream === 'arts_humanities') matchScore += 20;
            } else if (answers.favoriteSubject === 'computer') {
                if (career.name.toLowerCase().includes('data') || career.name.toLowerCase().includes('computer')) {
                    matchScore += 25;
                }
            }
        }
        
        // Bonus for career values alignment
        if (answers.careerValues) {
            if (answers.careerValues === 'helping' && career.riasec_match?.includes('Social')) {
                matchScore += 15;
            } else if (answers.careerValues === 'salary' && career.salary_range?.includes('15')) {
                matchScore += 10;
            }
        }
        
        career.matchScore = Math.min(matchScore, 100);
    });
    
    // Sort by match score and return top 6
    return allCareers
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 6);
}

function displayResults() {
    document.getElementById('testContent').classList.add('hidden');
    document.getElementById('testResults').classList.remove('hidden');
    
    const results = appState.results;
    const resultsContainer = document.getElementById('testResults');
    
    let resultsHTML = `
        <div class="results-header">
            <h2>🎉 Your Career Assessment Results</h2>
            <p>Hello ${results.personalInfo.name}! Here's your personalized career guidance based on your responses.</p>
        </div>
        
        <div class="personality-section">
            <h3><i class="fas fa-brain"></i> Your Personality Profile (RIASEC)</h3>
            <div class="personality-chart">
                <canvas id="personalityChart" width="400" height="400"></canvas>
            </div>
            <div class="personality-types">
    `;
    
    results.topPersonalities.forEach(([name, score]) => {
        const personality = careerData.riasecPersonalities[name];
        resultsHTML += `
            <div class="personality-type">
                <div class="type-name">${name}</div>
                <div class="type-score">${score}%</div>
                <p>${personality.description}</p>
            </div>
        `;
    });
    
    resultsHTML += `
            </div>
        </div>
        
        <div class="careers-section">
            <h3><i class="fas fa-briefcase"></i> Recommended Career Paths</h3>
            <div class="recommended-careers">
    `;
    
    results.recommendedCareers.forEach(career => {
        resultsHTML += `
            <div class="career-card">
                <div class="career-name">${career.name}</div>
                <div class="career-match">${career.matchScore}% Match</div>
                <div class="career-description">${career.description}</div>
                <div class="career-details">
                    <div class="career-detail">
                        <i class="fas fa-graduation-cap"></i>
                        <div><strong>Education Path:</strong> ${career.education_path}</div>
                    </div>
                    <div class="career-detail">
                        <i class="fas fa-rupee-sign"></i>
                        <div><strong>Salary Range:</strong> ${career.salary_range}</div>
                    </div>
                    <div class="career-detail">
                        <i class="fas fa-skills"></i>
                        <div><strong>Skills:</strong> ${career.skills.join(', ')}</div>
                    </div>
                    <div class="career-detail">
                        <i class="fas fa-chart-line"></i>
                        <div><strong>Future Prospects:</strong> ${career.future_prospects}</div>
                    </div>
                </div>
            </div>
        `;
    });
    
    resultsHTML += `
            </div>
        </div>
        
        <div class="roadmap-section">
            <h3><i class="fas fa-road"></i> Your Next Steps</h3>
            <div class="next-steps">
                <p>Based on your results, here's what you should consider:</p>
                <ol>
                    <li><strong>Stream Selection:</strong> ${getStreamRecommendation(results)}</li>
                    <li><strong>Skill Development:</strong> Focus on ${getSkillRecommendations(results)}</li>
                    <li><strong>Entrance Exams:</strong> Prepare for ${getExamRecommendations(results)}</li>
                    <li><strong>Explore Further:</strong> Research your top career matches in detail</li>
                </ol>
            </div>
            
            <div style="text-align: center; margin-top: 24px;">
                <button class="btn btn--primary" onclick="downloadResults()">
                    <i class="fas fa-download"></i> Download Report
                </button>
                <button class="btn btn--outline" onclick="retakeTest()">
                    <i class="fas fa-redo"></i> Retake Test
                </button>
            </div>
        </div>
    `;
    
    resultsContainer.innerHTML = resultsHTML;
    
    // Create personality chart
    setTimeout(() => {
        createPersonalityChart();
    }, 100);
}

function createPersonalityChart() {
    const ctx = document.getElementById('personalityChart');
    if (!ctx) return;
    
    const results = appState.results;
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: Object.keys(results.personalityScores),
            datasets: [{
                label: 'Your Personality Profile',
                data: Object.values(results.personalityScores),
                fill: true,
                backgroundColor: 'rgba(30, 58, 138, 0.2)',
                borderColor: '#1E3A8A',
                borderWidth: 2,
                pointBackgroundColor: '#F97316',
                pointBorderColor: '#F97316',
                pointRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function getStreamRecommendation(results) {
    const topCareerStreams = results.recommendedCareers.slice(0, 3).map(career => career.stream);
    const streamCounts = {};
    
    topCareerStreams.forEach(stream => {
        streamCounts[stream] = (streamCounts[stream] || 0) + 1;
    });
    
    const topStream = Object.entries(streamCounts).sort(([,a], [,b]) => b - a)[0][0];
    
    const streamNames = {
        science: 'Science (PCM/PCB)',
        commerce: 'Commerce',
        arts_humanities: 'Arts & Humanities',
        vocational: 'Vocational/Technical'
    };
    
    return streamNames[topStream] || 'Explore multiple streams';
}

function getSkillRecommendations(results) {
    const topCareers = results.recommendedCareers.slice(0, 3);
    const allSkills = [];
    
    topCareers.forEach(career => {
        if (career.skills) {
            allSkills.push(...career.skills);
        }
    });
    
    // Count frequency and return top skills
    const skillCounts = {};
    allSkills.forEach(skill => {
        skillCounts[skill] = (skillCounts[skill] || 0) + 1;
    });
    
    return Object.entries(skillCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 4)
        .map(([skill]) => skill)
        .join(', ');
}

function getExamRecommendations(results) {
    const topCareers = results.recommendedCareers.slice(0, 3);
    const exams = [];
    
    topCareers.forEach(career => {
        if (career.education_path.includes('JEE')) {
            exams.push('JEE Main/Advanced');
        } else if (career.education_path.includes('NEET')) {
            exams.push('NEET');
        } else if (career.education_path.includes('CA')) {
            exams.push('CA Foundation');
        } else if (career.name.includes('Law')) {
            exams.push('CLAT');
        }
    });
    
    const uniqueExams = [...new Set(exams)];
    return uniqueExams.length > 0 ? uniqueExams.join(', ') : 'Relevant entrance exams for your chosen field';
}

function downloadResults() {
    const results = appState.results;
    let reportContent = `CAREER ASSESSMENT REPORT\n\n`;
    reportContent += `Student: ${results.personalInfo.name}\n`;
    reportContent += `Age: ${results.personalInfo.age}\n`;
    reportContent += `Class: ${results.personalInfo.currentClass}\n\n`;
    
    reportContent += `PERSONALITY PROFILE (RIASEC):\n`;
    Object.entries(results.personalityScores).forEach(([type, score]) => {
        reportContent += `${type}: ${score}%\n`;
    });
    
    reportContent += `\nTOP CAREER RECOMMENDATIONS:\n`;
    results.recommendedCareers.forEach((career, index) => {
        reportContent += `${index + 1}. ${career.name} (${career.matchScore}% match)\n`;
        reportContent += `   Education: ${career.education_path}\n`;
        reportContent += `   Salary: ${career.salary_range}\n\n`;
    });
    
    reportContent += `\nRECOMMENDATIONS:\n`;
    reportContent += `Stream: ${getStreamRecommendation(results)}\n`;
    reportContent += `Skills to develop: ${getSkillRecommendations(results)}\n`;
    reportContent += `Entrance exams: ${getExamRecommendations(results)}\n`;
    
    // Create and download file
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'career_assessment_report.txt';
    a.click();
    URL.revokeObjectURL(url);
}

function retakeTest() {
    appState.testData = {
        currentStep: 0,
        currentQuestion: 0,
        totalQuestions: 24,
        answers: {},
        personalInfo: {},
        completed: false
    };
    
    document.getElementById('testResults').classList.add('hidden');
    document.getElementById('testHome').classList.remove('hidden');
}

// Career Explorer
function populateCareerExplorer() {
    const careerGrid = document.getElementById('careerGrid');
    if (!careerGrid) return;
    
    let allCareers = [];
    
    // Collect all careers
    Object.keys(careerData.streams).forEach(streamKey => {
        const stream = careerData.streams[streamKey];
        if (stream.careers) {
            stream.careers.forEach(career => {
                allCareers.push({ ...career, stream: streamKey });
            });
        }
    });
    
    displayCareers(allCareers);
}

function displayCareers(careers) {
    const careerGrid = document.getElementById('careerGrid');
    if (!careerGrid) return;
    
    let careerHTML = '';
    
    careers.forEach(career => {
        const streamName = {
            science: 'Science',
            commerce: 'Commerce',
            arts_humanities: 'Arts & Humanities',
            vocational: 'Vocational'
        }[career.stream] || career.stream;
        
        careerHTML += `
            <div class="career-card">
                <div class="career-name">${career.name}</div>
                <div style="color: #F97316; font-size: 12px; margin-bottom: 8px;">${streamName}</div>
                <div class="career-description">${career.description}</div>
                <div class="career-details">
                    <div class="career-detail">
                        <i class="fas fa-graduation-cap"></i>
                        <div><strong>Education:</strong> ${career.education_path}</div>
                    </div>
                    <div class="career-detail">
                        <i class="fas fa-rupee-sign"></i>
                        <div><strong>Salary:</strong> ${career.salary_range}</div>
                    </div>
                    <div class="career-detail">
                        <i class="fas fa-chart-line"></i>
                        <div><strong>Prospects:</strong> ${career.future_prospects}</div>
                    </div>
                </div>
            </div>
        `;
    });
    
    careerGrid.innerHTML = careerHTML;
}

function filterCareers() {
    const streamFilter = document.getElementById('streamFilter').value;
    const salaryFilter = document.getElementById('salaryFilter').value;
    
    let allCareers = [];
    
    // Collect all careers
    Object.keys(careerData.streams).forEach(streamKey => {
        const stream = careerData.streams[streamKey];
        if (stream.careers) {
            stream.careers.forEach(career => {
                allCareers.push({ ...career, stream: streamKey });
            });
        }
    });
    
    // Apply filters
    let filteredCareers = allCareers;
    
    if (streamFilter !== 'all') {
        filteredCareers = filteredCareers.filter(career => career.stream === streamFilter);
    }
    
    if (salaryFilter !== 'all') {
        filteredCareers = filteredCareers.filter(career => {
            const salaryRange = career.salary_range;
            if (salaryFilter === 'high') {
                return salaryRange.includes('8-') || salaryRange.includes('10-') || salaryRange.includes('15-') || salaryRange.includes('20');
            } else if (salaryFilter === 'medium') {
                return salaryRange.includes('4-') || salaryRange.includes('5-') || salaryRange.includes('6-') || salaryRange.includes('7-');
            } else if (salaryFilter === 'entry') {
                return salaryRange.includes('2-') || salaryRange.includes('3-');
            }
            return true;
        });
    }
    
    displayCareers(filteredCareers);
}

// FAQ functionality
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Contact form
function submitContact(event) {
    event.preventDefault();
    
    // In a real application, you would send this to a server
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    event.target.reset();
}

// Chatbot functionality
function initializeChatbot() {
    // Start minimized
    document.getElementById('chatbot').classList.add('minimized');
}

function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.classList.toggle('minimized');
}

function handleChatKeypress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    
    // Clear input
    input.value = '';
    
    // Generate bot response
    setTimeout(() => {
        const response = generateBotResponse(message);
        addMessage(response, 'bot');
    }, 500);
}

function addMessage(message, sender) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = message;
    
    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Store in history
    appState.chatHistory.push({ message, sender, timestamp: Date.now() });
}

function generateBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Check each response category
    for (const [category, data] of Object.entries(chatbotResponses)) {
        if (category === 'default') continue;
        
        if (data.patterns && data.patterns.some(pattern => message.includes(pattern))) {
            const responses = data.responses;
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
    
    // Return default response
    const defaultResponses = chatbotResponses.default;
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Utility functions
function showLoading() {
    document.getElementById('loadingOverlay').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loadingOverlay').classList.add('hidden');
}