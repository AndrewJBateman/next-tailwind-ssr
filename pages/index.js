import React, { useState, useEffect } from "react";
import Head from "next/head";

export async function getStaticProps() {
  const resp = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );
  return {
    props: {
      notes: await resp.json(),
    },
  };
}

export default function Home({ notes }) {
  return (
    <div>
      <Head>
        <title>Notes List Page</title>
      </Head>
      <h1 className="pt-8 mx-auto text-2xl font-semibold text-center text-gray-800">Notes List</h1>
      {notes.map((note, idx) => (
        <div
          className="max-w-md px-8 py-4 mx-auto my-4 bg-white rounded-lg shadow-lg"
          key={note.id}
        >
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              <span className="mr-2 text-xl font-medium text-indigo-700">
                {note.id}.
              </span>
              {note.title}
            </h2>
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
