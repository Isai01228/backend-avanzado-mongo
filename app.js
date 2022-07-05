const {mongoose} = require ('./database')

const Book = mongoose.model('Book',{
    author: String,
    title: String,
})

const newBook = new Book({
    title: 'spiderman',
    author: 'daniel',
})

newBook.save().then(console.log).catch(console.error)