document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  } else if (!prefersDark) {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === 'light' ? '🌙' : '☀️';
    themeToggleBtn.setAttribute('title', `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`);
  }

  // Interactive Interview Questions Accordion
  const accordionButtons = document.querySelectorAll('.qa-question');
  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const parentItem = button.parentElement;
      const isOpen = parentItem.classList.contains('active');

      // Close all accordion items
      document.querySelectorAll('.qa-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.qa-question').setAttribute('aria-expanded', 'false');
      });

      // If it wasn't open, open it
      if (!isOpen) {
        parentItem.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // URL Calculator / Helper
  const ghUsernameInput = document.getElementById('gh-username');
  const ghRepoInput = document.getElementById('gh-repo');
  const ghUrlDisplay = document.getElementById('gh-url-display');
  const copyBtn = document.getElementById('copy-url-btn');

  function updatePagesUrl() {
    const username = (ghUsernameInput?.value || 'username').trim() || 'username';
    const repo = (ghRepoInput?.value || 'repo-name').trim() || 'repo-name';
    const generatedUrl = `https://${username.toLowerCase()}.github.io/${repo.toLowerCase()}/`;
    if (ghUrlDisplay) {
      ghUrlDisplay.textContent = generatedUrl;
      ghUrlDisplay.setAttribute('href', generatedUrl);
    }
  }

  if (ghUsernameInput && ghRepoInput) {
    ghUsernameInput.addEventListener('input', updatePagesUrl);
    ghRepoInput.addEventListener('input', updatePagesUrl);
    updatePagesUrl();
  }

  if (copyBtn && ghUrlDisplay) {
    copyBtn.addEventListener('click', async () => {
      const textToCopy = ghUrlDisplay.textContent;
      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '✓ Copied!';
        copyBtn.style.background = 'var(--accent-emerald)';
        copyBtn.style.color = '#ffffff';
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.style.background = '';
          copyBtn.style.color = '';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    });
  }

  // Current year in footer
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

