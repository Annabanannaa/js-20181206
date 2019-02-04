import Component from '../../component.js';
export default class PhoneCatalog extends Component{
    constructor({ element, phones, onPhonesSelected }){
        super({element: element})
        this._phones = phones;
        this._onPhonesSelected = onPhonesSelected;

        this._render();

        this._element.addEventListener('click',(event) => {
            const phoneLink = event.target.closest('[data-element="phone-link"]');

            if(!phoneLink){
                return;
            }
            const phoneElement = phoneLink.closest('[data-element="phone"]');

            this._onPhonesSelected(phoneElement.dataset.phoneId)
            console.log('yes', phoneElement.dataset.phoneId);
        });
    }



    _render() {
        this._element.innerHTML = `
         <ul class="phones">
            ${ this._phones.map( phone => `

            <li 
             data-element="phone"
             data-phone-id="${ phone.id }"
             class="thumbnail"
            >
                <a
                 data-element="phone-link"
                 href="#!/phones/${ phone.id }"
                 class="thumb" 
                >
                    <img alt="Motorola XOOM™ with Wi-Fi" src="${ phone.imageUrl }">
                </a>
            
                <div class="phones__btn-buy-wrapper">
                    <a class="btn btn-success">
                        Add
                    </a>
                </div>
                
                    <a
                     data-element="phone-link"
                     href="#!/phones/${ phone.id }"
                      
                     >
                    ${ phone.name }
                    </a>
                <p>${ phone.snippet }</p>
            </li>
            
            `).join('')}
         
        </ul>
        `;
    }
}