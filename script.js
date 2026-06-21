let quizData = [];

// App State Variables
let currentQuestionIndex = 0;
let userAnswers = [];
let flaggedQuestions = new Set();
let quizMode = 'practice'; // 'practice' or 'exam'
let quizActive = false;
let quizCompleted = false;

// Timer configuration
let examTimeLimit = 60 * 60; // 60 minutes in seconds
let timeRemaining = examTimeLimit;
let timerInterval = null;
let startTime = null;

// Filter for sidebar grid
let activeFilter = 'all'; // 'all', 'answered', 'unanswered', 'flagged'

// Filter for results analysis review
let reviewFilter = 'all'; // 'all', 'correct', 'incorrect'

// DOM Elements Cache
const elements = {
  welcomeScreen: document.getElementById('welcome-screen'),
  quizScreen: document.getElementById('quiz-screen'),
  resultsScreen: document.getElementById('results-screen'),
  
  // Welcome buttons
  practiceCard: document.getElementById('practice-card'),
  examCard: document.getElementById('exam-card'),
  startQuizBtn: document.getElementById('start-quiz-btn'),
  chapterSelect: document.getElementById('chapter-select'),
  welcomeTotalQuestions: document.getElementById('welcome-total-questions'),
  examCardTotalQuestions: document.getElementById('exam-card-total-questions'),
  examCardDuration: document.getElementById('exam-card-duration'),
  sidebarTotalQuestions: document.getElementById('sidebar-total-questions'),
  
  // Header controls
  modeBtnPractice: document.getElementById('mode-btn-practice'),
  modeBtnExam: document.getElementById('mode-btn-exam'),
  themeToggleBtn: document.getElementById('theme-toggle-btn'),
  
  // Quiz view
  currentQuestionSpan: document.getElementById('current-question-num'),
  totalQuestionsSpan: document.getElementById('total-questions-num'),
  progressBarInner: document.getElementById('progress-bar-inner'),
  timerContainer: document.getElementById('timer-container'),
  timerBox: document.getElementById('timer-container'),
  timerDisplay: document.getElementById('timer-display'),
  flagBtn: document.getElementById('flag-btn'),
  questionText: document.getElementById('question-text'),
  optionsGrid: document.getElementById('options-grid'),
  explanationContainer: document.getElementById('explanation-container'),
  
  // Nav buttons
  prevBtn: document.getElementById('prev-btn'),
  nextBtn: document.getElementById('next-btn'),
  submitBtn: document.getElementById('submit-btn'),
  
  // Sidebar
  sidebarPanel: document.getElementById('sidebar-panel'),
  gridFilterAll: document.getElementById('filter-all'),
  gridFilterAnswered: document.getElementById('filter-answered'),
  gridFilterUnanswered: document.getElementById('filter-unanswered'),
  gridFilterFlagged: document.getElementById('filter-flagged'),
  questionsGrid: document.getElementById('questions-grid'),
  answeredCountSpan: document.getElementById('answered-count'),
  
  // Results Dashboard
  resultsDashboard: document.getElementById('results-dashboard'),
  restartBtn: document.getElementById('restart-btn')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupEventListeners();
  updateSelectedChapter();
});

// Setup Theme (Dark / Light Mode)
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  if (theme === 'dark') {
    elements.themeToggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
  } else {
    elements.themeToggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  }
}

// Update the active dataset based on selected chapter
function updateSelectedChapter() {
  const selectedCh = elements.chapterSelect.value;
  let fullCount = 0;
  
  if (selectedCh === 'all') {
    fullCount = 0;
    Object.values(questionsDB).forEach(ch => {
      fullCount += ch.length;
    });
  } else {
    fullCount = questionsDB[selectedCh].length;
  }
  
  let displayCount = fullCount;
  let displayDuration = fullCount;
  
  if (quizMode === 'exam') {
    if (selectedCh === 'all') {
      displayCount = 40;
      displayDuration = 60; // 60 minutes
    } else {
      displayCount = fullCount;
      displayDuration = fullCount; // 1 minute per question
    }
  }
  
  // Update UI counts
  elements.welcomeTotalQuestions.textContent = displayCount;
  elements.examCardTotalQuestions.textContent = displayCount;
  elements.examCardDuration.textContent = displayDuration;
  elements.totalQuestionsSpan.textContent = displayCount;
  elements.sidebarTotalQuestions.textContent = displayCount;
  
  examTimeLimit = displayDuration * 60;
  timeRemaining = examTimeLimit;
}

