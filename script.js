// === ДАННЫЕ ПРОФИЛЯ ===
const profile = {
    name: "nikitta.eth",
    username: "nikitta",
    domain: "eth",
    title: "AI Engineer | Builder | Researcher",
    
    email: "nikitta@eth.email",
    telegram: "@nikitta_eth",
    github: "https://github.com/nikitta-eth",
    linkedin: "https://linkedin.com/in/nikitta-eth",
    website: "https://nikitta.eth",
    
    about: `Привет! Я nikitta.eth — энтузиаст AI и технологий.

Моя специализация — разработка AI-систем, исследование новых технологий и создание продуктов на стыке инноваций.

Меня интересуют:
  • Large Language Models (LLM) и их применение
  • AI Agents и автономные системы
  • Web3 и децентрализованные технологии
  • Data Science и аналитика
  • Open Source проекты

Я верю, что технологии должны быть доступными и полезными для каждого.`,
    
    skills: {
        "AI/ML": ["PyTorch", "LangChain", "OpenAI API", "Hugging Face", "RAG Systems", "AI Agents"],
        "Development": ["Python", "TypeScript", "Next.js", "FastAPI", "Solidity", "Rust"],
        "Data": ["Pandas", "SQL", "Vector DBs", "Data Pipelines", "Analytics"],
        "Web3": ["Ethereum", "Smart Contracts", "DeFi", "NFTs", "dApps"],
    },
    
    experience: [
        {
            company: "Web3 / AI Projects",
            role: "Independent Builder",
            period: "2023 — настоящее время",
            description: "Разработка AI-продуктов и Web3 проектов. Исследования в области LLM и автономных агентов."
        },
        {
            company: "Tech Startup",
            role: "AI Developer",
            period: "2022 — 2023",
            description: "Создание ML-моделей, интеграция LLM в продукты, разработка AI-фич."
        },
    ],
    
    projects: [
        {
            name: "AI Agent Framework",
            description: "Фреймворк для создания автономных AI-агентов с поддержкой инструментов и памяти.",
            tech: ["Python", "LangChain", "OpenAI", "Redis", "FastAPI"],
            link: "https://github.com/nikitta-eth/ai-agents",
            status: "active"
        },
        {
            name: "Web3 Analytics Dashboard",
            description: "Дашборд для аналитики on-chain данных и DeFi протоколов.",
            tech: ["TypeScript", "React", "The Graph", "D3.js"],
            link: "https://github.com/nikitta-eth/web3-analytics",
            status: "active"
        },
        {
            name: "LLM Playground",
            description: "Песочница для экспериментов с LLM: промпт-инжиниринг, fine-tuning, RAG.",
            tech: ["Python", "Streamlit", "OpenAI", "ChromaDB"],
            link: "https://github.com/nikitta-eth/llm-playground",
            status: "active"
        },
    ],
    
    blog: [
        {
            title: "Строим AI-агентов: от теории к практике",
            date: "2024-03-15",
            tags: ["AI", "Agents", "LLM"],
            excerpt: "Как создать автономного AI-агента с памятью и инструментами..."
        },
        {
            title: "RAG системы: полный гайд",
            date: "2024-02-20",
            tags: ["RAG", "LLM", "Vector DB"],
            excerpt: "Всё о Retrieval-Augmented Generation: архитектура, реализация..."
        },
    ],
    
    interests: ["AI Agents & Autonomy", "Open Source", "Web3 & DeFi", "Киберпанк эстетика", "Электронная музыка"],
    
    education: [
        {
            institution: "Self-taught & Online",
            degree: "AI/ML, Web3 Development",
            year: "2021—2024"
        },
    ],
};

// === ASCII ЛОГОТИП NIKITTA.ETH ===
const ASCII_LOGO = `<span class="cyan">
███╗   ██╗███████╗██╗  ██╗██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗
████╗  ██║██╔════╝╚██╗██╔╝██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝
██╔██╗ ██║█████╗   ╚███╔╝ ██║ █╗ ██║██║   ██║██████╔╝█████╔╝ 
██║╚██╗██║██╔══╝   ██╔██╗ ██║███╗██║██║   ██║██╔══██╗██╔═██╗ 
██║ ╚████║███████╗██╔╝ ██╗╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗
╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝ ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
</span>
<span class="dim">              AI Engineer | Builder | Researcher</span>`;

