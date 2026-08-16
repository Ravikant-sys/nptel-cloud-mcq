import { useState, useCallback } from 'react';

const STORAGE_KEY = 'nptel-scores';

export function getScoreHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

export function saveScore(course, week, score, total) {
  const history = getScoreHistory();
  const key = `${course}-${week}`;
  const existing = history[key];
  if (!existing || score > existing.score) {
    history[key] = { score, total, date: Date.now() };
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  return history;
}

export function useScoreHistory() {
  const [history, setHistory] = useState(getScoreHistory);

  const save = useCallback((course, week, score, total) => {
    const updated = saveScore(course, week, score, total);
    setHistory(updated);
  }, []);

  const getBest = useCallback((course, week) => {
    return history[`${course}-${week}`] || null;
  }, [history]);

  return { history, save, getBest };
}