// Event Listeners Setup
function setupEventListeners() {
  // Chapter selection change
  elements.chapterSelect.addEventListener('change', updateSelectedChapter);

  // Theme toggle
  elements.themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  // Welcome Mode cards click
  elements.practiceCard.addEventListener('click', () => {
    setWelcomeModeCard('practice');
  });
  elements.examCard.addEventListener('click', () => {
    setWelcomeModeCard('exam');
  });

  // Start button
  elements.startQuizBtn.addEventListener('click', startQuiz);

  // Top header mode switch buttons (only allowed if quiz hasn't completed)
  elements.modeBtnPractice.addEventListener('click', () => {
    if (quizCompleted) return;
    switchMode('practice');
  });
  elements.modeBtnExam.addEventListener('click', () => {
    if (quizCompleted) return;
    switchMode('exam');
  });

  // Navigation Buttons
  elements.prevBtn.addEventListener('click', navigatePrev);
  elements.nextBtn.addEventListener('click', navigateNext);
  elements.submitBtn.addEventListener('click', confirmSubmit);

  // Bookmark / Flag button
  elements.flagBtn.addEventListener('click', toggleFlagCurrentQuestion);

  // Sidebar Filter chips
  elements.gridFilterAll.addEventListener('click', () => setSidebarFilter('all'));
  elements.gridFilterAnswered.addEventListener('click', () => setSidebarFilter('answered'));
  elements.gridFilterUnanswered.addEventListener('click', () => setSidebarFilter('unanswered'));
  elements.gridFilterFlagged.addEventListener('click', () => setSidebarFilter('flagged'));

  // Keyboard Navigation
  document.addEventListener('keydown', (e) => {
    if (!quizActive || quizCompleted) return;
    if (e.key === 'ArrowLeft') {
      navigatePrev();
    } else if (e.key === 'ArrowRight') {
      navigateNext();
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFlagCurrentQuestion();
    } else if (['1', '2', '3', '4'].includes(e.key)) {
      const optionIndex = parseInt(e.key) - 1;
      const optionCards = elements.optionsGrid.querySelectorAll('.option-card');
      if (optionCards[optionIndex]) {
        selectOption(optionIndex);
      }
    }
  });

  // Restart Button
  elements.restartBtn.addEventListener('click', resetQuiz);
}

// Mode select handling on Welcome screen
function setWelcomeModeCard(mode) {
  quizMode = mode;
  if (mode === 'practice') {
    elements.practiceCard.classList.add('selected');
    elements.examCard.classList.remove('selected');
  } else {
    elements.examCard.classList.add('selected');
    elements.practiceCard.classList.remove('selected');
  }
  updateSelectedChapter();
}

// Starts the Quiz
function startQuiz() {
  elements.welcomeScreen.style.display = 'none';
  elements.quizScreen.style.display = 'grid';
  elements.resultsScreen.style.display = 'none';
  elements.sidebarPanel.style.display = 'flex';
  
  quizActive = true;
  quizCompleted = false;
  currentQuestionIndex = 0;
  
  // Construct pool of questions based on selected chapter
  const selectedCh = elements.chapterSelect.value;
  let pool = [];
  if (selectedCh === 'all') {
    Object.keys(questionsDB).sort((a, b) => parseInt(a) - parseInt(b)).forEach(ch => {
      pool = pool.concat(questionsDB[ch]);
    });
  } else {
    pool = [...questionsDB[selectedCh]];
  }
  
  // Set up quizData and exam timer
  if (quizMode === 'exam') {
    // Shuffle the pool for the exam
    const shuffled = pool.sort(() => 0.5 - Math.random());
    if (selectedCh === 'all') {
      // 40 random questions from all 6 chapters, 60 minutes time limit
      quizData = shuffled.slice(0, 40);
      examTimeLimit = 60 * 60;
    } else {
      // All questions from specific chapter, shuffled, 1 minute per question
      quizData = shuffled;
      examTimeLimit = quizData.length * 60;
    }
  } else {
    // In practice mode, keep questions sequential
    quizData = pool;
  }
  
  userAnswers = new Array(quizData.length).fill(null);
  flaggedQuestions.clear();
  startTime = new Date();
  
  // Explicitly update total spans based on generated quizData
  elements.totalQuestionsSpan.textContent = quizData.length;
  elements.sidebarTotalQuestions.textContent = quizData.length;
  
  updateHeaderModeButtons();
  
  if (quizMode === 'exam') {
    timeRemaining = examTimeLimit;
    elements.timerContainer.style.display = 'flex';
    elements.timerBox.classList.remove('warning');
    startTimer();
  } else {
    elements.timerContainer.style.display = 'none';
  }
  
  renderSidebarGrid();
  loadQuestion(currentQuestionIndex);
  updateStatusBar();
}

