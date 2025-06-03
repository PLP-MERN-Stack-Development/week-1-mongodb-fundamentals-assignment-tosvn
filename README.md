 Project Structure
├── insert_books.js          # Script to insert 10+ book documents
├── queries.js               # Common MongoDB queries (find, update, delete)
├── aggregation.js           # Aggregation pipelines (average, group by, etc.)
├── indexes.js               # Commands to create indexes
└── README.md                # Project documentation

✅ Prerequisites
MongoDB installed and running on your machine.

MongoDB shell (mongosh) installed.

A terminal or command prompt.

🚀 How to Run the Scripts
1. Start MongoDB
Make sure MongoDB is running:
mongod

2. Open the MongoDB Shell
mongosh

3. Create/Use the Database
use plp_bookstore

4. Insert Sample Data
Run the insert script:
load("insert_books.js")

5. Run Queries
Inside mongosh, run:
load("queries.js")

6. Run Aggregation Pipelines
load("aggregation.js")

7. Create Indexes
load("indexes.js")
