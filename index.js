/*Part 1: Understanding Objects

You are given the task of representing a book in a library system. 
Use an object to model the book with the following information:

- Title: "JavaScript: The Definitive Guide"
- Author: "David Flanagan"
- Published Year: 2020
- Genre: "Programming"

Task 1) Create an object named 'book' using curly braces {} that includes the information above.

Task 2) Print the book’s title with its publish year. Access the book title using dot-notation, and access the publish year using bracket-notation.
******************************************************************/


const book= {
 Title : "JavaScript: The Definitive Guide",
Author : "David Flanagan",
 PublishedYear :2020,
 Genre : "Programming",

}


console.log(book);




/*****************************************************************
Part 2: Modifying Objects

Consider you need to update the book's information and add a new property:

Task 3) Add a property 'pageCount' with the value 1096 to the 'book' object.

Task 4) The book has been assigned an ISBN number. Add a property 'ISBN' with a value "978-1491952023".
        
Task 5) Modify the 'publishedYear' to 2021 as a new edition has been released.
******************************************************************/


book.pageCount=1096;
book.ISBN="978-1491952023";
book.PublishedYear=2021;


console.log(book );








/*****************************************************************
Part 3: Advanced Object Operations 

Your library system needs to handle multiple authors and include reviews for the book. 
Update the 'book' object to accommodate these requirements:

Task 6) Modify the 'author' property to hold an array of two authors: "David Flanagan" and "Another Author".

Task 7) Add a 'reviews' property to the 'book' object, which will store an array of review objects. 
        Each review object should have 'reviewer' and 'comment' properties. 
        Start with one review: {reviewer: "Book Critic", comment: "A comprehensive guide to JavaScript."}.
******************************************************************/

book.auther=["David Flanagan", "Another Author"];


book.reviews={
    reviewer: "Book Critic",
    comment: "A comprehensive guide to JavaScript.",
};

console.log(book);