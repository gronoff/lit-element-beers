import { LitElement, html } from '../web_modules/lit-element.js';
import './beer-list-item.js';
import bootstrapStyle from '../web_modules/@granite-elements/granite-lit-bootstrap.js';

const beers = [
    {
        "alcohol": 6.8,
        "name": "Affligem Blond",
        "description": "Affligem Blonde, the classic clear blonde abbey ale, with a gentle roundness and 6.8% alcohol. Low on bitterness, it is eminently drinkable."
    },
    {
        "alcohol": 8.5,
        "name": "Affligem Tripel",
        "description": "The king of the abbey beers. It is amber-gold and pours with a deep head and original aroma, delivering a complex, full bodied flavour. Pure enjoyment! Secondary fermentation in the bottle."
    },
    {
        "alcohol": 9.2,
        "name": "Rochefort 8",
        "description": "A dry but rich flavoured beer with complex fruity and spicy flavours."
    },
    {
        "alcohol": 11.3,
        "name": "Rochefort 10",
        "description": "The top product from the Rochefort Trappist brewery. Dark colour, full and very impressive taste. Strong plum, raisin, and black currant palate, with ascending notes of vinousness and other complexities."
    },
    {
        "alcohol": 7,
        "name": "Chimay Rouge",
        "description": "This Trappist beer possesses a beautiful coppery colour that makes it particularly attractive. Topped with a creamy head, it gives off a slight fruity apricot smell from the fermentation. The aroma felt in the mouth is a balance confirming the fruit nuances revealed to the sense of smell. This traditional Belgian beer is best savoured at cellar temperature "
    }
];


class BeerList extends LitElement {
    constructor() {
        super();
        this.beers = beers;
    }

    static get properties() {
        return {
            beers: {
                type: Array,
            },
            filterText: {
                type: String,
            },
        };
    }

    static get styles() {
        return bootstrapStyle;
    }

    render() {
        return html`
          <div class="beers container">
            <div class="row">
              <div class="col-md-3">
                <!--Sidebar content--> 
                <div class="form-group">
                  <label 
                      for="search">
                    Search
                  </label>
                  <input 
                      type="text" 
                      class="form-control" 
                      id="search"  
                      placeholder="Enter search"
                      @input="${this._inputChange}">
                      <div>Current search: ${this.filterText}</div>
                </div>
              </div>
              <div class="col-md-9">
                <div class="beers">
                  ${
            this.beers
                .filter((beer) => {
                    console.log(beer)
                    return beer.name && beer.name.match(new RegExp(this.filterText, 'i'));
                })
                .sort((a, b) => this._beerSorter(a, b))
                .map((beer) => {
                    return html`
                        <beer-list-item name="${beer.name}" description="${beer.description}">
                        </beer-list-item>
                      `;
                })
            }
                </div>
                <div>Number of beers in list: ${this._currentBeers()}</div>
              </div>          
            </div>
          </div>
        `;
    }
    _inputChange() {
        this.filterText = this.shadowRoot.querySelector('#search').value;
    }

    _currentBeers() {

        return this.beers.filter((beer) => {
            return beer.name && beer.name.match(new RegExp(this.filterText, 'i'));
        }).length;

    }
    _beerSorter(a, b) {
        if (a.alcohol === b.alcohol) return 0;
        return b.alcohol - a.alcohol;
    }
}

customElements.define('beer-list', BeerList);