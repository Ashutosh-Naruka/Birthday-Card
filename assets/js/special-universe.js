/* ✨ Ichha's Magical Birthday Universe - Main JavaScript ✨ */

// Global state management
const MagicalUniverse = {
    currentWorld: 'garden',
    isLoaded: false,
    isMusicPlaying: false,
    discoveredSecrets: [],
    unlockedMemories: [],
    gardenFlowers: [],
    stars: [],
    gifts: {
        unwrapped: [],
        contents: {}
    },
    quiz: {
        currentQuestion: 0,
        score: 0,
        questions: []
    }
};

// Initialize the magical universe
function initializeMagicalUniverse() {
    console.log('🌟 Initializing Ichha\'s Magical Universe...');
    
    // Show loading screen
    showLoadingScreen();
    
    // Initialize all systems
    setTimeout(() => {
        initializeData();
        setupEventListeners();
        initializeWorlds();
        
        // Complete loading
        setTimeout(() => {
            hideLoadingScreen();
            showWelcomePortal();
        }, 3000);
    }, 500);
}

// Loading screen management
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingProgress = document.getElementById('loadingProgress');
    const loadingText = document.getElementById('loadingText');
    
    const loadingSteps = [
        'Planting digital flowers... 🌸',
        'Creating constellation map... ⭐',
        'Wrapping virtual gifts... 🎁',
        'Composing birthday melodies... 🎵',
        'Preparing memory vault... 💭',
        'Adding magical sparkles... ✨',
        'Almost ready for Ichha... 💕'
    ];
    
    let step = 0;
    const loadingInterval = setInterval(() => {
        if (step < loadingSteps.length) {
            loadingText.textContent = loadingSteps[step];
            loadingProgress.style.width = ((step + 1) / loadingSteps.length * 100) + '%';
            step++;
        } else {
            clearInterval(loadingInterval);
        }
    }, 400);
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        MagicalUniverse.isLoaded = true;
    }, 500);
}

// Welcome portal management
function showWelcomePortal() {
    const welcomePortal = document.getElementById('welcomePortal');
    welcomePortal.classList.add('active');
    createPortalParticles();
}

function createPortalParticles() {
    const portalParticles = document.getElementById('portalParticles');
    const particles = ['🌸', '🌺', '⭐', '✨', '💖', '🦋', '🌙', '💫'];
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
        particle.style.position = 'absolute';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.fontSize = (Math.random() * 2 + 1) + 'rem';
        particle.style.opacity = Math.random() * 0.8 + 0.2;
        particle.style.pointerEvents = 'none';
        particle.style.animation = `float ${Math.random() * 3 + 3}s ease-in-out infinite`;
        
        portalParticles.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 6000);
    }, 300);
}

// Universe entry functions
function enterUniverse() {
    const welcomePortal = document.getElementById('welcomePortal');
    const universeContainer = document.getElementById('universeContainer');
    
    // Transition to universe
    welcomePortal.style.opacity = '0';
    setTimeout(() => {
        welcomePortal.style.display = 'none';
        universeContainer.classList.add('active');
        
        // Initialize first world (garden)
        initializeGarden();
        startBackgroundMusic();
    }, 500);
}

function showPreview() {
    alert('🌟 Get ready for:\n\n🌻 A blooming 3D garden you can interact with\n⭐ A constellation of your memories\n🎁 Virtual gifts to unwrap\n🎮 Fun friendship quiz\n🍛 Your favorite recipes\n🎤 Voice message recording\n🔍 Hidden secrets to discover\n\n...and so much more! 💕');
}

