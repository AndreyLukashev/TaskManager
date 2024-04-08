const templateExtensionRegExp = /\.(hbs)$/; // ищем все файлы с расширением hbs. \ экранирует точку 
                                            // $ показывает что hbs должно быть в конце строки

export const handlebars = () => { //функция возвращает объект который съедается конфигурацией Vite 
  return {
    name: "handlebars-plugin",
    transform: (fileContent, fileName) => { //функция принимает контент файла (содержимое) и имя файла. 
                                            //функция вызывается самим Vite 
      if (templateExtensionRegExp.test(fileName)) { // проверка регулярного выражения заканчивается ли имя файла на hbs
        return {
          code: `export default function template(props = {}){ return \`${fileContent}\`}`,
          map: null,
        };
      }
    },
  };
};