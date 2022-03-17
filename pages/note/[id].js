import React from "react";
import Head from "next/head";
import Image from "next/image";

export async function getStaticPaths() {
  const resp = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );
  const cards = await resp.json();

  return {
    paths: cards.map((card) => ({
      params: {
        id: card.id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  return {
    props: {
      note: await resp.json(),
    },
  };
}

export default function FullNote({ note }) {
  return (
    <div
      className="max-w-md px-6 py-4 mx-auto my-10 bg-white rounded-lg shadow-lg"
      key="{note.id}"
    >
      <Head>
        <title>{note.title}</title>
      </Head>
      <Image
      layout="fixed"
      width={400}
      height={300}
        src="https://picsum.photos/400/300"
        alt="random photo"
      />
      <div>
        <h5 className="text-2xl font-semibold text-gray-800">
          <span className="mr-2 text-xl font-medium text-indigo-700">
            {note.id}.
          </span>
          {note.title}
        </h5>
        <p className="mt-2 text-gray-600">{note.body}</p>
        <div className="flex justify-end">
          <a href={"/"} className="text-xl font-medium text-indigo-700">
            back to list...
          </a>
        </div>
      </div>
    </div>
  );
}
