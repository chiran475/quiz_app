// Global variables
let currentQuestions = [];
let userAnswers = {};
let currentQuestionIndex = 0;
let timeLeft = 300; // 5 minutes in seconds
let timerInterval;


// Timer functions
function updateTimer() {
    const timerElement = document.getElementById('timer');
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Update the timer text
    timerElement.textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Update the timer color (green to red transition)
    const progress = (300 - timeLeft) / 300; // Calculate progress (0 to 1)
    const greenToRed = interpolateColor('#22c55e', '#ef4444', progress);
    timerElement.style.color = greenToRed;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults(); // Call showResults() when time is up
        }
    }, 1000);
}

function interpolateColor(color1, color2, factor) {
    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);
    const result = {
        r: Math.round(c1.r + factor * (c2.r - c1.r)),
        g: Math.round(c1.g + factor * (c2.g - c1.g)),
        b: Math.round(c1.b + factor * (c2.b - c1.b)),
    };
    return `rgb(${result.r}, ${result.g}, ${result.b})`;
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
    };
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
                         data-option="${index}" data-sound="sounds/options.mp3">
                        ${option}
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', selectOption);
    });
    addSoundToButtons();


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
                        <p class="${userAnswers[index] === q.correct ? 'correct-answer' : 'wrong-answer'}">
                            Your answer: ${q.options[userAnswers[index]]}
                        </p>
                        <p>
                            <strong>Correct answer:</strong> ${q.options[q.correct]}
                        </p>
                        <p><em>${q.explanation}</em></p>
                        <hr>
                    </div>
                `).join('')}
            </div>
            <button class="try-btn" id="tryAgainBtn" data-sound="sounds/tryagain.mp3">Try Again</button>
        </div>
    `;

    document.getElementById('tryAgainBtn').addEventListener('click', function(){
        var sound = this.getAttribute('data-sound');
        var audio = new Audio(sound);
        audio.play();
        resetQuiz();
    });
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
    // Dynamically reset the quiz content
    document.querySelector('.quiz-content').innerHTML = `
        <div id="questionNumber"></div>
        <div id="quiz"></div>
        <div class="navigation-buttons">
            <button id="prevBtn" class="nav-btn" data-sound="sounds/clicksound.mp3">Previous</button>
            <button id="nextBtn" class="nav-btn" data-sound="sounds/clicksound.mp3">Next</button>
        </div>
        <button id="submit" class="btn" data-sound="sounds/submit.mp3">Submit Quiz</button>
    `;

    // Reinitialize event listeners after resetting the content
    setTimeout(initializeEventListeners, 0);
    initializeQuiz(); // Call to initialize the quiz (set up questions, timer, etc.)
}

function initializeQuiz() {
    // Clear existing interval if present
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    // Initialize quiz variables
    currentQuestions = getRandomQuestions(questions, 10); // Replace with actual question selection logic
    userAnswers = {};
    currentQuestionIndex = 0;
    timeLeft = 300;

    // Display the first question and start the timer
    displayCurrentQuestion();
    updateTimer();
    startTimer();
}

function initializeEventListeners() {
    // Ensure the buttons exist before adding event listeners
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submit');

    // Check if buttons exist before attaching event listeners
    if (prevBtn && nextBtn && submitBtn) {
        // Attach click event listeners for navigation and sound playback
        [prevBtn, nextBtn, submitBtn].forEach(button => {
            button.addEventListener('click', () => {
                // Play sound effect
                const soundFile = button.getAttribute('data-sound');
                if (soundFile) {
                    const sound = new Audio(soundFile);
                    sound.play();
                }
            });
        });

        // Navigation buttons functionality
        prevBtn.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                displayCurrentQuestion();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentQuestionIndex < currentQuestions.length - 1) {
                currentQuestionIndex++;
                displayCurrentQuestion();
            }
        });

        submitBtn.addEventListener('click', showResults); // Show results when the quiz is submitted
    } else {
        console.error('Quiz navigation buttons not found.');
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    initializeQuiz();
    addSoundToButtons();

});
function addSoundToButtons() {
    // Select all buttons with a data-sound attribute
    const buttons = document.querySelectorAll("[data-sound]");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const soundFile = button.getAttribute("data-sound");
            if (soundFile) {
                const sound = new Audio(soundFile);
                sound.volume=0.09;
                sound.play();
            }
        });
    });
}