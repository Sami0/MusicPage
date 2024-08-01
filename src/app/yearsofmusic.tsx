'use client'

import Image from "next/image";

import { useState ,useEffect} from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Artifika } from "next/font/google";
import ReactPlayer from 'react-player'; 
import {songs} from './allsongs'



export default function Home({ }) {
  const [selected, setSelected] = useState(songs[0]);
  return ( 
    <main className="flex min-h-screen h-24 min flex-col items-center justify-between p-24">
      <title>Music App</title>
      <p>top songs for each year selected from 2023 to 1980</p>
      <p>based on billboard rankings</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Listbox value={selected} onChange={setSelected}>
        <h2 className="flex mb-3 text-2xl font-semibold items-center">
          select the year : {" "}
        </h2>
        <ListboxButton className="relative w-full cursor-default rounded-md">
          <span className="items-center">
            <span className="items-center ml-3 block truncate">{selected.Year}</span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
        </ListboxButton>
        <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {songs.map((song, index) => (
            <ListboxOption
              key={index}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                }`
              }
              value={song}
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}
                  >
                    {song.Year}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
      {/* Display the selected year */}
      <div className=" mb-4 text-2xl font-semibold items-center">
        <p style ={{color:"red"}} >Selected Year: {selected.Year}</p>
        <br></br>
        <p>Song :{selected.Song}</p>
        <br></br>
        <p> Artist :{selected.Artist}</p>
        <br></br>
        <br></br>
        <ReactPlayer selected url={selected.YouTube_Link} controls={true} />
        <br></br>
        <p>Song two :{selected.Song2}</p>
        <p> Artist two :{selected.Artist2}</p>
        <ReactPlayer selected url={selected.YouTube_Link2} controls={true} />
        </div>
          <br></br>
         
    </main>

  );
}