const MINI_LOGO = `<span class="cyan">
      ▄▄▄▄▄▄▄
     ▄███████▄
    ▄██▀▀▀▀▀██▄
   ▄██   ◇   ██▄
   ██   ◇   ██
    ▀███████▀
</span>`;

// === ЭЛЕМЕНТЫ ===
const outputEl = document.getElementById('output');
const inputEl = document.getElementById('command-input');
const terminalContent = document.getElementById('terminal-content');

// === СОСТОЯНИЕ ===
let commandHistory = [];
let historyIndex = -1;

// === ИНИЦИАЛИЗАЦИЯ ===
function init() {
    printWelcome();
    focusInput();
    
    terminalContent.addEventListener('click', focusInput);
    inputEl.addEventListener('keydown', handleKeyDown);
}

function printWelcome() {
    print(ASCII_LOGO);
    print('');
    print('  Добро пожаловать в моё интерактивное портфолио!');
    print('  Введите <span class="green">help</span> для списка команд.');
    print('');
}

// === ВЫВОД ===
function print(text) {
    const line = document.createElement('div');
    line.className = 'line';
    line.innerHTML = text;
    outputEl.appendChild(line);
    scrollToBottom();
}

function scrollToBottom() {
    terminalContent.scrollTop = terminalContent.scrollHeight;
}

function clearTerminal() {
    outputEl.innerHTML = '';
}

function focusInput() {
    inputEl.focus();
}

// === ОБРАБОТКА КОМАНД ===
function handleKeyDown(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const cmd = inputEl.value;
        inputEl.value = '';
        
        if (cmd.trim()) {
            commandHistory.push(cmd);
            historyIndex = -1;
        }
        
        printPrompt(cmd);
        processCommand(cmd);
    } else if (e.key === 'Tab') {
        e.preventDefault();
        autocomplete();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        navigateHistory(-1);
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        navigateHistory(1);
    } else if (e.key === 'l' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        clearTerminal();
    }
}

