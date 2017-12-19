//자바스크립트에서 Object.create를 사용한 고전적인 상속

function Book (title, author) {
    this.getTitle = function() {
        return "Title:" + title;
    };
    this.getAuthor = function (){
        return "Author:" + author;
    };
}
function TechBook(title, author, category){

    this.getCategory = function(){
        return "Technical category:" + category;
    };

    this.getBook=function(){
        return this.getTitle() + " " + author + " " + this.getCategory();
    };

    Book.apply(this, arguments);
}
TechBook.prototype = Object.create(Book.prototype);
TechBook.prototype.constructor = TechBook;

//모든 값 구하기
var newBook = new TechBook("The Javascript Cookbook", "Shelley Powers", "programming");

console.log(newBook.getBook());

//각각의 값을 출력
console.log(newBook.getTitle());
console.log(newBook.getAuthor());
console.log(newBook.getCategory());