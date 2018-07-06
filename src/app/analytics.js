import Chooles from 'chooles';
import 'autotrack/lib/plugins/event-tracker';
import 'autotrack/lib/plugins/clean-url-tracker';
import 'autotrack/lib/plugins/outbound-link-tracker';
import 'autotrack/lib/plugins/max-scroll-tracker';

const init = (id) => {
  window.ga = window.ga || ((...args) => { (ga.q = ga.q || []).push(...args); });
  window.ga.l += new Date();

  // Track basic JavaScript errors
  window.addEventListener('error', (e) => {
    // Don't log the errors from external scripts
    if (e.message === 'Script error.') return;
    ga('send', 'exception', {
      exDescription: e.error && e.error.stack ? e.error.stack : e.message,
    });
  });

  ga('create', id, 'auto');
  // Only require the plugins you've imported above.
  ga('require', 'eventTracker');
  ga('require', 'cleanUrlTracker', {
    trailingSlash: 'add',
    stripQuery: true,
  });
  ga('require', 'outboundLinkTracker');
  ga('require', 'maxScrollTracker');

  ga('send', 'pageview');

  console.log('Analytics enabled'); // eslint-disable-line no-console
};

// Execute App Init
Chooles.ready(() => init('UA-69246183-4'));

export default init;
