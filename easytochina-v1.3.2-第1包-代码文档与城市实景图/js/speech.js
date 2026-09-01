/**
 * SpeakChinese - Enhanced Speech Module
 *
 * Features:
 * 1. Multi-voice profile system — each city mascot has a unique voice personality
 * 2. Voice picker UI — users can select and test different Chinese voices
 * 3. Lip-sync hooks — fires events during TTS for mouth animation
 * 4. Web Speech API TTS + Speech Recognition
 * 5. Future-ready: hooks for neural TTS (Azure, Google, Alibaba) integration
 */

const Speech = {
    synthesis: window.speechSynthesis || null,
    recognition: null,
    chineseVoice: null,
    allVoices: [],
    activeProfileId: 'default',

    // ===== Voice Profiles =====
    // Each profile adjusts pitch/rate to create a distinct personality.
    // Future: replace with neural TTS API calls for studio-quality voices.
    VOICE_PROFILES: [
        { id: 'default',          name: 'Standard Mandarin',  pitch: 1.0,  rate: 0.85, icon: '🗣️', desc: 'Clear, neutral Mandarin voice', premium: false },
        { id: 'opera-male',       name: 'Opera Baritone',     pitch: 0.8,  rate: 0.85, icon: '🎭', desc: 'Deep, theatrical male voice', premium: false },
        { id: 'elegant-female',   name: 'Elegant Lady',       pitch: 1.2,  rate: 0.9,  icon: '💃', desc: 'Graceful, higher-pitched female voice', premium: false },
        { id: 'warrior-male',     name: 'Warrior Bold',       pitch: 0.7,  rate: 0.8,  icon: '⚔️', desc: 'Strong, commanding male voice', premium: false },
        { id: 'cute-panda',       name: 'Panda Cub',          pitch: 1.5,  rate: 0.75, icon: '🐼', desc: 'Cute, high-pitched, slow-paced', premium: false },
        { id: 'spicy-female',     name: 'Spicy Girl',         pitch: 1.15, rate: 0.95, icon: '🌶️', desc: 'Energetic, fast-talking female', premium: false },
        { id: 'gentle-female',    name: 'Tea Fairy',          pitch: 1.1,  rate: 0.8,  icon: '🍵', desc: 'Soft, soothing, slow-paced', premium: false },
        { id: 'soft-female',      name: 'Garden Maiden',      pitch: 1.15, rate: 0.82, icon: '🌸', desc: 'Delicate, refined female', premium: false },
        { id: 'warm-male',        name: 'Tea House Host',     pitch: 0.9,  rate: 0.88, icon: '🫖', desc: 'Warm, welcoming male', premium: false },
        { id: 'young-male',       name: 'Tech Young',         pitch: 1.0,  rate: 0.95, icon: '💻', desc: 'Young, energetic, fast-talking', premium: false },
        { id: 'crystal-female',   name: 'Ice Crystal',        pitch: 1.2,  rate: 0.85, icon: '❄️', desc: 'Clear, bright, higher voice', premium: false },
        { id: 'highland-female',  name: 'Highland Maiden',    pitch: 1.15, rate: 0.82, icon: '🏔️', desc: 'Clear, resonant, echoey', premium: false },
        { id: 'fiery-female',     name: 'Spicy Fire',         pitch: 1.1,  rate: 0.92, icon: '🔥', desc: 'Energetic, bold, slightly fast', premium: false },
        { id: 'breeze-male',      name: 'Ocean Breeze',       pitch: 0.95, rate: 0.88, icon: '🌊', desc: 'Relaxed, breezy, warm', premium: false },
        { id: 'bright-female',    name: 'Spring Blossom',     pitch: 1.2,  rate: 0.87, icon: '🌸', desc: 'Bright, cheerful, floral', premium: false },
        { id: 'scholar-male',     name: 'Scholar Calm',       pitch: 0.85, rate: 0.82, icon: '📖', desc: 'Calm, measured, scholarly', premium: false },
        { id: 'craftsman-male',   name: 'Kiln Master',        pitch: 0.88, rate: 0.8,  icon: '🏺', desc: 'Steady, patient, artisan', premium: false },
        { id: 'business-male',    name: 'Trade Pro',          pitch: 0.92, rate: 0.9,  icon: '💼', desc: 'Confident, business-like', premium: false },
        { id: 'heroic-male',      name: 'River Hero',         pitch: 0.82, rate: 0.88, icon: '🏞️', desc: 'Strong, resilient, warm', premium: false },
        { id: 'jolly-male',       name: 'Comedy Uncle',       pitch: 0.9,  rate: 0.92, icon: '😄', desc: 'Jolly, slightly fast, humorous', premium: false },
        { id: 'cheerful-male',    name: 'Ocean Cheer',        pitch: 0.95, rate: 0.9,  icon: '🍺', desc: 'Cheerful, relaxed, coastal', premium: false },
        { id: 'hearty-male',      name: 'Plains Brother',     pitch: 0.88, rate: 0.87, icon: '🌾', desc: 'Hearty, straightforward, warm', premium: false },
        { id: 'exotic-female',    name: 'Silk Road Dance',    pitch: 1.1,  rate: 0.85, icon: '💃', desc: 'Exotic, melodic, rhythmic', premium: false },
        { id: 'grassland-male',   name: 'Steppe Rider',       pitch: 0.85, rate: 0.82, icon: '🐴', desc: 'Open, warm, resonant', premium: false },
        // Premium voices (future neural TTS)
        { id: 'neural-female',    name: 'Neural Xiao Mei',    pitch: 1.0,  rate: 0.9,  icon: '✨', desc: 'Studio-quality natural female voice (coming soon)', premium: true },
        { id: 'neural-male',      name: 'Neural Yun Jian',    pitch: 1.0,  rate: 0.9,  icon: '✨', desc: 'Studio-quality natural male voice (coming soon)', premium: true },
    ],

    // ===== Lip-sync callback =====
    // Set this to a function that receives viseme/boundary events
    onLipSync: null,

    // ===== Lip-sync event names =====
    // These events fire during TTS to drive mouth animations
    LIP_SYNC_EVENTS: {
        START: 'lipsync:start',
        BOUNDARY: 'lipsync:boundary',   // fires at each word/syllable boundary
        END: 'lipsync:end'
    },

    init() {
        this.loadVoices();
        if (this.synthesis) {
            this.synthesis.onvoiceschanged = () => this.loadVoices();
        }
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            this.recognition = new SpeechRecognition();
            this.recognition.lang = 'zh-CN';
            this.recognition.continuous = false;
            this.recognition.interimResults = true;
            this.recognition.maxAlternatives = 3;
        }
    },

    loadVoices() {
        if (!this.synthesis) return;
        this.allVoices = this.synthesis.getVoices();
        // Prefer zh-CN voices
        this.chineseVoice = this.allVoices.find(v => v.lang === 'zh-CN')
            || this.allVoices.find(v => v.lang === 'zh-CN.UTF-8')
            || this.allVoices.find(v => v.lang === 'cmn-Hans-CN')
            || this.allVoices.find(v => v.lang && v.lang.startsWith('zh'))
            || null;
    },

    // ===== Voice Profile Management =====
    getAvailableProfiles() {
        return this.VOICE_PROFILES;
    },

    getProfileById(id) {
        return this.VOICE_PROFILES.find(p => p.id === id) || this.VOICE_PROFILES[0];
    },

    getActiveProfile() {
        return this.getProfileById(this.activeProfileId);
    },

    setActiveProfile(id) {
        this.activeProfileId = id;
    },

    // ===== Speak with a specific voice profile =====
    speakWithProfile(text, profile, onEnd, onStart) {
        if (!this.synthesis) {
            console.warn('Speech synthesis not supported');
            if (onEnd) onEnd();
            return;
        }

        // Check for premium voices (not yet implemented)
        if (profile.premium) {
            // Future: call neural TTS API here
            // For now, fall back to Web Speech API with closest params
            console.info('Premium voice not yet available, using fallback TTS');
        }

        this.synthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        utterance.rate = profile.rate;
        utterance.pitch = profile.pitch;
        utterance.volume = 1;

        if (this.chineseVoice) {
            utterance.voice = this.chineseVoice;
        }

        // Lip-sync hooks
        const fireEvent = (eventName, data) => {
            if (this.onLipSync) this.onLipSync(eventName, data);
            window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
        };

        if (onStart) utterance.onstart = () => {
            onStart();
            fireEvent(this.LIP_SYNC_EVENTS.START, { text, profile });
        };

        // Boundary event for lip-sync (fires at word/sentence boundaries)
        utterance.onboundary = (event) => {
            fireEvent(this.LIP_SYNC_EVENTS.BOUNDARY, {
                charIndex: event.charIndex,
                charLength: event.charLength || 1,
                elapsedTime: event.elapsedTime,
                text
            });
        };

        if (onEnd) utterance.onend = () => {
            onEnd();
            fireEvent(this.LIP_SYNC_EVENTS.END, { text });
        };

        utterance.onerror = () => {
            if (onEnd) onEnd();
            fireEvent(this.LIP_SYNC_EVENTS.END, { text, error: true });
        };

        this.synthesis.speak(utterance);
    },

    // ===== Standard speak (uses active profile) =====
    speak(text, onEnd, onStart) {
        this.speakWithProfile(text, this.getActiveProfile(), onEnd, onStart);
    },

    // ===== Speak slowly (for pronunciation practice) =====
    speakSlow(text, onEnd, onStart) {
        const slowProfile = { ...this.getActiveProfile(), rate: 0.6 };
        this.speakWithProfile(text, slowProfile, onEnd, onStart);
    },

    // ===== Stop all speech =====
    stop() {
        if (this.synthesis) this.synthesis.cancel();
        if (this.onLipSync) this.onLipSync(this.LIP_SYNC_EVENTS.END, {});
    },

    // ===== Speech Recognition (unchanged) =====
    isRecognitionSupported() {
        return this.recognition !== null;
    },

    isTTSSupported() {
        return this.synthesis !== null;
    },

    startRecognition(onResult, onError, onEnd) {
        if (!this.recognition) {
            if (onError) onError('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
            return;
        }

        this.recognition.onresult = (event) => {
            let finalTranscript = '';
            let interimTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalTranscript += transcript;
                } else {
                    interimTranscript += transcript;
                }
            }

            if (finalTranscript) {
                if (onResult) onResult(finalTranscript, true);
            } else if (interimTranscript && onResult) {
                onResult(interimTranscript, false);
            }
        };

        this.recognition.onerror = (event) => {
            let errorMsg = 'Recognition error';
            if (event.error === 'not-allowed') {
                errorMsg = 'Microphone access denied. Please allow microphone access in your browser settings.';
            } else if (event.error === 'no-speech') {
                errorMsg = 'No speech detected. Please try again.';
            } else if (event.error === 'network') {
                errorMsg = 'Network error. Speech recognition requires an internet connection.';
            }
            if (onError) onError(errorMsg);
        };

        this.recognition.onend = () => {
            if (onEnd) onEnd();
        };

        try {
            this.recognition.start();
        } catch (e) {
            try {
                this.recognition.stop();
                setTimeout(() => {
                    try { this.recognition.start(); } catch(e2) {}
                }, 200);
            } catch(e2) {}
        }
    },

    stopRecognition() {
        if (this.recognition) {
            try { this.recognition.stop(); } catch (e) {}
        }
    },

    // ===== Speech comparison (unchanged) =====
    compareSpeech(recognized, target) {
        if (!recognized || !target) {
            return { score: 0, isCorrect: false, recognized: recognized || '', target };
        }
        const normalize = (str) => str.replace(/[，。！？、,.!?\s]/g, '').trim();
        const normRecognized = normalize(recognized);
        const normTarget = normalize(target);

        if (normRecognized === normTarget) {
            return { score: 100, isCorrect: true, recognized: normRecognized, target: normTarget };
        }

        const distance = this.levenshtein(normRecognized, normTarget);
        const maxLength = Math.max(normRecognized.length, normTarget.length);
        const similarity = Math.max(0, Math.round((1 - distance / maxLength) * 100));

        return {
            score: similarity,
            isCorrect: similarity >= 70,
            recognized: normRecognized,
            target: normTarget
        };
    },

    levenshtein(a, b) {
        const matrix = [];
        for (let i = 0; i <= b.length; i++) matrix[i] = [i];
        for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );
                }
            }
        }
        return matrix[b.length][a.length];
    }
};

