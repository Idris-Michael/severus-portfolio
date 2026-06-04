import { useEffect, useRef, useState } from 'react';

const ACCENT = '#F97316';

type Msg = { role: 'user' | 'assistant'; content: string };

const SUGGESTIONS = [
  'What can Idris build?',
  'Show me the best demo',
  'Frontend or backend?',
];

/**
 * Voice-enabled portfolio chatbot. Text + speech-to-text input (Web Speech API)
 * and optional text-to-speech replies (SpeechSynthesis). Talks to /api/chat;
 * degrades gracefully when the API or speech APIs are unavailable.
 */
export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: 'assistant', content: "Hi, I'm Idris's portfolio guide. Ask me about his work, or tap the mic and talk to me." },
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [listening, setListening] = useState(false);
  const [speak, setSpeak] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);
  const recogRef = useRef<any>(null);

  const speechSupported = typeof window !== 'undefined' && ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);
  const ttsSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, busy, open]);

  // Set up speech recognition once.
  useEffect(() => {
    if (!speechSupported) return;
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const r = new SR();
    r.lang = 'en-GB';
    r.interimResults = true;
    r.continuous = false;
    let finalText = '';
    r.onresult = (e: any) => {
      let interim = '';
      finalText = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) finalText += t;
        else interim += t;
      }
      setInput((finalText || interim).trim());
    };
    r.onend = () => {
      setListening(false);
      const text = finalText.trim();
      if (text) send(text);
    };
    r.onerror = () => setListening(false);
    recogRef.current = r;
    return () => { try { r.abort(); } catch { /* noop */ } };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleMic = () => {
    const r = recogRef.current;
    if (!r) return;
    if (listening) {
      try { r.stop(); } catch { /* noop */ }
      setListening(false);
    } else {
      setInput('');
      try { r.start(); setListening(true); } catch { /* noop */ }
    }
  };

  const sayOut = (text: string) => {
    if (!speak || !ttsSupported) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-GB';
      u.rate = 1.02;
      window.speechSynthesis.speak(u);
    } catch { /* noop */ }
  };

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || busy) return;
    const next = [...messages, { role: 'user' as const, content }];
    setMessages(next);
    setInput('');
    setBusy(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      });
      let reply = "I'm offline right now. Reach Idris at idris.bakare92@outlook.com or on LinkedIn.";
      if (res.ok) {
        const data = await res.json();
        if (data && typeof data.reply === 'string') reply = data.reply;
      }
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
      sayOut(reply);
    } catch {
      const reply = "I can't reach the assistant from here. Email idris.bakare92@outlook.com.";
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
      sayOut(reply);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        data-magnetic
        aria-label={open ? 'Close assistant' : 'Open portfolio assistant'}
        className="hover-target fixed bottom-6 right-6 z-[95] w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-transform"
        style={{ background: ACCENT, boxShadow: '0 10px 30px -8px rgba(249,115,22,0.6)' }}
      >
        {open ? '✕' : '◆'}
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-[95] w-[min(380px,calc(100vw-3rem))] rounded-2xl overflow-hidden flex flex-col"
          style={{ background: 'var(--surface)', border: '1px solid var(--line)', boxShadow: '0 30px 80px -30px rgba(0,0,0,0.6)', maxHeight: 'min(560px, calc(100vh - 8rem))' }}
          role="dialog"
          aria-label="Portfolio assistant"
        >
          <div className="flex items-center gap-3 px-4 py-3" style={{ borderBottom: '1px solid var(--line)' }}>
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }} />
            <div className="flex-1">
              <div className="font-sans font-semibold text-sm" style={{ color: 'var(--fg)' }}>Portfolio Assistant</div>
              <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'var(--muted)' }}>Ask or speak</div>
            </div>
            {ttsSupported && (
              <button
                onClick={() => { setSpeak((s) => !s); if (speak) window.speechSynthesis.cancel(); }}
                className="hover-target font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded"
                style={{ color: speak ? ACCENT : 'var(--muted)', border: `1px solid ${speak ? ACCENT : 'var(--line)'}` }}
                aria-pressed={speak}
                title="Read replies aloud"
              >
                🔊 {speak ? 'On' : 'Off'}
              </button>
            )}
          </div>

          <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" style={{ minHeight: 220 }}>
            {messages.map((m, i) => (
              <div
                key={i}
                className="max-w-[85%] text-sm leading-relaxed px-3.5 py-2.5 rounded-2xl"
                style={
                  m.role === 'user'
                    ? { alignSelf: 'flex-end', background: ACCENT, color: '#fff', borderBottomRightRadius: 4 }
                    : { alignSelf: 'flex-start', background: 'var(--bg)', color: 'var(--fg)', border: '1px solid var(--line)', borderBottomLeftRadius: 4 }
                }
              >
                {m.content}
              </div>
            ))}
            {busy && (
              <div className="self-start text-sm px-3.5 py-2.5 rounded-2xl" style={{ background: 'var(--bg)', color: 'var(--muted)', border: '1px solid var(--line)' }}>
                <span className="inline-flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: 'var(--muted)' }} />
                  <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: 'var(--muted)', animationDelay: '0.15s' }} />
                  <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: 'var(--muted)', animationDelay: '0.3s' }} />
                </span>
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button key={s} onClick={() => send(s)} className="hover-target text-[11px] px-3 py-1.5 rounded-full" style={{ color: 'var(--fg)', border: '1px solid var(--line)' }}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="flex items-center gap-2 px-3 py-3"
            style={{ borderTop: '1px solid var(--line)' }}
          >
            {speechSupported && (
              <button
                type="button"
                onClick={toggleMic}
                className="hover-target w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors"
                style={{ background: listening ? ACCENT : 'var(--bg)', color: listening ? '#fff' : 'var(--fg)', border: `1px solid ${listening ? ACCENT : 'var(--line)'}` }}
                aria-label={listening ? 'Stop listening' : 'Speak'}
                title="Voice input"
              >
                {listening ? '■' : '🎤'}
              </button>
            )}
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={listening ? 'Listening…' : 'Ask about the work…'}
              className="flex-1 bg-transparent outline-none text-sm"
              style={{ color: 'var(--fg)' }}
              aria-label="Message"
            />
            <button
              type="submit"
              disabled={!input.trim() || busy}
              className="hover-target w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-white disabled:opacity-40"
              style={{ background: ACCENT }}
              aria-label="Send"
            >
              ↑
            </button>
          </form>
        </div>
      )}
    </>
  );
}
