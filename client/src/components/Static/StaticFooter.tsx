import { useMemo, useEffect, memo } from 'react';
import { useGetStartupConfig } from '~/data-provider';
import Footer from '~/components/Auth/Footer';
import '../../custom-theme.css';

interface StaticFooterProps {

}

const StaticFooter = memo(
  ({

  }: StaticFooter) => {
    const { data: startupConfig } = useGetStartupConfig();

    useEffect(() => {

    }, []);

    return (

      <footer>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div><strong style={{ color: 'var(--accent)' }}>{startupConfig?.appTitle.split('|')[0] || 'CribMetrics'}</strong> — {process.env.CUSTOM_TAG_LINE || startupConfig?.tagLine || 'Real Estate Market Insights Made Simple'}</div>
          <div style={{ color: '#8892A6' }}>Data Sources: Public Real Estate Sales | <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy</a> | <a href="/terms" target="_blank" rel="noopener noreferrer">Terms</a></div>
        </div>
      </footer>

    // <footer>
    //   © 2025 {startupConfig?.appTitle.split('|')[0] || 'CribMetrics'} | {process.env.CUSTOM_TAG_LINE || startupConfig?.tagLine || 'Real Estate Market Insights Made Simple'}
    //   <Footer startupConfig={startupConfig} />
    // </footer>          
    );
  },
);

StaticFooter.displayName = 'StaticFooter';

export default StaticFooter;
