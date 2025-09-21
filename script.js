// ===== VARIABLES GLOBALES =====
let isMusicPlaying = false;
let currentMessageIndex = 0;
let flowersInterval;
let sparklesInterval;

// Mensajes románticos un poco más largos
const romanticMessages = [
    "Eres especial para mí :D",
    "como la luna lo es para la noche",
    "como la flor que nace en primavera",
    "Eres única en el mundo",
    "como las flores amarillas que brillan al amanecer",
    "Eres la más hermosa"
];

// Palabras para formar el mensaje final
const finalWords = [
    "si", "tu", "fueras", "una", "flor", "amarilla", "e", "incluso", "Entre", "todas", "ellas", "tu", "serias", "la", "más", "hermosa"
];

// Posiciones para las palabras seleccionadas
const wordPositions = [
    { top: '10%', left: '5%' },
    { top: '20%', left: '15%' },
    { top: '30%', left: '5%' },
    { top: '40%', left: '20%' },
    { top: '50%', left: '10%' },
    { top: '60%', left: '25%' },
    { top: '70%', left: '15%' },
    { top: '80%', left: '30%' },
    { top: '10%', right: '10%' },
    { top: '20%', right: '5%' },
    { top: '30%', right: '15%' },
    { top: '40%', right: '8%' },
    { top: '50%', right: '20%' },
    { top: '60%', right: '12%' },
    { top: '70%', right: '25%' },
    { top: '80%', right: '18%' }
];

// ===== FUNCIÓN PRINCIPAL PARA INICIAR LA SECUENCIA =====
function startSequence() {
    const initialButton = document.getElementById('initialButton');
    const mainMessage = document.getElementById('mainMessage');
    
    // Ocultar botón inicial
    initialButton.style.display = 'none';
    
    // Mostrar mensaje principal
    setTimeout(() => {
        mainMessage.style.display = 'block';
        mainMessage.classList.add('show');
    }, 500);
    
    // Iniciar secuencia de flor directamente
    setTimeout(() => {
        startFlowerSequence();
    }, 2000);
    
    // Iniciar música
    setTimeout(() => {
        console.log('Iniciando música...');
        playMusic();
    }, 1000);
}

// ===== FUNCIÓN PARA INICIAR LA SECUENCIA DE LA FLOR =====
function startFlowerSequence() {
    const seed = document.getElementById('seed');
    const flower = document.getElementById('flower');
    
    // Iniciar caída de la semilla
    setTimeout(() => {
        seed.classList.add('falling');
    }, 500);
    
    // Semilla se planta
    setTimeout(() => {
        seed.classList.remove('falling');
        seed.classList.add('planted');
    }, 2500);
    
    // Flor comienza a crecer
    setTimeout(() => {
        flower.classList.add('growing');
    }, 3000);
    
    // Flor comienza a florecer
    setTimeout(() => {
        flower.classList.add('blooming');
        startMessageSequence();
    }, 4500);
    
    // Iniciar lluvia de flores después de los mensajes
    setTimeout(() => {
        startFlowerRain();
    }, 20000);
    
    // Explosión final de flores
    setTimeout(() => {
        createFlowerExplosion();
    }, 25000);
}

// ===== FUNCIÓN PARA MOSTRAR MENSAJES SECUENCIALES =====
function startMessageSequence() {
    const messagesContainer = document.getElementById('messagesContainer');
    
    // Limpiar contenedor
    messagesContainer.innerHTML = '';
    
    // Crear y mostrar mensajes cortos uno por uno
    romanticMessages.forEach((message, index) => {
        setTimeout(() => {
            createMessage(message, index);
        }, index * 3000);
    });
    
    // Después de los mensajes, mostrar palabras seleccionadas
    setTimeout(() => {
        showSelectedWords();
    }, romanticMessages.length * 3000 + 2000);
}

// ===== FUNCIÓN PARA CREAR UN MENSAJE =====
function createMessage(text, index) {
    const messagesContainer = document.getElementById('messagesContainer');
    const messageElement = document.createElement('div');
    
    messageElement.className = 'romantic-message';
    messageElement.textContent = text;
    messageElement.style.animationDelay = `${index * 0.1}s`;
    
    messagesContainer.appendChild(messageElement);
    
    // Mostrar mensaje
    setTimeout(() => {
        messageElement.classList.add('show');
    }, 100);
    
    // Ocultar mensaje después de 2.5 segundos
    setTimeout(() => {
        messageElement.classList.add('hide');
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.parentNode.removeChild(messageElement);
            }
        }, 800);
    }, 2500);
}

