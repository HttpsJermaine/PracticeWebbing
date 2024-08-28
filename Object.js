function WhenClicked()
{
    var titleInput = document.getElementById("title").value
    var authorInput = document.getElementById("author").value
    var dateInput = document.getElementById("date").value

    var xInput = parseInt(document.getElementById("x").value)
    var yInput = parseInt(document.getElementById("y").value)

    book()
    Num()

    var myBook = new book(titleInput, authorInput, dateInput)
    var Num1 = new Num(xInput, yInput)

    document.getElementById("Title").innerHTML = myBook.title;
    document.getElementById("Author").innerHTML = myBook.author;
    document.getElementById("Date").innerHTML =  myBook.date;
    
    
    document.getElementById("X").innerHTML = Num1.x
    document.getElementById("Y").innerHTML = Num1.y
    document.getElementById("Sum").innerHTML = Num1.z

}

function book(title,author,date)
{
    this.title = title
    this.author = author
    this.date = date
}

function Num(x,y)
{
    this.x = x
    this.y = y
    this.z = x + y
}