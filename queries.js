// Task 2
// Find all books in a specific genre
db.books.find({ genre: "Fiction" })

// Find books published after a certain year
db.books.find({ published_year: { $gt: 1950 } })


// Find books by a specific author
db.books.find({ author: "George Orwell" })

// Update the price of a specific book
db.books.updateOne(
  { title: "The Alchemist" },
  { $set: { price: 12.99 } }
)

// Delete a book by its title
db.books.deleteOne({ title: "Moby Dick" })

// Task 3
// Write a query to find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
})

// Use projection to return only the title, author, and price fields in your queries
db.books.find(
  {
    in_stock: true,
    published_year: { $gt: 2010 }
  },
  {
    _id: 0,
    title: 1,
    author: 1,
    price: 1
  }
)

// Implement sorting to display books by price (both ascending and descending)
// Ascending
db.books.find().sort({ price: 1 })
// Descending
db.books.find().sort({ price: -1 })

// Task 4
// Create an aggregation pipeline to calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
])

// Create an aggregation pipeline to find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      totalBooks: { $sum: 1 }
    }
  },
  {
    $sort: { totalBooks: -1 }
  },
  {
    $limit: 1
  }
])

// Implement a pipeline that groups books by publication decade and counts them
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $toString: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } },
          "s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
])

// Task 5
// Create an index on the title field for faster searches
db.books.createIndex({ title: 1 })

// Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

// Use the explain() method to demonstrate the performance improvement with your indexes
// Step 1: Run the query without using an index
db.books.find({ author: "George Orwell", published_year: 1945 }).explain("executionStats")
// Step 2: Create the compound index (if you haven't already)
db.books.createIndex({ author: 1, published_year: 1 })
// Step 3: Run the same query again and analyze performance
db.books.find({ author: "George Orwell", published_year: 1945 }).explain("executionStats")




