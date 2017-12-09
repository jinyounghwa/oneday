var str = "Mockingbirds don't do one thing except make music " +
"for us to enjoy. They don't eat up people's gardens, " +
"don't nest in corn cribs, " +
"they don't do one thing but sing their hearts out for us. " +
"That's why it's a sin to kill a mockingbird."

console.log(str.startsWith("Mockingbirds")); // true
console.log(str.startsWith("autos", 20)); // false
console.log(str.endsWith("mockingbird.")); // true
console.log(str.endsWith("kill", str.length-15)); // true
var cp = str.codePointAt(50); // 102 for 'f'
var cp2 = str.codePointAt(51); // 111 for 'o'
var cp3 = str.codePointAt(52); // 114 for 'r'
var str2 = String.fromCodePoint(cp,cp2,cp3);

// starsWidth : 문자열이 다른문자열의 문자로 시작하면 true를 반환
// endsWith : 문자열이 다른 문자열의 문자로 끝나면 true
// contains : 문자열이 다른 문자열을 포함하면 true
// repeat : 주어진 문자열을 반복하고 결과를 반환
// codePointAt : 주어진 인덱스에서 시작하는 유니코드의 코드 포인트(유니코드번호)를 반환
