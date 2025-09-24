/* 🌸 Simple Birthday Card JavaScript for Ichha 🌸 */

// State management
let currentSection = 'memories';
let isMusicPlaying = false;
let secretRevealed = false;

// Memory content for different sections
const memoryContent = {
    coaching: {
        title: '📚 Our Coaching Days',
        content: `
            <p>Remember those wonderful days when we first became friends? 😊</p>
            <p>We'd sit together in class, helping each other with difficult problems, sharing snacks during breaks, and making even the most boring subjects fun!</p>
            <p>Those late study sessions where we'd encourage each other, celebrate small victories, and build the foundation of our beautiful friendship! 💕</p>
        `
    },
    walks: {
        title: '🚶‍♀️ Our Special Walks',
        content: `
            <p>The best conversations happen during walks, don't they? 🌅</p>
            <p>From coaching to college, we'd walk together and talk about everything - our dreams, our fears, our silly thoughts, and our biggest aspirations!</p>
            <p>Every step we took together made our friendship stronger and our bond deeper. Those walks will always be special to me! ✨</p>
        `
    },
    college: {
        title: '🎓 College Adventures',
        content: `
            <p>College life became so much better with you as my friend! 🎉</p>
            <p>Exploring the campus together, having deep conversations between classes, supporting each other through challenges, and making the most of every moment!</p>
            <p>We were planning our futures together and creating memories that will last forever! 🌟</p>
        `
    },
    friendship: {
        title: '👭 Our Unbreakable Bond',
        content: `
            <p>What makes our friendship so special? Everything! 💖</p>
            <p>The way we support each other, share our joys and sorrows, laugh at silly things, and understand each other without saying a word.</p>
            <p>You're not just my friend - you're my sister, my confidant, and one of the most important people in my life! Our bond will never break! 🤗</p>
        `
    }
};

// Initialize the birthday card
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌸 Happy Birthday Ichha! Starting your special card... 🌸');
    createFloatingElements();
    setTimeout(createFloatingElements, 3000); // Add more flowers periodically
    
    // Make functions globally available after DOM is ready
    window.startCard = startCard;
    window.showSection = showSection;
    window.showMemoryDetail = showMemoryDetail;
    window.closeModal = closeModal;
    window.toggleBirthdayMusic = toggleBirthdayMusic;
    window.revealSecret = revealSecret;
    window.selectAnswer = selectAnswer;
    window.addIchhaPhoto = addIchhaPhoto;
    window.showPhotoDetails = showPhotoDetails;
    window.showQualityDetail = showQualityDetail;
    window.showFoodDetails = showFoodDetails;
    window.playDifferentMelody = playDifferentMelody;
    window.playCelebrationSounds = playCelebrationSounds;
    window.startColorGame = startColorGame;
    window.startFlowerGame = startFlowerGame;
    window.startQuizGame = startQuizGame;
    window.createFireworks = createFireworks;
    window.showWishingWell = showWishingWell;
    window.createRainbow = createRainbow;
    window.showPersonalMessage = showPersonalMessage;
    window.openVirtualCard = openVirtualCard;
    window.designFlowerBouquet = designFlowerBouquet;
    window.createMemoryScrapbook = createMemoryScrapbook;
    window.recordBirthdayMessage = recordBirthdayMessage;
    window.selectColorAnswer = selectColorAnswer;
    window.plantVirtualFlower = plantVirtualFlower;
    window.answerQuiz = answerQuiz;
    window.makeWish = makeWish;
    window.saveVirtualCard = saveVirtualCard;
    window.addToBouquet = addToBouquet;
    window.finishBouquet = finishBouquet;
});

// Start the card (hide welcome screen, show main content)
function startCard() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const cardContainer = document.getElementById('cardContainer');
    
    // Fade out welcome screen
    welcomeScreen.style.opacity = '0';
    
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        cardContainer.classList.add('active');
        
        // Start background animations
        createBackgroundFloatingElements();
        showNotification('🌸 Welcome to your birthday card, Ichha! 🌸');
    }, 800);
}

// Show different sections
function showSection(sectionName) {
    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(`section-${sectionName}`).classList.add('active');
    currentSection = sectionName;
    
    // Initialize section-specific features
    if (sectionName === 'tribute') {
        initializeTributeSection();
    }
    
    // Add some sparkle effect when switching sections
    createSectionSparkles();
}

