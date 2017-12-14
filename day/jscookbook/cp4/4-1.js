//객체 멤버를 비공개로 만들기

function Tune(song,artist) {
    var title = song;

    this.concat = function(){
        return title + " " + artist;
    }
}
var happySongs=[];
happySongs[0] = new Tune("putting on the Rize", "Ella fitzgerald");
console.log(happySongs[0].title); //undefined

console.log(happySongs[0].concat());

// 비공개 데이터에 접근 할 수 있지만, this를 통해 외부에 노출 될 수 있는 concat() 와 같은 매서드를 특구너 매서드라고 한다.