// QA-only fixture (built only with BUILD_FIXTURES=1; never deployed). Uses two unrelated
// project photos purely to exercise the slider mechanics — not a real before/after.
import { compareSlider } from '../lib/components.mjs';

export default {
  path: '/qa-fixtures/compare/',
  title: 'QA fixture: comparison slider',
  description: 'Internal test page.',
  noindex: true,
  sitemap: false,
  body: `<section class="section"><div class="container" style="max-width:56rem">
  <h1 class="section-title">Comparison slider fixture</h1>
  ${compareSlider({ id: 'fx1', label: 'Fixture comparison', before: 'project-deck-cedar-tone-stairs', after: 'project-deck-gray-corner-stairs', beforeAlt: 'Fixture before image', afterAlt: 'Fixture after image', eager: true })}
  <div style="height:120vh"></div>
</div></section>`,
};