// Initialize all data
function initializeData() {
    // Initialize quiz questions
    MagicalUniverse.quiz.questions = [
        {
            question: "What's Ichha's favorite type of flower?",
            options: ["Roses", "Sunflowers", "Cherry Blossoms", "All of them!"],
            correct: 3,
            explanation: "Ichha loves all flowers, especially the ones that bloom in our friendship garden! 🌸"
        },
        {
            question: "Where do we love to go for our walks?",
            options: ["Parks", "Coaching areas", "College campus", "Everywhere together"],
            correct: 3,
            explanation: "Our walks are special no matter where we go, because we're together! 👭"
        },
        {
            question: "What's Ichha's favorite type of food?",
            options: ["Fast food", "South Indian & Rajasthani", "Italian", "Chinese"],
            correct: 1,
            explanation: "Your love for South Indian and Rajasthani cuisine makes every meal special! 🍛"
        },
        {
            question: "What do we talk about most during our walks?",
            options: ["Studies", "Dreams and life", "Movies", "Food"],
            correct: 1,
            explanation: "Our deep conversations about dreams and life make our friendship so meaningful! 💭"
        },
        {
            question: "What's Ichha's favorite color theme?",
            options: ["Dark colors", "Pink and light blue", "Black and white", "Rainbow"],
            correct: 1,
            explanation: "Pink and light blue - just like the colors in this magical universe! 💕"
        },
        {
            question: "What makes our friendship special?",
            options: ["We study together", "We support each other", "We share everything", "All of the above"],
            correct: 3,
            explanation: "Our friendship is special because of everything we share together! 🥰"
        },
        {
            question: "Where did we spend most of our time together?",
            options: ["Coaching and college", "Shopping malls", "Movies", "Restaurants"],
            correct: 0,
            explanation: "Coaching and college days gave us the foundation of our beautiful friendship! 📚"
        },
        {
            question: "What do you love most about our friendship?",
            options: ["The laughs", "The deep talks", "The support", "Everything"],
            correct: 3,
            explanation: "Every moment, every laugh, every talk - everything makes our bond unbreakable! ✨"
        },
        {
            question: "What's the best birthday gift a friend could give?",
            options: ["Expensive items", "Time and memories", "Flowers", "Food"],
            correct: 1,
            explanation: "The most precious gift is the time we spend creating beautiful memories! 🎁"
        },
        {
            question: "How long will our friendship last?",
            options: ["A few years", "Until college", "Until we're old", "Forever and always"],
            correct: 3,
            explanation: "Our friendship is eternal, just like the stars in our constellation! 🌟"
        }
    ];

    // Initialize gift contents
    MagicalUniverse.gifts.contents = {
        poem: {
            title: "A Poem for My Dearest Ichha",
            content: `Dear Ichha, my wonderful friend so true,
Like flowers blooming, bright and new,
Through coaching days and college walks,
We've shared our dreams in heartfelt talks.

Your love for food, both sweet and spice,
Makes every moment feel so nice,
In pink and blue, your favorite hues,
You paint my world in happy news.

On this special birthday, I want to say,
You brighten up my every day,
With friendship pure and love so deep,
These memories forever I'll keep.

Happy Birthday, my dearest friend,
Our beautiful bond will never end! 🌸💕`
        },
        playlist: {
            title: "Our Memory Playlist",
            songs: [
                "🎵 Friendship Songs",
                "🎶 Our Coaching Day Memories",
                "🎼 College Walk Vibes",
                "🎹 Dreams & Talks Melody",
                "🎸 Birthday Celebration Beat",
                "🎤 Forever Friends Anthem"
            ]
        },
        photos: {
            title: "Our Photo Collection",
            message: "All our beautiful memories captured in time! Add your favorite photos of us to make this gift complete. 📸✨"
        },
        wishes: {
            title: "Special Birthday Wishes",
            wishes: [
                "May all your dreams bloom like the flowers you love! 🌻",
                "Wishing you endless joy and happiness! 💖",
                "May every day be as special as our friendship! ✨",
                "Here's to many more years of amazing memories! 🎉",
                "You deserve all the love and cake in the world! 🎂",
                "Happy Birthday to the most wonderful friend! 🥳"
            ]
        },
        future: {
            title: "Future Adventures Await!",
            plans: [
                "🌸 More beautiful walks and talks",
                "🍛 Exploring new restaurants together",
                "📚 Supporting each other's dreams",
                "🎬 Movie marathons and fun times",
                "✈️ Maybe travel adventures?",
                "🎂 Many more birthdays to celebrate!"
            ]
        },
        voice: {
            title: "Voice Message",
            message: "Record a special birthday message for Ichha that she can listen to whenever she misses you! 🎤💕"
        }
    };

    // Initialize secret codes and messages
    const secrets = [
        { code: "BESTIE", message: "You found the secret of true friendship! Our bond is unbreakable. 👭💕" },
        { code: "FLOWERS", message: "Like flowers in a garden, our friendship blooms beautifully! 🌸🌺" },
        { code: "WALKS", message: "Every step we took together led us to this beautiful friendship! 🚶‍♀️✨" },
        { code: "DREAMS", message: "Dream big, my friend! I'll always be here to support you. 🌟💭" },
        { code: "ICHHA", message: "Your name means 'desire' - and I desire our friendship to last forever! 💖" },
        { code: "BIRTHDAY", message: "Today isn't just your birthday - it's a celebration of you! 🎂🎉" },
        { code: "MEMORIES", message: "Our memories are the treasures I keep closest to my heart! 💎❤️" }
    ];
    MagicalUniverse.secretCodes = secrets;
}