// ===== FUNCIÓN PARA MOSTRAR PALABRAS SELECCIONADAS =====
function showSelectedWords() {
    const messagesContainer = document.getElementById('messagesContainer');
    
    // Limpiar contenedor
    messagesContainer.innerHTML = '';
    
    // Mostrar cada palabra con delay
    finalWords.forEach((word, index) => {
        setTimeout(() => {
            createSelectedWord(word, index);
        }, index * 300);
    });
    
    // Después de mostrar todas las palabras, organizarlas para el mensaje final
    setTimeout(() => {
        organizeWordsForFinalMessage();
    }, finalWords.length * 300 + 1000);
}

// ===== FUNCIÓN PARA CREAR PALABRA SELECCIONADA =====
function createSelectedWord(word, index) {
    const messagesContainer = document.getElementById('messagesContainer');
    const wordElement = document.createElement('div');
    
    wordElement.className = 'selected-word';
    wordElement.textContent = word;
    
    // Asignar posición
    const position = wordPositions[index % wordPositions.length];
    if (position.left) {
        wordElement.style.left = position.left;
    }
    if (position.right) {
        wordElement.style.right = position.right;
    }
    if (position.top) {
        wordElement.style.top = position.top;
    }
    
    messagesContainer.appendChild(wordElement);
    
    // Mostrar palabra
    setTimeout(() => {
        wordElement.classList.add('show');
    }, 100);
}

// ===== FUNCIÓN PARA ORGANIZAR PALABRAS PARA EL MENSAJE FINAL =====
function organizeWordsForFinalMessage() {
    const messagesContainer = document.getElementById('messagesContainer');
    
    // Limpiar contenedor
    messagesContainer.innerHTML = '';
    
    // Crear contenedor de palabras finales
    const wordsContainer = document.createElement('div');
    wordsContainer.className = 'final-words-container';
    
    // Agregar cada palabra en orden
    finalWords.forEach((word, index) => {
        const wordElement = document.createElement('div');
        wordElement.className = 'final-word';
        wordElement.textContent = word;
        wordElement.style.animationDelay = `${index * 0.1}s`;
        wordsContainer.appendChild(wordElement);
    });
    
    messagesContainer.appendChild(wordsContainer);
    
    // Mostrar contenedor
    setTimeout(() => {
        wordsContainer.classList.add('show');
    }, 500);
    
    // Después de mostrar las palabras, mostrar botón directamente
    setTimeout(() => {
        showRestartButton();
    }, 2000);
}



// ===== FUNCIÓN PARA MOSTRAR BOTÓN DE REINICIO =====
function showRestartButton() {
    const messagesContainer = document.getElementById('messagesContainer');
    
    const buttonElement = document.createElement('button');
    buttonElement.className = 'restart-button';
    buttonElement.innerHTML = `
        <span class="button-text">da click</span>
        <span class="button-icon">✨</span>
    `;
    buttonElement.onclick = restartSequence;
    
    // Posicionar en el centro
    buttonElement.style.left = '50%';
    buttonElement.style.top = '85%';
    buttonElement.style.transform = 'translate(-50%, -50%)';
    
    messagesContainer.appendChild(buttonElement);
    
    // Mostrar botón
    setTimeout(() => {
        buttonElement.classList.add('show');
    }, 500);
}

// ===== FUNCIÓN PARA REINICIAR LA SECUENCIA =====
function restartSequence() {
    // Crear efecto de oscuridad
    const darkOverlay = document.createElement('div');
    darkOverlay.className = 'dark-overlay';
    document.body.appendChild(darkOverlay);
    
    // Mostrar oscuridad
    setTimeout(() => {
        darkOverlay.classList.add('show');
    }, 100);
    
    // Después de la oscuridad, iniciar segunda parte
    setTimeout(() => {
        // Limpiar todo
        document.getElementById('messagesContainer').innerHTML = '';
        document.getElementById('seed').classList.remove('falling', 'planted');
        document.getElementById('flower').classList.remove('growing', 'blooming');
        
        // Asegurar que el contenedor de flor esté visible
        const flowerContainer = document.getElementById('flowerContainer');
        flowerContainer.style.display = 'flex';
        flowerContainer.style.position = 'fixed';
        flowerContainer.style.top = '50%';
        flowerContainer.style.left = '50%';
        flowerContainer.style.transform = 'translate(-50%, -50%)';
        flowerContainer.style.zIndex = '1100';
        
        // Crear lluvia de estrellas sobre la pantalla negra
        createStarRain();
        
        // Mostrar mensaje final simple sobre la pantalla negra
        setTimeout(() => {
            console.log('Intentando mostrar mensaje...');
            showSimpleFinalMessage();
        }, 1000);
        
        // NO remover la oscuridad - mantener la pantalla negra
        
    }, 2000);
}

