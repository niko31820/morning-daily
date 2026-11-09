/* Early preference application; reading never depends on JavaScript. */
(() => {
  const key = 'morning-routine-tech-theme';
  const modes = ['system', 'light', 'dark'];
  const labels = {system: 'système', light: 'clair', dark: 'sombre'};
  let mode = 'system';
  try { const saved = localStorage.getItem(key); if (modes.includes(saved)) mode = saved; } catch (_) {}
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  function apply() {
    if (mode === 'system') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', mode);
    const button = document.querySelector('.theme');
    if (button) {
      button.textContent = 'Thème : ' + labels[mode];
      button.setAttribute('aria-label', 'Thème ' + labels[mode] + '. Changer de thème');
      button.hidden = false;
    }
  }
  apply();
  system.addEventListener('change', apply);
  document.addEventListener('DOMContentLoaded', () => {
    apply();
    document.querySelector('.theme')?.addEventListener('click', () => {
      mode = modes[(modes.indexOf(mode) + 1) % modes.length];
      try { localStorage.setItem(key, mode); } catch (_) {}
      apply();
    });
  });
})();
