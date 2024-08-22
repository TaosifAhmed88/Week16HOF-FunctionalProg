const books = [
    { 
        title: 'To Kill a Mockingbird',
        author: 'harper lee', 
        year: 1960 
    },
    { 
        title: 'The Great Gatsby', 
        author: 'F. Scott Fitzgerald', 
        year: 1925 
    },
    { 
        title: 'Harry Potter and the Sorcerers Stone',
        author: 'J. K. Rowling', 
        year: 1997 
    },
    { 
        title: 'The Lord of the Rings', 
        author: 'J. R. R. Tolkien', 
        year: 2018 
    },
    { 
        title: 'Pride and Prejudice', 
        author: 'jane austen', 
        year: 2010 
    },
    { 
        title: 'The Hitchhikers Guide to the Galaxy', 
        author: 'Douglas Adams', 
        year: 1979 
    },
    { 
        title: 'The Hunger Games', 
        author: 'Suzanne Collins', 
        year: 2011 
    }
  ];

let filteredbooks = books.filter((books) => {
    return books.year >= 2010
})

let result = filteredbooks.map((books) =>({
    ...books,
    author : books.author.toUpperCase(),
}))

console.log(result);