// Initialize speech module
Speech.init();

// ===== Global Lip-Sync Animation Controller =====
// Listens for lip-sync events and animates mascot mouths
(function() {
    let mouthAnimationInterval = null;

    function startMouthAnimation() {
        const mouths = document.querySelectorAll('.mascot-mouth, .mascot-chat-avatar .mascot-mouth');
        if (mouths.length === 0) return;

        let toggle = false;
        mouthAnimationInterval = setInterval(() => {
            toggle = !toggle;
            mouths.forEach(m => {
                if (toggle) {
                    m.style.transform = 'scaleY(1.8)';
                    m.style.transformOrigin = 'center';
                } else {
                    m.style.transform = 'scaleY(0.6)';
                    m.style.transformOrigin = 'center';
                }
            });
        }, 120);
    }

    function stopMouthAnimation() {
        if (mouthAnimationInterval) {
            clearInterval(mouthAnimationInterval);
            mouthAnimationInterval = null;
        }
        document.querySelectorAll('.mascot-mouth').forEach(m => {
            m.style.transform = '';
        });
    }

    window.addEventListener(Speech.LIP_SYNC_EVENTS.START, startMouthAnimation);
    window.addEventListener(Speech.LIP_SYNC_EVENTS.END, stopMouthAnimation);
})();