// Event listeners setup
function setupEventListeners() {
    // Navigation event listeners
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const worldName = item.dataset.world;
            switchWorld(worldName);
        });
    });

    // Gift box event listeners
    document.querySelectorAll('.gift-box').forEach(giftBox => {
        giftBox.addEventListener('click', () => {
            unwrapGift(giftBox);
        });
    });

    // Voice modal event listeners
    const voiceModal = document.getElementById('voiceModal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            voiceModal.style.display = 'none';
        });
    });

    // Timeline navigation
    document.querySelectorAll('.timeline-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loadTimelinePeriod(btn.dataset.period);
        });
    });

    // Recipe book interactions
    document.querySelectorAll('.recipe-book').forEach(book => {
        book.addEventListener('click', () => {
            loadRecipeBook(book.dataset.cuisine);
        });
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key >= '1' && e.key <= '8') {
            const worldIndex = parseInt(e.key) - 1;
            const worlds = ['garden', 'constellation', 'gifts', 'timeline', 'kitchen', 'quiz', 'poems', 'secrets'];
            if (worlds[worldIndex]) {
                switchWorld(worlds[worldIndex]);
            }
        }
    });
}

// World switching functionality
function switchWorld(worldName) {
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`.nav-item[data-world="${worldName}"]`).classList.add('active');

    // Switch world display
    document.querySelectorAll('.world').forEach(world => {
        world.classList.remove('active');
    });
    document.getElementById(`world-${worldName}`).classList.add('active');

    // Initialize world-specific features
    MagicalUniverse.currentWorld = worldName;
    
    switch(worldName) {
        case 'garden':
            initializeGarden();
            break;
        case 'constellation':
            initializeConstellation();
            break;
        case 'quiz':
            initializeQuiz();
            break;
        case 'timeline':
            initializeTimeline();
            break;
        case 'kitchen':
            initializeKitchen();
            break;
        case 'secrets':
            initializeSecrets();
            break;
    }
}

// Initialize all worlds
function initializeWorlds() {
    console.log('🌍 Initializing magical worlds...');
    // Worlds will be initialized as needed when switched to
}

