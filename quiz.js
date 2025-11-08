// Questions (30) for Business Basics & Setting up a Business
const questions = [
  {
    question: "What is the primary function of a company?",
    options: [
      "To satisfy personal needs",
      "To purchase factors, transform them into products, and sell them to the market",
      "To offer only services",
      "To act as a government agency"
    ],
    answer: 1
  },
  {
    question: "Which of the following is a “factor” in a company’s process?",
    options: [
      "Finished furniture",
      "Customer payment",
      "Wood purchased for chairs",
      "Online advertising"
    ],
    answer: 2
  },
  {
    question: "What is the main difference between goods and services?",
    options: [
      "Goods are actions; services are objects",
      "Goods can be touched; services are intangible actions",
      "Services are cheaper",
      "Goods are always more expensive"
    ],
    answer: 1
  },
  {
    question: "Which of these is an Amazon “service”?",
    options: [
      "Kindle e-reader",
      "Amazon Prime Video subscription",
      "Fire TV Stick",
      "AmazonBasics Batteries"
    ],
    answer: 1
  },
  {
    question: "Why is the customer considered key to the survival of a company?",
    options: [
      "Customers always pay full price",
      "Customers decide whether or not to buy, influencing company revenue",
      "Customers are company employees",
      "Customers supply raw materials"
    ],
    answer: 1
  },
  {
    question: "What freedom does the customer have in the market?",
    options: [
      "Choosing company management",
      "Choosing whether or not to purchase products",
      "Setting product prices",
      "Deciding company location"
    ],
    answer: 1
  },
  {
    question: "A company as a “contractual link” means:",
    options: [
      "It is regulated only by government laws",
      "It consists of formal agreements between various parties",
      "It only operates with family members",
      "It sells only online"
    ],
    answer: 1
  },
  {
    question: "As a productive agent, a company transforms:",
    options: [
      "Money into taxes",
      "Inputs into outputs",
      "Employees into managers",
      "Services into products only"
    ],
    answer: 1
  },
  {
    question: "Which of the following is a main functional area of a company?",
    options: [
      "Security",
      "Production",
      "News reporting",
      "Art direction"
    ],
    answer: 1
  },
  {
    question: "Why should a company coordinate its functional areas?",
    options: [
      "To avoid paying taxes",
      "To maximize overall efficiency and achieve goals",
      "To please customers only",
      "To increase competition among departments"
    ],
    answer: 1
  },
  {
    question: "The \"general environment\" of a company includes:",
    options: [
      "Only its competitors",
      "Economic, political-legal, cultural, technological, and infrastructure factors",
      "The company’s customers",
      "Only internal employees"
    ],
    answer: 1
  },
  {
    question: "How can new technology, like the internet, affect company strategy?",
    options: [
      "It removes the need for marketing",
      "It can create new sales channels and markets",
      "It increases the cost of goods",
      "It only affects large companies"
    ],
    answer: 1
  },
  {
    question: "Which is NOT one of Porter’s Five Forces?",
    options: [
      "Power of suppliers",
      "Power of buyers",
      "Government regulation",
      "Threat of substitutes"
    ],
    answer: 2
  },
  {
    question: "High bargaining power of suppliers means:",
    options: [
      "Suppliers strongly influence prices and terms",
      "The government sets the prices",
      "Customers can choose suppliers freely",
      "Suppliers have little impact on costs"
    ],
    answer: 0
  },
  {
    question: "What can increase the intensity of competition in an industry?",
    options: [
      "Fewer competitors",
      "Many similar products and price wars",
      "High entry barriers",
      "No customers"
    ],
    answer: 1
  },
  {
    question: "Substitute products are:",
    options: [
      "Completely new inventions",
      "Products that fulfill the same need in a different way",
      "Only digital services",
      "Only made by the government"
    ],
    answer: 1
  },
  {
    question: "A barrier to entry for new competitors can be:",
    options: [
      "Low government regulation",
      "High capital requirements",
      "Free resources",
      "Lack of patents"
    ],
    answer: 1
  },
  {
    question: "What is the primary goal of using Porter’s Five Forces?",
    options: [
      "To increase employee salaries",
      "To analyze industry structure and guide strategic decisions",
      "To set product prices",
      "To choose new company colors"
    ],
    answer: 1
  },
  {
    question: "In a company, a “strategy” is:",
    options: [
      "Daily office tasks",
      "A plan to achieve long-term goals and gain competitive advantage",
      "Routine customer greeting",
      "Billing process"
    ],
    answer: 1
  },
  {
    question: "An “action plan” with objectives, resources, and indicators helps a company by:",
    options: [
      "Tracking individual employee opinions",
      "Planning, executing, and measuring strategic activities",
      "Importing only raw materials",
      "Removing competitors"
    ],
    answer: 1
  },
  {
    question: "A functional organizational structure:",
    options: [
      "Groups employees by geography",
      "Groups employees by specialist function (e.g., marketing, production)",
      "Has no clear divisions",
      "Only exists in small businesses"
    ],
    answer: 1
  },
  {
    question: "A company structured by product:",
    options: [
      "Is limited to one line of business",
      "Groups activities around different products or product lines",
      "Operates only in one country",
      "Has no managers"
    ],
    answer: 1
  },
  {
    question: "In a geographic organizational structure, a multinational company:",
    options: [
      "Centralizes all decisions at headquarters",
      "Organizes business units by region or country",
      "Groups by age of employees",
      "Ignores local market needs"
    ],
    answer: 1
  },
  {
    question: "What is a business idea?",
    options: [
      "A legal document",
      "A creative solution to a market problem or need",
      "A company’s address",
      "A fixed pricing structure"
    ],
    answer: 1
  },
  {
    question: "The Business Model Canvas consists of how many blocks?",
    options: [
      "5",
      "7",
      "9",
      "11"
    ],
    answer: 2
  },
  {
    question: "Which block is NOT in Osterwalder’s Business Model Canvas?",
    options: [
      "Value Proposition",
      "Key Resources",
      "Branding",
      "Revenue Streams"
    ],
    answer: 2
  },
  {
    question: "When should an entrepreneur use Lean Canvas instead of Business Model Canvas?",
    options: [
      "For an established large corporation",
      "When launching a new, uncertain startup",
      "For writing government reports",
      "For describing only product features"
    ],
    answer: 1
  },
  {
    question: "In the Lean Canvas, what is the MVP (Minimum Viable Product)?",
    options: [
      "A finished, feature-rich product",
      "The smallest version of a product that solves the customer’s problem",
      "A company’s profit margin",
      "A patent application"
    ],
    answer: 1
  },
  {
    question: "Which of the following is TRUE about SWOT analysis?",
    options: [
      "It evaluates only financial statements",
      "It helps identify Strengths, Weaknesses, Opportunities, and Threats",
      "It is only for marketing departments",
      "It is required by law"
    ],
    answer: 1
  },
  {
    question: "In Spanish business law, a “Sociedad Limitada (SL)” is best described as:",
    options: [
      "A sole proprietor business",
      "A limited liability company with restricted shares",
      "A partnership without legal form",
      "A government agency"
    ],
    answer: 1
  }
];