// Show memory details in modal
function showMemoryDetail(memoryType) {
    const memory = memoryContent[memoryType];
    const modal = document.getElementById('memoryModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h3>${memory.title}</h3>
        ${memory.content}
        <div style="text-align: center; margin-top: 20px; font-size: 1.5rem;">
            🌸💕🌸
        </div>
    `;
    
    modal.style.display = 'block';
    createSparkleEffect();
}

// Close modal
function closeModal() {
    document.getElementById('memoryModal').style.display = 'none';
}

// Show modal with custom content
function showModal(title, content) {
    const modal = document.getElementById('memoryModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h3>${title}</h3>
        <div style="margin: 20px 0; line-height: 1.6;">${content}</div>
        <div style="text-align: center; margin-top: 20px; font-size: 1.5rem;">
            🌸💕🌸
        </div>
    `;
    
    modal.style.display = 'block';
    createSparkleEffect();
}

// Toggle birthday music
function toggleBirthdayMusic() {
    const musicBtn = document.querySelector('.music-btn');
    
    if (!isMusicPlaying) {
        playBirthdayMelody();
        musicBtn.textContent = '🎵 Pause Song';
        musicBtn.style.background = 'linear-gradient(135deg, #4ecdc4, #44a08d)';
        showNotification('🎶 Playing a special birthday song for you! 🎶');
    } else {
        stopBirthdayMelody();
        musicBtn.textContent = '🎶 Play Special Song';
        musicBtn.style.background = 'linear-gradient(135deg, #ff6b9d, #d63384)';
        showNotification('🎵 Music paused. Click again to play! 🎵');
    }
    
    isMusicPlaying = !isMusicPlaying;
}

// Simple birthday melody using Web Audio API
function playBirthdayMelody() {
    if (typeof window.AudioContext === 'undefined' && typeof window.webkitAudioContext === 'undefined') {
        showNotification('🎵 Audio not supported, but imagine a beautiful melody! 🎵');
        return;
    }
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Happy Birthday melody notes
        const melody = [
            { freq: 261.63, duration: 0.5 }, // C
            { freq: 261.63, duration: 0.5 }, // C
            { freq: 293.66, duration: 1 },   // D
            { freq: 261.63, duration: 1 },   // C
            { freq: 349.23, duration: 1 },   // F
            { freq: 329.63, duration: 2 },   // E
            { freq: 261.63, duration: 0.5 }, // C
            { freq: 261.63, duration: 0.5 }, // C
            { freq: 293.66, duration: 1 },   // D
            { freq: 261.63, duration: 1 },   // C
            { freq: 392.00, duration: 1 },   // G
            { freq: 349.23, duration: 2 }    // F
        ];
        
        let currentTime = audioContext.currentTime;
        
        melody.forEach((note) => {
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
        
    } catch (error) {
        console.log('Audio context error:', error);
        showNotification('🎵 Playing birthday melody in our hearts! 💕');
    }
}

function stopBirthdayMelody() {
    // For simplicity, we'll just show a message
    // In a full implementation, you'd store and stop the audio context
}

// Reveal secret message
function revealSecret() {
    showModal('🔮 Secret Message Revealed! 🔮', `
        <div style="text-align: center; line-height: 1.8; padding: 20px;">
            <div style="font-size: 4rem; margin: 20px 0;">🌸💖🌸</div>
            
            <div style="
                background: linear-gradient(135deg, #ffeef3, #e8f4f8);
                padding: 25px;
                border-radius: 20px;
                border: 3px solid #ff6b9d;
                box-shadow: 0 8px 25px rgba(255, 107, 157, 0.3);
                margin: 20px 0;
            ">
                <h2 style="color: #ff6b9d; font-family: 'Dancing Script', cursive; font-size: 2.2rem; margin: 15px 0;">
                    💌 A Special Message Just For You 💌
                </h2>
                
                <p style="font-size: 1.4rem; color: #333; font-weight: 600; margin: 20px 0;">
                    <strong>Thank you so much Ichha for being a beautiful part of my life.</strong>
                </p>
                
                <p style="font-size: 1.1rem; color: #666; font-style: italic; margin: 15px 0;">
                    You bring so much joy, laughter, and love into every moment we share. 
                    Your friendship is one of the most precious gifts in my life! ✨
                </p>
                
                <div style="font-size: 2.5rem; margin: 20px 0;">🌟💕🌟</div>
                
                <p style="font-size: 1rem; color: #ff6b9d; font-weight: 500;">
                    Happy Birthday, beautiful! Here's to many more amazing memories together! 🎂🎉
                </p>
            </div>
        </div>
    `);
    
    createHeartEffect();
    createSparkleEffect();
    createCelebrationEffect();
    showNotification('💖 Secret message revealed! You mean the world to me, Ichha! 🌸');
    
    // Legacy code for backward compatibility 
    const secretText = document.getElementById('secretText');
    if (secretText && !secretRevealed) {
        secretText.innerHTML = `
            <div style="font-size: 1.2rem; color: #d63384; font-weight: 600;">
                🌸 SECRET MESSAGE REVEALED! 🌸<br><br>
                "Ichha, your friendship is like a beautiful flower garden - 
                it brings color, joy, and endless beauty to my life! 
                Thank you for being the most amazing friend anyone could ask for! 
                Happy Birthday, my dear! 💖"<br><br>
                <small style="opacity: 0.8;">P.S. - You deserve all the happiness in the world! 🌟</small>
            </div>
        `;
        secretRevealed = true;
        createHeartEffect();
        showNotification('💖 Secret message revealed! You are so special! 💖');
    } else {
        showNotification('🌸 You already revealed this secret! Isn\'t it sweet? 🌸');
    }
}

// Mini quiz functionality
function selectAnswer(optionIndex, isCorrect) {
    const quizResult = document.getElementById('quizResult');
    const options = document.querySelectorAll('.quiz-options button');
    
    // Disable all buttons
    options.forEach(btn => btn.disabled = true);
    
    if (isCorrect) {
        options[optionIndex].style.background = 'linear-gradient(135deg, #4ecdc4, #44a08d)';
        options[optionIndex].style.color = 'white';
        quizResult.innerHTML = '🎉 Correct! Pink and light blue are indeed your favorite colors, just like this beautiful card! 💕';
        quizResult.style.color = '#4ecdc4';
        createCelebrationEffect();
        showNotification('🎉 You know Ichha so well! Perfect answer! 🎉');
    } else {
        options[optionIndex].style.background = '#ffcccb';
        options[1].style.background = 'linear-gradient(135deg, #4ecdc4, #44a08d)';
        options[1].style.color = 'white';
        quizResult.innerHTML = '💭 Close, but the correct answer is Pink & Light Blue - the colors that make this card so beautiful! 🌸';
        quizResult.style.color = '#ff6b9d';
        showNotification('💭 Good try! The answer is pink and light blue! 🌸');
    }
    
    setTimeout(() => {
        options.forEach(btn => btn.disabled = false);
        options.forEach(btn => {
            btn.style.background = '';
            btn.style.color = '';
        });
        quizResult.innerHTML = '';
    }, 4000);
}

// Tribute section functionality
function showPhotoDetails() {
    showModal('📸 Beautiful Ichha! 📸', `
        <div style="text-align: center; line-height: 1.6;">
            <div style="font-size: 3rem; margin: 20px 0;">🌸💖🌸</div>
            <p style="font-size: 1.2rem; color: #333; margin: 15px 0;">
                <strong>Look at this absolutely gorgeous photo!</strong>
            </p>
            <p>You look so beautiful and elegant in that lovely blue dress! 💙</p>
            <p>Your smile brightens up everything around you, just like how you brighten up my life every day! ✨</p>
            <p>That garden setting is perfect - you\'re like a beautiful flower among flowers! 🌺</p>
            <p style="font-style: italic; color: #ff6b9d; margin-top: 20px;">
                "A picture is worth a thousand words, but no words can capture how wonderful you are!" 💕
            </p>
        </div>
    `);
    createHeartEffect();
    createSparkleEffect();
    showNotification('📸 You look absolutely beautiful, Ichha! 🌸');
}

function addIchhaPhoto(filename) {
    const placeholder = document.querySelector('.main-photo-frame .photo-placeholder');
    
    if (placeholder) {
        placeholder.innerHTML = `
            <img src="assets/images/${filename}" 
                 style="width: 100%; height: 100%; object-fit: cover; border-radius: 13px;" 
                 alt="Beautiful Ichha">
        `;
        showNotification(`📸 Ichha's photo added! She looks absolutely beautiful! ✨`);
        createPhotoEffect();
    }
}

function initializeTributeSection() {
    // Animate the birthday counter with random numbers
    animateCounters();
}

function animateCounters() {
    const counters = [
        { element: document.getElementById('birthdaysCount'), target: Math.floor(Math.random() * 50) + 20 },
        { element: document.getElementById('friendshipYears'), target: Math.floor(Math.random() * 30) + 15 },
        { element: document.getElementById('memoriesCount'), target: Math.floor(Math.random() * 500) + 100 }
    ];
    
    counters.forEach(counter => {
        if (counter.element) {
            let current = 0;
            const increment = counter.target / 30;
            const timer = setInterval(() => {
                current += increment;
                if (current >= counter.target) {
                    current = counter.target;
                    clearInterval(timer);
                }
                counter.element.textContent = Math.floor(current);
            }, 50);
        }
    });
}

function showQualityDetail(quality) {
    const qualities = {
        kind: {
            title: '💝 Ichha\'s Kind Heart',
            content: 'You have the most caring and compassionate heart! You always think of others, offer help when needed, and bring comfort to those around you. Your kindness makes the world a brighter place! 🌟'
        },
        smart: {
            title: '🧠 Brilliant Mind',
            content: 'Your intelligence amazes me every day! Whether it\'s solving problems, understanding complex topics, or coming up with creative ideas - you always impress me with your brilliant mind! 📚✨'
        },
        funny: {
            title: '😄 Amazing Sense of Humor',
            content: 'You have this incredible ability to make me laugh even on the toughest days! Your jokes, your expressions, your funny stories - they all bring so much joy to my life! 😂💕'
        },
        supportive: {
            title: '🤝 Always There for Me',
            content: 'Through every up and down, every challenge and celebration - you\'ve always been my biggest supporter! I can count on you for anything, and that means the world to me! 🙌💖'
        },
        beautiful: {
            title: '🌺 Beautiful Inside and Out',
            content: 'Your beauty radiates from within! Your smile lights up any room, but it\'s your beautiful soul, your positive energy, and your loving nature that make you truly gorgeous! 🌸✨'
        },
        loyal: {
            title: '👑 True and Loyal Friend',
            content: 'In a world where friendships come and go, you\'ve proven to be the most loyal and trustworthy friend anyone could ask for! Your friendship is a treasure I\'ll always cherish! 💎👭'
        }
    };
    
    const qualityData = qualities[quality];
    if (qualityData) {
        showModal(qualityData.title, qualityData.content);
        createHeartEffect();
    }
}

// Utility Functions

// Show notification
function showNotification(message, duration = 3000) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ff6b9d, #d63384);
        color: white;
        padding: 15px 20px;
        border-radius: 25px;
        box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
        z-index: 10000;
        font-size: 0.9rem;
        max-width: 300px;
        animation: slideInRight 0.5s ease-out;
        font-family: 'Poppins', sans-serif;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-in forwards';
        setTimeout(() => notification.remove(), 500);
    }, duration);
}

