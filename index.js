const express = require('express');
const cors = require('cors');


const app = express();
require('dotenv').config();
app.use(cors()); // This allows all origins
const port = process.env.PORT || 5000;

// HyJ08lXdsWyIWiDE
// task_manage


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ih9r7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();
        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");


        const database = client.db('taskforce');
        coursesCollection = database.collection('tester');

        app.get('/alldata', async (req, res) => {
            try {
                const data = await coursesCollection.find({}).toArray(); // Fetch all documents
                res.json(data);
            } catch (error) {
                res.status(500).json({ message: "Error fetching data", error });
            }
        });

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Task force')
})

app.listen(port, () => {
    console.log(`Task force ${port}`)
})