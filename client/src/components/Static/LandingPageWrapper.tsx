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
      <div className="wrap">
        <header>
          <div className="logo" aria-label="CribMetrics">
            <div className="mark">
              <img
                src="assets/favicon-48x48.png"
                className=""
                alt={startupConfig?.appTitle ?? 'Logo'}
              />              
            </div>
            <div>
              <div style={{ fontWeight: 800, color: 'var(--alt)' }}>CribMetrics</div>
              <div style={{ fontSize: 12, color: '#9CA3AF' }}>Instant market signals | Zip-to-state</div>
            </div>
          </div>
          <nav>
            <a href="javascript://" onClick={() => { location.hash = '#features'; }}>Features</a>
            <a href="/register">Join</a>
          </nav>
        </header>

        <section className="hero">
          <div className="left">
            <div style={{ color: 'var(--accent)', fontWeight: 800, letterSpacing: '.6px' }}>Real Estate Market Insights Made Simple</div>
            <h1 className="h1">Make faster, smarter housing decisions with AI-driven data</h1>
            <p className="lead">CribMetrics combines AI valuation, neighborhood signals, and the latest public sales data (monthly refresh) so you can move from curiosity to decision in minutes — whether you're buying, investing, or advising clients. All by chatting with our AI Real Estate Market Analyst.</p>

            <div className="cta">
              <button className="btn-landing primary" onClick={() => { location.href="/register"}}>Join for FREE</button>
              <button className="btn-landing ghost" onClick={() => { location.hash = '#features'; }}>See features</button>
            </div>

            <div className="stat-row">
              <div className="stat">
                <div className="big">Zip → State</div>
                <small>Drilldown scales</small>
              </div>
              <div className="stat">
                <div className="big">Monthly</div>
                <small>Data refresh</small>
              </div>
              <div className="stat">
                <div className="big">Usage Based</div>
                <small>No recurring fees!</small>
              </div>
            </div>
          </div>

          <aside className="panel">
            <strong style={{ color: 'var(--accent)' }}>Connect Now</strong>
            <p style={{ margin: '8px 0', color: '#9CA3AF' }}>Chat with your AI Real Estate Market Analyst. .</p>

           {children}          

          </aside>
        </section>

        <section id="features" style={{ marginTop: 28 }}>
          <h3 className="h3" style={{ color: 'var(--accent)' }}>Built for quick decisions</h3>
          <div className="features">
            <div className="feature">
              <h4 className="h4">Monthly Updated Market Data</h4>
              <p className="paper">Get insights you can trust, sourced from Redfin and refreshed every month for accuracy.</p>
            </div>
            <div className="feature">
              <h4 className="h4">Location Drilldowns</h4>
              <p className="paper">Zoom from broad trends down to the hyper-local details that actually matter.</p>
            </div>
            <div className="feature">
              <h4 className="h4">AI-Driven Trend Interpretation</h4>
              <p className="paper">Your AI analyst highlights price shifts, inventory changes, and meaningful patterns in plain language.</p>
            </div>
          </div>
        </section>

        <section id="benefit" style={{ marginTop: 28 }}>
          <h3 className="h3" style={{ color: 'var(--accent)' }}>Who CribMetrics Is For</h3>
          <div className="benefits">
            <div className="benefit"><span>✓</span> <div><strong>Investors</strong><br />Identify undervalued areas early and time your entries with confidence.</div></div>
            <div className="benefit"><span>✓</span> <div><strong>Agents & Brokers</strong><br />Elevate your client conversations with data-backed insights and professional-grade market intelligence.</div></div>
            <div className="benefit"><span>✓</span> <div><strong>Homeowners & Buyers</strong><br />Understand your neighborhood's direction and make smarter buy-sell decisions.</div></div>
            <div className="benefit"><span>✓</span> <div><strong>Analysts & Data-Driven Pros</strong><br />Get structured, granular market data without building your own pipelines or dealing with inconsistent sources.</div></div>
          </div>
        </section>

        <section id="trust" style={{ marginTop: 28 }}>
          <h3 className="h3" style={{ color: 'var(--accent)' }}>Why People Trust CribMetrics</h3>
          <div className="features">
            <div className="feature">
              <h4 className="h4">Reliable Data</h4>
              <p className="paper">Powered by consistently updated Redfin housing data.</p>
            </div>
            <div className="feature">
              <h4 className="h4">Clear Insights</h4>
              <p className="paper">No jargon, no guesswork—just straightforward answers you can use.</p>
            </div>
            <div className="feature">
              <h4 className="h4">Privacy-First Approach</h4>
              <p className="paper">Your data stays yours. No tracking, no selling information.</p>
            </div>
          </div>
        </section>

        <StaticFooter />

      </div>
    </>

  );
}

export default LandingPageWrapper;