// Create floating elements for welcome screen
function createFloatingElements() {
    const container = document.getElementById('floatingFlowers');
    if (!container) return;
    
    const flowers = ['🌸', '🌺', '🌷', '🌻', '💐', '🦋'];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
            flower.style.cssText = `
                position: absolute;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                font-size: ${Math.random() * 1.5 + 1}rem;
                opacity: ${Math.random() * 0.6 + 0.4};
                animation: gentleFloat ${Math.random() * 3 + 4}s ease-in-out infinite;
                pointer-events: none;
            `;
            
            container.appendChild(flower);
            
            setTimeout(() => {
                if (flower.parentNode) flower.remove();
            }, 8000);
        }, i * 200);
    }
}

// Create background floating elements
function createBackgroundFloatingElements() {
    const container = document.getElementById('backgroundElements');
    if (!container) return;
    
    const elements = ['🌸', '✨', '💖', '🦋'];
    
    setInterval(() => {
        const element = document.createElement('div');
        element.textContent = elements[Math.floor(Math.random() * elements.length)];
        element.className = 'floating-element';
        element.style.left = Math.random() * 100 + '%';
        
        container.appendChild(element);
        
        setTimeout(() => {
            if (element.parentNode) element.remove();
        }, 8000);
    }, 3000);
}

