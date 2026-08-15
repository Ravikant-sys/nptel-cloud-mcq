// ============================================================
// NPTEL MCQ Platform — Duolingo-Style Quiz Engine
// ============================================================

// ── Visitor Counter (preserved) ─────────────────────────────
const COUNTER_NAMESPACE = "nptel-cloud-mcq-ravikant";
const COUNTER_KEY = "visits";

async function trackVisit() {
    try {
        fetch(`https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${COUNTER_KEY}/up`, { mode: 'no-cors' });
    } catch (e) { /* silent */ }
}

// ── Admin Easter Egg (preserved) ────────────────────────────
let titleClickCount = 0;
let lastClickTime = 0;

function handleHeaderClick() {
    const now = Date.now();
    if (now - lastClickTime > 2000) titleClickCount = 0;
    titleClickCount++;
    lastClickTime = now;
    if (titleClickCount === 5) {
        showAdminStats();
        titleClickCount = 0;
    }
}

async function showAdminStats() {
    const statsUrl = `https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${COUNTER_KEY}`;
    const toast = document.createElement('div');
    toast.className = 'admin-toast';
    toast.innerHTML = `
        <div style="margin-bottom:10px;">🛡️ <strong>Admin Menu</strong></div>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:15px;">
            Click below to see the live visitor data:
        </p>
        <a href="${statsUrl}" target="_blank" style="
            display: inline-block; background: var(--accent); color: white;
            padding: 8px 15px; border-radius: 8px; text-decoration: none; font-size: 0.9rem;
        ">Open Live Stats ↗</a>
        <button id="close-admin" style="display:block; margin: 10px auto 0; background:none; border:none; color:var(--text-secondary); cursor:pointer; font-size:0.8rem;">Close</button>
    `;
    document.body.appendChild(toast);
    document.getElementById('close-admin').onclick = () => toast.remove();
}

// ── Theme Toggler ───────────────────────────────────────────
function toggleTheme() {
    const root = document.documentElement;
    const isLight = root.getAttribute('data-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const moon = document.getElementById('moon-icon');
    const sun = document.getElementById('sun-icon');
    if (theme === 'light') {
        if (moon) moon.style.display = 'none';
        if (sun) sun.style.display = 'block';
    } else {
        if (moon) moon.style.display = 'block';
        if (sun) sun.style.display = 'none';
    }
}

// ── Utility ─────────────────────────────────────────────────
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ── Score History ───────────────────────────────────────────
function getScoreHistory() {
    try {
        return JSON.parse(localStorage.getItem('nptel-scores') || '{}');
    } catch { return {}; }
}

function saveScore(course, week, score, total) {
    const history = getScoreHistory();
    const key = `${course}-${week}`;
    const existing = history[key];
    if (!existing || score > existing.score) {
        history[key] = { score, total, date: Date.now() };
    }
    localStorage.setItem('nptel-scores', JSON.stringify(history));
}

function getBestScore(course, week) {
    const history = getScoreHistory();
    return history[`${course}-${week}`] || null;
}

// ══════════════════════════════════════════════════════════════
// HOME PAGE LOGIC (index.html)
// ══════════════════════════════════════════════════════════════

let currentCourse = null;

function populateCourseStats() {
    if (typeof mcqData === 'undefined') return;
    
    Object.keys(mcqData).forEach(courseId => {
        const statsEl = document.getElementById(`${courseId}-stats`);
        if (!statsEl) return;
        
        const courseData = mcqData[courseId];
        const weeks = Object.keys(courseData).length;
        let totalQs = 0;
        Object.values(courseData).forEach(qs => totalQs += qs.length);
        
        statsEl.innerHTML = `
            <span class="course-stat">📅 ${weeks} weeks</span>
            <span class="course-stat">❓ ${totalQs} questions</span>
        `;
    });
}

function selectCourse(courseId) {
    currentCourse = courseId;
    localStorage.setItem('selectedCourse', courseId);
    document.documentElement.setAttribute('data-course', courseId);

    const viewCourses = document.getElementById('view-courses');
    const viewDashboard = document.getElementById('view-dashboard');
    if (viewCourses) viewCourses.classList.add('view-hidden');
    if (viewDashboard) {
        viewDashboard.classList.remove('view-hidden');
        viewDashboard.classList.add('view-transition');
    }

    const title = document.getElementById('dashboard-title');
    if (title) {
        title.innerText = courseId === 'cloud' ? 'Cloud Computing' : 'Blockchain & Applications';
    }

    buildDashboard();
}

function resetCourseSelection() {
    currentCourse = null;
    localStorage.removeItem('selectedCourse');
    document.documentElement.removeAttribute('data-course');

    const viewCourses = document.getElementById('view-courses');
    const viewDashboard = document.getElementById('view-dashboard');
    if (viewDashboard) viewDashboard.classList.add('view-hidden');
    if (viewCourses) {
        viewCourses.classList.remove('view-hidden');
        viewCourses.classList.add('view-transition');
    }
}

function buildDashboard() {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) return;

    const course = currentCourse || localStorage.getItem('selectedCourse');
    if (!course || !mcqData[course]) {
        resetCourseSelection();
        return;
    }

    currentCourse = course;
    dashboard.innerHTML = '';

    const courseData = mcqData[course];
    const weeks = Object.keys(courseData).sort((a, b) => parseInt(a) - parseInt(b));

    weeks.forEach(week => {
        const card = document.createElement('a');
        card.href = `test.html?course=${course}&week=${week}`;
        card.className = 'week-card';

        const best = getBestScore(course, week);
        let badgeHTML = '';
        if (best) {
            badgeHTML = `<span class="week-score-badge">Best: ${best.score}/${best.total}</span>`;
        }

        card.innerHTML = `
            <span class="week-number">${week}</span>
            <span class="week-label">Week</span>
            ${badgeHTML}
        `;
        dashboard.appendChild(card);
    });

    // Grand Test Card
    const grandCard = document.createElement('a');
    grandCard.href = `test.html?course=${course}&week=grand`;
    grandCard.className = 'week-card grand-test-card';

    const grandBest = getBestScore(course, 'grand');
    let grandBadge = '';
    if (grandBest) {
        grandBadge = `<span class="week-score-badge">Best: ${grandBest.score}/${grandBest.total}</span>`;
    }

    grandCard.innerHTML = `
        <span class="week-number">🏆</span>
        <span class="week-label">Grand Test — All Weeks</span>
        ${grandBadge}
    `;
    dashboard.appendChild(grandCard);
}

