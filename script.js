function generate()
{
  var pTag = document.getElementsByTagName("p")[0]; //Возвращает HTMLCollection элементов с указанным именем тега
  // Интерфейс HTMLCollection является обобщённой коллекцией (объектом, ведущим себя подобно массиву) элементов (в порядке упоминания в документе) 
  // и предоставляет методы и свойства для получения хранящихся в нём элементов.
  var str = pTag.textContent; // позволяет получить текстовый контент указанного узла и всех его потомков.
  
  // console.log("test");
  console.log(str); // Выводит строку из тега p в веб-консоль.
  
   var obj={};
       obj.Tag=0;
       obj.Text=0;
       obj.Count=0;
                
   console.log(obj); //выводит содержимое объекта obj
   console.log(str); //снова выводим строку
  
    //Проверка при помощи регулярных выражений
  
  // Метод match() возвращает получившиеся совпадения 
  // при сопоставлении строки с регулярным выражением.
  
  //var regexp = /шаблон регулярного выражения/gmi; // с флагами gmi 
  // Если часть шаблона обозначена скобками, то она станет отдельным элементом массива.
  //0 или более символов до element:, тэг HTMl или его отсутствие, экранирование символа ; игнорирование регистра
  var re1 = /.*element:(\w*)\;/i; 
  //0 или более символов до text:, любые символы + русские буквы после text: экранирование символа ; игнорирование регистра, \b учитывание ; помимо последней
  var re2 = /.*text:([а-яё]*.*)\;\b/i;
  // -? - учитывает отрицательные и положительные числа. сколь угодно цифр
  var re3 = /.*count:(-?\d*)\;/
  
  //alert( result[1] ); // script (часть совпадения, соответствующая скобкам)
  // [1] считает только то что между (...) 
  obj.Tag = str.match(re1)[1];
  obj.Text = str.match(re2)[1];
  obj.Count = str.match(re3)[1],10; //...,10 - десятичная система счисления 
  
  document.body.removeChild(pTag); //стирает тег p из body
  
  //Проверка результата
   if(obj.Tag == "" || obj.Text == "")
  {
    console.log("Ошибка! Нет тэга или текста\n");
    return;
  }
    if(obj.Count < 0 || obj.Count == 0) 
  { 
    console.log("Ошибка! нет числа или оно отрицательное\n");
    return;
    }
  
  //Вывод результата
  var newElement = document.createElement(obj.Tag); //В HTML-документах создает указанный в аргументе элемент или HTMLUnknownElement, если элемент неизвестен.
  //var text = document.createTextNode(data);
  //text - это текстовый узел.
  //data - это строка с данными, которые будут помещены в текстовый узел.
  var text = document.createTextNode(obj.Text);
  newElement.appendChild(text); //поместит text в тэг newElement
  document.body.appendChild(newElement); //поместит newElement в body
  
  for (var i=1; i<obj.Count; i++)
    {
      console.log(i);
      var clone = newElement.cloneNode(true);
      document.body.appendChild(clone);
    }
}