// Create sparkle effect
function createSparkleEffect() {
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            createSparkle();
        }, i * 100);
    }
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        font-size: 1.5rem;
        pointer-events: none;
        z-index: 9999;
        animation: sparkleAnim 2s ease-out forwards;
    `;
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (sparkle.parentNode) sparkle.remove();
    }, 2000);
}

// Create section sparkles
function createSectionSparkles() {
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            createSparkle();
        }, i * 150);
    }
}

// Create heart effect
function createHeartEffect() {
    const hearts = ['💖', '💕', '💝', '🌸'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}vw;
                top: 100vh;
                font-size: ${Math.random() * 1 + 1.5}rem;
                pointer-events: none;
                z-index: 9999;
                animation: heartFloat 3s ease-out forwards;
            `;
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) heart.remove();
            }, 3000);
        }, i * 100);
    }
}

// Create celebration effect
function createCelebrationEffect() {
    const celebration = ['🎉', '🎊', '🌟', '✨'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = celebration[Math.floor(Math.random() * celebration.length)];
            confetti.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}vw;
                top: -50px;
                font-size: ${Math.random() * 1 + 1.2}rem;
                pointer-events: none;
                z-index: 9999;
                animation: confettiFall 3s ease-in-out forwards;
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) confetti.remove();
            }, 3000);
        }, i * 50);
    }
}