// 🌻 GARDEN WORLD IMPLEMENTATION
function initializeGarden() {
    console.log('🌻 Initializing magical garden...');
    
    const canvas = document.getElementById('gardenCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Garden state
    const garden = {
        flowers: [],
        butterflies: [],
        raindrops: [],
        season: 'spring',
        isRaining: false
    };

    // Initialize some flowers
    for (let i = 0; i < 8; i++) {
        garden.flowers.push({
            x: Math.random() * canvas.width,
            y: canvas.height - Math.random() * 100 - 50,
            type: ['🌸', '🌺', '🌷', '🌻', '🌹'][Math.floor(Math.random() * 5)],
            size: Math.random() * 0.5 + 0.5,
            growthStage: Math.random(),
            swayOffset: Math.random() * Math.PI * 2,
            bloomTime: Date.now() + Math.random() * 5000
        });
    }

    // Animation loop
    function animateGarden() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw sky gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        if (garden.season === 'spring') {
            gradient.addColorStop(0, '#87CEEB');
            gradient.addColorStop(1, '#98FB98');
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw grass
        ctx.fillStyle = '#90EE90';
        ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

        // Animate and draw flowers
        garden.flowers.forEach((flower, index) => {
            // Sway animation
            flower.swayOffset += 0.02;
            const sway = Math.sin(flower.swayOffset) * 5;
            
            // Growth animation
            if (Date.now() > flower.bloomTime && flower.growthStage < 1) {
                flower.growthStage += 0.01;
            }

            // Draw flower
            ctx.save();
            ctx.translate(flower.x + sway, flower.y);
            ctx.scale(flower.size * flower.growthStage, flower.size * flower.growthStage);
            ctx.font = '30px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(flower.type, 0, 0);
            ctx.restore();

            // Add sparkle effect for fully bloomed flowers
            if (flower.growthStage >= 1 && Math.random() < 0.02) {
                createSparkle(flower.x + sway, flower.y - 20);
            }
        });

        // Draw rain
        if (garden.isRaining) {
            garden.raindrops.forEach(drop => {
                ctx.fillStyle = '#4169E1';
                ctx.fillRect(drop.x, drop.y, 2, 10);
                drop.y += drop.speed;
                if (drop.y > canvas.height) {
                    drop.y = -10;
                    drop.x = Math.random() * canvas.width;
                }
            });
        }

        // Draw butterflies
        garden.butterflies.forEach(butterfly => {
            butterfly.x += Math.sin(butterfly.angle) * 2;
            butterfly.y += Math.cos(butterfly.angle) * 1;
            butterfly.angle += 0.1;
            
            if (butterfly.x < 0) butterfly.x = canvas.width;
            if (butterfly.x > canvas.width) butterfly.x = 0;
            if (butterfly.y < 0) butterfly.y = canvas.height;
            if (butterfly.y > canvas.height) butterfly.y = 0;

            ctx.font = '25px Arial';
            ctx.fillText('🦋', butterfly.x, butterfly.y);
        });

        requestAnimationFrame(animateGarden);
    }

    animateGarden();

    // Update garden info
    document.getElementById('gardenInfo').innerHTML = `
        <p>🌸 Flowers: ${garden.flowers.length}</p>
        <p>🦋 Butterflies: ${garden.butterflies.length}</p>
        <p>🌱 Season: ${garden.season.charAt(0).toUpperCase() + garden.season.slice(1)}</p>
    `;
}

// Garden control functions
function plantFlower() {
    const canvas = document.getElementById('gardenCanvas');
    if (!canvas) return;

    const newFlower = {
        x: Math.random() * canvas.width,
        y: canvas.height - Math.random() * 100 - 50,
        type: ['🌸', '🌺', '🌷', '🌻', '🌹', '🌼', '💐'][Math.floor(Math.random() * 7)],
        size: Math.random() * 0.5 + 0.5,
        growthStage: 0,
        swayOffset: Math.random() * Math.PI * 2,
        bloomTime: Date.now() + 1000
    };

    // Add to garden (assuming garden is accessible)
    console.log('🌱 New flower planted!', newFlower);
    showNotification('🌱 New flower planted in your garden!');
}

function makeItRain() {
    console.log('🌧️ Making it rain!');
    const canvas = document.getElementById('gardenCanvas');
    if (!canvas) return;

    // Create raindrops (this would be implemented in the garden animation)
    for (let i = 0; i < 50; i++) {
        // Rain effect would be added to the garden animation
    }
    
    showNotification('🌧️ Rain dance activated! Your flowers love it!');
}

function changeSeason() {
    console.log('🍂 Changing season!');
    showNotification('🍂 Season changed! Watch your garden transform!');
}

function addButterflies() {
    console.log('🦋 Adding butterflies!');
    showNotification('🦋 Beautiful butterflies have joined your garden!');
}

// ⭐ CONSTELLATION WORLD IMPLEMENTATION
function initializeConstellation() {
    console.log('⭐ Initializing memory constellation...');
    
    const canvas = document.getElementById('starCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars with memories
    const memories = [
        { title: "First Meeting", story: "The day we first met and knew we'd be great friends! 👭" },
        { title: "Coaching Days", story: "Studying together and making boring subjects fun! 📚" },
        { title: "College Walks", story: "Those peaceful walks where we shared our dreams! 🚶‍♀️" },
        { title: "Heart-to-Hearts", story: "Deep conversations that strengthened our bond! 💭" },
        { title: "Shared Snacks", story: "All those delicious meals we enjoyed together! 🍛" },
        { title: "Laughter Moments", story: "The times we couldn't stop laughing! 😂" },
        { title: "Support System", story: "Being there for each other through everything! 🤝" },
        { title: "Future Dreams", story: "Planning our amazing future adventures! ✨" }
    ];

    MagicalUniverse.stars = memories.map((memory, index) => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        memory: memory,
        size: Math.random() * 3 + 2,
        twinkle: Math.random() * Math.PI * 2,
        connected: false,
        clicked: false
    }));

    function animateConstellation() {
        // Create space background
        ctx.fillStyle = '#000011';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw stars
        MagicalUniverse.stars.forEach(star => {
            star.twinkle += 0.1;
            const brightness = Math.sin(star.twinkle) * 0.3 + 0.7;
            
            ctx.fillStyle = star.clicked ? '#FFD700' : `rgba(255, 255, 255, ${brightness})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();

            // Draw glow effect
            if (star.clicked) {
                ctx.shadowColor = '#FFD700';
                ctx.shadowBlur = 15;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size + 3, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
            }
        });

        requestAnimationFrame(animateConstellation);
    }

    animateConstellation();

    // Star click handler
    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        MagicalUniverse.stars.forEach(star => {
            const distance = Math.sqrt((clickX - star.x) ** 2 + (clickY - star.y) ** 2);
            if (distance < star.size + 10) {
                star.clicked = !star.clicked;
                if (star.clicked && !MagicalUniverse.unlockedMemories.includes(star.memory.title)) {
                    MagicalUniverse.unlockedMemories.push(star.memory.title);
                    showMemoryPopup(star.memory);
                    updateConstellationStats();
                }
            }
        });
    });

    updateConstellationStats();
}

function showMemoryPopup(memory) {
    const starInfo = document.getElementById('starInfo');
    starInfo.innerHTML = `
        <h3>✨ ${memory.title} ✨</h3>
        <p>${memory.story}</p>
    `;
    
    createStarShower();
}

function createStarShower() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFloatingElement('⭐', {
                x: Math.random() * window.innerWidth,
                y: -50,
                duration: 3000
            });
        }, i * 100);
    }
}

function updateConstellationStats() {
    document.getElementById('starsConnected').textContent = MagicalUniverse.stars.filter(s => s.clicked).length;
    document.getElementById('memoriesUnlocked').textContent = MagicalUniverse.unlockedMemories.length;
}

// 🎁 GIFT UNWRAPPING IMPLEMENTATION
function unwrapGift(giftElement) {
    const giftType = giftElement.dataset.gift;
    
    if (MagicalUniverse.gifts.unwrapped.includes(giftType)) {
        // Already unwrapped, show content again
        showGiftContent(giftType);
        return;
    }

    // Unwrap animation
    giftElement.classList.add('unwrapped');
    MagicalUniverse.gifts.unwrapped.push(giftType);

    setTimeout(() => {
        showGiftContent(giftType);
        createCelebrationEffect();
    }, 600);
}

function showGiftContent(giftType) {
    const content = MagicalUniverse.gifts.contents[giftType];
    
    if (giftType === 'voice') {
        document.getElementById('voiceModal').style.display = 'block';
        return;
    }

    let contentHTML = `<h3>${content.title}</h3>`;
    
    switch(giftType) {
        case 'poem':
            contentHTML += `<pre style="white-space: pre-line; font-family: 'Dancing Script', cursive; font-size: 1.1rem; line-height: 1.6;">${content.content}</pre>`;
            break;
        case 'playlist':
            contentHTML += '<div class="playlist">';
            content.songs.forEach(song => {
                contentHTML += `<div class="song-item">${song}</div>`;
            });
            contentHTML += '</div>';
            break;
        case 'wishes':
            contentHTML += '<div class="wishes-list">';
            content.wishes.forEach(wish => {
                contentHTML += `<div class="wish-item">${wish}</div>`;
            });
            contentHTML += '</div>';
            break;
        case 'future':
            contentHTML += '<div class="future-plans">';
            content.plans.forEach(plan => {
                contentHTML += `<div class="plan-item">${plan}</div>`;
            });
            contentHTML += '</div>';
            break;
        default:
            contentHTML += `<p>${content.message || content.content}</p>`;
    }

    showModal('Gift Surprise! 🎁', contentHTML);
}

function createCelebrationEffect() {
    const celebrationEmojis = ['🎉', '🎊', '✨', '🌟', '💫', '🎈'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createFloatingElement(celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)], {
                x: Math.random() * window.innerWidth,
                y: window.innerHeight,
                duration: 2000,
                direction: 'up'
            });
        }, i * 50);
    }
}

// 🎮 QUIZ IMPLEMENTATION
function initializeQuiz() {
    console.log('🎮 Initializing friendship quiz...');
    loadQuizQuestion();
}

function loadQuizQuestion() {
    const currentQ = MagicalUniverse.quiz.currentQuestion;
    const questions = MagicalUniverse.quiz.questions;
    
    if (currentQ >= questions.length) {
        showQuizResults();
        return;
    }

    const question = questions[currentQ];
    const quizContent = document.getElementById('quizContent');
    
    quizContent.innerHTML = `
        <div class="quiz-question">
            <h3>Question ${currentQ + 1}</h3>
            <p class="question-text">${question.question}</p>
            <div class="quiz-options">
                ${question.options.map((option, index) => 
                    `<button class="quiz-option" onclick="selectQuizAnswer(${index})">${option}</button>`
                ).join('')}
            </div>
        </div>
    `;

    document.getElementById('currentQuestion').textContent = currentQ + 1;
}

function selectQuizAnswer(selectedIndex) {
    const question = MagicalUniverse.quiz.questions[MagicalUniverse.quiz.currentQuestion];
    const isCorrect = selectedIndex === question.correct;
    
    if (isCorrect) {
        MagicalUniverse.quiz.score++;
        showNotification('🎉 Correct! ' + question.explanation);
    } else {
        showNotification('💭 ' + question.explanation);
    }

    document.getElementById('quizScore').textContent = MagicalUniverse.quiz.score;
    
    setTimeout(() => {
        MagicalUniverse.quiz.currentQuestion++;
        loadQuizQuestion();
    }, 2000);
}

function showQuizResults() {
    const score = MagicalUniverse.quiz.score;
    const total = MagicalUniverse.quiz.questions.length;
    const percentage = Math.round((score / total) * 100);
    
    let message = '';
    if (percentage >= 90) {
        message = "🌟 AMAZING! You know our friendship perfectly! You're truly my bestie! 💕";
    } else if (percentage >= 70) {
        message = "💖 Wonderful! You know me so well! Our bond is really special! ✨";
    } else {
        message = "😊 That's okay! What matters is the love we share, not the score! 🤗";
    }

    document.getElementById('quizContent').innerHTML = `
        <div class="quiz-results">
            <h2>Quiz Complete! 🎊</h2>
            <div class="final-score">
                <div class="score-circle">
                    <span class="percentage">${percentage}%</span>
                    <span class="score-detail">${score}/${total} correct</span>
                </div>
            </div>
            <p class="result-message">${message}</p>
            <button class="quiz-restart" onclick="restartQuiz()">🔄 Play Again</button>
        </div>
    `;
}

function restartQuiz() {
    MagicalUniverse.quiz.currentQuestion = 0;
    MagicalUniverse.quiz.score = 0;
    document.getElementById('quizScore').textContent = '0';
    loadQuizQuestion();
}

// 📸 TIMELINE IMPLEMENTATION
function initializeTimeline() {
    console.log('📸 Initializing photo timeline...');
    loadTimelinePeriod('coaching');
}

function loadTimelinePeriod(period) {
    document.querySelectorAll('.timeline-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.timeline-btn[data-period="${period}"]`).classList.add('active');

    const timelineContent = document.getElementById('timelineContent');
    const periods = {
        coaching: {
            title: '📚 Our Coaching Days',
            memories: [
                'First day we sat together in class',
                'Helping each other with difficult problems',
                'Sharing snacks during breaks',
                'Late study sessions and encouraging each other',
                'Celebrating small victories together'
            ]
        },
        college: {
            title: '🎓 College Adventures',
            memories: [
                'Exploring the campus together',
                'Deep conversations between classes',
                'Supporting each other through challenges',
                'Making the most of college life',
                'Planning our futures together'
            ]
        },
        walks: {
            title: '🚶‍♀️ Our Special Walks',
            memories: [
                'Peaceful morning walks',
                'Sharing our dreams and aspirations',
                'Enjoying nature and fresh air together',
                'Heart-to-heart conversations',
                'Creating memories with every step'
            ]
        },
        fun: {
            title: '🎉 Fun & Laughter',
            memories: [
                'Silly jokes that made us laugh till our stomachs hurt',
                'Spontaneous adventures and discoveries',
                'Celebrating each other\'s achievements',
                'Creating inside jokes only we understand',
                'Being completely ourselves together'
            ]
        }
    };

    const periodData = periods[period];
    timelineContent.innerHTML = `
        <div class="timeline-period">
            <h3>${periodData.title}</h3>
            <div class="timeline-memories">
                ${periodData.memories.map((memory, index) => `
                    <div class="timeline-memory" style="animation-delay: ${index * 0.2}s">
                        <div class="memory-marker">💝</div>
                        <div class="memory-text">${memory}</div>
                    </div>
                `).join('')}
            </div>
            <div class="photo-placeholder">
                <p>📸 Add your favorite photos from this period to make it even more special!</p>
                <button onclick="addPhotosPrompt('${period}')">Add Photos</button>
            </div>
        </div>
    `;
}

function addPhotosPrompt(period) {
    showModal('Add Photos', `
        <p>To add photos for ${period}:</p>
        <ol>
            <li>Place your photos in the assets/images/ folder</li>
            <li>Open browser console (F12)</li>
            <li>Run: addTimelinePhotos('${period}', ['photo1.jpg', 'photo2.jpg'])</li>
        </ol>
    `);
}

// 🍛 KITCHEN IMPLEMENTATION
function initializeKitchen() {
    console.log('🍛 Initializing recipe kitchen...');
}

function loadRecipeBook(cuisine) {
    const recipes = {
        'south-indian': {
            title: '🥘 South Indian Delights',
            recipes: [
                {
                    name: 'Classic Sambar',
                    emoji: '🍛',
                    ingredients: ['Toor dal', 'Tamarind', 'Vegetables', 'Sambar powder', 'Curry leaves'],
                    secret: 'The secret ingredient is love - just like our friendship!'
                },
                {
                    name: 'Crispy Dosa',
                    emoji: '🥞',
                    ingredients: ['Rice', 'Urad dal', 'Fenugreek seeds', 'Salt'],
                    secret: 'Best enjoyed with friends who understand your soul!'
                },
                {
                    name: 'Aromatic Biryani',
                    emoji: '🍚',
                    ingredients: ['Basmati rice', 'Spices', 'Meat/Vegetables', 'Saffron', 'Yogurt'],
                    secret: 'Each grain tells a story of tradition and love!'
                }
            ]
        },
        'rajasthani': {
            title: '🫓 Rajasthani Treats',
            recipes: [
                {
                    name: 'Dal Baati Churma',
                    emoji: '🥮',
                    ingredients: ['Wheat flour', 'Ghee', 'Lentils', 'Jaggery', 'Dry fruits'],
                    secret: 'A royal dish for a royal friend like you!'
                },
                {
                    name: 'Sweet Ghevar',
                    emoji: '🧈',
                    ingredients: ['Flour', 'Ghee', 'Milk', 'Sugar syrup', 'Almonds'],
                    secret: 'As sweet as our friendship memories!'
                },
                {
                    name: 'Spicy Laal Maas',
                    emoji: '🌶️',
                    ingredients: ['Mutton', 'Red chilies', 'Yogurt', 'Spices', 'Onions'],
                    secret: 'Spicy food for spicy conversations!'
                }
            ]
        }
    };

    const cuisineData = recipes[cuisine];
    const recipeDisplay = document.getElementById('recipeDisplay');
    
    recipeDisplay.innerHTML = `
        <h3>${cuisineData.title}</h3>
        <div class="recipe-cards">
            ${cuisineData.recipes.map(recipe => `
                <div class="recipe-card">
                    <div class="recipe-header">
                        <span class="recipe-emoji">${recipe.emoji}</span>
                        <h4>${recipe.name}</h4>
                    </div>
                    <div class="recipe-ingredients">
                        <h5>Ingredients:</h5>
                        <ul>
                            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="recipe-secret">
                        <em>💕 ${recipe.secret}</em>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// 🔍 SECRETS IMPLEMENTATION
function initializeSecrets() {
    console.log('🔍 Initializing secret decoder...');
    updateSecretsDisplay();
}

function decodeSecret() {
    const secretInput = document.getElementById('secretCode');
    const code = secretInput.value.toUpperCase().trim();
    
    const secret = MagicalUniverse.secretCodes.find(s => s.code === code);
    
    if (secret && !MagicalUniverse.discoveredSecrets.includes(code)) {
        MagicalUniverse.discoveredSecrets.push(code);
        showNotification('🎉 Secret discovered! ' + secret.message);
        updateSecretsDisplay();
        createSecretEffect();
    } else if (MagicalUniverse.discoveredSecrets.includes(code)) {
        showNotification('🤔 You already discovered this secret!');
    } else {
        showNotification('🔍 Keep searching! That code is not correct.');
    }
    
    secretInput.value = '';
}

function updateSecretsDisplay() {
    document.getElementById('secretsCount').textContent = MagicalUniverse.discoveredSecrets.length;
    
    const secretList = document.getElementById('secretList');
    secretList.innerHTML = MagicalUniverse.discoveredSecrets.map(code => {
        const secret = MagicalUniverse.secretCodes.find(s => s.code === code);
        return `<div class="discovered-secret">
            <strong>${secret.code}:</strong> ${secret.message}
        </div>`;
    }).join('');
}

function createSecretEffect() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createFloatingElement('🔍', {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                duration: 2000
            });
        }, i * 100);
    }
}