let qIndex = 0;
let userScore = 0;
const total = questions.length;

const quizDiv = document.getElementById('quiz');
const nextBtn = document.getElementById('nextBtn');
const summaryDiv = document.getElementById('summary');

function showQuestion(idx) {
  const q = questions[idx];
  let optionsHtml = '';
  q.options.forEach((opt, i) => {
    optionsHtml += `<button class="option-btn" data-idx="${i}">${opt}</button>`;
  });
  quizDiv.innerHTML = `
    <div class="question"><b>Question ${idx+1} / ${total}:</b> ${q.question}</div>
    <div class="options">${optionsHtml}</div>
  `;
  Array.from(document.getElementsByClassName('option-btn')).forEach(btn => {
    btn.addEventListener('click', handleOptionClick, { once: true });
  });
  nextBtn.style.display = 'none';
}

function handleOptionClick(e) {
  const btns = document.getElementsByClassName('option-btn');
  const userIdx = parseInt(e.target.getAttribute('data-idx'));
  const correctIdx = questions[qIndex].answer;

  for(let i=0; i<btns.length; i++) {
    btns[i].classList.add(i === correctIdx ? 'correct' : (i === userIdx ? 'incorrect' : ''));
    btns[i].disabled = true;
  }
  if (userIdx === correctIdx) userScore++;

  nextBtn.disabled = false;
  nextBtn.style.display = 'block';
  if(qIndex === total-1) {
    nextBtn.textContent = "Show Results";
  } else {
    nextBtn.textContent = "Next Question";
  }
}

function showSummary() {
  quizDiv.innerHTML = '';
  nextBtn.style.display = 'none';
  summaryDiv.style.display = 'block';
  summaryDiv.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your score: <b>${userScore} / ${total}</b></p>
    <p>${userScore >= 24 ? "Excellent! 🏆" : userScore >= 15 ? "Good Job! 👍" : "Keep Practicing! 💡"}</p>
    <button onclick="location.reload()">Restart Quiz</button>
  `;
}

nextBtn.onclick = function() {
  qIndex++;
  if (qIndex < total) {
    showQuestion(qIndex);
  } else {
    showSummary();
  }
}

// On load
showQuestion(0);