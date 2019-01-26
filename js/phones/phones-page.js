import PhoneCatalog     from './components/phone-catalog.js'
import Filter           from './components/filter.js'
import PhoneViewer      from './components/phone-viewer.js'
import SoppingCart      from './components/shopping-cart.js'
import PhoneService     from './phone-service.js'

export default class PhonesPage {
    constructor({ element }){
        this._element = element;

        this._render();

        this._catalog = new PhoneCatalog({
            element: this._element.querySelector('[data-component="phone-catalog"]'),
            phones: PhoneService.getAll(),
            onPhonesSelected: (phoneId) => {
                let phoneDeteils = PhoneService.getById(phoneId);

                this._catalog.hide();
                this._viewer.show(phoneDeteils);
            },
        });

        this._filter = new Filter({
            element: this._element.querySelector('[data-component="filter"]')
        });

        this._viewer = new PhoneViewer({
            element: this._element.querySelector('[data-component="phone-viewer"]')
        });

        this._cart = new SoppingCart({
            element: this._element.querySelector('[data-component="shopping-cart"]')
        });
    }

    _render() {
        this._element.innerHTML = `
            <div class="row">
    
            <!--Sidebar-->
            <div class="col-md-2">
                <section>
                   <div data-component="filter"></div>
                </section>
    
                <section>
                   <div data-component="shopping-cart"></div> 
                </section>
            </div>
    
            <!--Main content-->
            <div class="col-md-10">
                <div data-component="phone-catalog"></div>
                <div data-component="phone-viewer" hidden></div>
            </div>
        </div>
        `;
    }
}
