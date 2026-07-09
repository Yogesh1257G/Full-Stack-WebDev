const express = require("express");

const app = express();
app.use(express.json());

let books = [
{id:1,title:"Atomic Habits",author:"James Clear",category:"Self Help",available:true},
{id:2,title:"The Alchemist",author:"Paulo Coelho",category:"Fiction",available:true},
{id:3,title:"Rich Dad Poor Dad",author:"Robert Kiyosaki",category:"Finance",available:false},
{id:4,title:"Wings of Fire",author:"A. P. J. Abdul Kalam",category:"Biography",available:true}
];

app.get("/books",(req,res)=>res.json(books));

app.get("/books/:id",(req,res)=>{
 const book=books.find(b=>b.id===parseInt(req.params.id));
 if(!book) return res.status(404).json({message:"Book not found"});
 res.json(book);
});

app.post("/books",(req,res)=>{
 const newBook={id:books.length+1,...req.body};
 books.push(newBook);
 res.status(201).json({message:"Book Added",book:newBook});
});

app.put("/books/:id",(req,res)=>{
 const book=books.find(b=>b.id===parseInt(req.params.id));
 if(!book) return res.status(404).json({message:"Book not found"});
 Object.assign(book,req.body);
 res.json({message:"Book Updated",book});
});

app.delete("/books/:id",(req,res)=>{
 books=books.filter(b=>b.id!==parseInt(req.params.id));
 res.json({message:"Book Deleted"});
});

app.listen(3000,()=>console.log("Server running on port 3000"));