// Create photo effect
function createPhotoEffect() {
    const cameras = ['📸', '📷', '✨', '🌟'];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const camera = document.createElement('div');
            camera.textContent = cameras[Math.floor(Math.random() * cameras.length)];
            camera.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                font-size: 1.5rem;
                pointer-events: none;
                z-index: 9999;
                animation: photoFlash 2s ease-out forwards;
            `;
            
            document.body.appendChild(camera);
            
            setTimeout(() => {
                if (camera.parentNode) camera.remove();
            }, 2000);
        }, i * 200);
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
    
    @keyframes gentleFloat {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-20px) rotate(90deg); }
        50% { transform: translateY(-40px) rotate(180deg); }
        75% { transform: translateY(-20px) rotate(270deg); }
    }
    
    @keyframes sparkleAnim {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
        100% { transform: scale(0) rotate(360deg); opacity: 0; }
    }
    
    @keyframes heartFloat {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(-200px); opacity: 0; }
    }
    
    @keyframes confettiFall {
        from { transform: translateY(-100px) rotate(0deg); opacity: 1; }
        to { transform: translateY(100vh) rotate(360deg); opacity: 0; }
    }
    
    @keyframes photoFlash {
        0% { transform: scale(0); opacity: 1; }
        50% { transform: scale(1.2); opacity: 1; }
        100% { transform: scale(0); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('memoryModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Console message
console.log(`
🌸✨ Happy Birthday Ichha! ✨🌸
This special card was made with lots of love! 💕
Enjoy exploring all the sections! 🎉
`);

// NEW ENHANCED FEATURES

// Food details functionality
function showFoodDetails(foodType) {
    const foods = {
        sambar: {
            title: '🍛 Delicious Sambar',
            content: 'The perfect comfort food! Made with lentils, tamarind, and vegetables. Just like our friendship - a perfect blend of different elements that create something beautiful together! 😊💕'
        },
        dosa: {
            title: '🥞 Crispy Golden Dosa', 
            content: 'Thin, crispy, and golden - just like the golden moments we share together! Best enjoyed with friends who understand your soul! 🌟👭'
        },
        nariyal: {
            title: '🥥 Fresh Nariyal Ki Chutney',
            content: 'Fresh coconut chutney that\'s perfect with everything! Just like you - you make every moment better and add the perfect touch to my life! 🌴💖'
        },
        dalbaati: {
            title: '🥮 Royal Dal Baati Churma',
            content: 'A royal dish for a royal friend like you! The perfect combination of flavors - just like how we complement each other perfectly! 👑💕'
        },
        ghevar: {
            title: '🧈 Sweet Ghevar',
            content: 'As sweet as our friendship memories! This traditional Rajasthani dessert is as special and unique as you are! 🍯😊'
        },
        malai: {
            title: '🍯 Sweet Malai Jalebi',
            content: 'Creamy, sweet, and absolutely irresistible! Just like your smile that brightens up my day and makes everything sweeter! 🍯😊'
        }
    };
    
    const food = foods[foodType];
    if (food) {
        showModal(food.title, food.content);
        createCelebrationEffect();
        showNotification('🍛 Yummy! Now I\'m craving this delicious food! 😋');
    }
}

// Enhanced music functions
function playDifferentMelody() {
    showNotification('🎼 Playing a different melody for you! 🎶');
    createMusicEffect();
    // You could add different musical notes here
}

function playCelebrationSounds() {
    showNotification('🎉 Celebration time! Happy Birthday Ichha! 🥳');
    createCelebrationEffect();
    createFireworks();
}

function createMusicEffect() {
    const notes = ['🎵', '🎶', '🎼', '🎹', '🎸'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const note = document.createElement('div');
            note.textContent = notes[Math.floor(Math.random() * notes.length)];
            note.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                font-size: 1.8rem;
                pointer-events: none;
                z-index: 9999;
                animation: musicFloat 3s ease-out forwards;
            `;
            
            document.body.appendChild(note);
            
            setTimeout(() => {
                if (note.parentNode) note.remove();
            }, 3000);
        }, i * 100);
    }
}