// Switches mode during active session (warns in exam mode)
function switchMode(newMode) {
  if (quizMode === newMode) return;
  
  if (quizMode === 'exam' && userAnswers.some(ans => ans !== null)) {
    const confirmSwitch = confirm("Bạn đang làm bài kiểm tra. Nếu chuyển sang chế độ luyện tập, tiến trình thi cử và bộ đếm thời gian sẽ bị hủy. Bạn có đồng ý?");
    if (!confirmSwitch) return;
  }
  
  quizMode = newMode;
  clearInterval(timerInterval);
  
  if (quizMode === 'exam') {
    timeRemaining = examTimeLimit;
    elements.timerContainer.style.display = 'flex';
    elements.timerBox.classList.remove('warning');
    startTimer();
  } else {
    elements.timerContainer.style.display = 'none';
  }
  
  updateHeaderModeButtons();
  
  if (!quizActive) {
    updateSelectedChapter();
  } else {
    loadQuestion(currentQuestionIndex);
    renderSidebarGrid();
    updateStatusBar();
  }
}

function updateHeaderModeButtons() {
  if (quizMode === 'practice') {
    elements.modeBtnPractice.classList.add('active');
    elements.modeBtnExam.classList.remove('active');
  } else {
    elements.modeBtnExam.classList.add('active');
    elements.modeBtnPractice.classList.remove('active');
  }
}

