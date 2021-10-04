/* Getting the DOM */

const displayedClassEl = document.getElementsByClassName("displayed-class")
const textBeforeClassSelectionEl = document.getElementsByClassName("display-text")
const textAfterClassSelectionEl = document.getElementsByClassName("class-info")
const booksEl = document.getElementsByClassName("books")

const bioBookEl = document.getElementById("biology-book")
const chemBookEl = document.getElementById("chemistry-book")
const phyBookEl = document.getElementById("physics-book")
const mathBookEl = document.getElementById("mathematics-book")
const englishBookEl = document.getElementById("english-book")
const urduBookEl = document.getElementById("urdu-book")
const pakStdBookEl = document.getElementById("pak-std-book")
const islamiatBookEl = document.getElementById("islamiat-book")


/* Declaring Variables */

let booksHref
let selectedClass

let englishMedium = "english-medium/"
let urduMedium = "urdu-medium/"


/* To hide class info before pressing selecting the class */

for (let i = 0; i < textAfterClassSelectionEl.length; i++) {
    textAfterClassSelectionEl[i].style.display = "none"
}


/* Defining Switch Functions */

function switchTo9th() {
    selectedClass = 9
} function switchTo10th() {
    selectedClass = 10
} function switchTo11th() {
    selectedClass = 11
} function switchTo12th() {
    selectedClass = 12
}


/* Functions on selecting the class */

function classIsSelected() {
    for (let i = 0; i < displayedClassEl.length; i++) {
        displayedClassEl[i].textContent = selectedClass;
    }

    for (let i = 0; i < textBeforeClassSelectionEl.length; i++) {
        textBeforeClassSelectionEl[i].style.display = "none";
    }

    for (let i = 0; i < textAfterClassSelectionEl.length; i++) {
        textAfterClassSelectionEl[i].style.display = "block"
    }

}

function explainBooks() {
    for (let i = 0; i < booksEl.length; i++) {
        booksEl[i].href = "https://drive.google.com/file/d/"
        booksEl[i].target = "_blank"
    }

    if (selectedClass == 9) {

        bioBookEl.href += "1-hSeZFsd62yFbBwAKdDgdlUst-urKj27"
        chemBookEl.href += "1Qoo2ls19Ews8s2dghNsNPtcPqxw_c1dX"
        phyBookEl.href += "15DB0GEaz7KkWveSnHiBZGkGWkCB8lv_0"
        mathBookEl.href += "1_Y4LkJ35IgTRnf51XOxsF1ZJn58PjlIk"
        englishBookEl.href += "15no1eKOY7gH94yTXXhkdMsqhHYzcvPDZ"
        urduBookEl.href += "1__j4hGOH3khqlsb3ubCPAWtbUBq4NQGi"
        pakStdBookEl.href += "1HpTGQHEz1eFYh77Fl_JHHe90BA4YwYLG"
        islamiatBookEl.href += "16rNZ6JpRfJUcegd_2hapnsAlwanB6Hfi"

    } else if (selectedClass == 10) {

        bioBookEl.href += "Biology.pdf"
        chemBookEl.href += "Chemistry.pdf"
        phyBookEl.href += "Physics.pdf"
        mathBookEl.href += "Math.pdf"
        englishBookEl.href += "English.pdf"
        urduBookEl.href += "Urdu.pdf"
        pakStdBookEl.href += "Pak_std.pdf"
        islamiatBookEl.href += "Islamiat.pdf"

    } else if (selectedClass == 11) {

        bioBookEl.href += "Biology.pdf"
        chemBookEl.href += "Chemistry.pdf"
        phyBookEl.href += "Physics.pdf"
        mathBookEl.href += "Math.pdf"
        englishBookEl.href += "English.pdf"
        urduBookEl.href += "Urdu.pdf"
        pakStdBookEl.href += "Pak_std.pdf"
        islamiatBookEl.href += "Islamiat.pdf"

    } else if (selectedClass == 12) {

        bioBookEl.href += "Biology.pdf"
        chemBookEl.href += "Chemistry.pdf"
        phyBookEl.href += "Physics.pdf"
        mathBookEl.href += "Math.pdf"
        englishBookEl.href += "English.pdf"
        urduBookEl.href += "Urdu.pdf"
        pakStdBookEl.href += "Pak_std.pdf"
        islamiatBookEl.href += "Islamiat.pdf"

    }
}


/* Importing header and footer */

$(function(){
    $("#header").load("/src/base/header.html"); 
    $("#footer").load("/src/base/footer.html"); 
});