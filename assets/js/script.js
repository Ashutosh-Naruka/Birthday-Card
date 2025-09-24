// DOM elements
const card = document.getElementById('birthdayCard');
const musicBtn = document.getElementById('musicBtn');
const backgroundMusic = document.getElementById('backgroundMusic');
const memoryModal = document.getElementById('memoryModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');
const particles = document.getElementById('particles');
const floatingFoods = document.getElementById('floatingFoods');

// Card state
let isCardOpen = false;
let isMusicPlaying = false;

// Memory content for interactive flowers
const memories = {
    'our-walks': {
        title: '🚶‍♀️ Our Beautiful Walks',
        content: `
            <p>Remember all those peaceful walks we used to take? 🌅</p>
            <p>From coaching to college, we'd walk and talk about everything under the sun! ☀️</p>
            <p>Those moments of just being present with each other, sharing dreams and laughing at silly jokes... 😊</p>
            <p>Every step we took together made our friendship stronger! 👭</p>
        `
    },
    'coaching-memories': {
        title: '📚 Coaching Days',
        content: `
            <p>Those coaching days when we'd sit together and study! 📖</p>
            <p>But honestly, we talked more than we studied! 😄</p>
            <p>Sharing snacks, gossiping about everything, and supporting each other through tough topics... 🤝</p>
            <p>You made even the most boring subjects fun with your company! ✨</p>
        `
    },
    'college-talks': {
        title: '🎓 College Heart-to-Hearts',
        content: `
            <p>Our college conversations were the best! 💭</p>
            <p>We'd sit for hours just talking about life, dreams, and everything in between... 🌟</p>
            <p>Your perspective always amazed me, and your positivity was contagious! 😊</p>
            <p>Those talks shaped so many of my thoughts and made college memorable! 🎊</p>
        `
    }
};

// South Indian and Rajasthani food items for floating animation
const foodItems = [
    '🍛', '🥘', '🍪', '🥮', '🧈', '🍯', '🥄', '🫖', 
    '🥗', '🍚', '🫓', '🥞', '🍳', '🥜', '🌶️', '🧅'
];

// Particle emojis for background
const particleEmojis = ['🌸', '🌺', '🌷', '💐', '🌻', '✨', '💖', '💕', '🎀', '🦋'];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeFloatingFoods();
    setupEventListeners();
    
    // Start particle and food animations immediately
    createParticles();
    createFloatingFood();
});

// Set up event listeners
function setupEventListeners() {
    // Card click to open/close
    card.addEventListener('click', toggleCard);
    
    // Music control
    musicBtn.addEventListener('click', toggleMusic);
    
    // Flower click events for memory popups
    document.querySelectorAll('.bloom-flower').forEach(flower => {
        flower.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card toggle
            showMemory(this.dataset.message);
        });
    });
    
    // Modal close events
    closeModal.addEventListener('click', hideMemory);
    memoryModal.addEventListener('click', function(e) {
        if (e.target === memoryModal) {
            hideMemory();
        }
    });
    
    // Keyboard events
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideMemory();
        }
        if (e.key === ' ') { // Spacebar to toggle card
            e.preventDefault();
            toggleCard();
        }
    });
}

// Toggle card open/close
function toggleCard() {
    isCardOpen = !isCardOpen;
    card.classList.toggle('opened', isCardOpen);
    
    if (isCardOpen) {
        document.querySelector('.greeting-text h1').textContent = 'Happy Birthday, Ichha! 🎉';
        // Start more intense particle animation when card opens
        increasedParticleMode();
    } else {
        document.querySelector('.greeting-text h1').textContent = 'Click to open your special card, Ichha! 💝';
    }
}

// Show memory popup
function showMemory(memoryKey) {
    const memory = memories[memoryKey];
    if (memory) {
        modalBody.innerHTML = `
            <h4>${memory.title}</h4>
            ${memory.content}
            <div style="margin-top: 20px; font-size: 1.5rem;">
                🌸✨💖✨🌸
            </div>
        `;
        memoryModal.style.display = 'block';
        
        // Add some sparkle effect
        addSparkleEffect();
    }
}

// Hide memory popup
function hideMemory() {
    memoryModal.style.display = 'none';
}

// Add sparkle effect when memory opens
function addSparkleEffect() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createSparkle();
        }, i * 100);
    }
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.fontSize = '1.5rem';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1001';
    sparkle.style.animation = 'sparkleAnim 2s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 2000);
}

// Add sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnim {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
        100% { transform: scale(0) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(sparkleStyle);

// Music controls
function toggleMusic() {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicBtn.textContent = '🎵 Play Music';
        musicBtn.style.background = 'linear-gradient(135deg, #ff6b9d, #c44569)';
    } else {
        // Create a simple romantic melody using Web Audio API
        playBirthdayMelody();
        musicBtn.textContent = '🎵 Pause Music';
        musicBtn.style.background = 'linear-gradient(135deg, #4ecdc4, #44a08d)';
    }
    isMusicPlaying = !isMusicPlaying;
}

