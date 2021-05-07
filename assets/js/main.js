// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome, età.

var student = {
    username: "Simone",
    surname: "Casiraghi",
    age: "25"
}

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

// for (var key in student) {
//     document.getElementById("profile").innerHTML += " " + student[key];
// }

document.getElementById("profile").innerHTML = "Ciao, io sono " + student.username + " " + student.surname + ", " + "e ho " + student.age + " anni" ;

// Creare un array di oggetti di studenti.

var students = [
    {
        username: "Lebron",
        surname: "James",
        age: "37"
    },
    {
        username: "Kevin",
        surname: "Durant",
        age: "44"  
    },
    {
        username: "Steph",
        surname: "Curry",
        age: "23"
    }
]

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

setTimeout(function () {
    var studentName = prompt("Inserisci un nome");
    var studentSurname = prompt("Inserisci un cognome");
    var studentAge = Number(prompt("Inserisci l'età"));
    
    var newStudent = {};
    
    newStudent["username"] = studentName.charAt(0).toUpperCase() + studentName.slice(1);
    newStudent["surname"] = studentSurname.charAt(0).toUpperCase() + studentSurname.slice(1);
    newStudent["age"] = studentAge;

    students.push(newStudent);

    // Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

    for (var key in students) {
        document.getElementById("profiles").innerHTML += " " + students[key].username + " " + students[key].surname;
        if(key != (students.length -1)) {
            document.getElementById("profiles").innerHTML += ",";
        }
    }
    }, 7000);

