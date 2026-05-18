// ==================== CONFIGURAÇÕES FIREBASE ====================
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU-PROJETO.firebaseapp.com",
    projectId: "SEU-PROJETO",
    storageBucket: "SEU-PROJETO.appspot.com",
    messagingSenderId: "XXXXXXXX",
    appId: "1:XXXXXXXX:web:XXXXXXXX"
};

let db, auth, currentUser;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    firebase.initializeApp(firebaseConfig);
    auth = firebase.auth();
    db = firebase.firestore();

    initLoadingScreen();
    initParticlesBackground();
    initMobileNavigation();
    initQuantumChat();
    
    // Verificar login
    auth.onAuthStateChanged(user => {
        currentUser = user;
        if (!user && window.location.pathname.includes('index.html')) {
            showLoginModal();
        } else {
            document.getElementById('loading-screen').style.display = 'none';
        }
    });

    setTimeout(() => triggerBiometerAnimations(), 1800);
});

// ==================== LOGIN ====================
function showLoginModal() {
    let modal = document.getElementById('login-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'login-modal';
        modal.className = 'login-modal';
        modal.innerHTML = `
            <div class="glass-card login-card">
                <h2 style="text-align:center; color:var(--axis-gold);">AXIS™</h2>
                <p style="text-align:center; margin-bottom:1.5rem;">Acesso Terapeuta</p>
                <input type="email" id="login-email" placeholder="E-mail" class="form-group" style="width:100%; padding:12px; margin-bottom:12px;">
                <input type="password" id="login-password" placeholder="Senha" class="form-group" style="width:100%; padding:12px; margin-bottom:1rem;">
                <button onclick="loginUser()" class="btn-axis btn-primary" style="width:100%;">Entrar no Sistema</button>
                <p style="text-align:center; margin-top:1rem; font-size:0.8rem; color:#888;">Método MB • Mandala da Alma</p>
            </div>
        `;
        document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
}

async function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    try {
        await auth.signInWithEmailAndPassword(email, password);
        document.getElementById('login-modal').style.display = 'none';
    } catch (error) {
        alert("Erro de autenticação: " + error.message);
    }
}

// ==================== Funções Originais + Novas ====================
function triggerBiometerAnimations() { /* mesma função otimizada da versão anterior */ }

async function gerarRelatorioPDF() { /* função da versão anterior */ }

async function sendToAI(message) { /* IA com OpenAI - mesma da versão anterior */ }

// Manter todas as funções originais: initLoadingScreen, initParticlesBackground, initQuantumChat, initMobileNavigation, switchView, etc.

console.log("%cAXIS™ Multidimensional System v1.4 carregado com sucesso", "color:#c9a84c; font-size:14px; font-weight:bold");
// AXIS™ Multidimensional System - Funcionamento Inicial
document.addEventListener('DOMContentLoaded', () => {
    const goldButton = document.querySelector('.gold-button');
    
    if (goldButton) {
        goldButton.addEventListener('click', () => {
            alert('Acessando o Sistema Multidimensional AXIS™... Seja bem-vinda!');
            // Aqui podemos direcionar para a página do dashboard no futuro
            window.location.href = 'pages/dashboard.html';
        });
    }

    console.log('Sistema AXIS™ carregado com sucesso. Método MB ativo.');
});
✔ Controle do menu
✔ Navegação SPA
✔ Troca de telas
✔ Efeitos visuais
✔ Cards animados
✔ Loading inicial
✔ Eventos do dashboard
✔ Ativações visuais