// 🎵 MUSIC AND AUDIO
function startBackgroundMusic() {
    // Create a gentle background ambiance
    if (typeof window.AudioContext !== 'undefined' || typeof window.webkitAudioContext !== 'undefined') {
        playAmbientMusic();
    }
}

function toggleMusic() {
    MagicalUniverse.isMusicPlaying = !MagicalUniverse.isMusicPlaying;
    const musicBtn = document.getElementById('musicToggle');
    
    if (MagicalUniverse.isMusicPlaying) {
        musicBtn.textContent = '🎵 Pause Music';
        playAmbientMusic();
    } else {
        musicBtn.textContent = '🎵 Play Music';
        // Stop music
    }
}

function playAmbientMusic() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Create gentle ambient tones
        function createTone(frequency, duration) {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.5);
            gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + duration);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + duration);
        }

        // Play gentle melody periodically
        if (MagicalUniverse.isMusicPlaying) {
            const notes = [261.63, 293.66, 329.63, 349.23, 392.00]; // C, D, E, F, G
            let noteIndex = 0;
            
            setInterval(() => {
                if (MagicalUniverse.isMusicPlaying) {
                    createTone(notes[noteIndex % notes.length], 2);
                    noteIndex++;
                }
            }, 3000);
        }
    } catch (error) {
        console.log('Audio context not available');
    }
}

