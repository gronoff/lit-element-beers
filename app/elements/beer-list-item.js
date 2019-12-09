/**
 * TODO: Import the LitElement base class and html helper function.
 */
import { LitElement, html } from '../web_modules/lit-element.js';

import bootstrapStyle from '../web_modules/@granite-elements/granite-lit-bootstrap.js';

/**
 * TODO: Create a class for your element that extends the LitElement
 * base class.
 */
class BeerListItem extends LitElement {
    render() {
        return html`
        <style>
      .beer {
        margin: 10px;
        padding: 10px;
        border: solid 1px black;
        border-radius: 10px;
        min-height: 50px;
      }
        </style>
        <div class="beer">
        <h2>${this.name}</h2>
        <p>${this.description}</p>
        </div>
        `;
    }


    static get properties() {
        return {
            name: {
                type: String,
            },
            description: {
                type: String,
            }
        };
    }

    static get styles() {
        return bootstrapStyle;
      }

    constructor() {
        super();
        this.name = 'A beer';
        this.description = 'Description of the beer';
    }

}

/**
 * TODO: Register the new element with the browser.
 */
customElements.define('beer-list-item', BeerListItem);