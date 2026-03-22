
let currentQuiz = null;
let questions = [];
let answers = {};
let isSubmitted = false;

function initHome() {
  const grid = document.getElementById('quizGrid');
  grid.innerHTML = quizSets.map((quiz, idx) => `
    <div class="quiz-card">
      <div class="quiz-card-top">
        <div class="quiz-card-title">${quiz.title}</div>
        <!--<div class="quiz-card-time">${quiz.timing}</div>-->
      </div>
      <p>${quiz.description}</p>
      <div class="quiz-tags">
        ${quiz.tags.map(tag => `<span class="quiz-tag">${tag}</span>`).join('')}
        <span class="quiz-tag">8 frågor</span>
      </div>
      <button class="btn btn-primary" onclick="startQuiz('${quiz.id}')">Starta del ${idx + 1}</button>
    </div>
  `).join('');
}

function startQuiz(quizId) {
  currentQuiz = quizSets.find(q => q.id === quizId);
  questions = currentQuiz.questions.map(q => ({ ...q, options: [...q.options] }));
  answers = {};
  isSubmitted = false;

  document.getElementById('homeView').style.display = 'none';
  document.getElementById('resultsPanel').classList.remove('visible');
  document.getElementById('resultsPanel').innerHTML = '';
  document.getElementById('reviewBanner').classList.remove('visible');
  document.getElementById('progressWrap').style.display = '';
  document.getElementById('submitSection').style.display = '';
  document.getElementById('quizContext').textContent = currentQuiz.title;

  renderQuestions();
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestions() {
  const container = document.getElementById('questionsContainer');
  const letters = ['A', 'B', 'C', 'D'];
  container.innerHTML = '';

  questions.forEach((q, i) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = `q${i}`;
    card.innerHTML = `
      <div class="question-top">
        <span class="question-number">${i + 1}/${questions.length}</span>
        <span class="question-category ${q.catClass}">${q.category}</span>
      </div>
      <div class="question-text">${q.q}</div>
      <div class="options" id="opts${i}">
        ${q.options.map((opt, j) => `
          <div class="option" onclick="selectOption(${i}, ${j})" id="opt${i}_${j}">
            <span class="option-letter">${letters[j]}</span>
            <span class="option-text">${opt}</span>
          </div>
        `).join('')}
      </div>
      <div class="explanation" id="expl${i}"></div>
    `;
    container.appendChild(card);
  });
}

function selectOption(qi, oi) {
  if (isSubmitted) return;
  answers[qi] = oi;

  const opts = document.querySelectorAll(`#opts${qi} .option`);
  opts.forEach((o, j) => {
    o.classList.remove('selected');
    if (j === oi) o.classList.add('selected');
  });

  updateProgress();
}

function updateProgress() {
  const count = Object.keys(answers).length;
  const pct = questions.length ? (count / questions.length) * 100 : 0;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent = `${count} / ${questions.length}`;
}

function submitQuiz() {
  isSubmitted = true;
  document.querySelectorAll('.option').forEach(o => o.classList.add('locked'));

  questions.forEach((q, i) => {
    const card = document.getElementById(`q${i}`);
    const userAnswer = answers[i];
    const correctIdx = q.answer;
    const isCorrect = userAnswer === correctIdx;
    const isSkipped = userAnswer === undefined;

    if (isSkipped) card.classList.add('review-skipped');
    else if (isCorrect) card.classList.add('review-correct');
    else card.classList.add('review-wrong');

    document.getElementById(`opt${i}_${correctIdx}`).classList.add('review-correct-answer');

    if (!isSkipped && !isCorrect) {
      const picked = document.getElementById(`opt${i}_${userAnswer}`);
      picked.classList.remove('selected');
      picked.classList.add('review-wrong-pick');
    }

    if (isCorrect) {
      const picked = document.getElementById(`opt${i}_${userAnswer}`);
      picked.classList.remove('selected');
    }

    const expl = document.getElementById(`expl${i}`);
    let prefix, cls;
    if (isSkipped) { prefix = '○ Obesvarad.'; cls = 'expl-skipped'; }
    else if (isCorrect) { prefix = '✓ Rätt!'; cls = 'expl-correct'; }
    else { prefix = '✗ Fel.'; cls = 'expl-wrong'; }
    expl.className = `explanation visible ${cls}`;
    expl.innerHTML = `<strong>${prefix}</strong> ${q.explanation}`;
  });

  document.getElementById('progressWrap').style.display = 'none';
  document.getElementById('submitSection').style.display = 'none';
  document.getElementById('reviewBanner').classList.add('visible');
  showResults();
}