// Timer Logic
function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    
    if (timeRemaining <= 300) { // Under 5 minutes
      elements.timerBox.classList.add('warning');
    }
    
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Đã hết thời gian làm bài! Hệ thống tự động nộp bài.");
      submitQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;
  
  const hDisplay = hours > 0 ? String(hours).padStart(2, '0') + ":" : "";
  elements.timerDisplay.textContent = `${hDisplay}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Load Question Details
function loadQuestion(index) {
  const questionData = quizData[index];
  elements.currentQuestionSpan.textContent = index + 1;
  
  // Set question text
  elements.questionText.textContent = questionData.question;
  
  // Flag state
  if (flaggedQuestions.has(index)) {
    elements.flagBtn.classList.add('flagged');
    elements.flagBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 2v20H2V2h2zm18 4-4 4 4 4H8V6h14z"></path>
      </svg>
    `;
  } else {
    elements.flagBtn.classList.remove('flagged');
    elements.flagBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
        <line x1="4" y1="22" x2="4" y2="15"></line>
      </svg>
    `;
  }
  
  // Load options
  elements.optionsGrid.innerHTML = '';
  const selectedAnswer = userAnswers[index];
  
  questionData.options.forEach((optText, optIdx) => {
    const optionCard = document.createElement('button');
    optionCard.className = 'option-card';
    optionCard.type = 'button';
    optionCard.setAttribute('id', `option-${optIdx}`);
    
    const marker = document.createElement('div');
    marker.className = 'option-marker';
    marker.textContent = String.fromCharCode(65 + optIdx); // A, B, C, D
    
    const textSpan = document.createElement('div');
    textSpan.className = 'option-content';
    textSpan.textContent = optText.replace(/^[A-D]\.\s*/, ''); // strip prefix if present in visual text
    
    optionCard.appendChild(marker);
    optionCard.appendChild(textSpan);
    
    // Check if selected
    if (selectedAnswer === optIdx) {
      optionCard.classList.add('selected');
    }
    
    // In practice mode, if already answered, show correct/incorrect state immediately
    if (quizMode === 'practice' && selectedAnswer !== null) {
      optionCard.disabled = true;
      if (optIdx === questionData.answer) {
        optionCard.classList.add('correct');
      } else if (selectedAnswer === optIdx) {
        optionCard.classList.add('incorrect');
      }
    }
    
    // Add Click listener
    optionCard.addEventListener('click', () => selectOption(optIdx));
    elements.optionsGrid.appendChild(optionCard);
  });
  
  // Load Explanation (only in practice mode when answered)
  if (quizMode === 'practice' && selectedAnswer !== null) {
    elements.explanationContainer.style.display = 'block';
    elements.explanationContainer.innerHTML = `
      <div class="explanation-card">
        <h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Giải thích đáp án
        </h4>
        <p>${questionData.explanation}</p>
      </div>
    `;
  } else {
    elements.explanationContainer.style.display = 'none';
  }
  
  // Navigation states
  elements.prevBtn.disabled = index === 0;
  
  // Next vs Submit Button display
  if (index === quizData.length - 1) {
    elements.nextBtn.style.display = 'none';
    elements.submitBtn.style.display = 'inline-flex';
  } else {
    elements.nextBtn.style.display = 'inline-flex';
    elements.submitBtn.style.display = 'none';
  }
  
  // Update sidebar highlighting
  updateSidebarActiveCell();
}

// Select an option
function selectOption(optionIndex) {
  if (quizMode === 'practice' && userAnswers[currentQuestionIndex] !== null) {
    // Already answered in practice mode, prevent changing answer
    return;
  }
  
  userAnswers[currentQuestionIndex] = optionIndex;
  
  // Highlight selected
  const optionCards = elements.optionsGrid.querySelectorAll('.option-card');
  optionCards.forEach((card, idx) => {
    if (idx === optionIndex) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });
  
  // In practice mode, trigger immediate feedback and show explanation
  if (quizMode === 'practice') {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    optionCards.forEach((card, idx) => {
      card.disabled = true;
      if (idx === correctAnswer) {
        card.classList.add('correct');
      } else if (idx === optionIndex) {
        card.classList.add('incorrect');
      }
    });
    
    // Reveal explanation
    elements.explanationContainer.style.display = 'block';
    elements.explanationContainer.innerHTML = `
      <div class="explanation-card">
        <h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Giải thích đáp án
        </h4>
        <p>${quizData[currentQuestionIndex].explanation}</p>
      </div>
    `;
    
    // Trigger grid cells repaint to show green/red in practice mode
    updateSidebarCellState(currentQuestionIndex);
  } else {
    // In exam mode, just update grid to answered state
    updateSidebarCellState(currentQuestionIndex);
  }
  
  updateStatusBar();
}

// Toggle flag/bookmark for current question
function toggleFlagCurrentQuestion() {
  if (flaggedQuestions.has(currentQuestionIndex)) {
    flaggedQuestions.delete(currentQuestionIndex);
    elements.flagBtn.classList.remove('flagged');
    elements.flagBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
        <line x1="4" y1="22" x2="4" y2="15"></line>
      </svg>
    `;
  } else {
    flaggedQuestions.add(currentQuestionIndex);
    elements.flagBtn.classList.add('flagged');
    elements.flagBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 2v20H2V2h2zm18 4-4 4 4 4H8V6h14z"></path>
      </svg>
    `;
  }
  
  // Redraw cell's flagged state
  updateSidebarCellState(currentQuestionIndex);
}

// Navigation Handling
function navigatePrev() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion(currentQuestionIndex);
  }
}

function navigateNext() {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
  }
}

// Confirmation submit logic
function confirmSubmit() {
  const unansweredCount = userAnswers.filter(ans => ans === null).length;
  let confirmMsg = "Bạn có chắc chắn muốn nộp bài?";
  if (unansweredCount > 0) {
    confirmMsg = `Bạn còn ${unansweredCount} câu hỏi chưa trả lời. ${confirmMsg}`;
  }
  
  if (confirm(confirmMsg)) {
    submitQuiz();
  }
}

// Submits the test and prepares score dashboard
function submitQuiz() {
  clearInterval(timerInterval);
  quizActive = false;
  quizCompleted = true;
  
  elements.quizScreen.style.display = 'none';
  elements.resultsScreen.style.display = 'block';
  elements.sidebarPanel.style.display = 'none';
  
  const endTime = new Date();
  const timeDiffSec = Math.floor((endTime - startTime) / 1000);
  
  // Calculate score
  let correctCount = 0;
  quizData.forEach((q, idx) => {
    if (userAnswers[idx] === q.answer) {
      correctCount++;
    }
  });
  
  const scorePercent = Math.round((correctCount / quizData.length) * 100);
  
  // Generate incorrect questions revision html
  let wrongQuestionsHtml = "";
  let wrongCount = 0;
  quizData.forEach((q, idx) => {
    if (userAnswers[idx] !== q.answer) {
      wrongCount++;
      wrongQuestionsHtml += `
        <div class="revision-item">
          <div class="revision-item-header">
            <span class="revision-item-num">Câu ${idx + 1}</span>
            <span class="revision-item-q">${q.question}</span>
          </div>
          <div class="revision-item-content">
            <div class="revision-item-ans">
              <span>Đã chọn: <strong class="text-error">${userAnswers[idx] !== null ? String.fromCharCode(65 + userAnswers[idx]) : "Chưa trả lời"}</strong></span>
              <span style="margin-left: 1.5rem;">Đáp án đúng: <strong class="text-success">${String.fromCharCode(65 + q.answer)}</strong></span>
            </div>
            <div class="revision-item-explanation">
              <strong>💡 Kiến thức cốt lõi cần nhớ:</strong> ${q.explanation}
            </div>
          </div>
        </div>
      `;
    }
  });

  let evaluationText = "";
  if (scorePercent === 100) {
    evaluationText = "🏆 <strong>Xuất sắc!</strong> Bạn đã trả lời đúng 100% các câu hỏi. Bạn đã nắm rất vững toàn bộ kiến thức môn học Công nghệ phần mềm.";
  } else if (scorePercent >= 80) {
    evaluationText = "🌟 <strong>Rất tốt!</strong> Bạn đạt kết quả khá cao. Hãy dành một chút thời gian đọc kỹ các kiến thức trọng tâm của các câu sai bên dưới để sẵn sàng đạt điểm tối đa.";
  } else if (scorePercent >= 50) {
    evaluationText = "📖 <strong>Đạt yêu cầu!</strong> Bạn đã trả lời đúng trên một nửa số câu hỏi. Để nâng cao kết quả học tập, hãy đọc kỹ và ghi nhớ phần tổng hợp kiến thức từ các câu sai dưới đây.";
  } else {
    evaluationText = "⚠️ <strong>Cần nỗ lực thêm!</strong> Kết quả ôn tập chưa đạt mong đợi. Bạn nên đọc lại kỹ lưỡng các kiến thức trọng tâm của các câu hỏi sai để bù đắp những phần kiến thức còn hổng.";
  }
  
  // Render results header & circle progress bar & revision list
  elements.resultsDashboard.innerHTML = `
    <div class="results-summary">
      <div class="radial-progress-wrapper">
        <svg class="radial-progress">
          <defs>
            <linearGradient id="gradient-success" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#10b981" />
              <stop offset="100%" stop-color="#3b82f6" />
            </linearGradient>
          </defs>
          <circle class="radial-progress-bg" cx="80" cy="80" r="70"></circle>
          <circle id="radial-fill" class="radial-progress-fill" cx="80" cy="80" r="70"></circle>
        </svg>
        <div class="radial-label">
          <span class="radial-score">${correctCount}/${quizData.length}</span>
          <span class="radial-percent">${scorePercent}% Đúng</span>
        </div>
      </div>
      
      <div class="stats-grid">
        <div class="stat-box correct-count">
          <span class="stat-label">Câu trả lời đúng</span>
          <span class="stat-value text-success">${correctCount} câu</span>
        </div>
        <div class="stat-box incorrect-count">
          <span class="stat-label">Câu trả lời sai</span>
          <span class="stat-value text-error">${quizData.length - correctCount} câu</span>
        </div>
        <div class="stat-box time-taken">
          <span class="stat-label">Thời gian làm bài</span>
          <span class="stat-value">${formatDuration(timeDiffSec)}</span>
        </div>
        <div class="stat-box accuracy-rate">
          <span class="stat-label">Tỷ lệ chính xác</span>
          <span class="stat-value">${scorePercent}%</span>
        </div>
      </div>
    </div>

    <!-- Evaluation and Knowledge Revision Summary Section -->
    <div class="evaluation-section">
      <h3 class="evaluation-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        Đánh Giá Năng Lực & Khuyến Nghị Ôn Tập
      </h3>
      <div class="evaluation-badge">
        ${evaluationText}
      </div>

      ${wrongCount > 0 ? `
        <h4 style="margin: 1.5rem 0 1rem 0; color: var(--text-main); font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
            <path d="M6 6h10"></path>
            <path d="M6 10h10"></path>
          </svg>
          Tổng hợp kiến thức từ ${wrongCount} câu trả lời chưa đúng:
        </h4>
        <div class="revision-list">
          ${wrongQuestionsHtml}
        </div>
      ` : `
        <div class="explanation-card" style="margin-top: 1rem; border-color: var(--success); background: var(--success-light); color: var(--success);">
          <p>🎉 Tuyệt vời! Bạn không làm sai bất cứ câu nào. Thật xuất sắc!</p>
        </div>
      `}
    </div>
    
    <div class="results-review-section">
      <div class="analysis-header">
        <h3>Xem lại đáp án chi tiết</h3>
        <div class="analysis-filter-group">
          <button class="filter-chip active" id="review-filter-all">Tất cả</button>
          <button class="filter-chip" id="review-filter-correct">Câu đúng</button>
          <button class="filter-chip" id="review-filter-incorrect">Câu sai</button>
        </div>
      </div>
      <div class="review-questions-list" id="review-questions-list"></div>
    </div>
  `;
  
  // Animate Circular Progress Fill
  setTimeout(() => {
    const strokeDashOffset = 440 - (440 * scorePercent) / 100;
    const fillCircle = document.getElementById('radial-fill');
    if (fillCircle) fillCircle.style.strokeDashoffset = strokeDashOffset;
  }, 100);
  
  // Set Review filter handlers
  const filterAll = document.getElementById('review-filter-all');
  const filterCorrect = document.getElementById('review-filter-correct');
  const filterIncorrect = document.getElementById('review-filter-incorrect');
  
  filterAll.addEventListener('click', () => setReviewFilter('all'));
  filterCorrect.addEventListener('click', () => setReviewFilter('correct'));
  filterIncorrect.addEventListener('click', () => setReviewFilter('incorrect'));
  
  renderReviewQuestions();
}

function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins} phút ${secs} giây`;
}