// ===== FUNCIÓN PARA MOSTRAR FLOR FINAL =====
function showFinalFlower() {
    const flower = document.getElementById('flower');
    
    // Forzar visibilidad completa
    flower.style.display = 'block';
    flower.style.opacity = '1';
    flower.style.transform = 'scale(1)';
    flower.style.position = 'fixed';
    flower.style.top = '50%';
    flower.style.left = '50%';
    flower.style.marginTop = '-100px';
    flower.style.marginLeft = '-100px';
    flower.style.zIndex = '1100';
    flower.style.fontSize = '12rem';
    
    // Agregar clases de animación
    flower.classList.add('growing', 'blooming');
    
    console.log('Flor mostrada:', flower.style.display, flower.style.opacity);
}

// ===== FUNCIÓN PARA MOSTRAR MENSAJE FINAL SIMPLE =====
function showSimpleFinalMessage() {
    // Crear elemento de mensaje simple
    const finalElement = document.createElement('div');
    finalElement.innerHTML = `
        <div style="font-family: 'Dancing Script', cursive; font-size: clamp(2rem, 8vw, 3.5rem); color: #ffc107; font-weight: 700; text-shadow: 3px 3px 6px rgba(0,0,0,0.5); text-align: center; margin-bottom: 20px;">Es que te quiero a mi manera :D</div>
        <div style="font-family: 'Poppins', sans-serif; font-size: clamp(1rem, 4vw, 1.3rem); color: #e91e63; font-weight: 600; text-align: center; font-style: italic;">#SHAOPRO EL Mejor programador del ECUADOR xD</div>
    `;
    
    // Estilos inline para centrado perfecto y responsive
    finalElement.style.position = 'fixed';
    finalElement.style.top = '0';
    finalElement.style.left = '0';
    finalElement.style.width = '100vw';
    finalElement.style.height = '100vh';
    finalElement.style.display = 'flex';
    finalElement.style.flexDirection = 'column';
    finalElement.style.justifyContent = 'center';
    finalElement.style.alignItems = 'center';
    finalElement.style.background = 'rgba(255, 255, 255, 0.85)';
    finalElement.style.padding = 'clamp(20px, 5vw, 40px)';
    finalElement.style.borderRadius = 'clamp(15px, 4vw, 30px)';
    finalElement.style.boxShadow = '0 20px 50px rgba(0,0,0,0.3)';
    finalElement.style.zIndex = '9999';
    finalElement.style.textAlign = 'center';
    finalElement.style.border = 'clamp(2px, 0.5vw, 4px) solid #ffc107';
    finalElement.style.opacity = '1';
    finalElement.style.animation = 'pulse 2s infinite';
    finalElement.style.lineHeight = '1.4';
    finalElement.style.boxSizing = 'border-box';
    
    // Agregar al body
    document.body.appendChild(finalElement);
    
    console.log('Mensaje mostrado:', finalElement.style.display, finalElement.style.opacity);
}

// ===== FUNCIONES DE MÚSICA =====
function playMusic() {
    const audio = document.getElementById('backgroundMusic');
    
    if (audio) {
        // Configurar volumen inicial
        audio.volume = 0.7;
        
        audio.play().then(() => {
            isMusicPlaying = true;
            console.log('Música iniciada correctamente');
        }).catch(error => {
            console.log('Error al reproducir música:', error);
        });
    } else {
        console.log('Elemento de audio no encontrado');
    }
}

function toggleMusic() {
    const audio = document.getElementById('backgroundMusic');
    
    if (audio) {
        if (isMusicPlaying) {
            audio.pause();
            isMusicPlaying = false;
        } else {
            audio.play().then(() => {
                isMusicPlaying = true;
            }).catch(error => {
                console.log('Error al reproducir música:', error);
            });
        }
        
        updatePlayPauseButton();
    }
}

function setVolume(value) {
    const audio = document.getElementById('backgroundMusic');
    if (audio) {
        audio.volume = value / 100;
    }
}

function updatePlayPauseButton() {
    const btn = document.getElementById('playPauseBtn');
    if (btn) {
        btn.textContent = isMusicPlaying ? '⏸️' : '▶️';
    }
}

// ===== FUNCIÓN PARA LLUVIA DE FLORES =====
function startFlowerRain() {
    flowersInterval = setInterval(createFallingFlower, 200);
}