function printPrompt(cmd) {
    print(`<span class="green">${profile.username}@${profile.domain}</span>:<span class="cyan">~</span>$ ${escapeHtml(cmd)}`);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function navigateHistory(direction) {
    if (commandHistory.length === 0) return;
    
    historyIndex += direction;
    
    if (historyIndex < -1) historyIndex = -1;
    if (historyIndex >= commandHistory.length) historyIndex = commandHistory.length - 1;
    
    if (historyIndex === -1) {
        inputEl.value = '';
    } else {
        inputEl.value = commandHistory[commandHistory.length - 1 - historyIndex];
    }
}

function autocomplete() {
    const commands = ['help', 'about', 'skills', 'projects', 'experience', 'blog', 'education', 'contact', 'neofetch', 'interests', 'resume', 'clear', 'theme', 'date', 'whoami', 'ls', 'cat', 'sudo'];
    const input = inputEl.value.toLowerCase();
    const matches = commands.filter(c => c.startsWith(input));
    
    if (matches.length === 1) {
        inputEl.value = matches[0];
    } else if (matches.length > 1) {
        print(`<span class="dim">${matches.join('  ')}</span>`);
    }
}

// === КОМАНДЫ ===
function processCommand(input) {
    const cmd = input.trim().toLowerCase();
    const args = cmd.split(' ');
    const command = args[0];
    
    switch (command) {
        case 'help':
            showHelp();
            break;
        case 'about':
            showAbout();
            break;
        case 'skills':
            showSkills();
            break;
        case 'projects':
            showProjects();
            break;
        case 'experience':
            showExperience();
            break;
        case 'blog':
            showBlog();
            break;
        case 'education':
            showEducation();
            break;
        case 'contact':
            showContact();
            break;
        case 'neofetch':
            showNeofetch();
            break;
        case 'interests':
            showInterests();
            break;
        case 'resume':
            showResume();
            break;
        case 'clear':
            clearTerminal();
            break;
        case 'theme':
            showTheme();
            break;
        case 'date':
            showDate();
            break;
        case 'whoami':
            showWhoami();
            break;
        case 'ls':
            showLs();
            break;
        case 'cat':
            showCat(args[1]);
            break;
        case 'sudo':
            showSudo();
            break;
        case '':
            break;
        default:
            print(`<span class="red">Команда не найдена: ${command}</span>`);
            print('Введите <span class="green">help</span> для списка команд.');
    }
}

function showHelp() {
    print('');
    print('<span class="cyan">Доступные команды:</span>');
    print('');
    print('  <span class="green">about</span>      — Информация обо мне');
    print('  <span class="green">skills</span>      — Мои навыки и технологии');
    print('  <span class="green">projects</span>    — Мои проекты');
    print('  <span class="green">experience</span>  — Опыт работы');
    print('  <span class="green">blog</span>        — Последние статьи');
    print('  <span class="green">education</span>   — Образование');
    print('  <span class="green">contact</span>     — Контактная информация');
    print('  <span class="green">neofetch</span>    — Системная информация');
    print('  <span class="green">interests</span>   — Мои интересы');
    print('  <span class="green">resume</span>      — Скачать резюме');
    print('  <span class="green">clear</span>       — Очистить терминал');
    print('  <span class="green">ls</span>          — Список разделов');
    print('  <span class="green">whoami</span>      — Кто я');
    print('');
    print('<span class="dim">Подсказки:</span>');
    print('  <span class="cyan">Tab</span> — автодополнение');
    print('  <span class="cyan">↑↓</span>   — история команд');
    print('');
}

function showAbout() {
    print('');
    print('<span class="cyan">═══════════════════════════════════════════════════════</span>');
    print('');
    print(`<span class="green">${profile.name}</span>`);
    print(`<span class="dim">${profile.title}</span>`);
    print('');
    print(profile.about);
    print('');
    print('<span class="cyan">═══════════════════════════════════════════════════════</span>');
}

function showSkills() {
    print('');
    print('<span class="cyan">Навыки и технологии:</span>');
    print('');
    for (const [category, skills] of Object.entries(profile.skills)) {
        print(`<span class="yellow">▸ ${category}:</span>`);
        for (const skill of skills) {
            print(`    • ${skill}`);
        }
        print('');
    }
}

function showProjects() {
    print('');
    print('<span class="cyan">Проекты:</span>');
    print('');
    
    const statusIcons = { active: '🟢', completed: '✅', archived: '📦' };
    
    profile.projects.forEach((p, i) => {
        const icon = statusIcons[p.status] || '•';
        print(`<span class="green">${i + 1}. ${p.name}</span> ${icon}`);
        print(`   ${p.description}`);
        print(`   <span class="dim">Стек:</span> ${p.tech.join(', ')}`);
        print(`   <span class="cyan">↳</span> ${p.link}`);
        print('');
    });
}

function showExperience() {
    print('');
    print('<span class="cyan">Опыт работы:</span>');
    print('');
    
    profile.experience.forEach((e, i) => {
        print(`<span class="green">${i + 1}. ${e.role}</span>`);
        print(`   <span class="yellow">${e.company}</span>`);
        print(`   <span class="dim">${e.period}</span>`);
        print(`   ${e.description}`);
        print('');
    });
}

function showBlog() {
    print('');
    print('<span class="cyan">Последние статьи:</span>');
    print('');
    
    profile.blog.forEach((p, i) => {
        const date = new Date(p.date).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
        print(`<span class="green">${i + 1}. ${p.title}</span>`);
        print(`   <span class="dim">${date}</span>`);
        print(`   <span class="yellow">Теги:</span> ${p.tags.join(', ')}`);
        print(`   ${p.excerpt}`);
        print('');
    });
}

function showEducation() {
    print('');
    print('<span class="cyan">Образование:</span>');
    print('');
    
    profile.education.forEach((e, i) => {
        print(`<span class="green">${i + 1}. ${e.institution}</span>`);
        print(`   ${e.degree}`);
        print(`   <span class="dim">${e.year}</span>`);
        print('');
    });
}

function showContact() {
    print('');
    print('<span class="cyan">Контактная информация:</span>');
    print('');
    print(`  <span class="green">Email:</span>    ${profile.email}`);
    print(`  <span class="green">Telegram:</span> ${profile.telegram}`);
    print(`  <span class="green">GitHub:</span>   ${profile.github}`);
    print(`  <span class="green">LinkedIn:</span> ${profile.linkedin}`);
    print(`  <span class="green">Website:</span>  ${profile.website}`);
    print('');
}

function showNeofetch() {
    const info = [
        `<span class="cyan">${profile.username}</span>@<span class="cyan">${profile.domain}</span>`,
        '─'.repeat(25),
        `<span class="green">Role:</span> ${profile.title}`,
        `<span class="green">Uptime:</span> ${profile.experience[0]?.period || 'N/A'}`,
        `<span class="green">Projects:</span> ${profile.projects.length}`,
        `<span class="green">Skills:</span> ${Object.values(profile.skills).flat().length} technologies`,
        `<span class="green">Shell:</span> zsh 5.9`,
        `<span class="green">Editor:</span> VS Code / Neovim`,
        `<span class="green">OS:</span> macOS / Linux`,
        '─'.repeat(25),
        `<span class="cyan">███</span><span class="green">███</span><span class="yellow">███</span><span class="red">███</span><span class="purple">███</span><span class="cyan">███</span>`,
    ];
    
    print('');
    print(MINI_LOGO);
    info.forEach(line => print('    ' + line));
}

function showInterests() {
    print('');
    print('<span class="cyan">Интересы:</span>');
    print('');
    profile.interests.forEach(i => print(`  • ${i}`));
    print('');
}

function showResume() {
    print('');
    print('<span class="yellow">📄 Резюме:</span>');
    print('  Для скачивания резюме перейдите по ссылке:');
    print(`  <span class="cyan">${profile.website}/resume.pdf</span>`);
    print('');
    print('  Или используйте команду <span class="green">contact</span> для связи.');
    print('');
}

function showTheme() {
    print('');
    print('<span class="cyan">Тема терминала:</span>');
    print('');
    print('  Текущая тема: <span class="green">GitHub Dark</span>');
    print('  Основные цвета:');
    print('    • Background: #0d1117');
    print('    • Foreground: #e6edf3');
    print('    • Green: #3fb950');
    print('    • Cyan: #58a6ff');
    print('    • Yellow: #d29922');
    print('    • Red: #f85149');
    print('    • Purple: #a371f7');
    print('');
}

function showDate() {
    const now = new Date();
    print('');
    print(`  <span class="cyan">${now.toLocaleDateString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>`);
    print(`  <span class="green">${now.toLocaleTimeString('ru-RU')}</span>`);
    print('');
}

function showWhoami() {
    print(`  <span class="cyan">${profile.username}</span> — ${profile.name}`);
}

function showLs() {
    print('');
    print('<span class="cyan">Доступные разделы:</span>');
    print('');
    print('  <span class="green">drwxr-xr-x</span>  about/');
    print('  <span class="green">drwxr-xr-x</span>  skills/');
    print('  <span class="green">drwxr-xr-x</span>  projects/');
    print('  <span class="green">drwxr-xr-x</span>  experience/');
    print('  <span class="green">drwxr-xr-x</span>  blog/');
    print('  <span class="green">drwxr-xr-x</span>  contact/');
    print('  <span class="yellow">-rw-r--r--</span>  resume.pdf');
    print('  <span class="yellow">-rw-r--r--</span>  readme.md');
    print('');
}

function showCat(file) {
    if (!file) {
        print('<span class="red">Использование: cat [файл]</span>');
        return;
    }
    
    const f = file.replace('.txt', '');
    
    if (f === 'about') {
        print(profile.about);
    } else if (f === 'readme') {
        print('');
        print('<span class="cyan"># README.md</span>');
        print('');
        print(`# ${profile.name}`);
        print('');
        print(`AI Engineer | Builder | Researcher`);
        print('');
        print('## Быстрый старт');
        print('');
        print('Введите `help` для списка команд.');
        print('');
        print('## Контакты');
        print('');
        print(`- Email: ${profile.email}`);
        print(`- GitHub: ${profile.github}`);
        print('');
    } else {
        print(`<span class="red">cat: ${file}: Нет такого файла</span>`);
    }
}

function showSudo() {
    print(`<span class="red">[sudo] пароль для ${profile.username}:</span> ********`);
    print(`<span class="red">sudo: 3 неверных попытки ввода пароля</span>`);
    print(`<span class="yellow">😉 Попробуйте команду без sudo</span>`);
}

// === ЗАПУСК ===
init();
