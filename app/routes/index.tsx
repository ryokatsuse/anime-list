
import { SampleButton } from "./button";
import { useLoaderData } from "remix";

export async function loader() {
  let res = await fetch("https://api.github.com/gists");
  return res.json();
}

export default function Index() {
  let gists = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <SampleButton />
      <ul>
      {gists.map((gist: any) => (
        <li>
          <a href={gist.html_url}>{gist.id}</a>
        </li>
      ))}
    </ul>
    </div>
  );
}