function createFallingFlower() {
    const flower = document.createElement('div');
    flower.className = 'falling-flower';
    flower.innerHTML = '🌻';
    
    // Posición aleatoria en la parte superior
    flower.style.left = Math.random() * 100 + '%';
    flower.style.animationDuration = (Math.random() * 3 + 2) + 's';
    flower.style.fontSize = (Math.random() * 15 + 15) + 'px';
    
    document.body.appendChild(flower);
    
    // Remover la flor después de la animación
    setTimeout(() => {
        if (flower.parentNode) {
            flower.parentNode.removeChild(flower);
        }
    }, 5000);
}

// ===== FUNCIÓN PARA EXPLOSIÓN DE FLORES =====
function createFlowerExplosion() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Crear múltiples flores en explosión
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const flower = document.createElement('div');
            flower.className = 'flower-explosion';
            flower.innerHTML = '🌻';
            
            // Posición aleatoria alrededor del centro
            const angle = (Math.PI * 2 * i) / 30;
            const distance = Math.random() * 200 + 100;
            const x = centerX + Math.cos(angle) * distance;
            const y = centerY + Math.sin(angle) * distance;
            
            flower.style.left = x + 'px';
            flower.style.top = y + 'px';
            flower.style.fontSize = (Math.random() * 20 + 20) + 'px';
            flower.style.animationDelay = Math.random() * 2 + 's';
            
            document.body.appendChild(flower);
            
            // Remover la flor después de la animación
            setTimeout(() => {
                if (flower.parentNode) {
                    flower.parentNode.removeChild(flower);
                }
            }, 3000);
        }, i * 50);
    }
    
    // Continuar con lluvia intensa
    setTimeout(() => {
        clearInterval(flowersInterval);
        startIntenseFlowerRain();
    }, 1000);
}

// ===== FUNCIÓN PARA LLUVIA INTENSA DE FLORES =====
function startIntenseFlowerRain() {
    flowersInterval = setInterval(() => {
        // Crear múltiples flores a la vez
        for (let i = 0; i < 3; i++) {
            createFallingFlower();
        }
    }, 100);
}

// ===== FUNCIÓN PARA CREAR BRILLOS =====
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Posición aleatoria
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    
    document.body.appendChild(sparkle);
    
    // Remover el brillo después de la animación
    setTimeout(() => {
        if (sparkle.parentNode) {
            sparkle.parentNode.removeChild(sparkle);
        }
    }, 2000);
}

// ===== FUNCIÓN PARA CREAR LLUVIA DE ESTRELLAS =====
function createStarRain() {
    // Crear múltiples estrellas cayendo
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createFallingStar();
        }, i * 100);
    }
}

// ===== FUNCIÓN PARA CREAR ESTRELLA CAYENDO =====
function createFallingStar() {
    const star = document.createElement('div');
    star.className = 'falling-star';
    star.innerHTML = '⭐';
    
    // Posición aleatoria en la parte superior
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    star.style.fontSize = (Math.random() * 15 + 15) + 'px';
    star.style.animationDelay = Math.random() * 2 + 's';
    
    document.body.appendChild(star);
    
    // Remover la estrella después de la animación
    setTimeout(() => {
        if (star.parentNode) {
            star.parentNode.removeChild(star);
        }
    }, 5000);
}

// ===== FUNCIÓN PARA INICIAR BRILLOS =====
function startSparkles() {
    sparklesInterval = setInterval(createSparkle, 1000);
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function() {
    // Ocultar elementos inicialmente
    document.getElementById('mainMessage').style.display = 'none';
    document.getElementById('flowerContainer').style.display = 'none';
    
    // Mostrar contenedor de flor cuando se necesite
    setTimeout(() => {
        document.getElementById('flowerContainer').style.display = 'flex';
    }, 2500);
    
    // Iniciar algunos brillos suaves
    setTimeout(() => {
        startSparkles();
    }, 2000);
});

// ===== LIMPIAR INTERVALOS AL SALIR =====
window.addEventListener('beforeunload', function() {
    if (flowersInterval) clearInterval(flowersInterval);
    if (sparklesInterval) clearInterval(sparklesInterval);
});

// ===== EFECTOS ADICIONALES =====
// Efecto de parallax suave con el mouse
document.addEventListener('mousemove', function(e) {
    const flower = document.getElementById('flower');
    if (flower && flower.classList.contains('blooming')) {
        const x = (e.clientX / window.innerWidth) * 10;
        const y = (e.clientY / window.innerHeight) * 10;
        
        flower.style.transform = `scale(1) translate(${x}px, ${y}px) rotate(0deg)`;
    }
});

// Efecto de click en la flor
document.addEventListener('click', function(e) {
    if (e.target.id === 'flower' || e.target.closest('#flower')) {
        createSparkle();
        createSparkle();
        createSparkle();
    }
});