// Render Review questions after submission
function renderReviewQuestions() {
  const container = document.getElementById('review-questions-list');
  if (!container) return;
  
  container.innerHTML = '';
  
  quizData.forEach((q, idx) => {
    const isCorrect = userAnswers[idx] === q.answer;
    
    // Apply filters
    if (reviewFilter === 'correct' && !isCorrect) return;
    if (reviewFilter === 'incorrect' && isCorrect) return;
    
    const card = document.createElement('div');
    card.className = `review-question-card`;
    
    // Header status badge
    const badge = document.createElement('div');
    if (userAnswers[idx] === null) {
      badge.className = 'review-badge incorrect';
      badge.innerHTML = `❌ Chưa trả lời (Đáp án đúng: ${String.fromCharCode(65 + q.answer)})`;
    } else if (isCorrect) {
      badge.className = 'review-badge correct';
      badge.innerHTML = `✓ Chính xác (Đáp án: ${String.fromCharCode(65 + q.answer)})`;
    } else {
      badge.className = 'review-badge incorrect';
      badge.innerHTML = `❌ Chọn sai: ${String.fromCharCode(65 + userAnswers[idx])} (Đáp án đúng: ${String.fromCharCode(65 + q.answer)})`;
    }
    
    const questionText = document.createElement('h4');
    questionText.className = 'question-text';
    questionText.textContent = `Câu ${idx + 1}: ${q.question}`;
    
    const optionsList = document.createElement('div');
    optionsList.className = 'options-grid';
    
    q.options.forEach((optText, optIdx) => {
      const optCard = document.createElement('div');
      optCard.className = 'option-card';
      
      const marker = document.createElement('div');
      marker.className = 'option-marker';
      marker.textContent = String.fromCharCode(65 + optIdx);
      
      const content = document.createElement('div');
      content.className = 'option-content';
      content.textContent = optText.replace(/^[A-D]\.\s*/, '');
      
      optCard.appendChild(marker);
      optCard.appendChild(content);
      
      // Styling rules for reviews
      if (optIdx === q.answer) {
        optCard.classList.add('correct');
      } else if (userAnswers[idx] === optIdx) {
        optCard.classList.add('incorrect');
      }
      
      optionsList.appendChild(optCard);
    });
    
    const expCard = document.createElement('div');
    expCard.className = 'explanation-card';
    expCard.innerHTML = `
      <h4>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        Giải thích
      </h4>
      <p>${q.explanation}</p>
    `;
    
    card.appendChild(badge);
    card.appendChild(questionText);
    card.appendChild(optionsList);
    card.appendChild(expCard);
    
    container.appendChild(card);
  });
}

