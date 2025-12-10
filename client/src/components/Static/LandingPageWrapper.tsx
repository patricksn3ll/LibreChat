import { useEffect } from 'react';
import { ThemeSelector } from '@librechat/client';
import { TStartupConfig } from 'librechat-data-provider';
import { ErrorMessage } from '~/components/Auth/ErrorMessage';
import { TranslationKeys, useLocalize } from '~/hooks';
import { Banner } from '../Banners';
import StaticFooter  from './StaticFooter';
import '../../custom-theme.css';

function LandingPageWrapper({
  children,
  header,
  isFetching,
  startupConfig,
  startupConfigError,
  pathname,
  error,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  isFetching: boolean;
  startupConfig: TStartupConfig | null | undefined;
  startupConfigError: unknown | null | undefined;
  pathname: string;
  error: TranslationKeys | null;
}) {
  const localize = useLocalize();
  const hasStartupConfigError = startupConfigError !== null && startupConfigError !== undefined;
  const DisplayError = () => {
    if (hasStartupConfigError) {
      return (
        <div className="mx-auto sm:max-w-sm">
          <ErrorMessage>{localize('com_auth_error_login_server')}</ErrorMessage>
        </div>
      );
    } else if (error === 'com_auth_error_invalid_reset_token') {
      return (
        <div className="mx-auto sm:max-w-sm">
          <ErrorMessage>
            {localize('com_auth_error_invalid_reset_token')}{' '}
            <a className="font-semibold text-green-600 hover:underline" href="/forgot-password">
              {localize('com_auth_click_here')}
            </a>{' '}
            {localize('com_auth_to_try_again')}
          </ErrorMessage>
        </div>
      );
    } else if (error != null && error) {
      return (
        <div className="mx-auto sm:max-w-sm">
          <ErrorMessage>{localize(error)}</ErrorMessage>
        </div>
      );
    }
    return null;
  };

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <>

  <nav>
    <div className="inner">
      <div className="brand" aria-label="HitStayWin brand">
        <svg viewBox="0 0 64 64" width="28" height="28" fill="currentColor" aria-hidden="true">
          <g fill="currentColor">
            <circle cx="20" cy="28" r="8"/>
            <circle cx="44" cy="28" r="8"/>
            <circle cx="32" cy="18" r="8"/>
            <path d="M28 36 L36 36 L34 52 L30 52 Z"/>
          </g>
        </svg>
        <strong>HitStayWin</strong>
      </div>

      <div className="links" role="navigation" aria-label="Main navigation">
        <a href="#features">Features</a>
        <a href="#strategies">Strategies</a>
        <a href="#login">Login</a>
      </div>
    </div>
  </nav>

  <div className="hero">
    <div className="wrap">

      <div className="grid">

        <main>
          <div className="card card-spade" id="overview">
            <h2>Practice drills that stick</h2>
            <p className="muted">AI chat sessions focused on common blackjack scenarios: hard/soft totals, doubling, splitting, and dealer reads. Train accuracy and decision speed with instant feedback.</p>

            <h3 style={{ marginTop: 16 }}>How it works</h3>
            <ol className="muted">
              <li>Pick rules & deck count.</li>
              <li>Run hands in the simulator.</li>
              <li>Receive instant strategy feedback and explanations.</li>
            </ol>

            <div style={{ marginTop: 24, marginBottom: 10 }}>
              <a href="#features" style={{ padding: '10px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 'bold', background: 'var(--fg)', color: 'var(--bg)' }}>Features</a>
              <a href="#strategies" style={{ padding: '10px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 'bold', background: 'var(--fg)', color: 'var(--bg)' }}>Strategies</a>
              <a href="/signup" style={{ padding: '10px 24px', borderRadius: 8, textDecoration: 'none', fontWeight: 'bold', background: 'var(--fg)', color: 'var(--bg)' }}>Start Free Trial</a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 14, flexWrap: 'wrap' }}>
            <div className="card card-diamond" style={{ flex: 1, minWidth: 220 }}>
              <h4>Mastery</h4>
              <p className="muted">Help users understand and apply optimal blackjack strategy by explaining reasoning behind strategic decisions.</p>
            </div>
            <div className="card card-heart" style={{ flex: 1, minWidth: 220 }}>
              <h4>Interactive</h4>
              <p className="muted">Teach and reinforce blackjack techniques by provide interactive practice and quiz sessions.</p>
            </div>
          </div>

        </main>

        <aside>
          <div className="card card-club">
            {children}             
            <h4 style={{marginTop:28}}>Join the newsletter</h4>
            <div className="newsletter">
              <input type="email" placeholder="Your email" aria-label="Newsletter email" />
              <button type="button">Join</button>
            </div>
            <h4 style={{marginTop:28}}>What players say</h4>
            <div className="testimonials" aria-live="polite">
              <div className="t">"I dropped bad habits fast, win-rate improved."<div style={{color:'var(--muted)',marginTop:8}}>— Alex</div></div>
              <div className="t">"Clear, practical, and fun drills."<div style={{color:'var(--muted)',marginTop:8}}>— Jamie</div></div>
            </div>
          </div>
        </aside>

          <section id="features" className="features-section" style={{ marginTop: 20, gridColumn: '1 / -1' }}>
            <h2 style={{ gridColumn: '1 / -1' }}>Features</h2>
            <p className="muted" style={{ gridColumn: '1 / -1' }}>Master every aspect of blackjack with structured training modules and simulator-backed lessons.</p>

            <div className="features-grid" style={{ marginTop: 12, gridColumn: '1 / -1' }}>
              <div className="card">
                <h3><span className="icon">♣️</span>Interpret Game States</h3>
                <p className="muted">Understand the user’s description of the current blackjack hand, dealer upcard, cards played, and optional game conditions such as, decks in shoe, dealer rules, doubling/splitting permissions, etc.</p>
              </div>

              <div className="card">
                <h3><span className="icon">🧮</span>Provide Strategy Advice</h3>
                <p className="muted">Give clear, rule-based recommendations for the optimal move — *Hit, Stand, Double, Split, or Surrender* — and explain *why* that move is optimal under the current conditions.</p>
              </div>

              <div className="card">
                <h3><span className="icon">💰</span>Teach Concepts</h3>
                <p className="muted">
                Explain basic strategy logic and underlying probabilities. Demonstrate card counting systems (like Hi-Lo) step-by-step. Include expected value (EV) comparisons when relevant.
                </p>
              </div>

            </div>
          </section>        

          <section id="strategies" className="strategy-section" style={{ marginTop: 20, gridColumn: '1 / -1' }}>
            <h2 style={{ gridColumn: '1 / -1' }}>Strategies</h2>
            <p className="muted" style={{ gridColumn: '1 / -1' }}>Master every aspect of blackjack with structured training modules and simulator-backed lessons.</p>

            <div className="strategy-grid" style={{ marginTop: 12, gridColumn: '1 / -1' }}>
              <div className="card">
                <h3><span className="icon">♣️</span>Basic Strategy</h3>
                <p className="muted">Learn the mathematically optimal plays for every player hand and dealer upcard. Covers hit/stand, doubling, splitting, and soft-hand rules.</p>
              </div>

              <div className="card">
                <h3><span className="icon">🧮</span>Card Counting</h3>
                <p className="muted">Train the Hi-Lo counting system with automated running and true count tracking. See how counts affect bet sizing and expected advantage (training only).</p>
              </div>

              <div className="card">
                <h3><span className="icon">💰</span>Bankroll Management</h3>
                <p className="muted">Simulated bankroll tracking, goals, stop-loss settings, and recommended responsible-play limits to keep practice disciplined.</p>
              </div>

              <div className="card">
                <h3><span className="icon">🏳️</span>Surrender Strategy</h3>
                <p className="muted">Identify hands where surrendering reduces long-term losses. Practice late/early surrender scenarios based on table rules.</p>
              </div>

              <div className="card">
                <h3><span className="icon">⚡</span>Doubling Down</h3>
                <p className="muted">Master high-EV doubling opportunities (especially 10/11 scenarios) including soft-hand doubling and dealer-sensitive cases.</p>
              </div>

              <div className="card">
                <h3><span className="icon">✂️</span>Splitting Pairs</h3>
                <p className="muted">Train splitting decisions — always split Aces & 8s, never split 10s, and practice borderline splits against dealer upcards and rule variations.</p>
              </div>

              <div className="card">
                <h3><span className="icon">🎲</span>Dealer Behavior</h3>
                <p className="muted">Simulate dealer rules (H17 vs S17) and learn how dealer behavior impacts optimal strategy and EV.</p>
              </div>

              <div className="card">
                <h3><span className="icon">📘</span>House Rules Variations</h3>
                <p className="muted">Toggle DAS, RSA, early/late surrender, number of decks, and other house rules to practice for real tables and online games.</p>
              </div>
            </div>
          </section>

          <StaticFooter />

      </div>

    </div>
  </div>

    </>

  );
}

export default LandingPageWrapper;