function initDashboard() {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) return;

    populateCourseStats();

    const savedCourse = localStorage.getItem('selectedCourse');
    if (savedCourse && mcqData[savedCourse]) {
        selectCourse(savedCourse);
    }
}

// ══════════════════════════════════════════════════════════════
// TEST PAGE LOGIC (test.html) — Duolingo-Style One-at-a-Time
// ══════════════════════════════════════════════════════════════

let questions = [];
let currentIndex = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let selectedOptions = new Set();
let isChecked = false;
let quizState = 'selecting'; // 'selecting' | 'feedback' | 'done'
let lastMilestoneAt = 0;  // track last milestone checkpoint
let scoreAtLastMilestone = 0;  // score at last milestone

function initTest() {
    const urlParams = new URLSearchParams(window.location.search);
    const course = urlParams.get('course');
    const week = urlParams.get('week');

    if (!course || !week || !mcqData[course]) {
        window.location.href = 'index.html';
        return;
    }

    document.documentElement.setAttribute('data-course', course);

    // Gather questions
    const courseData = mcqData[course];
    if (week === 'grand') {
        questions = [];
        Object.keys(courseData).forEach(w => {
            questions = questions.concat(courseData[w]);
        });
    } else {
        questions = courseData[week] ? [...courseData[week]] : [];
    }

    if (questions.length === 0) {
        document.getElementById('question-container').innerHTML = '<p style="text-align:center;color:var(--text-secondary);">No questions available yet.</p>';
        document.getElementById('action-btn').style.display = 'none';
        return;
    }

    questions = shuffle(questions);
    document.getElementById('quiz-total').innerText = questions.length;
    
    showQuestion(0);
}

