import Handlebars from "handlebars";

export class Component extends HTMLElement { //базовый компонент обработка перерисовка стэйта
  constructor() {
    super();
    this.state = {}; //состояние пустой объект по умолчанию
    this.props = {}; //параметры передаваемые из вне для управления. пустой объект по умолчанию
    this.template = null; //изначально здесь ничего нет тимплэйт передает тот кто наследует компонент
  }

  setState(state) {//обновляет состояние компонента и заново перерисовывается
    this.state = state;
    this.compile();
  }

  compile() { //метод компиляции компилирует всю разметку компонента
    const template = Handlebars.compile(this.template);
    this.innerHTML = ""; //обнуляем предыдущую разметку
    this.innerHTML = template(this.state);//отрисовываем новую разметку
  }

  connectedCallback() {//браузерный метод вызываемый при появлении элемента в дом дереве на странице
    this.compile();// вызываем компайл функцию
    this.componentDidMount()
  }

  disconnectedCallback() {// браузерный метод вызываемый при удалении элемента из дом дерева на странице
    this.componentWillUnmount();
  }

  componentDidMount() {}
  componentWillUnmount() {}
}