/*
    Дана строка и функция encode, на выходе функции мы получаем закодированную строку.

    Кодирование выглядит так: если в строке символ встречается один раз, то кодируем '(', если нет то '('.

    Пример работы функции: 

    'din => encode('din') => '(((' 
    'recede' => encode => '()()()'
    'Success' =>  encode =>  ')())())'

    написать функцию + 13 тестов

    din  => '((('
    recede => '()()()'
    Success => ')())())'
    CodeWarrior => '()(((())())'
    Supralapsarian => ')()))()))))()('
    iiiiii => '))))))'
    (( @ => '))(('
    вот тут строка, у нее первый пробел, поэтому помещю в скобки [ ( ( )] => ')))))('
    @J@c!@@@z@@) => ')()(()))())('
    kzmdGmmuImcmmmn => '(()(())(()()))('
    Od)OIOORQOmS => ')(()())(()(('
    QTnTTTPIv(TT => '()()))(((())'
    kyQe@!cyJmyyvFyyyyy => '()((((()(())(()))))'
*/

const encode = str => {
    let letterCounter = {};
    const strArray = Array.from(str.toLowerCase());
    strArray.forEach(x =>
        letterCounter[x] === undefined
            ? (letterCounter[x] = 1)
            : letterCounter[x]++
    );
    return strArray.map(x => (letterCounter[x] > 1 ? ')' : '(')).join('');
};

module.exports = encode;