// 🎤 VOICE RECORDING (stub - would need Web Audio API implementation)
function initVoiceRecording() {
    // This would implement voice recording functionality
    console.log('🎤 Voice recording feature - implementation needed for full functionality');
}

// UTILITY FUNCTIONS
function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ff6b9d, #c44569);
        color: white;
        padding: 15px 20px;
        border-radius: 25px;
        box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
        z-index: 10001;
        animation: slideInRight 0.5s ease-out;
        max-width: 300px;
        font-size: 0.9rem;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-in forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, duration);
}

function showModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>${title}</h3>
            <div class="modal-body">${content}</div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function createFloatingElement(emoji, options = {}) {
    const element = document.createElement('div');
    element.textContent = emoji;
    element.style.cssText = `
        position: fixed;
        left: ${options.x || Math.random() * window.innerWidth}px;
        top: ${options.y || window.innerHeight}px;
        font-size: ${options.size || 2}rem;
        pointer-events: none;
        z-index: 9999;
        animation: floatAway ${options.duration || 3000}ms ease-out forwards;
    `;

    document.body.appendChild(element);

    setTimeout(() => {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }, options.duration || 3000);
}

// Universal control functions
function takeScreenshot() {
    showNotification('📸 Screenshot feature - use your browser\'s screenshot tool!');
}

