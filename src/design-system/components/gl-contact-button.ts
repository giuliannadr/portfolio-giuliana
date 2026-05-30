import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

export type ButtonVariant = "primary" | "ghost";

@customElement("gl-contact-button")
export class GlContactButton extends LitElement {
  static styles = css`
    :host {
      --gl-accent: #CC1500;
      --gl-bg: #0A0A0A;
      --gl-text: #ffffff;
      display: inline-flex;
    }

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 14px 28px;
      font-family: "Poppins", sans-serif;
      font-size: 0.65rem;
      font-weight: 900;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      text-decoration: none;
      transition: background 0.25s, color 0.25s, border-color 0.25s;
      cursor: pointer;
      white-space: nowrap;
    }

    a.primary {
      background: #ffffff;
      color: #0a0a0a;
      border: none;
    }
    a.primary:hover {
      background: var(--gl-accent);
      color: #ffffff;
    }

    a.ghost {
      background: transparent;
      color: rgba(255, 255, 255, 0.50);
      border: 1px solid rgba(255, 255, 255, 0.20);
    }
    a.ghost:hover {
      border-color: var(--gl-accent);
      color: var(--gl-text);
    }
  `;

  @property({ type: String }) href: string = "#";
  @property({ type: String }) label: string = "Contact";
  @property({ type: String }) variant: ButtonVariant = "primary";

  render() {
    return html`<a href="${this.href}" class="${this.variant}">${this.label}</a>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "gl-contact-button": GlContactButton;
  }
}
