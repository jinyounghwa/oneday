//클래스 상속
class Chart {
    constructor(width, height) {// 부모 생성자 함수
        this.width = width;
        this.height = height;
    }
    drawLine(){
        console.log('draw line');
    }
}
class BarChart extends Chart {
    constructor(width, height) {
        super(width, height) //부모 생성자 함수를 가리킨다. 
    }
    draw(){
        this.drawLine();
        console.log(`draw ${this.width} X ${this.height} barChart`);
    }
}
const barChart1 = new BarChart(100, 100);
barChart1.draw();