// Global variables
let currentQuestions = [];
let userAnswers = {};
let currentQuestionIndex = 0;
let timeLeft = 300; // 5 minutes in seconds
let timerInterval;

// Timer functions
function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
}

// Utility functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function updateProgressBar() {
    const progress = (Object.keys(userAnswers).length / currentQuestions.length) * 100;
    document.querySelector('.progress-fill').style.width = `${progress}%`;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submit');

    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === currentQuestions.length - 1;
    submitBtn.style.display = currentQuestionIndex === currentQuestions.length - 1 ? 'block' : 'none';
}

// Question display and handling
function displayCurrentQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('questionNumber').textContent = 
        `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;

    document.getElementById('quiz').innerHTML = `
        <div class="question-container">
            <div class="question-text">${question.question}</div>
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <div class="option ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}"
                         data-option="${index}">
                        ${option}
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', selectOption);
    });

    updateNavigationButtons();
    updateProgressBar();
}

function selectOption(e) {
    const selectedOption = parseInt(e.currentTarget.dataset.option);
    
    document.querySelectorAll('.option').forEach(opt => 
        opt.classList.remove('selected'));
    e.currentTarget.classList.add('selected');
    
    userAnswers[currentQuestionIndex] = selectedOption;
    updateProgressBar();
}

// Score calculation and results
function calculateScore() {
    let score = 0;
    currentQuestions.forEach((q, index) => {
        if (userAnswers[index] === q.correct) score++;
    });
    return score;
}

function showResults() {
    clearInterval(timerInterval);
    
    const score = calculateScore();
    const total = currentQuestions.length;
    const percentage = (score / total) * 100;

    document.querySelector('.quiz-content').innerHTML = `
        <div class="result-container">
            <h2>Quiz Complete!</h2>
            <div class="score-display">${score}/${total}</div>
            <div class="feedback ${percentage >= 70 ? 'success' : 'error'}">
                ${percentage >= 70 
                    ? "Excellent work! You've demonstrated great understanding!" 
                    : "Keep learning! Review the topics and try again."}
            </div>
            <div class="review-section">
                ${currentQuestions.map((q, index) => `
                    <div class="question-review">
                        <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
                        <p>Your answer: ${q.options[userAnswers[index]]}</p>
                        <p>Correct answer: ${q.options[q.correct]}</p>
                        <p><em>${q.explanation}</em></p>
                    </div>
                `).join('')}
            </div>
            <button class="btn" id="tryAgainBtn">Try Again</button>
        </div>
    `;

    document.getElementById('tryAgainBtn').addEventListener('click', resetQuiz);
}

// Quiz initialization and reset
function getRandomQuestions(allQuestions, numQuestions) {
    let questions = [...allQuestions];
    let randomQuestions = [];
    
    for(let i = 0; i < numQuestions && questions.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        randomQuestions.push(questions[randomIndex]);
        questions.splice(randomIndex, 1);
    }
    
    return randomQuestions;
}

function resetQuiz() {
    document.querySelector('.quiz-content').innerHTML = `
        <div id="questionNumber"></div>
        <div id="quiz"></div>
        <div class="navigation-buttons">
            <button id="prevBtn" class="nav-btn">Previous</button>
            <button id="nextBtn" class="nav-btn">Next</button>
        </div>
        <button id="submit" class="btn">Submit Quiz</button>
    `;
    
    initializeEventListeners();
    initializeQuiz();
}

function initializeQuiz() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    currentQuestions = getRandomQuestions(questions, 10);
    userAnswers = {};
    currentQuestionIndex = 0;
    timeLeft = 300;
    
    displayCurrentQuestion();
    updateTimer();
    startTimer();
}

function initializeEventListeners() {
    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayCurrentQuestion();
        }
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentQuestionIndex < currentQuestions.length - 1) {
            currentQuestionIndex++;
            displayCurrentQuestion();
        }
    });

    document.getElementById('submit').addEventListener('click', showResults);
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    initializeQuiz();
});