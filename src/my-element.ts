import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-button/rh-button.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <rh-surface color-palette="lightest">
        <rh-button variant="secondary">hi</rh-button>
      </rh-surface>
      <rh-surface color-palette="darkest">
        <rh-button variant="secondary">hi</rh-button>
      </rh-surface>
    `
  }

  static styles = css`
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
