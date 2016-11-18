/**
 * Created by rubenvarela on 11/10/16.
 */

'use strict';

                // var albums = [
                //     {
                //         artist:"Pink Floyd",
                //         title:"The wall",
                //         tracks:5,
                //         trackList:["Song 1", "Song 2", "Song 3", "The wall", "Money"],
                //         year:1979,
                //         platinum:true,
                //         price: 20.34,
                //         checkout: function(){
                //             console.log("Pay " + this.price);
                //         }
                //     },
                //     {
                //         artist:"Oasis",
                //         title:"The First",
                //         tracks:2,
                //         trackList:["Song 1", "Song 2"],
                //         year:2000,
                //         platinum:false,
                //         price: 15.9999,
                //         checkout: function(){
                //             console.log("Pay " + this.price);
                //         }
                //     }
                // ];

// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author.
// The book author should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
var allBooks = [
    {
        title:"Modern Genius",
        author: {
            firstName:"James",
            lastName:"Franco"
        }
    },
    {
        title:"The Unread Emails",
        author: {
            firstName: "Hillary",
            lastName: "Clinton"
        }
    },
    {
        title:"How I started WW3",
        author: {
            firstName: "President",
            lastName: "Trump"
        }
    },
    {
        title:"Somehow I Manage",
        author: {
            firstName: "Michael",
            lastName: "Scott"
        }
    },
    {
        title:"How I became World Embassador",
        author: {
            firstName: "Ruben",
            lastName: "Varela"
        }
    }
];
// log out the books array
console.log(allBooks);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here

allBooks.forEach(function(book, index) {
    console.log("Book #" + (index + 1));
    console.log("Title: " + book.title);
    console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    console.log("---");
});

// end loop here