function showQuestion(index) {
    currentIndex = index;
    selectedOptions.clear();
    isChecked = false;
    quizState = 'selecting';

    // Update counter
    const counterCurrent = document.querySelector('#quiz-counter .current');
    if (counterCurrent) counterCurrent.innerText = index + 1;

    // Update progress bar
    const fill = document.getElementById('progress-fill');
    if (fill) fill.style.width = `${((index) / questions.length) * 100}%`;

    // Reset bottom bar
    const bottomBar = document.getElementById('bottom-bar');
    bottomBar.classList.remove('feedback-correct', 'feedback-wrong');
    
    const feedbackSection = document.getElementById('feedback-section');
    feedbackSection.classList.remove('visible');

    const actionBtn = document.getElementById('action-btn');
    actionBtn.innerText = 'CHECK';
    actionBtn.className = 'quiz-action-btn check-btn';
    actionBtn.disabled = true;
    actionBtn.onclick = handleActionClick;

    // Render question
    const qObj = questions[index];
    const container = document.getElementById('question-container');
    
    let badgeHTML = '';
    if (qObj.isMSQ) {
        badgeHTML = `<span class="msq-badge">Select Multiple</span>`;
    }

    const cleanQ = qObj.q.replace(/\[Week \d+\]\s*/, '');
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    let optionsHTML = '';
    qObj.options.forEach((opt, i) => {
        optionsHTML += `
            <div class="option-card" id="opt-${i}" data-index="${i}" onclick="selectOption(${i})">
                <span class="option-badge">${letters[i] || i + 1}</span>
                <span class="option-text">${opt}</span>
                <span class="option-result-icon" id="opt-icon-${i}"></span>
            </div>
        `;
    });

    container.innerHTML = `
        <div class="question-label">Question ${index + 1} of ${questions.length} ${badgeHTML}</div>
        <div class="question-text">${cleanQ}</div>
        <div class="options-grid">${optionsHTML}</div>
    `;

    // Animate in
    container.classList.remove('view-transition');
    void container.offsetWidth; // force reflow
    container.classList.add('view-transition');
}

function selectOption(index) {
    if (isChecked) return;

    const qObj = questions[currentIndex];
    const isMSQ = qObj.isMSQ || Array.isArray(qObj.correctIndex);

    if (isMSQ) {
        // Toggle for multi-select
        if (selectedOptions.has(index)) {
            selectedOptions.delete(index);
        } else {
            selectedOptions.add(index);
        }
    } else {
        // Single select
        selectedOptions.clear();
        selectedOptions.add(index);
    }

    // Update visual state
    const allCards = document.querySelectorAll('.option-card');
    allCards.forEach((card, i) => {
        if (selectedOptions.has(i)) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });

    // Enable check button
    const actionBtn = document.getElementById('action-btn');
    actionBtn.disabled = selectedOptions.size === 0;
}

function handleActionClick() {
    if (quizState === 'selecting') {
        checkAnswer();
    } else if (quizState === 'feedback') {
        nextQuestion();
    }
}

function checkAnswer() {
    if (selectedOptions.size === 0) return;
    isChecked = true;
    quizState = 'feedback';

    const qObj = questions[currentIndex];
    const correctArr = Array.isArray(qObj.correctIndex) ? qObj.correctIndex : [qObj.correctIndex];
    const selectedArr = Array.from(selectedOptions);

    // Check correctness
    const isCorrect = selectedArr.length === correctArr.length &&
        selectedArr.every(val => correctArr.includes(val));

    if (isCorrect) {
        score++;
        streak++;
        if (streak > bestStreak) bestStreak = streak;
    } else {
        streak = 0;
    }

    // Update streak badge
    const streakBadge = document.getElementById('quiz-streak');
    const streakCount = document.getElementById('quiz-streak-count');
    if (streak >= 2) {
        streakCount.innerText = streak;
        streakBadge.classList.add('visible');
    } else {
        streakBadge.classList.remove('visible');
    }

    // Visual feedback on options
    const allCards = document.querySelectorAll('.option-card');
    allCards.forEach((card, i) => {
        card.style.pointerEvents = 'none';

        if (correctArr.includes(i)) {
            card.classList.remove('selected');
            card.classList.add('correct');
            document.getElementById(`opt-icon-${i}`).innerText = '✓';
        } else if (selectedOptions.has(i)) {
            card.classList.remove('selected');
            card.classList.add('wrong');
            document.getElementById(`opt-icon-${i}`).innerText = '✗';
        } else {
            card.classList.add('dimmed');
        }
    });

    // Show correct answer if user was wrong
    if (!isCorrect) {
        correctArr.forEach(ci => {
            const card = document.getElementById(`opt-${ci}`);
            if (card && !card.classList.contains('correct')) {
                card.classList.add('show-correct');
                document.getElementById(`opt-icon-${ci}`).innerText = '✓';
            }
        });
    }

    // Feedback section
    const bottomBar = document.getElementById('bottom-bar');
    const feedbackSection = document.getElementById('feedback-section');
    const feedbackIcon = document.getElementById('feedback-icon');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackSolution = document.getElementById('feedback-solution');

    if (isCorrect) {
        bottomBar.classList.add('feedback-correct');
        feedbackIcon.innerText = '✅';
        feedbackTitle.innerText = 'Correct!';
        feedbackTitle.className = 'feedback-title correct';
        spawnConfetti();
    } else {
        bottomBar.classList.add('feedback-wrong');
        feedbackIcon.innerText = '❌';
        feedbackTitle.innerText = 'Incorrect';
        feedbackTitle.className = 'feedback-title wrong';
    }

    feedbackSolution.innerText = qObj.solution || '';
    feedbackSection.classList.add('visible');

    // Change button
    const actionBtn = document.getElementById('action-btn');
    actionBtn.disabled = false;
    if (isCorrect) {
        actionBtn.innerText = 'CONTINUE';
        actionBtn.className = 'quiz-action-btn continue-btn';
    } else {
        actionBtn.innerText = 'GOT IT';
        actionBtn.className = 'quiz-action-btn wrong-continue-btn';
    }
}