// Interactive games
function startColorGame() {
    const foods = ['🍛 Sambar', '🥞 Dosa', '🧈 Ghevar', '🥮 Dal Baati Churma'];
    const gameModal = `
        <h3>🍽️ Which is my favorite?</h3>
        <p>Can you guess which food I love the most?</p>
        <div style="display: flex; flex-direction: column; gap: 10px; margin: 20px 0;">
            ${foods.map((food, index) => 
                `<button onclick="selectColorAnswer(${index}, true)" style="
                    padding: 12px 15px; border: none; border-radius: 12px; cursor: pointer;
                    background: linear-gradient(135deg, #ffeef3, #e8f4f8);
                    transition: all 0.3s ease; font-size: 1.1rem;
                    border: 2px solid transparent;
                "onmouseover="this.style.transform='translateY(-2px)'; this.style.borderColor='#ff6b9d';"
                "onmouseout="this.style.transform='translateY(0px)'; this.style.borderColor='transparent';">${food}</button>`
            ).join('')}
        </div>
    `;
    
    showModal('Favorite Food Game', gameModal);
}

function selectColorAnswer(index, isCorrect) {
    // For the food game, always show the sweet message
    showNotification('💖 Good choice, but you are my favorite! 💕');
    createHeartEffect();
    createSparkleEffect();
    closeModal();
}

function startFlowerGame() {
    showModal('Flower Garden Game', `
        <h3>🌸 Create Ichha's Garden</h3>
        <p>Click the buttons to plant flowers in Ichha's virtual garden!</p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 20px 0;">
            <button onclick="plantVirtualFlower('🌸')">Plant Cherry Blossom</button>
            <button onclick="plantVirtualFlower('🌺')">Plant Hibiscus</button>
            <button onclick="plantVirtualFlower('🌷')">Plant Tulip</button>
            <button onclick="plantVirtualFlower('🌻')">Plant Sunflower</button>
            <button onclick="plantVirtualFlower('🌹')">Plant Rose</button>
            <button onclick="plantVirtualFlower('💐')">Plant Bouquet</button>
        </div>
        <div id="virtualGarden" style="
            min-height: 80px; background: linear-gradient(135deg, #e8f5e8, #f0f8ff);
            border-radius: 10px; padding: 15px; text-align: center;
            border: 2px dashed #ff6b9d;
        ">Your beautiful garden will appear here! 🌱</div>
    `);
}

function plantVirtualFlower(flower) {
    const garden = document.getElementById('virtualGarden');
    if (garden) {
        const currentFlowers = garden.innerHTML.includes('🌱') ? '' : garden.innerHTML;
        garden.innerHTML = currentFlowers + flower + ' ';
        showNotification(`${flower} planted! The garden is blooming beautifully! ✨`);
        createSparkleEffect();
    }
}

function startQuizGame() {
    showModal('Friendship Quiz', `
        <h3>🧠 How well do you know our friendship?</h3>
        <p>What's the most special thing about Ichha?</p>
        <div style="display: flex; flex-direction: column; gap: 8px; margin: 15px 0;">
            <button onclick="answerQuiz(0)">Her intelligence</button>
            <button onclick="answerQuiz(1)">Her kindness</button>
            <button onclick="answerQuiz(2)">Her sense of humor</button>
            <button onclick="answerQuiz(3, true)">Everything about her!</button>
        </div>
    `);
}

function answerQuiz(index, isCorrect) {
    if (isCorrect) {
        showNotification('💖 Perfect answer! Everything about Ichha is special! 🌟');
        createCelebrationEffect();
    } else {
        showNotification('💭 Good choice, but EVERYTHING about her is special! 💕');
        createHeartEffect();
    }
    closeModal();
}

// Fun interactive activities
function createFireworks() {
    const fireworks = ['🎆', '🎇', '✨', '🌟', '💫'];
    
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.textContent = fireworks[Math.floor(Math.random() * fireworks.length)];
            firework.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                font-size: ${Math.random() * 2 + 1.5}rem;
                pointer-events: none;
                z-index: 9999;
                animation: fireworkBurst 2s ease-out forwards;
            `;
            
            document.body.appendChild(firework);
            
            setTimeout(() => {
                if (firework.parentNode) firework.remove();
            }, 2000);
        }, i * 50);
    }
    
    showNotification('🎆 Happy Birthday Fireworks for Ichha! 🎇');
}

function showWishingWell() {
    showModal('Make a Birthday Wish! 💫', `
        <h3>🌟 Wishing Well for Ichha</h3>
        <p>Close your eyes and make a special birthday wish!</p>
        <div style="text-align: center; margin: 20px 0;">
            <div style="font-size: 4rem; margin: 20px 0;">💫</div>
            <button onclick="makeWish()" style="
                background: linear-gradient(135deg, #ff6b9d, #d63384);
                color: white; border: none; padding: 12px 25px;
                border-radius: 25px; cursor: pointer; font-size: 1.1rem;
            ">✨ Make My Wish ✨</button>
        </div>
    `);
}

