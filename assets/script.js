// script.js - Core application logic

// --- Secret Visitor Counter & Admin Logic ---
const COUNTER_NAMESPACE = "nptel-cloud-mcq-ravikant"; // Unique namespace
const COUNTER_KEY = "visits";

async function trackVisit() {
    try {
        // Use no-cors mode to ensure the 'hit' reaches the server even if we can't read the response
        fetch(`https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${COUNTER_KEY}/up`, { mode: 'no-cors' });
    } catch (e) {
        // Silent fail
    }
}

let titleClickCount = 0;
let lastClickTime = 0;

function handleHeaderClick() {
    const now = Date.now();
    if (now - lastClickTime > 2000) titleClickCount = 0; // Reset if too slow
    
    titleClickCount++;
    lastClickTime = now;

    if (titleClickCount === 5) {
        showAdminStats();
        titleClickCount = 0;
    }
}

async function showAdminStats() {
    // Since browsers block reading the API count directly (CORS), 
    // we will show the admin a direct link to the live stats.
    const statsUrl = `https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${COUNTER_KEY}`;
    
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--glass-bg);
        backdrop-filter: blur(10px);
        padding: 20px;
        border-radius: 15px;
        border: 1px solid var(--accent);
        color: var(--text-primary);
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        z-index: 10000;
        text-align: center;
        animation: slideUp 0.3s ease-out;
    `;
    toast.innerHTML = `
        <div style="margin-bottom:10px;">🛡️ <strong>Admin Menu</strong></div>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:15px;">
            Browser security blocks direct counting.<br>Click below to see the live visitor data:
        </p>
        <a href="${statsUrl}" target="_blank" style="
            display: inline-block;
            background: var(--accent);
            color: white;
            padding: 8px 15px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 0.9rem;
        ">Open Live Stats ↗</a>
        <button id="close-admin" style="display:block; margin: 10px auto 0; background:none; border:none; color:var(--text-secondary); cursor:pointer; font-size:0.8rem;">Close</button>
    `;
    document.body.appendChild(toast);
    
    document.getElementById('close-admin').onclick = () => toast.remove();
}

// --- Global State ---
let currentCourse = null;
let currentQuestions = [];

// --- Course Selection Logic ---
function selectCourse(courseId) {
    currentCourse = courseId;
    localStorage.setItem('selectedCourse', courseId);
    
    // UI Transitions
    document.getElementById('course-selector').style.display = 'none';
    document.getElementById('dashboard').style.display = 'grid';
    document.getElementById('back-btn-container').style.display = 'block';
    
    const subtitle = document.getElementById('subtitle');
    if (subtitle) {
        subtitle.innerText = courseId === 'cloud' ? 'Cloud Computing Dashboard' : 'Blockchain and its Applications Dashboard';
    }
    
    // Apply Course Theme
    document.documentElement.setAttribute('data-course', courseId);
    
    initDashboard();
}

function resetCourseSelection() {
    currentCourse = null;
    localStorage.removeItem('selectedCourse');
    document.documentElement.removeAttribute('data-course');
    
    document.getElementById('course-selector').style.display = 'grid';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('back-btn-container').style.display = 'none';
    
    const subtitle = document.getElementById('subtitle');
    if (subtitle) subtitle.innerText = 'Select your course to continue';
}

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

// Check saved theme and course on load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light'; 
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
});

// Utility: Shuffle an array
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function initDashboard() {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) return; // not on index.html
    
    const course = currentCourse || localStorage.getItem('selectedCourse');
    if (!course || !mcqData[course]) {
        resetCourseSelection();
        return;
    }

    currentCourse = course;
    // Switch UI view if we loaded from storage
    document.getElementById('course-selector').style.display = 'none';
    document.getElementById('dashboard').style.display = 'grid';
    document.getElementById('back-btn-container').style.display = 'block';
    
    const subtitle = document.getElementById('subtitle');
    if (subtitle) subtitle.innerText = course === 'cloud' ? 'Cloud Computing Dashboard' : 'Blockchain and its Applications Dashboard';

    // Apply Course Theme
    document.documentElement.setAttribute('data-course', course);

    dashboard.innerHTML = '';
    
    const courseData = mcqData[course];
    const availableWeeks = Object.keys(courseData).sort((a, b) => parseInt(a) - parseInt(b));
    
    availableWeeks.forEach(week => {
        const card = document.createElement('a');
        card.href = `test.html?course=${course}&week=${week}`;
        card.className = 'card';
        card.innerHTML = `<h3>Week ${week}</h3><p>Assignment MCQ</p>`;
        dashboard.appendChild(card);
    });

    // Grand Test Card
    const grandCard = document.createElement('a');
    grandCard.href = `test.html?course=${course}&week=grand`;
    grandCard.className = 'card grand-test-card';
    grandCard.innerHTML = `<h3>Grand Test</h3><p>All Weeks Combined & Shuffled</p>`;
    dashboard.appendChild(grandCard);
}

function initTest() {
    const urlParams = new URLSearchParams(window.location.search);
    const course = urlParams.get('course');
    const week = urlParams.get('week');
    
    if (!course || !week || !mcqData[course]) {
        window.location.href = 'index.html';
        return;
    }

    const courseName = course === 'cloud' ? 'Cloud Computing' : 'Blockchain and its Applications';
    document.getElementById('test-title').innerText = week === 'grand' ? `${courseName} Grand Test` : `${courseName} - Week ${week}`;

    // Apply Course Theme
    document.documentElement.setAttribute('data-course', course);

    // Gather questions
    const courseData = mcqData[course];
    if (week === 'grand') {
        currentQuestions = [];
        Object.keys(courseData).forEach(w => {
            currentQuestions = currentQuestions.concat(courseData[w]);
        });
    } else {
        currentQuestions = courseData[week] ? [...courseData[week]] : [];
    }

    if (currentQuestions.length === 0) {
        document.getElementById('test-container').innerHTML = '<h2>No questions available yet.</h2><br><a href="index.html" class="back-link">← Back</a>';
        return;
    }

    currentQuestions = shuffle(currentQuestions);
    renderQuestions();
}

function renderQuestions() {
    const container = document.getElementById('test-container');
    if (!container) return;
    
    container.innerHTML = '';

    const qWrapper = document.createElement('div');
    qWrapper.id = 'questions-wrapper';

    currentQuestions.forEach((qObj, index) => {
        const block = document.createElement('div');
        block.className = 'question-block';
        
        const qHeader = document.createElement('div');
        if (qObj.isMSQ) {
            const badge = document.createElement('span');
            badge.className = 'msq-badge';
            badge.innerText = 'MSQ (Multiple Select)';
            qHeader.appendChild(badge);
        }

        const qText = document.createElement('div');
        qText.className = 'question-text';
        qText.innerText = `${index + 1}. ${qObj.q.replace(/\[Week \d+\]\s*/, '')}`;
        qHeader.appendChild(qText);
        block.appendChild(qHeader);

        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-container';

        qObj.options.forEach((optText, optIndex) => {
            const label = document.createElement('label');
            label.className = `option-label q-${index}-opt`;
            label.id = `label-q${index}-o${optIndex}`;
            
            const input = document.createElement('input');
            input.type = qObj.isMSQ ? 'checkbox' : 'radio';
            input.name = `question-${index}`;
            input.value = optIndex;

            label.appendChild(input);
            label.appendChild(document.createTextNode(optText));
            optionsContainer.appendChild(label);
        });

        block.appendChild(optionsContainer);
        
        // Hidden solution
        const solBlock = document.createElement('div');
        solBlock.className = 'solution-block';
        solBlock.id = `solution-${index}`;
        solBlock.style.display = 'none';
        
        const correctLabels = Array.isArray(qObj.correctIndex) 
            ? qObj.correctIndex.map(i => String.fromCharCode(65 + i)).join(', ')
            : String.fromCharCode(65 + qObj.correctIndex);

        solBlock.innerHTML = `<strong>Correct Answer: ${correctLabels}</strong><br><br><strong>Detailed Solution:</strong><p>${qObj.solution || "No detailed solution provided."}</p>`;
        block.appendChild(solBlock);
        qWrapper.appendChild(block);
    });

    container.appendChild(qWrapper);
}

function submitTest() {
    let score = 0;
    
    currentQuestions.forEach((qObj, index) => {
        const inputs = document.querySelectorAll(`input[name="question-${index}"]`);
        const selectedIndices = Array.from(inputs)
            .filter(i => i.checked)
            .map(i => parseInt(i.value));
            
        // Disable inputs
        inputs.forEach(i => i.disabled = true);

        // Logic for correctness
        let isCorrect = false;
        const correctArr = Array.isArray(qObj.correctIndex) ? qObj.correctIndex : [qObj.correctIndex];
        
        // Check if user exactly matched the correct set
        if (selectedIndices.length === correctArr.length && 
            selectedIndices.every(val => correctArr.includes(val))) {
            isCorrect = true;
            score++;
        }

        // Visual feedback
        correctArr.forEach(cIdx => {
            const label = document.getElementById(`label-q${index}-o${cIdx}`);
            if (label) label.classList.add('correct');
        });

        selectedIndices.forEach(sIdx => {
            if (!correctArr.includes(sIdx)) {
                const label = document.getElementById(`label-q${index}-o${sIdx}`);
                if (label) label.classList.add('wrong');
            }
        });

        // Show solution
        document.getElementById(`solution-${index}`).style.display = 'block';
    });

    const total = currentQuestions.length;
    document.getElementById('score-display').innerHTML = `Score: ${score} / ${total}`;
    
    const percentage = (score / total) * 100;
    const msg = document.getElementById('feedback-msg');
    if(percentage === 100) msg.innerText = "Excellent! Perfect score.";
    else if(percentage >= 80) msg.innerText = "Great job! Very close.";
    else msg.innerText = "Keep studying and try again!";

    document.getElementById('result-card').classList.add('visible');
    const btn = document.getElementById('submit-btn');
    btn.disabled = true;
    btn.style.opacity = 0.5;
}

// Init Dashboard if on index.html
if (document.getElementById('dashboard')) {
    document.addEventListener('DOMContentLoaded', initDashboard);
}

document.addEventListener('DOMContentLoaded', () => {
    trackVisit(); 
    
    // Add listener to the header for secret trigger
    const headerTitle = document.querySelector('header h1');
    if (headerTitle) {
        headerTitle.style.cursor = 'pointer';
        headerTitle.addEventListener('click', handleHeaderClick);
    }
});