// Create a simple birthday melody
function playBirthdayMelody() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Happy Birthday melody notes (simplified)
        const melody = [
            { freq: 261.63, duration: 0.5 }, // C
            { freq: 261.63, duration: 0.5 }, // C
            { freq: 293.66, duration: 1 },   // D
            { freq: 261.63, duration: 1 },   // C
            { freq: 349.23, duration: 1 },   // F
            { freq: 329.63, duration: 2 },   // E
        ];
        
        let currentTime = audioContext.currentTime;
        
        melody.forEach((note, index) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = note.freq;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0, currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, currentTime + 0.1);
            gainNode.gain.linearRampToValueAtTime(0, currentTime + note.duration);
            
            oscillator.start(currentTime);
            oscillator.stop(currentTime + note.duration);
            
            currentTime += note.duration;
        });
        
        // Repeat the melody
        setTimeout(() => {
            if (isMusicPlaying) {
                playBirthdayMelody();
            }
        }, currentTime * 1000 + 1000);
        
    } catch (error) {
        console.log('Audio not supported, using silent mode');
    }
}

// Initialize background particles
function initializeParticles() {
    // Create initial particles
    for (let i = 0; i < 15; i++) {
        createParticle();
    }
}

function createParticles() {
    setInterval(createParticle, 2000);
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.innerHTML = particleEmojis[Math.floor(Math.random() * particleEmojis.length)];
    
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    
    particles.appendChild(particle);
    
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 8000);
}

function increasedParticleMode() {
    // Create more particles when card opens
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createParticle();
        }, i * 100);
    }
}

// Initialize floating foods
function initializeFloatingFoods() {
    // Create initial floating foods
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFloatingFood();
        }, i * 1000);
    }
}

function createFloatingFood() {
    setInterval(() => {
        const food = document.createElement('div');
        food.className = 'floating-food';
        food.innerHTML = foodItems[Math.floor(Math.random() * foodItems.length)];
        
        food.style.left = Math.random() * 100 + 'vw';
        food.style.animationDuration = (Math.random() * 4 + 6) + 's';
        food.style.animationDelay = Math.random() * 2 + 's';
        
        floatingFoods.appendChild(food);
        
        setTimeout(() => {
            if (food.parentNode) {
                food.parentNode.removeChild(food);
            }
        }, 10000);
    }, 3000);
}

// Add some fun interactions
document.addEventListener('mousemove', function(e) {
    // Create trailing sparkles on mouse move (subtle effect)
    if (Math.random() < 0.05) { // 5% chance
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.fontSize = '0.8rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        sparkle.style.animation = 'sparkleAnim 1s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1000);
    }
});

// Add touch support for mobile
let touchStartTime = 0;
card.addEventListener('touchstart', function(e) {
    touchStartTime = Date.now();
});

card.addEventListener('touchend', function(e) {
    const touchEndTime = Date.now();
    if (touchEndTime - touchStartTime < 500) { // Quick tap
        e.preventDefault();
        toggleCard();
    }
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.classList.contains('bloom-flower')) {
        showMemory(e.target.dataset.message);
    }
});

// Make flowers focusable for accessibility
document.querySelectorAll('.bloom-flower').forEach(flower => {
    flower.setAttribute('tabindex', '0');
    flower.setAttribute('role', 'button');
    flower.setAttribute('aria-label', 'Click to see a special memory');
});

// Preload and optimize
window.addEventListener('load', function() {
    // Add a subtle welcome animation
    setTimeout(() => {
        card.style.animation = 'gentle-float 3s ease-in-out infinite';
    }, 1000);
});

// Add the gentle float animation
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes gentle-float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-5px) rotate(1deg); }
    }
`;
document.head.appendChild(floatStyle);

// Console message for the developer (you!)
console.log(`
🌸✨ Happy Birthday Card for Ichha! ✨🌸
Made with love by her bestie 💕
Hope she loves this special surprise! 🎉
`);

// Photo gallery functionality (placeholder for now)
function initPhotoGallery(photos) {
    const gallery = document.getElementById('photoGallery');
    if (photos && photos.length > 0) {
        gallery.innerHTML = '';
        photos.forEach((photo, index) => {
            const frame = document.createElement('div');
            frame.className = 'photo-frame';
            frame.innerHTML = `<img src="${photo}" alt="Memory ${index + 1}" style="width:100%;height:100%;object-fit:cover;border-radius:7px;">`;
            gallery.appendChild(frame);
        });
    }
}

// Export function for photo integration
window.addPhotos = initPhotoGallery;