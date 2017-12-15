//속성과 매서드를 모두 생성자 함수에 추가시키고자 할 때 프로토타입을 이용해 새로운속성을 추가한다.

var str = 'one';
String.prototype.exclaim = function(){
    if(this.length == 0) return this;
    return this + '!';
}

var str2 = 'two';
console.log(str.exclaim());// one!
console.log(str2.exclaim());//two!

//새로운 객체 인스턴스를 만들고 값을 추가한다음 객체확장

function Tune(title, artist){
    this.concatTitleArtist = function(){
        return title + " " + artist;
    }
}
//인스턴스를 만들고 값 출력
var happSong = new Tune("putting on the Rits","Ella Fitzgerald");

//객체 확장
Tune.prototype.addCategory = function(categoyName){
    this.category = categoyName;
}
// 카테고리 추가
happSong.addCategory("Swing");
//새로운 문단에 노래정보 출력
var song = "Title amd atrist:" + happSong.concatTitleArtist() + "category:" + happSong.category;

console.log(song);

//함수 오버라이드

function Tune(title, artist){
    var title = title;
    var artist = artist;
    Tune.prototype.concatTitleArtist = function() {
        return title + " " + artist;
    }
}
var sad = new Tune('Sad Song', 'Sad singer');
var happy = new Tune('happy', 'happy singer');
console.log(sad.concatTitleArtist());