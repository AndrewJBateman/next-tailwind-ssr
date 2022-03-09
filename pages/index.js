import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getNotes() {
      const resp = await fetch(
        "https://jsonplaceholder.typicode.com/posts?userId=1"
      );
      setNotes(await resp.json());
    }
    getNotes();
  }, []);

  return (
    <div>
      <Head>
				<title>Notes List Page</title>
			</Head>
      {notes.map((note) => (
        <div
          className="max-w-md px-8 py-4 mx-auto my-10 bg-white rounded-lg shadow-lg"
          key="{note.id}"
        >
          <div>
            <h5 className="text-2xl font-semibold text-gray-800">
              <span className="mr-2 text-xl font-medium text-indigo-700">
                {note.id}.
              </span>
              {note.title}
            </h5>
            {/* <p className="mt-2 text-gray-600">{note.body}</p> */}
          </div>
          <div className="flex justify-end">
            <a
              href={`/note/${note.id}`}
              className="text-xl font-medium text-indigo-700"
            >
              more...
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
