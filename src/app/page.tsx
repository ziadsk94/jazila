'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check if already authenticated
    const authStatus = localStorage.getItem('jazila_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'pineapple') {
      setIsAuthenticated(true);
      localStorage.setItem('jazila_authenticated', 'true');
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  // Generate random star positions
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
  }));

  // Password screen
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold opacity-90 text-center" style={{ fontFamily: 'Ogg', color: '#C9A975' }}>
              Enter Password
            </h1>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-6 py-4 text-lg rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-all"
              placeholder="Password"
              autoFocus
            />
            {error && (
              <p className="text-red-400 text-sm" style={{ fontFamily: 'Ogg' }}>
                Incorrect password
              </p>
            )}
            <button
              type="submit"
              className="px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-80"
              style={{ fontFamily: 'Ogg', color: '#C9A975', backgroundColor: 'rgba(201, 169, 117, 0.1)', border: '1px solid rgba(201, 169, 117, 0.3)' }}
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* First Section - Video Hero */}
      <div className="flex min-h-screen items-center justify-center bg-black relative overflow-hidden">
        <main className="w-full h-screen flex items-center justify-center relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/assets/video/Studio_Ghibli_Style_Memory_Recap_Video (online-video-cutter.com).mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <h1 className="absolute text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold opacity-80 px-4" style={{ fontFamily: 'Ogg', color: '#C9A975' }}>
            For Jazila
          </h1>
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 opacity-60 animate-bounce">
            <svg
              width="24"
              height="24"
              className="sm:w-8 sm:h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C9A975"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </main>
      </div>

      {/* Second Section - Story Text */}
      <section className="w-full min-h-screen relative overflow-hidden flex items-center justify-center py-20 px-4" style={{ backgroundColor: '#0B1226' }}>
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: '#E6C78E',
            }}
          />
        ))}
        <p className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl opacity-80 z-10 px-4 max-w-5xl leading-relaxed" style={{ fontFamily: 'Ogg', color: '#E6C78E' }}>
          Our story began with a single point in time...
        </p>
      </section>

      {/* Third Section - Moon and Constellations */}
      <section className="w-full min-h-screen relative overflow-hidden flex flex-col items-center justify-center py-20 px-4" style={{ backgroundColor: '#0B1226' }}>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-12 lg:mb-0">
          <div className="relative">
            <img
              src="/assets/images/moon.png"
              alt="Moon"
              className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto rounded-full"
            />
          </div>
          <div className="relative">
            <img
              src="/assets/images/Screenshot (27).png"
              alt="Constellations"
              className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto"
            />
          </div>
        </div>
        <p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-80 px-4 max-w-4xl" style={{ fontFamily: 'Ogg', color: '#E6C78E' }}>
          That's the moon and the constellations when we first met
        </p>
      </section>

      {/* Fourth Section - Full Bleed Image */}
      <section className="w-full h-screen relative overflow-hidden">
        <img
          src="/assets/images/1.png"
          alt="Where I Saw You"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold opacity-90 px-4" style={{ fontFamily: 'Ogg', color: '#C9A975' }}>
            Where I Saw You
          </h2>
        </div>
      </section>

      {/* Fifth Section - First Look */}
      <section className="w-full h-screen relative overflow-hidden">
        <img
          src="/assets/images/2.png"
          alt="First Look"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold opacity-90 px-4" style={{ fontFamily: 'Ogg', color: '#C9A975' }}>
            Where I First Lost Myself in Your Beauty
          </h2>
        </div>
      </section>

      {/* Sixth Section - Our Moment */}
      <section className="w-full h-screen relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        >
          <source
            src="/assets/video/1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold opacity-90 px-4" style={{ fontFamily: 'Ogg', color: '#C9A975' }}>
            Where You Became My Everything
          </h2>
        </div>
      </section>

      {/* Seventh Section - Becoming One */}
      <section className="w-full h-screen relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'bottom' }}
        >
          <source
            src="/assets/video/2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold opacity-90 px-4" style={{ fontFamily: 'Ogg', color: '#C9A975' }}>
            Where Two Souls Merged Into One
          </h2>
        </div>
      </section>

      {/* Eighth Section - Finding Home */}
      <section className="w-full h-screen relative overflow-hidden">
        <img
          src="/assets/images/3.png"
          alt="Home Together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold opacity-90 px-4" style={{ fontFamily: 'Ogg', color: '#C9A975' }}>
            Where I Found My Home in Your Arms
          </h2>
        </div>
      </section>

      {/* Ninth Section - Only Us */}
      <section className="w-full h-screen relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-full object-cover"
        >
          <source
            src="/assets/video/3.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold opacity-90 px-4" style={{ fontFamily: 'Ogg', color: '#C9A975' }}>
            Where the World Melted Away and Only We Remained
          </h2>
        </div>
      </section>

      {/* Tenth Section - Overcoming Trials */}
      <section className="w-full h-screen relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-full object-cover"
        >
          <source
            src="/assets/video/4.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold opacity-90 px-4" style={{ fontFamily: 'Ogg', color: '#C9A975' }}>
            Where We Emerged Stronger Than Before
          </h2>
        </div>
      </section>

      {/* Eleventh Section - Final Visual */}
      <section className="w-full h-screen relative overflow-hidden">
        <img
          src="/assets/images/4.png"
          alt="Our Forever"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold opacity-90 px-4" style={{ fontFamily: 'Ogg', color: '#C9A975' }}>
            Where Every Moment Becomes Infinity
          </h2>
        </div>
      </section>

      {/* Twelfth Section - Stars Background */}
      <section className="w-full min-h-screen relative overflow-hidden flex items-center justify-center py-20 px-4" style={{ backgroundColor: '#0B1226' }}>
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: '#E6C78E',
            }}
          />
        ))}
        <p className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl opacity-80 z-10 px-4 max-w-5xl leading-relaxed" style={{ fontFamily: 'Ogg', color: '#E6C78E' }}>
          Where We'll Build the Rest of Our Lives Together
        </p>
      </section>

      {/* Final Message */}
      <section className="w-full min-h-screen relative overflow-hidden flex items-center justify-center py-20 px-4" style={{ backgroundColor: '#0B1226' }}>
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: '#E6C78E',
            }}
          />
        ))}
        <div className="text-center z-10 px-4 max-w-5xl space-y-8">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-90 leading-relaxed" style={{ fontFamily: 'Ogg', color: '#E6C78E' }}>
            For Jazila
          </p>
          <p className="text-lg sm:text-xl md:text-2xl opacity-80 leading-relaxed" style={{ fontFamily: 'Ogg', color: '#E6C78E' }}>
            With all my love, always
          </p>
        </div>
      </section>
    </>
  );
}
