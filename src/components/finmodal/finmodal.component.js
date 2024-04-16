import { Component } from "../../core/Component";
import template from "./finmodal.template.hbs";

export class FinModal extends Component{
    constructor() {
        super();
        this.template = template();
        this.state = {
            isOpen: true,
        };
    }
componentDidMount() {}

componentWillUnmount() {}


}

customElements.define('ui-finmodal', FinModal)