/**
 * External Links - Wraps external link text in <mark> highlight
 */

(function() {
  'use strict';

  /**
   * Checks if a link is external
   */
  function isExternalLink(link) {
    // Skip mailto links
    if (link.href.startsWith('mailto:')) {
      return false;
    }

    // Skip anchor links
    if (link.href.startsWith('#')) {
      return false;
    }

    // Check if the link points to a different domain
    const linkHost = new URL(link.href, window.location.origin).hostname;
    const currentHost = window.location.hostname;

    return linkHost !== currentHost;
  }

  /**
   * Wraps link content in a <mark> element
   */
  function wrapInMark(link) {
    // Don't wrap if already has a mark
    if (link.querySelector('mark')) {
      return;
    }

    // Add target and rel attributes for external links
    if (!link.hasAttribute('target')) {
      link.setAttribute('target', '_blank');
    }
    if (!link.hasAttribute('rel')) {
      link.setAttribute('rel', 'noopener noreferrer');
    }

    // Wrap the link's content in a <mark> element
    const mark = document.createElement('mark');

    // Check for data-mark attribute to set colour class
    const markColor = link.getAttribute('data-mark');
    if (markColor) {
      mark.className = markColor;
    }

    while (link.firstChild) {
      mark.appendChild(link.firstChild);
    }
    link.appendChild(mark);
  }

  /**
   * Process figcaptions with pipe separator for credits
   * Format: "Caption text | Credit source"
   */
  function processFigcaptions() {
    const figcaptions = document.querySelectorAll('.post-content figcaption');

    figcaptions.forEach(figcaption => {
      // Skip if already processed
      if (figcaption.querySelector('.credit')) {
        return;
      }

      const text = figcaption.innerHTML;
      const pipeIndex = text.lastIndexOf(' | ');

      if (pipeIndex !== -1) {
        const caption = text.substring(0, pipeIndex);
        const credit = text.substring(pipeIndex + 3); // Skip ' | '
        figcaption.innerHTML = caption + ' <span class="credit">' + credit + '</span>';
      }
    });
  }

  /**
   * Process all links in specified containers
   */
  function processExternalLinks() {
    // Target containers where we want to highlight external links
    const containers = [
      '.about-container',
      '.post-content',
      '.mag-container'
    ];

    containers.forEach(selector => {
      const container = document.querySelector(selector);
      if (!container) {
        return;
      }

      // Find all links in the container
      const links = container.querySelectorAll('a');

      links.forEach(link => {
        if (isExternalLink(link)) {
          wrapInMark(link);
        }
      });
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      processExternalLinks();
      processFigcaptions();
    });
  } else {
    processExternalLinks();
    processFigcaptions();
  }
})();