function setReviewFilter(filterValue) {
  reviewFilter = filterValue;
  
  // Toggle active class on UI buttons
  const buttons = document.querySelectorAll('.results-review-section .filter-chip');
  buttons.forEach(btn => {
    btn.classList.remove('active');
  });
  
  const idMap = {
    'all': 'review-filter-all',
    'correct': 'review-filter-correct',
    'incorrect': 'review-filter-incorrect'
  };
  
  document.getElementById(idMap[filterValue]).classList.add('active');
  renderReviewQuestions();
}

// Reset state to start over
function resetQuiz() {
  elements.resultsScreen.style.display = 'none';
  elements.welcomeScreen.style.display = 'block';
  elements.sidebarPanel.style.display = 'none';
  quizActive = false;
  quizCompleted = false;
}

// Sidebar grid generation
function renderSidebarGrid() {
  elements.questionsGrid.innerHTML = '';
  
  quizData.forEach((q, idx) => {
    const cell = document.createElement('div');
    cell.className = 'grid-cell';
    cell.textContent = idx + 1;
    cell.setAttribute('id', `grid-cell-${idx}`);
    
    // Cell styling state
    updateSidebarCellState(idx, cell);
    
    // Jump directly to that question
    cell.addEventListener('click', () => {
      currentQuestionIndex = idx;
      loadQuestion(currentQuestionIndex);
    });
    
    elements.questionsGrid.appendChild(cell);
  });
}

