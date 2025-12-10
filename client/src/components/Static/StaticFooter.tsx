import { useMemo, useEffect, memo } from 'react';
import { useGetStartupConfig } from '~/data-provider';
import TagManager from 'react-gtm-module';
import '../../custom-theme.css';

interface StaticFooterProps {

}

const StaticFooter = memo(
  ({

  }: StaticFooterProps) => {
  const { data: config } = useGetStartupConfig();

  useEffect(() => {
    if (config?.analyticsGtmId != null && typeof window.google_tag_manager === 'undefined') {
      const tagManagerArgs = {
        gtmId: config.analyticsGtmId,
      };
      TagManager.initialize(tagManagerArgs);
    }
  }, [config?.analyticsGtmId]);

    return (
      <footer>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <strong style={{ color: 'var(--accent)' }}>{config?.appTitle.split('|')[0] || 'CribMetrics'}</strong> — {process.env.CUSTOM_TAG_LINE || config?.customTagLine || 'Real Estate Market Insights Made Simple'}
          </div>
          <div style={{ color: '#8892A6' }}>
            Data Sources: Public Real Estate Sales&nbsp;|&nbsp; 
            <a href={`mailto:${config?.emailFrom}`} id="contact-link" rel="noopener noreferrer">Contact</a>&nbsp;|&nbsp;
            <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy</a>&nbsp;|&nbsp;
            <a href="/terms" target="_blank" rel="noopener noreferrer">Terms</a></div>      
        </div>
      </footer>     
    );
  },
);

StaticFooter.displayName = 'StaticFooter';

export default StaticFooter;