function makeWish() {
    const wishes = [
        'May all your dreams come true! 🌟',
        'Wishing you endless happiness! 💖',
        'May this year be your best yet! 🎉',
        'All the love and joy for you! 💕',
        'Dreams and magic coming your way! ✨'
    ];
    
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    showNotification('💫 Your wish has been sent to the stars! ' + randomWish);
    createStarShower();
    closeModal();
}

function createRainbow() {
    const colors = ['🔴', '🟠', '🟡', '🟢', '🔵', '🟣', '🌈'];
    
    for (let i = 0; i < colors.length; i++) {
        setTimeout(() => {
            for (let j = 0; j < 8; j++) {
                const colorDot = document.createElement('div');
                colorDot.textContent = colors[i];
                colorDot.style.cssText = `
                    position: fixed;
                    left: ${(j * 12) + 10}%;
                    top: ${20 + (i * 3)}%;
                    font-size: 1.5rem;
                    pointer-events: none;
                    z-index: 9999;
                    animation: rainbowFade 3s ease-out forwards;
                `;
                
                document.body.appendChild(colorDot);
                
                setTimeout(() => {
                    if (colorDot.parentNode) colorDot.remove();
                }, 3000);
            }
        }, i * 200);
    }
    
    showNotification('🌈 Rainbow magic for your special day! ✨');
}

// Personal message functions
function showPersonalMessage(type) {
    const messages = {
        gratitude: {
            title: '🙏 Thank You, Ichha',
            content: `I am so grateful to have you in my life! Thank you for being the most amazing friend, for your endless support, your infectious laughter, and your beautiful soul. You make every day brighter just by being you! 💕✨`
        },
        appreciation: {
            title: '💖 What I Love About You',
            content: `Where do I even begin? I love your kindness, your intelligence, your sense of humor, your loyalty, your creativity, your strength, your positivity... but most of all, I love how genuinely YOU you are! 🌟💕`
        },
        future: {
            title: '🌟 Our Future Together',
            content: `I can't wait for all the adventures ahead of us! More walks, more talks, more laughs, more memories, more birthdays to celebrate together. Our friendship will only grow stronger with time! 👭✨`
        },
        birthday: {
            title: '🎂 Why Today is So Special',
            content: `Today isn't just your birthday - it's a celebration of everything wonderful about you! It's a day to honor the amazing person you are and all the joy you bring to everyone around you. You deserve all the happiness in the world! 🥳💖`
        }
    };
    
    const message = messages[type];
    if (message) {
        showModal(message.title, message.content);
        createHeartEffect();
    }
}

// Creation tools functions
function openVirtualCard() {
    showModal('Write a Virtual Card 📝', `
        <h3>Create Your Own Message for Ichha!</h3>
        <textarea id="virtualCardText" placeholder="Write your heartfelt message here..." style="
            width: 100%; height: 100px; padding: 10px; border: 2px solid #ff6b9d;
            border-radius: 10px; font-family: inherit; resize: vertical;
        "></textarea>
        <button onclick="saveVirtualCard()" style="
            background: linear-gradient(135deg, #ff6b9d, #d63384);
            color: white; border: none; padding: 10px 20px;
            border-radius: 20px; margin-top: 10px; cursor: pointer;
        ">💌 Save Card</button>
    `);
}

function saveVirtualCard() {
    const cardText = document.getElementById('virtualCardText')?.value;
    if (cardText && cardText.trim()) {
        showNotification('💌 Virtual card saved! Ichha will love your message! 💕');
        createHeartEffect();
        closeModal();
    } else {
        showNotification('📝 Please write a message first! ✨');
    }
}

function designFlowerBouquet() {
    showModal('Design a Bouquet 💐', `
        <h3>Create a Special Bouquet for Ichha!</h3>
        <p>Click flowers to add them to your bouquet:</p>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 15px 0;">
            <button onclick="addToBouquet('🌸')">🌸</button>
            <button onclick="addToBouquet('🌺')">🌺</button>
            <button onclick="addToBouquet('🌷')">🌷</button>
            <button onclick="addToBouquet('🌻')">🌻</button>
            <button onclick="addToBouquet('🌹')">🌹</button>
            <button onclick="addToBouquet('🌼')">🌼</button>
            <button onclick="addToBouquet('🌿')">🌿</button>
            <button onclick="addToBouquet('💐')">💐</button>
        </div>
        <div id="bouquetDisplay" style="
            min-height: 60px; background: linear-gradient(135deg, #ffeef3, #e8f4f8);
            border: 2px dashed #ff6b9d; border-radius: 10px; padding: 15px;
            text-align: center; margin: 10px 0;
        ">Your beautiful bouquet: </div>
        <button onclick="finishBouquet()">🎀 Finish Bouquet</button>
    `);
}

