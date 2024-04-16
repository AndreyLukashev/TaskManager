import { Component } from "../../core/Component";
import template from "./finance.template.hbs";

export class FinancePage extends Component {
    constructor() {
        super();
        this.template = template();
        this.state = {};
    }

    openFin = (evt) => {
        if(evt.target.closest(".profit")) {
            console.log('ДОХОД');
        }

        if(evt.target.closest(".expense")) {
            console.log('РАСХОД');
        }
    }

    componentDidMount() {
        this.addEventListener('click', this.openFin)
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.openFin)
    }

}

customElements.define('finance-page', FinancePage)