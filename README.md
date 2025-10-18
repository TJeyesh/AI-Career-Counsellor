# 🎯 AI Career Counsellor

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![JavaScript](https://img.shields.io/badge/JavaScript-44.4%25-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS](https://img.shields.io/badge/CSS-39.5%25-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![HTML](https://img.shields.io/badge/HTML-16.1%25-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)

## 📖 Description

**AI Career Counsellor** is a comprehensive web application designed to democratize career guidance for secondary school students in India. The platform provides scientifically-backed aptitude testing using the RIASEC model, personalized career recommendations, and detailed education pathways tailored to the Indian education system.

With an AI-powered chatbot and an extensive database covering over 100 career paths across Science, Commerce, Arts, and Vocational streams, students can access 24/7 career guidance including entrance exam information, scholarship resources, and salary expectations specific to the Indian job market.

## ✨ Key Features

### 🧠 Scientific Aptitude Assessment
- **RIASEC-based personality assessment** with 24 comprehensive questions
- Evaluates six personality dimensions: Realistic, Investigative, Artistic, Social, Enterprising, and Conventional
- **Personalized career matching algorithm** that aligns personality traits with suitable careers
- **Visual personality profile** using interactive radar charts

### 💼 Comprehensive Career Database
- **100+ career paths** across multiple streams:
  - **Science Stream**: Engineering, Medicine, Data Science, Pharmacy, Architecture, Biotechnology
  - **Commerce Stream**: CA, CS, Business Management, Banking & Finance, Digital Marketing
  - **Arts & Humanities**: Law, Psychology, Journalism, Teaching, Civil Services, Fashion Design
  - **Vocational**: ITI Courses, Polytechnic, Hotel Management, Animation
- Detailed information for each career including:
  - Education pathways and degree requirements
  - Entrance examination details
  - Salary ranges in INR (₹)
  - Future prospects and growth opportunities
  - Required skills and specializations

### 🤖 AI-Powered Chatbot
- **24/7 intelligent career assistant** with natural language understanding
- Pre-trained responses for common queries about:
  - Stream selection guidance
  - Career-specific information (engineering, medicine, law, etc.)
  - Salary expectations
  - Entrance exam preparation
  - Career confusion and decision support
- Pattern-based response system for accurate guidance

### 🔍 Career Explorer
- **Advanced filtering system** by:
  - Stream (Science/Commerce/Arts/Vocational)
  - Salary range (₹2-4 LPA, ₹4-8 LPA, ₹8+ LPA)
- Interactive career cards with detailed breakdowns
- Easy navigation and comparison tools

### 📚 Educational Resources
- **Scholarship information**: National Scholarship Portal, state schemes, merit-based scholarships
- **Entrance exam guides**: JEE Main/Advanced, NEET, CLAT with subject details and preparation resources
- **Detailed roadmaps**: Step-by-step education paths for each career
- **FAQ section**: Comprehensive answers to common career-related questions

### 📊 Results & Reports
- **Downloadable career assessment report** in text format
- **Interactive personality visualization** with Chart.js radar charts
- **Top career recommendations** ranked by match percentage
- **Skill development suggestions** based on assessment results
- **Next steps guidance** including stream selection and exam preparation

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with CSS variables, flexbox, and grid layouts
- **JavaScript (ES6+)**: Vanilla JS with modular architecture
- **Chart.js**: Data visualization for personality profiles

### Design & UX
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Custom Design System**: Inspired by Perplexity AI with consistent color tokens and spacing
- **Font Awesome**: Comprehensive icon library for UI elements
- **Custom Fonts**: FKGroteskNeue for professional typography

### Architecture
- **Component-based structure**: Modular sections with state management
- **JSON data storage**: Separate files for career data and assessment questions
- **Event-driven programming**: Interactive UI with smooth transitions
- **Client-side routing**: Section navigation without page reloads

## 📂 Project Structure

```
AI-Career-Counsellor/
│
├── career-counselling-ai/
│   ├── index.html              # Main HTML file with complete UI structure
│   ├── app.js                  # Core application logic and state management
│   ├── style.css               # Complete styling system with design tokens
│   ├── career_data.json        # Comprehensive career information database
│   └── aptitude_questions.json # RIASEC assessment questions and scoring
│
└── LICENSE                     # MIT License
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required - runs entirely client-side!

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/TJeyesh/AI-Career-Counsellor.git
cd AI-Career-Counsellor
```

2. **Navigate to the application folder**
```bash
cd career-counselling-ai
```

3. **Open in browser**
```bash
# Simply open index.html in your browser
# Or use a local server (recommended):
python -m http.server 8000
# Then visit http://localhost:8000
```

### Usage

1. **Home Page**: View the overview and key features
2. **Take Assessment**: Complete the 24-question aptitude test
3. **View Results**: Get personalized career recommendations with match percentages
4. **Explore Careers**: Browse and filter through 100+ career options
5. **Use Chatbot**: Ask career-related questions to the AI assistant
6. **Access Resources**: View scholarship information and exam guides
7. **Download Report**: Save your assessment results for future reference

## 🎨 Features in Detail

### Assessment Flow
1. **Personal Information**: Name, age, current class
2. **Interest Assessment**: 12 RIASEC-based questions with Likert scale
3. **Academic Strengths**: Favorite subjects and learning style
4. **Personality Assessment**: Group work preferences and problem-solving approach
5. **Skills Self-Assessment**: Confidence ratings in key areas
6. **Career Values**: Priorities and future interests

### Matching Algorithm
The application uses a sophisticated scoring system that:
- Calculates RIASEC personality scores (normalized to percentages)
- Matches careers based on personality alignment
- Applies bonus scoring for subject preferences
- Considers career values and priorities
- Returns top 6 career recommendations with match percentages

### Responsive Design
- **Desktop**: Full-featured layout with side-by-side grids
- **Tablet**: Optimized 2-column layouts with touch-friendly elements
- **Mobile**: Single-column stack with hamburger navigation
- **Chatbot**: Responsive positioning and sizing across all devices

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Ideas
- Add more career options and detailed information
- Enhance the chatbot with more response patterns
- Improve the matching algorithm with machine learning
- Add regional language support
- Create video tutorials and guides
- Expand the resource section with more scholarships and exams

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**T Jeyesh**
- GitHub: [@TJeyesh](https://github.com/TJeyesh)
- Repository: [AI-Career-Counsellor](https://github.com/TJeyesh/AI-Career-Counsellor)

## 🙏 Acknowledgments

- **RIASEC Model**: Based on John Holland's theory of career choice
- **Design Inspiration**: Perplexity AI design system for modern UI/UX
- **Career Data**: Compiled from Indian education system and job market research
- **Chart.js**: For beautiful data visualizations
- **Font Awesome**: For comprehensive icon library

## 📞 Support

For support, questions, or feedback:
- Open an issue on GitHub
- Contact through the application's contact form
- Contribute to discussions in the repository

## 🔮 Future Roadmap

- [ ] Backend integration for user accounts and data persistence
- [ ] Advanced AI chatbot with NLP capabilities
- [ ] Video career guidance and mentorship features
- [ ] Integration with educational institution databases
- [ ] Mobile app versions (iOS and Android)
- [ ] Multi-language support for regional accessibility
- [ ] Career success stories and testimonials
- [ ] Live webinar and workshop scheduling
- [ ] Career aptitude API for third-party integration

---

**Made with ❤️ for students across India | Empowering the next generation of professionals**
