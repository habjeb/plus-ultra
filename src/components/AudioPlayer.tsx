import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, SkipForward, SkipBack } from 'lucide-react';
import { Button } from './ui/button';

const tracks = [
    {
        title: "Salle de Combat",
        src: "/Salle de Combat.mp3"
    },
    {
        title: "Muay Thai Cipher",
        src: "/Muay Thai Cipher.mp3"
    },
    {
        title: "Ring Walk Shadows",
        src: "/Ring Walk Shadows.mp3"
    }
];

export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    const hasInteractedRef = useRef(false);

    useEffect(() => {
        // Set initial volume
        if (audioRef.current) {
            audioRef.current.volume = 0.3;

            // Attempt autoplay
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    console.log("Autoplay prevented by browser policy:", error);
                    setIsPlaying(false);
                });
            }
        }

        // Add global click listener to trigger play if autoplay failed and user interaction is required
        const handleUserInteraction = () => {
            if (!hasInteractedRef.current && audioRef.current && audioRef.current.paused) {
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                    hasInteractedRef.current = true;
                }).catch(e => console.error("Interaction play failed", e));
            }
        };

        document.addEventListener('click', handleUserInteraction);
        document.addEventListener('keydown', handleUserInteraction);

        return () => {
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('keydown', handleUserInteraction);
        };
    }, []);

    useEffect(() => {
        if (isPlaying && audioRef.current) {
            audioRef.current.play().catch(error => {
                console.error("Audio playback failed:", error);
                setIsPlaying(false);
            });
        }
    }, [currentTrackIndex]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(error => {
                    console.error("Audio playback failed:", error);
                });
            }
            setIsPlaying(!isPlaying);
            hasInteractedRef.current = true;
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const nextTrack = () => {
        setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
        setIsPlaying(true);
    };

    const prevTrack = () => {
        setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
        setIsPlaying(true);
    };

    const handleEnded = () => {
        nextTrack();
    };

    return (
        <div className="fixed top-32 right-4 z-50 flex flex-col items-center gap-2 py-3 px-2 my-[81px] rounded-2xl glass-dark border border-white/10 shadow-lg shadow-purple-500/20 animate-in fade-in slide-in-from-top-4 duration-700 max-h-[90vh]">
            <audio
                ref={audioRef}
                src={tracks[currentTrackIndex].src}
                onEnded={handleEnded}
            />

            <div className="flex items-center gap-2 overflow-hidden">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-slate-500'}`} />
                <div className="flex flex-col items-center overflow-hidden min-w-0">
                    <span className="text-[10px] uppercase text-purple-400 font-bold leading-none">Lecture en cours</span>
                    <span className="text-xs font-medium text-slate-200 truncate max-w-[120px] text-center leading-tight">
                        {tracks[currentTrackIndex].title}
                    </span>
                </div>
            </div>

            <div className="w-8 h-px bg-white/10" />

            <div className="flex items-center gap-1">
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full hover:bg-white/10 text-slate-300 hover:text-white"
                    onClick={prevTrack}
                    title="Précédent"
                >
                    <SkipBack className="h-3 w-3" />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full hover:bg-white/10 text-white bg-white/5 border border-white/10"
                    onClick={togglePlay}
                    title={isPlaying ? "Pause" : "Lecture"}
                >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full hover:bg-white/10 text-slate-300 hover:text-white"
                    onClick={nextTrack}
                    title="Suivant"
                >
                    <SkipForward className="h-3 w-3" />
                </Button>
            </div>

            <div className="w-8 h-px bg-white/10" />

            <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full hover:bg-white/10 text-slate-400 hover:text-white"
                onClick={toggleMute}
                title={isMuted ? "Activer le son" : "Couper le son"}
            >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
        </div>
    );
}