function showResults() {
  let correct = 0;
  const catStats = {};

  questions.forEach((q, i) => {
    const cat = q.category;
    if (!catStats[cat]) catStats[cat] = { total: 0, correct: 0, cls: q.catClass };
    catStats[cat].total++;
    if (answers[i] === q.answer) {
      correct++;
      catStats[cat].correct++;
    }
  });

  const pct = Math.round((correct / questions.length) * 100);
  const circumference = 2 * Math.PI * 65;
  const offset = circumference - (pct / 100) * circumference;

  let ringClass = 'low';
  if (pct >= 80) ringClass = 'good';
  else if (pct >= 50) ringClass = 'mid';

  let message = '';
  if (pct >= 90) message = 'Fantastiskt! Du har mycket god koll på området.';
  else if (pct >= 75) message = 'Bra jobbat! Du har en stabil förståelse.';
  else if (pct >= 50) message = 'Helt okej – repetera gärna de svagare delarna.';
  else message = 'Gå igenom materialet igen och testa en gång till.';

  const skipped = questions.length - Object.keys(answers).length;

  let catHTML = '';
  for (const [name, data] of Object.entries(catStats)) {
    const catPct = Math.round((data.correct / data.total) * 100);
    let barColor = 'var(--wrong)';
    if (catPct >= 80) barColor = 'var(--correct)';
    else if (catPct >= 50) barColor = '#f59e0b';

    catHTML += `
      <div class="cat-result">
        <div class="cat-result-name ${data.cls}">${name}</div>
        <div class="cat-result-bar"><div class="cat-result-bar-fill" style="width:${catPct}%;background:${barColor}"></div></div>
        <div class="cat-result-score">${data.correct}/${data.total} (${catPct}%)</div>
      </div>
    `;
  }

  const panel = document.getElementById('resultsPanel');
  panel.innerHTML = `
    <div class="score-ring">
      <svg viewBox="0 0 140 140">
        <circle class="score-ring-bg" cx="70" cy="70" r="65"/>
        <circle class="score-ring-fill ${ringClass}" cx="70" cy="70" r="65"
          style="stroke-dasharray:${circumference};stroke-dashoffset:${offset}"/>
      </svg>
      <div class="score-label">
        <div class="score-pct">${pct}%</div>
        <div class="score-sub">${correct} av ${questions.length}</div>
      </div>
    </div>
    <div class="results-message">${currentQuiz.title}</div>
    <div class="results-detail">${message} ${skipped > 0 ? `${skipped} obesvarade frågor.` : 'Du svarade på alla frågor!'}</div>
    <div class="category-results">${catHTML}</div>
    <div class="results-btns">
      <button class="btn btn-secondary" onclick="scrollToFirstWrong()">Granska fel ↓</button>
      <button class="btn btn-secondary" onclick="restartCurrentQuiz()">Gör om denna del</button>
      <button class="btn btn-primary" onclick="goHome()">Till quizöversikt</button>
    </div>
  `;
  panel.classList.add('visible');
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToFirstWrong() {
  const idx = questions.findIndex((q, i) => answers[i] === undefined || answers[i] !== q.answer);
  if (idx !== -1) {
    document.getElementById(`q${idx}`).scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function filterReview(type, evt) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (evt && evt.target) evt.target.classList.add('active');

  questions.forEach((q, i) => {
    const card = document.getElementById(`q${i}`);
    const userAnswer = answers[i];
    const isCorrect = userAnswer === q.answer;
    const isSkipped = userAnswer === undefined;

    let show = false;
    if (type === 'all') show = true;
    else if (type === 'wrong' && !isSkipped && !isCorrect) show = true;
    else if (type === 'correct' && isCorrect) show = true;
    else if (type === 'skipped' && isSkipped) show = true;

    card.style.display = show ? '' : 'none';
  });
}

function restartCurrentQuiz() {
  if (currentQuiz) startQuiz(currentQuiz.id);
}

function goHome() {
  currentQuiz = null;
  questions = [];
  answers = {};
  isSubmitted = false;

  document.getElementById('questionsContainer').innerHTML = '';
  document.getElementById('resultsPanel').classList.remove('visible');
  document.getElementById('resultsPanel').innerHTML = '';
  document.getElementById('reviewBanner').classList.remove('visible');
  document.getElementById('progressWrap').style.display = 'none';
  document.getElementById('submitSection').style.display = 'none';
  document.getElementById('homeView').style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

initHome();