function nextQuestion() {
    if (currentIndex + 1 >= questions.length) {
        showResults();
        return;
    }

    // Milestone check every 3 questions
    const questionsAnswered = currentIndex + 1;
    const milestoneInterval = 3;
    if (questionsAnswered > 0 && questionsAnswered % milestoneInterval === 0 && questionsAnswered !== lastMilestoneAt) {
        const correctSinceLast = score - scoreAtLastMilestone;
        lastMilestoneAt = questionsAnswered;
        scoreAtLastMilestone = score;

        if (correctSinceLast >= 2) {
            // Show milestone, then advance
            showMilestone(correctSinceLast, milestoneInterval, () => {
                showQuestion(currentIndex + 1);
            });
            return;
        }
    }

    showQuestion(currentIndex + 1);
}

// ── Milestone Celebration System ────────────────────────────
function showMilestone(correctCount, totalInBlock, onDismiss) {
    // Pick message based on how many they got right
    let emoji, title, subtitle;
    if (correctCount === totalInBlock) {
        // Perfect block
        const options = [
            { emoji: '🔥', title: 'On Fire!', subtitle: 'Perfect round — all correct!' },
            { emoji: '⚡', title: 'Unstoppable!', subtitle: 'You nailed every question!' },
            { emoji: '🌟', title: 'Flawless!', subtitle: 'Not a single mistake!' },
        ];
        const pick = options[Math.floor(Math.random() * options.length)];
        emoji = pick.emoji; title = pick.title; subtitle = pick.subtitle;
    } else {
        // Good block (2 out of 3)
        const options = [
            { emoji: '💪', title: 'Great Job!', subtitle: `${correctCount}/${totalInBlock} correct — keep going!` },
            { emoji: '👏', title: 'Well Done!', subtitle: `${correctCount}/${totalInBlock} right — you\'re doing great!` },
            { emoji: '🎯', title: 'Nice Work!', subtitle: `${correctCount}/${totalInBlock} correct — almost perfect!` },
        ];
        const pick = options[Math.floor(Math.random() * options.length)];
        emoji = pick.emoji; title = pick.title; subtitle = pick.subtitle;
    }

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'milestone-overlay';
    overlay.innerHTML = `
        <div class="milestone-emoji">${emoji}</div>
        <div class="milestone-text">${title}</div>
        <div class="milestone-subtext">${subtitle}</div>
        <div class="milestone-score-ring">
            <span class="milestone-score-text">${correctCount}/${totalInBlock}</span>
        </div>
    `;
    document.body.appendChild(overlay);

    // Confetti burst
    spawnConfetti(25);

    // Auto-dismiss after 2 seconds
    setTimeout(() => {
        overlay.classList.add('dismissing');
        setTimeout(() => {
            overlay.remove();
            if (onDismiss) onDismiss();
        }, 400);
    }, 2000);
}

