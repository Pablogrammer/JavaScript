class Booklist{
    constructor(list_books = []){
        this.next_book_to_read;
        this.list_books = list_books;
        this.current_book = (this.list_books.length > 0) ? this.list_books[0] : null;
        this.last_book_readed;
        this.books_readed = 0;
        this.books_not_readed = this.list_books.length;
    }

    add_book(book){
        this.list_books.push(book);
    }

    finish_current_book(){
        if(this.list_books.length != 0){                 
            this.current_book.read = true;                          //Cambia el estado de el libro actual a leido
            this.current_book.read_date = new Date();               //Le cambia la fecha de leido
            this.last_book_readed = this.current_book;              //Cambia el último libro leído por el actual
            this.books_readed += 1;                                 //Suma un libro leido
            this.list_books.shift();                                //Elimina el libro que acabamos de leer de la lista
            this.current_book = this.list_books[0];                 //Cambia el libro actual por el próximo de la lista
            genera_tabla();
            
        }else{
            document.getElementById("tabla").innerHTML = '<h3 style="color:red">No Hay más libros para leer</h3>';
        }          
        
    }

}

class Book{
    constructor(title,genre,author,read = false, read_date = null){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.read_date = read_date;
    }

}



function add_book(){
    var title = document.getElementById('title').value
    var genre = document.getElementById('genre').value
    var author = document.getElementById('author').value
    if(title != '' && genre != '' && author != ''){
        var libro_nuevo = new Book(title,genre,author)
        libreria.add_book(libro_nuevo);
        genera_tabla();
    }else{
        document.getElementById('errores').innerHTML = 'Faltan algunos campos sin rellenar';
    }
}


function genera_tabla() {

    document.getElementById("tabla").innerHTML = '';

    const contenedor = document.getElementById("tabla");
    const tabla = document.createElement("table");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let td = document.createElement("td");

    let thText = document.createTextNode("Título");
    th.appendChild(thText);
    tr.appendChild(th);

    th = document.createElement("th");
    thText = document.createTextNode("Género");
    th.appendChild(thText);
    tr.appendChild(th);
 
    th = document.createElement("th");
    thText = document.createTextNode("Autor");
    th.appendChild(thText);
    tr.appendChild(th);

    tabla.appendChild(tr);

    for(var i = 0; i < libreria.list_books.length; i++){
        let libro = libreria.list_books[i];

        tr = document.createElement("tr");

        td = document.createElement("td");
        var tdText = document.createTextNode(libro.title);
        td.appendChild(tdText);
        tr.appendChild(td);

        td = document.createElement("td");
        var tdText = document.createTextNode(libro.genre);
        td.appendChild(tdText);
        tr.appendChild(td);

        td = document.createElement("td");
        var tdText = document.createTextNode(libro.author);
        td.appendChild(tdText);
        tr.appendChild(td);

        tabla.appendChild(tr);
    }

    contenedor.appendChild(tabla);
    tabla.setAttribute("border", "2")
  }
  
var libro1 = new Book('La divina comedia','Epopeya','Dante');
var libro2 = new Book('Orgullo y prejuicio','Comedia, Romance','Jane Austen');
var libro3 = new Book('Crimen y castigo','Psicológica','Fiódor Dostoyevski');
var libro4 = new Book('Ilíada','Poema épico','Homero');
var libro5 = new Book('1984','Ciencia Ficción','George Orwell');

var libreria = new Booklist([libro1, libro2, libro3, libro4, libro5]);

genera_tabla();

  