function shareUniverse() {
    if (navigator.share) {
        navigator.share({
            title: 'Ichha\'s Magical Birthday Universe',
            text: 'Check out this amazing birthday surprise!',
            url: window.location.href
        });
    } else {
        showNotification('📤 Copy this link to share: ' + window.location.href);
    }
}

function resetUniverse() {
    if (confirm('Are you sure you want to reset the universe? This will clear all progress.')) {
        location.reload();
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes floatAway {
        from { transform: translateY(0) rotate(0deg); opacity: 1; }
        to { transform: translateY(-200px) rotate(360deg); opacity: 0; }
    }
    
    .notification {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }
    
    .recipe-card {
        background: rgba(255, 255, 255, 0.9);
        border-radius: 15px;
        padding: 20px;
        margin: 15px 0;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
    
    .recipe-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 15px;
    }
    
    .recipe-emoji {
        font-size: 2rem;
    }
    
    .recipe-ingredients ul {
        margin: 10px 0;
        padding-left: 20px;
    }
    
    .recipe-secret {
        background: rgba(255, 107, 157, 0.1);
        padding: 10px;
        border-radius: 10px;
        margin-top: 15px;
        color: #d63384;
    }
    
    .timeline-memory {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        margin: 10px 0;
        background: rgba(255, 107, 157, 0.1);
        border-radius: 15px;
        animation: magicalAppear 0.8s ease-out forwards;
    }
    
    .memory-marker {
        font-size: 1.5rem;
        flex-shrink: 0;
    }
    
    .memory-text {
        flex: 1;
        color: #444;
        font-size: 1rem;
    }
    
    .discovered-secret {
        background: rgba(255, 215, 0, 0.2);
        padding: 10px 15px;
        border-radius: 10px;
        margin: 10px 0;
        border-left: 4px solid #ffd700;
    }
    
    .quiz-option {
        display: block;
        width: 100%;
        padding: 15px;
        margin: 10px 0;
        background: rgba(255, 255, 255, 0.9);
        border: 2px solid transparent;
        border-radius: 15px;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.3s ease;
    }
    
    .quiz-option:hover {
        background: linear-gradient(135deg, #ff6b9d, #c44569);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
    }
    
    .quiz-results {
        text-align: center;
        padding: 30px;
    }
    
    .score-circle {
        display: inline-block;
        background: linear-gradient(135deg, #ff6b9d, #c44569);
        color: white;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 20px 0;
        box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
    }
    
    .percentage {
        font-size: 2.5rem;
        font-weight: bold;
    }
    
    .score-detail {
        font-size: 0.9rem;
        opacity: 0.9;
    }
    
    .quiz-restart {
        background: linear-gradient(135deg, #a8edea, #fed6e3);
        border: none;
        padding: 12px 24px;
        border-radius: 25px;
        font-size: 1rem;
        cursor: pointer;
        margin-top: 20px;
        transition: all 0.3s ease;
    }
    
    .quiz-restart:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(168, 237, 234, 0.3);
    }
`;
document.head.appendChild(style);

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMagicalUniverse);
} else {
    initializeMagicalUniverse();
}