// Repaint cell state classes
function updateSidebarCellState(idx, providedCellElement = null) {
  const cell = providedCellElement || document.getElementById(`grid-cell-${idx}`);
  if (!cell) return;
  
  // Clear classes except base
  cell.className = 'grid-cell';
  
  // Determine if visible by active filters
  let isVisible = true;
  if (activeFilter === 'answered' && userAnswers[idx] === null) isVisible = false;
  if (activeFilter === 'unanswered' && userAnswers[idx] !== null) isVisible = false;
  if (activeFilter === 'flagged' && !flaggedQuestions.has(idx)) isVisible = false;
  
  if (!isVisible) {
    cell.style.display = 'none';
    return;
  } else {
    cell.style.display = 'flex';
  }
  
  // Current active status
  if (idx === currentQuestionIndex) {
    cell.classList.add('current');
  }
  
  // Answered status
  if (userAnswers[idx] !== null) {
    if (quizMode === 'practice') {
      // In practice mode, show correct/incorrect state color codes on sidebar
      if (userAnswers[idx] === quizData[idx].answer) {
        cell.classList.add('cell-correct');
      } else {
        cell.classList.add('cell-incorrect');
      }
    } else {
      // In exam mode, just show standard indigo answered class
      cell.classList.add('answered');
    }
  }
  
  // Flagged dot
  if (flaggedQuestions.has(idx)) {
    cell.classList.add('flagged');
  }
}

// Redraw current cell focus
function updateSidebarActiveCell() {
  quizData.forEach((_, idx) => {
    updateSidebarCellState(idx);
  });
}

// Filter the sidebar cells
function setSidebarFilter(filterType) {
  activeFilter = filterType;
  
  // Toggle active class on chips
  elements.gridFilterAll.classList.remove('active');
  elements.gridFilterAnswered.classList.remove('active');
  elements.gridFilterUnanswered.classList.remove('active');
  elements.gridFilterFlagged.classList.remove('active');
  
  const idMap = {
    'all': 'filter-all',
    'answered': 'filter-answered',
    'unanswered': 'filter-unanswered',
    'flagged': 'filter-flagged'
  };
  
  document.getElementById(idMap[filterType]).classList.add('active');
  
  // Rerender/refilter the grid cells
  renderSidebarGrid();
}

// Update basic stats: count of answered questions and top progress bar
function updateStatusBar() {
  const answeredCount = userAnswers.filter(ans => ans !== null).length;
  elements.answeredCountSpan.textContent = answeredCount;
  
  const percent = Math.round((answeredCount / quizData.length) * 100);
  elements.progressBarInner.style.width = `${percent}%`;
}
