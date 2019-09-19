const encode = require('./index');

test("din  => '((('", () => {
    expect(encode('din')).toBe('(((');
});

test("recede => '()()()'", () => {
    expect(encode('recede')).toBe('()()()');
});

test("Success => ')())())'", () => {
    expect(encode('Success')).toBe(')())())');
});

test("CodeWarrior => '()(((())())'", () => {
    expect(encode('CodeWarrior')).toBe('()(((())())');
});

test("Supralapsarian => ')()))()))))()('", () => {
    expect(encode('Supralapsarian')).toBe(')()))()))))()(');
});

test("iiiiii => '))))))'", () => {
    expect(encode('iiiiii')).toBe('))))))');
});

test("(( @ => '))(('", () => {
    expect(encode('(( @')).toBe('))((');
});

test("[ ( ( )] => ')))))('", () => {
    expect(encode(' ( ( )')).toBe(')))))(');
});

test("@J@c!@@@z@@) => ')()(()))())('", () => {
    expect(encode('@J@c!@@@z@@)')).toBe(')()(()))())(');
});

test("kzmdGmmuImcmmmn => '(()(())(()()))('", () => {
    expect(encode('kzmdGmmuImcmmmn')).toBe('(()(())(()()))(');
});

test("Od)OIOORQOmS => ')(()())(()(('", () => {
    expect(encode('Od)OIOORQOmS')).toBe(')(()())(()((');
});

test("QTnTTTPIv(TT => '()()))(((())'", () => {
    expect(encode('QTnTTTPIv(TT')).toBe('()()))(((())');
});

test("kyQe@!cyJmyyvFyyyyy => '()((((()(())(()))))'", () => {
    expect(encode('kyQe@!cyJmyyvFyyyyy')).toBe('()((((()(())(()))))');
});