function showResults() {
    quizState = 'done';

    // Save score
    const urlParams = new URLSearchParams(window.location.search);
    const course = urlParams.get('course');
    const week = urlParams.get('week');
    saveScore(course, week, score, questions.length);

    // Hide quiz elements
    document.getElementById('quiz-body').classList.add('view-hidden');
    document.getElementById('bottom-bar').classList.add('view-hidden');
    document.getElementById('quiz-header').style.display = 'none';

    // Update progress to 100%
    const fill = document.getElementById('progress-fill');
    if (fill) fill.style.width = '100%';

    // Show results screen (video plays first)
    const resultsScreen = document.getElementById('results-screen');
    resultsScreen.classList.remove('view-hidden');

    const pct = Math.round((score / questions.length) * 100);

    // Prepare stats content (hidden until video ends)
    const emoji = document.getElementById('results-emoji');
    const title = document.getElementById('results-title');
    const subtitle = document.getElementById('results-subtitle');

    if (pct === 100) {
        emoji.innerText = '🏆';
        title.innerText = 'Perfect Score!';
        subtitle.innerText = 'You nailed every single question!';
    } else if (pct >= 80) {
        emoji.innerText = '🎉';
        title.innerText = 'Excellent Work!';
        subtitle.innerText = 'You\'re almost there, keep it up!';
    } else if (pct >= 60) {
        emoji.innerText = '💪';
        title.innerText = 'Good Effort!';
        subtitle.innerText = 'A little more practice and you\'ll master this.';
    } else {
        emoji.innerText = '📖';
        title.innerText = 'Keep Studying!';
        subtitle.innerText = 'Review the material and try again.';
    }

    document.getElementById('stat-score').innerText = `${score}/${questions.length}`;
    document.getElementById('stat-accuracy').innerText = `${pct}%`;
    document.getElementById('stat-streak').innerText = bestStreak;

    const scoreEl = document.getElementById('stat-score');
    if (pct >= 80) scoreEl.className = 'result-stat-value';
    else if (pct >= 50) scoreEl.className = 'result-stat-value warning';
    else scoreEl.className = 'result-stat-value danger';

    const accEl = document.getElementById('stat-accuracy');
    if (pct >= 80) accEl.className = 'result-stat-value';
    else if (pct >= 50) accEl.className = 'result-stat-value warning';
    else accEl.className = 'result-stat-value danger';

    // Play celebration video, then transition to stats
    const video = document.getElementById('celebration-video');
    const wrapper = document.getElementById('celebration-wrapper');
    const resultsContent = document.getElementById('results-content');

    function revealStats() {
        wrapper.classList.add('fade-out');
        setTimeout(() => {
            wrapper.style.display = 'none';
            resultsContent.style.display = '';
            // Confetti burst for good scores
            if (pct >= 60) {
                spawnConfetti(40);
                setTimeout(() => spawnConfetti(30), 400);
            }
        }, 600);
    }

    // Try to play the video
    if (video) {
        let revealed = false;
        const safeReveal = () => {
            if (revealed) return;
            revealed = true;
            revealStats();
        };

        video.currentTime = 0;
        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Video is playing — reveal stats when it ends
                video.addEventListener('ended', safeReveal, { once: true });
                // Fallback: if video is longer than 6s or gets stuck
                setTimeout(safeReveal, 6000);
            }).catch(() => {
                // Autoplay blocked — skip video, show stats immediately
                wrapper.style.display = 'none';
                resultsContent.style.display = '';
                if (pct >= 60) {
                    spawnConfetti(40);
                    setTimeout(() => spawnConfetti(30), 400);
                }
            });
        } else {
            // Older browser — fallback
            video.addEventListener('ended', safeReveal, { once: true });
            setTimeout(safeReveal, 6000);
        }
    } else {
        // No video element — show stats directly
        wrapper.style.display = 'none';
        resultsContent.style.display = '';
        if (pct >= 60) {
            spawnConfetti(40);
            setTimeout(() => spawnConfetti(30), 400);
        }
    }
}

// ── Confetti System ─────────────────────────────────────────
function spawnConfetti(count = 20) {
    const container = document.getElementById('confetti-container');
    if (!container) return;

    const colors = ['#58cc02', '#ff9600', '#ffd900', '#00d4ff', '#ff4b4b', '#ce82ff', '#1cb0f6'];

    for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width = `${6 + Math.random() * 8}px`;
        piece.style.height = `${6 + Math.random() * 8}px`;
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        piece.style.animationDuration = `${1.5 + Math.random() * 1.5}s`;
        piece.style.animationDelay = `${Math.random() * 0.5}s`;
        container.appendChild(piece);

        setTimeout(() => piece.remove(), 3000);
    }
}

// ══════════════════════════════════════════════════════════════
// INITIALIZATION
// ══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    // Track visit
    trackVisit();

    // Admin easter egg
    const headerLogo = document.getElementById('header-logo');
    if (headerLogo) {
        headerLogo.addEventListener('click', (e) => {
            e.preventDefault();
            handleHeaderClick();
            if (titleClickCount < 5) {
                window.location.href = 'index.html';
            }
        });
    }

    // Init dashboard if on index.html
    if (document.getElementById('dashboard')) {
        initDashboard();
    }
});