function addToBouquet(flower) {
    const bouquet = document.getElementById('bouquetDisplay');
    if (bouquet) {
        bouquet.innerHTML += flower + ' ';
        showNotification(`${flower} added to bouquet! Looking beautiful! ✨`);
    }
}

function finishBouquet() {
    showNotification('💐 Beautiful bouquet created for Ichha! She\'ll love it! 🌟');
    createCelebrationEffect();
    closeModal();
}

function createMemoryScrapbook() {
    showModal('Memory Scrapbook 📖', `
        <h3>Our Friendship Scrapbook</h3>
        <div style="display: flex; flex-direction: column; gap: 15px; margin: 20px 0;">
            <div style="background: linear-gradient(135deg, #ffeef3, #e8f4f8); padding: 15px; border-radius: 10px;">
                <strong>📚 Coaching Days:</strong> Study sessions, shared snacks, and endless laughs!
            </div>
            <div style="background: linear-gradient(135deg, #e8f4f8, #f0e8ff); padding: 15px; border-radius: 10px;">
                <strong>🚶‍♀️ Our Walks:</strong> Heart-to-heart talks and dream sharing!
            </div>
            <div style="background: linear-gradient(135deg, #f0e8ff, #ffeef3); padding: 15px; border-radius: 10px;">
                <strong>🎓 College Adventures:</strong> New experiences and growing together!
            </div>
        </div>
        <p style="font-style: italic; color: #d63384;">Every page filled with love, laughter, and beautiful memories! 💕</p>
    `);
}

function recordBirthdayMessage() {
    showModal('Record Message 🎤', `
        <h3>Voice Message for Ichha</h3>
        <p>This is where you could record a special birthday message!</p>
        <div style="text-align: center; margin: 20px 0;">
            <div style="font-size: 4rem; margin: 15px 0;">🎤</div>
            <p style="font-style: italic; color: #666;">
                In a full version, this would allow you to record and play voice messages!
                For now, imagine recording the sweetest birthday message! 💕
            </p>
        </div>
        <div style="background: linear-gradient(135deg, #ffeef3, #e8f4f8); padding: 15px; border-radius: 10px; margin: 10px 0;">
            <strong>💌 Sample Message:</strong><br>
            "Happy Birthday, Ichha! You mean the world to me, and I hope your day is filled with as much joy as you bring to my life every day! 🎉💕"
        </div>
    `);
}

// Add new animation styles
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    @keyframes musicFloat {
        0% { opacity: 1; transform: translateY(0) rotate(0deg); }
        100% { opacity: 0; transform: translateY(-150px) rotate(360deg); }
    }
    
    @keyframes fireworkBurst {
        0% { opacity: 1; transform: scale(0.5); }
        50% { opacity: 1; transform: scale(1.2); }
        100% { opacity: 0; transform: scale(0.8); }
    }
    
    @keyframes rainbowFade {
        0% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-50px); }
    }
    
    .modal-content button {
        background: linear-gradient(135deg, #ff6b9d, #d63384);
        color: white; border: none; padding: 8px 15px;
        border-radius: 15px; cursor: pointer; margin: 2px;
        transition: all 0.3s ease;
    }
    
    .modal-content button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
    }
`;
document.head.appendChild(additionalStyles);

function createStarShower() {
    const stars = ['⭐', '🌟', '✨', '💫', '🌠'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.textContent = stars[Math.floor(Math.random() * stars.length)];
            star.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}vw;
                top: -50px;
                font-size: ${Math.random() * 1 + 1.5}rem;
                pointer-events: none;
                z-index: 9999;
                animation: starFall 3s linear forwards;
            `;
            
            document.body.appendChild(star);
            
            setTimeout(() => {
                if (star.parentNode) star.remove();
            }, 3000);
        }, i * 100);
    }
}

// Add star fall animation
const starStyle = document.createElement('style');
starStyle.textContent = `
    @keyframes starFall {
        from { transform: translateY(-100px) rotate(0deg); opacity: 1; }
        to { transform: translateY(100vh) rotate(360deg); opacity: 0.5; }
    }
`;
document.head.appendChild(starStyle);

// Functions are now attached in the DOMContentLoaded event listener above
