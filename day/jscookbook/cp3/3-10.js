function makeString(str, ldelim = "'", rdelim="'"){
   ldelim = typeof ldelim !== 'undefined' ? ldelim : "'";
   rdelim = typeof rdelim !== 'undefined' ? rdelim : "'";
   
    return ldelim + str + rdelim;
}
console.log(makeString(169));

//함수에 호출시 주어진 인수 값이 없으면 매개변수에 기본값 설정

