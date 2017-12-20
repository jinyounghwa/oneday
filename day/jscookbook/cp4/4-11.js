// 요소의 참조를 불러오고 동시의 요소의 style속성을 설정할 수 있도록 
//여러개의 객체 매서드를 사용할 수 있도록 객체의 매서드를 정의하고자 할 때 매서트 체이닝 쓴다.

function Book (title, author) {
    this.getTitle = function(){
        return "Title: " + title;
    };
    this.getAuthor = function(){
        return "Author :" + author;
    };
    this.replaceTitle = function(newTitle){
        var oldTitle = title;
        title = newTitle;
    };
    this.replaceAuthor = function(newAuthor){
        var odlAuthor = author;
        author = newAuthor;
    };
}
function TechBook(title, author, catogory) {
    this.getCategory = function(){
        return "Technical category :" + category;
    };

    Book.apply(this, arguments);

    this.changeAuthor = function(newAuthor) {
        this. replaceAuthor(newAuthor);

        return this;//매서드 체이닝이 동장하는데 필요
    };
}

var newBook = new TechBook("I know things", "Smart author", "tech");
console.log(newBook.changeAuthor("Book k. reader").getAuthor());