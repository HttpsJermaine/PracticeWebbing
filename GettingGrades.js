function GetGrades()
{
    var GetName = document.getElementById("name").value
    var GetCourse = document.getElementById("course").value
    var GetSection = document.getElementById("section").value

    var GetPrelim = parseInt(document.getElementById("prelim").value)
    var GetMidterm = parseInt(document.getElementById("midterm").value)
    var GetFinals = parseInt(document.getElementById("finals").value)

    var finalRate = (GetPrelim + GetMidterm + GetFinals) / 3

    document.getElementById("Mygrades").innerHTML = "<hr>" + "Your Name: " + GetName + "<br>" +
    "Your Course is: " + GetCourse + "<br>" +
    "Your Section is: " + GetSection + "<br><br>" +
    "Enter Prelim Grade: " + GetPrelim + "<br>" +
    "Enter Midterm Grade: " + GetMidterm + "<br>" +
    "Enter Final Grade: " + GetFinals + "<br><br>" +
    "Your Final Rate is: " + finalRate + "<br><br>"
 
}
