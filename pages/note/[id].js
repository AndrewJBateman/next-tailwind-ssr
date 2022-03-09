import Head from "next/head";
import NextImage from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function FullNote() {
  const {
    query: { id },
  } = useRouter();

  const [note, setNote] = useState(null);

  useEffect(() => {
    async function getNote() {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setNote(await resp.json());
    }
    if (id) {
      getNote();
    }
  }, [id]);

  if (!note) {
    return null;
  }

  return (
    <div
      className="max-w-md px-8 py-4 mx-auto my-10 bg-white rounded-lg shadow-lg"
      key="{note.id}"
    >
      <Head>
        <title>Full Note Page</title>
      </Head>
      <div>
        <h5 className="text-2xl font-semibold text-gray-800">
          <NextImage
            className=""
            width="400"
            height="300"
            src="https://source.unsplash.com/random/400x300"
            alt="random photo"
          />
          <span className="mr-2 text-xl font-medium text-indigo-700">
            {note.id}.
          </span>
          {note.title}
        </h5>
        <p className="mt-2 text-gray-600">{note.body}</p>
      </div>
      <div className="flex justify-end">
        <a href={"/"} className="text-xl font-medium text-indigo-700">
          back to list...
        </a>
      </div>
    </div>
  );
}
