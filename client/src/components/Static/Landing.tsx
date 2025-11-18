import React from 'react';
import { useNavigate } from 'react-router-dom';
import StaticFooter from './StaticFooter'
import LoginForm from '../Auth/LoginForm';
import Login from '../Auth/Login';
import '../../custom-theme.css';

export default function  Landing() {
  const navigate = useNavigate();
  return (
    <>
  <div class="wrap">
    <header>
      <div class="logo" aria-label="CribMetrics">
        <div class="mark">CM</div>
        <div>
          <div style="font-weight:800;color:var(--alt)">CribMetrics</div>
          <div style="font-size:12px;color:#9CA3AF">Instant market signals • Zip-to-state</div>
        </div>
      </div>
      <nav>
        <a href="#features">Features</a>
        <a href="#signup">Join</a>
      </nav>
    </header>

    <section class="hero">
      <div class="left">
        <div style="color:var(--accent);font-weight:800;letter-spacing:.6px">Real Estate Market Insights Made Simple</div>
        <h1>Make faster, smarter housing decisions with AI-driven data</h1>
        <p class="lead">CribMetrics combines AI valuation, neighborhood signals, and the latest public sales data (monthly refresh) so you can move from curiosity to decision in minutes — whether you're buying, investing, or advising clients.</p>

        <div class="cta">
          <button class="btn primary" onclick="document.getElementById('email2').focus()">Join for FREE</button>
          <button class="btn ghost" onclick="location.hash='#features'">See features</button>
        </div>

        <div class="stat-row">
          <div class="stat">
            <div class="big">Zip → State</div>
            <small>Drilldown scales</small>
          </div>
          <div class="stat">
            <div class="big">Monthly</div>
            <small>Data refresh</small>
          </div>
          <div class="stat">
            <div class="big">APIs</div>
            <small>Export-ready (beta)</small>
          </div>
        </div>
      </div>

      <aside class="panel">
        <strong>Reserve Beta Access</strong>
        <p style="margin:8px 0;color:#9CA3AF">Fast onboarding for early users — includes 3 area reports during beta.</p>
        {/* <form id="signup" onsubmit="event.preventDefault(); alert('Thanks! This demo form does not submit');">
          <input id="email2" type="email" placeholder="your@company.com" required />
          <select aria-label="Use case" style="margin-top:8px">
            <option>Investor</option>
            <option>Agent</option>
            <option>Homebuyer</option>
          </select>
          <button class="btn primary" style="width:100%;margin-top:10px">Join waitlist</button>
        </form> */}

        <Login />

        <div style="margin-top:14px">
          <strong style="color:var(--accent)">What you get</strong>
          <ul style="padding-left:18px;color:#B7C0CC;margin-top:8px">
            <li>AI valuations with confidence bands</li>
            <li>Neighborhood health & trend alerts</li>
            <li>CSV export & scheduled reports</li>
          </ul>
        </div>
      </aside>
    </section>

   <section id="features" style="margin-top:28px">
      <h3 style="color:var(--accent)">Built for quick decisions</h3>
      <div class="features">
        <div class="feature">
          <h4>Monthly Updated Market Data</h4>
          <p class="muted">Get insights you can trust, sourced from Redfin and refreshed every month for accuracy.</p>
        </div>
        <div class="feature">
          <h4>Location Drilldowns</h4>
          <p class="muted">Zoom from broad trends down to the hyper-local details that actually matter.</p>
        </div>
        <div class="feature">
          <h4>AI-Driven Trend Interpretation</h4>
          <p class="muted">Your AI analyst highlights price shifts, inventory changes, and meaningful patterns in plain language.</p>
        </div>                          
      </div>
    </section>

    <section>
      <h3 style="color:var(--accent)">Who CribMetrics Is For</h3>
      <div class="benefits">
          <div class="benefit"><span>✓</span> <div><strong>Investors</strong><br />Identify undervalued areas early and time your entries with confidence.</div></div>
          <div class="benefit"><span>✓</span> <div><strong>Agents & Brokers</strong><br />Elevate your client conversations with data-backed insights and professional-grade market intelligence.</div></div>
          <div class="benefit"><span>✓</span> <div><strong>Homeowners & Buyers</strong><br />Understand your neighborhood's direction and make smarter buy-sell decisions.</div></div>
          <div class="benefit"><span>✓</span> <div><strong>Analysts & Data-Driven Pros</strong><br />Get structured, granular market data without building your own pipelines or dealing with inconsistent sources.</div></div>
      </div>
    </section>        

    <section id="features" style="margin-top:28px">
      <h3 style="color:var(--accent)">Why People Trust CribMetrics</h3>
      <div class="features">
        <div class="feature">
          <h4>Reliable Data</h4>
          <p class="muted">Powered by consistently updated Redfin housing data.</p>
        </div>
        <div class="feature">
          <h4>Clear Insights</h4>
          <p class="muted">No jargon, no guesswork—just straightforward answers you can use.</p>
        </div>
        <div class="feature">
          <h4>Privacy-First Approach</h4>
          <p class="muted">Your data stays yours. No tracking, no selling information.</p>
        </div>                          
      </div>
    </section>

    <footer>
      <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px">
        <div><strong style="color:var(--accent)">CribMetrics</strong> — AI Real Estate Analytics</div>
        <div style="color:#8892A6">Data sources: public real estate sales • Privacy • Terms</div>
      </div>
    </footer>

  </div>    
    </>
  );
}
