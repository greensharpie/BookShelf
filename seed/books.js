const db = require('../db')
// const Plant = require('../models/plant')
const Book = require('../models/book')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  Book.collection.drop()
  const books = [
    {
      name: `Harry Potter and the Sorcerer's Stone`,
      author: 'J.K. Rowling',
      description: `Harry's first year at Hogwarts`,
      rating: '1',
      available: 'true',
      image:
        'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0590353403&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=julesbuono-20&language=en_US'
    },
    {
      name: `Harry Potter and the Chamber of Secrets`,
      author: 'J.K. Rowling',
      description: `Harry's second year at Hogwarts`,
      rating: '2',
      available: 'true',
      image:
        'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0439064864&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=julesbuono-20&language=en_US'
    },
    {
      name: `Harry Potter and the Prisoner of Azkaban`,
      author: 'J.K. Rowling',
      description: `Harry's third year at Hogwarts`,
      rating: '3',
      available: 'true',
      image:
        'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0439136369&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=julesbuono-20&language=en_US'
    },
    {
      name: `Harry Potter and the Order of the Phoenix`,
      author: 'J.K. Rowling',
      description: `Harry's fourth year at Hogwarts`,
      rating: '4',
      available: 'true',
      image:
        'https://m.media-amazon.com/images/I/51b7R-IiOTL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
    },
    {
      name: `Harry Potter and the Half-Blood Prince`,
      author: 'J.K. Rowling',
      description: `Harry's first fifth at Hogwarts`,
      rating: '5',
      available: 'true',
      image:
        'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0439785960&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=julesbuono-20&language=en_US'
    },
    {
      name: `Harry Potter and the Deathly Hallows`,
      author: 'J.K. Rowling',
      description: `Harry's sixth year at Hogwarts`,
      rating: '6',
      available: 'true',
      image:
        'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=0545139708&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=julesbuono-20&language=en_US'
    },
    {
      name: `Harry Potter and the Cursed Child`,
      author: 'J.K. Rowling',
      description: `Harry's victory lap at Hogwarts`,
      rating: '7',
      available: 'true',
      image:
        'https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=133821666X&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=julesbuono-20&language=en_US'
    },
    {
      name: 'Test One',
      author: 'J.K. Rowling',
      description: `test description`,
      rating: '8',
      available: 'true',
      image:
        'https://m.media-amazon.com/images/I/51vD7dTmqvL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
    }
  ]

  await Book.insertMany(books)
  console.log('Created some books')
}
const run = async () => {
  await main()
  db.close()
}

run()
