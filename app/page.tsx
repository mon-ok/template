import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Google Fonts — Playfair Display, DM Mono, Syne */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&family=DM+Mono:wght@300;400&family=Syne:wght@400;700;800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .anim-1 { opacity: 0; animation: fadeUp 0.6s 0.2s forwards; }
        .anim-2 { opacity: 0; animation: fadeUp 0.6s 0.35s forwards; }
        .anim-3 { opacity: 0; animation: fadeUp 0.6s 0.5s forwards; }
        .anim-4 { opacity: 0; animation: fadeUp 0.6s 0.65s forwards; }

        .portal-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.12);
          transform: translateX(-101%);
          transition: transform 0.3s ease;
        }
        .portal-btn:hover::after { transform: translateX(0); }
        .portal-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.35);
        }
        .portal-btn {
          transition: transform 0.2s, box-shadow 0.2s;
        }
      `}</style>

      <div
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: '#0d0d0d', fontFamily: "'DM Mono', monospace" }}
      >
        {/* Corner decoration */}
        <span
          className="fixed bottom-6 right-6 text-xs tracking-widest pointer-events-none select-none"
          style={{ color: '#444', letterSpacing: '0.2em', fontSize: '0.65rem' }}
        >
          v1.0 / Portal
        </span>

        <div className="relative z-10 text-center px-8">
          {/* Eyebrow */}
          <p
            className="anim-1 uppercase"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.72rem',
              letterSpacing: '0.35em',
              color: '#c9a84c',
              marginBottom: '2rem',
            }}
          >
            Avail our Services
          </p>

          {/* Title */}
          <h1
            className="anim-2"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3.5rem, 10vw, 9rem)',
              fontWeight: 900,
              color: '#faf7f2',
              lineHeight: 0.95,
              marginBottom: '0.3em',
            }}
          >
            En<em style={{ color: '#c9a84c', fontStyle: 'italic' }}>ter</em>
            <br />The
            <br />Portal
          </h1>

          {/* Subtitle */}
          <p
            className="anim-3"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '0.82rem',
              color: '#888',
              letterSpacing: '0.1em',
              marginBottom: '4rem',
            }}
          >
            Three paths. Three worlds. Your choice.
          </p>

          {/* Buttons */}
          <div
            className="anim-4 flex flex-wrap justify-center"
            style={{ gap: '1.2rem' }}
          >
            {/* Editorial - Modern */}
            <Link href="/modern">
              <button
                className="portal-btn relative overflow-hidden"
                style={{
                  padding: '1.1rem 2.4rem',
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  border: 'none',
                  background: '#c0432a',
                  color: '#faf7f2',
                }}
              >
                Modern
              </button>
            </Link>

            {/* Cinematic - Corporate */}
            <Link href="/corporate">
              <button
                className="portal-btn relative overflow-hidden"
                style={{
                  padding: '1.1rem 2.4rem',
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  border: 'none',
                  background: '#c9a84c',
                  color: '#0d0d0d',
                }}
              >
                Corporate
              </button>
            </Link>

            {/* Utility - Minimalist */}
            <Link href="/minimalist">
              <button
                className="portal-btn relative overflow-hidden"
                style={{
                  padding: '1.1rem 2.4rem',
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  border: 'none',
                  background: '#2e3d4f',
                  color: '#faf7f2',
                }}
              >
                Minimalist
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}