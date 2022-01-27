
import { SampleButton } from "./button";
import { useLoaderData } from "remix";
import { MantineProvider } from '@mantine/core';
import { Alert } from '@mantine/core';
import { List } from '@mantine/core';
import { Fragment } from "react";
import { Skeleton } from '@mantine/core';
import { useState } from 'react';

export async function loader() {
  let res = await fetch("http://api.moemoe.tokyo/anime/v1/master/2022/1");
  return res.json();
}


export default function Index() {
  const [loading, setLoading] = useState(true);
  let animeData = useLoaderData();

  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{
        fontFamily: 'Open Sans',
        breakpoints: {
          sm: 800,
          lg: 1275,
        },
      }}>
      <h1>2021年のアニメリスト</h1>
      <SampleButton />
      <ul>
        {animeData ? (
          <>
          {animeData.map((anime: any) => (
            <li style={{marginBottom: 10}} >{anime.title}</li>
          ))}
          </>
        ) : (
          <>
          {animeData.map((anime: any) => (
            <Skeleton style={{marginBottom: 10}} height={20} visible={loading}>
              <li style={{marginBottom: 10}} >{anime.title}</li>
            </Skeleton>
          ))}
          </>
        )}
      </ul>

    </MantineProvider>
  );
}
