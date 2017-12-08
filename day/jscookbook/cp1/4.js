document.getElementById("searchSubmit").onclick = function(){
    //패턴구하기
    var pattren = document.getElementById("pattern").value;
    var re = new RegExp(pattren, "g");

    //문자열 구하기
    var searchString = document.getElementById("incoming").value;
    var matchArray;
    var resultString = "<pre>";
    var first = 0;
    var last = 0;

    //각각의 일치하는 부분 검색
    while((matchArray == re.exec(searchString)) !==null) {
        last = matchArray.index;

        //일치하는 모든 문자열 연결
        resultString += searchString.substring(first, last);

        //일치하는 부분에 클래스 추가

        resultString += "<span class='found'>" + matchArray[0] + "</span>";
        first = re.lastIndex;
    }
    //문자열 종료
    resultString += searchString.substring(first, searchString.length);
    resultString += "</pre>";

    //페이지로 삽입
    document.getElementById("searchResult").innerHTML = resultString;
}