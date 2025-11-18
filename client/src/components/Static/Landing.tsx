import React from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useGetStartupConfig } from '~/data-provider';
import { TStartupConfig } from 'librechat-data-provider';
import StaticFooter from './StaticFooter'
import LoginForm from '../Auth/LoginForm';
import Login from '../Auth/Login';
import '../../custom-theme.css';

export default function  Landing({
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
 
  const contextValue  = {
      children,
      header,
      isFetching,
      startupConfig,
      startupConfigError,
      pathname,
      error,
  }
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

  return (
    <>
      <div className="wrap">
        <header>
          <div className="logo" aria-label="CribMetrics">
            {/* <div className="mark">CM</div> */}
          <div className="mt-6 h-10 flex flex-grow items-center justify-center bg-cover mark">
              <img
                src="assets/logo.svg"
                className="h-full text-center icon-logo rounded-full"
                alt={startupConfig?.appTitle ?? 'Logo'}
              />
          </div>            
            <div>
              <div style={{ fontWeight: 800, color: 'var(--alt)' }}>CribMetrics</div>
              <div style={{ fontSize: 12, color: '#9CA3AF' }}>Instant market signals • Zip-to-state</div>
            </div>
          </div>
          <nav>
            <a href="#features">Features</a>
            <a href="#signup">Join for FREE</a>
          </nav>
        </header>

        <section className="hero">
          <div className="left">
            <div style={{ color: 'var(--accent)', fontWeight: 800, letterSpacing: '.6px' }}>Real Estate Market Insights Made Simple</div>
            <h1>Make faster, smarter housing decisions with AI-driven data</h1>
            <p className="lead">CribMetrics combines AI valuation, neighborhood signals, and the latest public sales data (monthly refresh) so you can move from curiosity to decision in minutes — whether you're buying, investing, or advising clients.</p>

            <div className="cta">
              <button className="btn primary" onClick={() => document.getElementById('email2')?.focus()}>Join for FREE</button>
              <button className="btn ghost" onClick={() => { location.hash = '#features'; }}>See features</button>
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
            <strong>Reserve Beta Access</strong>
            <p style={{ margin: '8px 0', color: '#9CA3AF' }}>Fast onboarding for early users — includes 3 area reports during beta.</p>
            {/* <form id="signup" onSubmit={e => { e.preventDefault(); alert('Thanks! This demo form does not submit'); }}>
              <input id="email2" type="email" placeholder="your@company.com" required />
              <select aria-label="Use case" style={{ marginTop: 8 }}>
                <option>Investor</option>
                <option>Agent</option>
                <option>Homebuyer</option>
              </select>
              <button className="btn primary" style={{ width: '100%', marginTop: 10 }}>Join waitlist</button>
            </form> */}

            <Outlet context={contextValue} />            

            <div style={{ marginTop: 14 }}>
              <strong style={{ color: 'var(--accent)' }}>What you get</strong>
              <ul style={{ paddingLeft: 18, color: '#B7C0CC', marginTop: 8 }}>
                <li>AI valuations with confidence bands</li>
                <li>Neighborhood health & trend alerts</li>
                <li>CSV export & scheduled reports</li>
              </ul>
            </div>
          </aside>
        </section>

        <section id="features" style={{ marginTop: 28 }}>
          <h3 style={{ color: 'var(--accent)' }}>Built for quick decisions</h3>
          <div className="features">
            <div className="feature">
              <h4>Monthly Updated Market Data</h4>
              <p className="muted">Get insights you can trust, sourced from Redfin and refreshed every month for accuracy.</p>
            </div>
            <div className="feature">
              <h4>Location Drilldowns</h4>
              <p className="muted">Zoom from broad trends down to the hyper-local details that actually matter.</p>
            </div>
            <div className="feature">
              <h4>AI-Driven Trend Interpretation</h4>
              <p className="muted">Your AI analyst highlights price shifts, inventory changes, and meaningful patterns in plain language.</p>
            </div>
          </div>
        </section>

        <section>
          <h3 style={{ color: 'var(--accent)' }}>Who CribMetrics Is For</h3>
          <div className="benefits">
            <div className="benefit"><span>✓</span> <div><strong>Investors</strong><br />Identify undervalued areas early and time your entries with confidence.</div></div>
            <div className="benefit"><span>✓</span> <div><strong>Agents & Brokers</strong><br />Elevate your client conversations with data-backed insights and professional-grade market intelligence.</div></div>
            <div className="benefit"><span>✓</span> <div><strong>Homeowners & Buyers</strong><br />Understand your neighborhood's direction and make smarter buy-sell decisions.</div></div>
            <div className="benefit"><span>✓</span> <div><strong>Analysts & Data-Driven Pros</strong><br />Get structured, granular market data without building your own pipelines or dealing with inconsistent sources.</div></div>
          </div>
        </section>

        <section id="features" style={{ marginTop: 28 }}>
          <h3 style={{ color: 'var(--accent)' }}>Why People Trust CribMetrics</h3>
          <div className="features">
            <div className="feature">
              <h4>Reliable Data</h4>
              <p className="muted">Powered by consistently updated Redfin housing data.</p>
            </div>
            <div className="feature">
              <h4>Clear Insights</h4>
              <p className="muted">No jargon, no guesswork—just straightforward answers you can use.</p>
            </div>
            <div className="feature">
              <h4>Privacy-First Approach</h4>
              <p className="muted">Your data stays yours. No tracking, no selling information.</p>
            </div>
          </div>
        </section>

        <StaticFooter />

      </div>
    </>
  );
}