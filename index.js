const str=process.argv[2];// создаем переменную в которой будем хранить полученное с консоли значение
//проверяем введенная строка арабское число или строка, если строка проверяем является ли она римским числом
if(isNaN(str)) {


    var mas = str.split('');//преобразуем строку в массив
    var mastemp = [];//массив хранящий арабские эквиваленты римских цифр
    var myRim=false;//флаг что число римское

//проверка на то что число римское
    for (var i = 0; i < mas.length; i++) {
        if (mas[i] == 'I' || mas[i] == 'V' || mas[i] == 'X' || mas[i] == 'L' || mas[i] == 'C' || mas[i] == 'D' || mas[i] == 'M') {
            myRim=true;
        }
        else {
            console.log('Вы ввели не римское число результат будет не верным');
            myRim=false;
            break;
        }
    }
if(myRim) {
//заполняем mastemp подставляя в новый массив арабские значения римских цифр
    for (var i = 0; i < mas.length; i++) {
        switch (mas[i]) {
            case 'I':
                mastemp[i] = 1;
                break;
            case 'V':
                mastemp[i] = 5;
                break;
            case 'X':
                mastemp[i] = 10;
                break;
            case 'L':
                mastemp[i] = 50;
                break;
            case 'C':
                mastemp[i] = 100;
                break;
            case 'D':
                mastemp[i] = 500;
                break;
            case 'M':
                mastemp[i] = 1000;
                break;

        }
    }

//Делаем проверку на корректность введенного числа, не должно быть более трех совпадений подряд
    var count = 1;
    for (var i = 1; i < mastemp.length; i++) {
        if (mastemp[i - 1] == mastemp[i]) {
            count++;
            if (count > 3) {
                console.log('Введенное число не соответствует правилам, одинаковая цифра не может повторяться бошлее трех раз подряд');
                break;
            }
        }
        else {
            count = 1;
        }
    }

    var tempRezult = 0;//хранит итоговое число
    var tempSum = 0;//хранит промежуточную сумму повторяющихся цифр
    var flag = true;//флаг обозначает если число уже обработано и записано
//если массив результатов состоит из 1 элемента выводим элемент
//если элементов больше 1 то попарно проверяем все элементы добавляя в итоговой число
    if (mastemp.length >= 2) {
        for (var i = 1; i < mastemp.length; i++) {
            // если предыдущее число больше
            if (mastemp[i - 1] > mastemp[i]) {
                //предыдущие числа повторялись например XXXI
                if (tempSum > 0) {
                    tempRezult = tempRezult + tempSum;
                    tempSum = 0;
                }
                //предыдущие числа не повторялись и записи небыло например XII
                else if (tempSum == 0 && flag) {
                    tempRezult = tempRezult + mastemp[i - 1];
                }
                //если проверяемое число последнее прибавим его в результат
                if (!mastemp[i + 1]) {
                    tempRezult = tempRezult + mastemp[i];
                }
                if (!flag) {
                    flag = true;
                }//если число уже записано пропускаем иттерацию и меняем флаг
            }
            // если предыдущее число меньше
            if (mastemp[i - 1] < mastemp[i]) {
                tempRezult = tempRezult + (mastemp[i] - mastemp[i - 1]);
                flag = false;
            }

            //если преедыдущее и текущее число равны
            if (mastemp[i - 1] == mastemp[i]) {
                if (tempSum > 0) {
                    tempSum = tempSum + mastemp[i];
                }
                else {
                    tempSum = mastemp[i] + mastemp[i];
                }
                if (!mastemp[i + 1]) {
                    tempRezult = tempRezult + tempSum;
                }
            }
        }
    } else tempRezult = mastemp[0];

//выводим результат
    console.log("Вы ввели римское число,арабское число равно: " + tempRezult);

}



}
//если число арабское проводим конвертацию разбивая число на тысячи, сотни, десятки и единицы и записывая результат в итоговую переменную
else{
    var myStr=+str;
    console.log('Вы ввели арабсое число');
    if (myStr>3999){
        console.log('Число больше 3999, конвертация не корректна');
    }
    else{
        var s1000=0;
        var s100=0;
        var s10=0;
        var s1=0;
        var myStringRim='';//переменная будет хранить получившееся римское число

        //узнаем сколько 1000, 100, 10 и единиц содержится в нашем числе
        s1000=parseInt(str/1000);
        if (s1000!=0){
            myStr=myStr-(s1000*1000);
        }
        s100=parseInt(myStr/100);
        if (s100!=0){
            myStr=myStr-(s100*100);
        }
        s10=parseInt(myStr/10);
        if (s10!=0){
            myStr=myStr-(s10*10);
        }
        s1=myStr;

//конвертируем полученные результаты в риские числа
        switch (s1000){
            case 1: myStringRim=myStringRim+'M';
                break;
            case 2: myStringRim=myStringRim+'MM';
                break;
            case 3: myStringRim=myStringRim+'MMM';
                break;
        }
        switch (s100){
            case 1: myStringRim=myStringRim+'C';
                break;
            case 2: myStringRim=myStringRim+'CC';
                break;
            case 3: myStringRim=myStringRim+'CCC';
                break;
            case 4: myStringRim=myStringRim+'CD';
                break;
            case 5: myStringRim=myStringRim+'D';
                break;
            case 6: myStringRim=myStringRim+'DC';
                break;
            case 7: myStringRim=myStringRim+'DCC';
                break;
            case 8: myStringRim=myStringRim+'DCCC';
                break;
            case 9: myStringRim=myStringRim+'CM';
                break;
        }
        switch (s10){
            case 1: myStringRim=myStringRim+'X';
                break;
            case 2: myStringRim=myStringRim+'XX';
                break;
            case 3: myStringRim=myStringRim+'XXX';
                break;
            case 4: myStringRim=myStringRim+'XL';
                break;
            case 5: myStringRim=myStringRim+'L';
                break;
            case 6: myStringRim=myStringRim+'LX';
                break;
            case 7: myStringRim=myStringRim+'LXX';
                break;
            case 8: myStringRim=myStringRim+'LXXX';
                break;
            case 9: myStringRim=myStringRim+'XC';
                break;
        }
        switch (s1){
            case 1: myStringRim=myStringRim+'I';
                break;
            case 2: myStringRim=myStringRim+'II';
                break;
            case 3: myStringRim=myStringRim+'III';
                break;
            case 4: myStringRim=myStringRim+'IV';
                break;
            case 5: myStringRim=myStringRim+'V';
                break;
            case 6: myStringRim=myStringRim+'VI';
                break;
            case 7: myStringRim=myStringRim+'VII';
                break;
            case 8: myStringRim=myStringRim+'VIII';
                break;
            case 9: myStringRim=myStringRim+'IX';
                break;
        }
        console.log('римское число: '+myStringRim);
    }
}