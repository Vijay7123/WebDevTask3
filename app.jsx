import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const booksData = [
  { title: "The Hobbit", category: "Fantasy", borrowed: false },
  { title: "1984", category: "Dystopian", borrowed: true },
  { title: "To Kill a Mockingbird", category: "Classic", borrowed: false },
];

export default function LibraryApp() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState(booksData);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleBorrow = (index) => {
    const newBooks = [...books];
    newBooks[index].borrowed = !newBooks[index].borrowed;
    setBooks(newBooks);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Personal Book Library</h1>
      <Input
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <div className="grid gap-4">
        {filteredBooks.map((book, index) => (
          <Card key={index} className="p-4 border rounded-lg">
            <CardContent>
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-gray-600">Category: {book.category}</p>
              <p className={book.borrowed ? "text-red-500" : "text-green-500"}>
                {book.borrowed ? "Borrowed" : "Available"}
              </p>
              <Button
                onClick={() => toggleBorrow(index)}
                className="mt-2"
              >
                {book.borrowed ? "Return" : "Borrow"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
