// script.js - Core application logic

// --- Theme Toggler Logic ---
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
    if(theme === 'light') {
        if(moon) moon.style.display = 'none';
        if(sun) sun.style.display = 'block';
    } else {
        if(moon) moon.style.display = 'block';
        if(sun) sun.style.display = 'none';
    }
}

// Check saved theme
document.addEventListener('DOMContentLoaded', () => {
    // Default to light mode (friendly) if no theme is saved
    const saved = localStorage.getItem('theme') || 'light'; 
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
});
// ---------------------------

// Utility: Shuffle an array using Fisher-Yates
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Global state for current test
let currentQuestions = [];

function initDashboard() {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) return; // not on index.html
    
    dashboard.innerHTML = '';
    
    const availableWeeks = Object.keys(mcqData).sort((a, b) => parseInt(a) - parseInt(b));
    
    availableWeeks.forEach(week => {
        const card = document.createElement('a');
        card.href = `test.html?week=${week}`;
        card.className = 'card';
        card.innerHTML = `<h3>Week ${week}</h3><p>Assignment MCQ</p>`;
        dashboard.appendChild(card);
    });

    // Grand Test Card
    const grandCard = document.createElement('a');
    grandCard.href = `test.html?week=grand`;
    grandCard.className = 'card grand-test-card';
    grandCard.innerHTML = `<h3>Grand Test</h3><p>All Weeks Combined & Shuffled</p>`;
    dashboard.appendChild(grandCard);
}

function initTest() {
    const urlParams = new URLSearchParams(window.location.search);
    const week = urlParams.get('week');
    if (!week) {
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('test-title').innerText = week === 'grand' ? 'Grand Final Test' : `Week ${week} Assignment`;

    // Gather questions
    if (week === 'grand') {
        currentQuestions = [];
        const availableWeeks = Object.keys(mcqData).sort((a, b) => parseInt(a) - parseInt(b));
        availableWeeks.forEach(w => {
            if (mcqData[w]) {
                currentQuestions = currentQuestions.concat(mcqData[w]);
            }
        });
    } else {
        currentQuestions = mcqData[week] ? [...mcqData[week]] : [];
    }

    if (currentQuestions.length === 0) {
        document.getElementById('test-container').innerHTML = '<h2>No questions available for this week yet. Add them in data.js!</h2><br><a href="index.html" class="back-link">← Back</a>';
        return;
    }

    // Shuffle questions every time test is opened
    currentQuestions = shuffle(currentQuestions);
    renderQuestions();
}

function renderQuestions() {
    const container = document.getElementById('test-container');
    const submitBtn = document.getElementById('submit-btn');
    const resultCard = document.getElementById('result-card');
    
    // Create elements
    const qWrapper = document.createElement('div');
    qWrapper.id = 'questions-wrapper';

    currentQuestions.forEach((qObj, index) => {
        const block = document.createElement('div');
        block.className = 'question-block';
        
        const qText = document.createElement('div');
        qText.className = 'question-text';
        
        let displayQuestion = qObj.q;
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('week') !== 'grand') {
            displayQuestion = displayQuestion.replace(/^\[Week \d+\]\s*/, '');
        }
        
        qText.innerText = `${index + 1}. ${displayQuestion}`;
        block.appendChild(qText);

        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';

        qObj.options.forEach((optText, optIndex) => {
            const label = document.createElement('label');
            label.className = `option-label q-${index}-opt`;
            label.id = `label-q${index}-o${optIndex}`;
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question-${index}`;
            radio.value = optIndex;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(optText));
            optionsContainer.appendChild(label);
        });

        block.appendChild(optionsContainer);
        
        // Add a hidden solution block
        if (qObj.solution) {
            const correctLetter = String.fromCharCode(65 + qObj.correctIndex);
            const solBlock = document.createElement('div');
            solBlock.className = 'solution-block';
            solBlock.id = `solution-${index}`;
            solBlock.style.display = 'none';
            solBlock.style.padding = '15px';
            solBlock.style.marginTop = '15px';
            solBlock.style.backgroundColor = 'var(--glass-bg)';
            solBlock.style.borderRadius = '8px';
            solBlock.style.borderLeft = '4px solid var(--accent)';
            solBlock.innerHTML = `<strong>Correct Answer: ${correctLetter}</strong><br><br><strong>Detailed Solution:</strong><p style="margin-top:5px; font-size: 0.95rem; color: var(--text-secondary);">${qObj.solution}</p>`;
            block.appendChild(solBlock);
        }

        qWrapper.appendChild(block);
    });

    container.appendChild(qWrapper);
}

function submitTest() {
    let score = 0;
    
    currentQuestions.forEach((qObj, index) => {
        const selected = document.querySelector(`input[name="question-${index}"]:checked`);
        const correctOptIndex = qObj.correctIndex;
        
        // Disable all inputs for this question after submit
        const allRadios = document.querySelectorAll(`input[name="question-${index}"]`);
        allRadios.forEach(r => r.disabled = true);

        // Highlight correct answer
        const correctLabel = document.getElementById(`label-q${index}-o${correctOptIndex}`);
        if(correctLabel) correctLabel.classList.add('correct');

        if (selected) {
            const userOptIndex = parseInt(selected.value);
            if (userOptIndex === correctOptIndex) {
                score++;
            } else {
                // Highlight user wrong answer
                const userLabel = document.getElementById(`label-q${index}-o${userOptIndex}`);
                if(userLabel) userLabel.classList.add('wrong');
            }
        }

        // Show solution block
        const solBox = document.getElementById(`solution-${index}`);
        if(solBox) solBox.style.display = 'block';
    });

    const wrongCount = currentQuestions.length - score;
    document.getElementById('score-display').innerHTML = `Correct: <span style="color:var(--success);">${score}</span> | Wrong: <span style="color:var(--danger);">${wrongCount}</span>`;
    
    const percentage = (score / currentQuestions.length) * 100;
    const msg = document.getElementById('feedback-msg');
    if(percentage === 100) msg.innerText = "Perfect! You're ready for the exam.";
    else if(percentage >= 80) msg.innerText = "Great job! Almost perfect.";
    else if(percentage >= 50) msg.innerText = "Good effort, keep reviewing the material.";
    else msg.innerText = "Needs review. Keep studying!";

    document.getElementById('result-card').classList.add('visible');
    
    // Hide submit button
    const btn = document.getElementById('submit-btn');
    btn.innerText = "Evaluated";
    btn.disabled = true;
    btn.style.opacity = 0.5;
}

// Call on load if on index
document.addEventListener('DOMContentLoaded', initDashboard);
