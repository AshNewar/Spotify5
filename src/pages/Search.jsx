import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from "axios";

import { Error, Loader, SongCard } from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';

const Search = () => {
  const { searchTerm } = useParams();
  // const { activeSong, isPlaying } = useSelector((state) => state.player);
  // const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);
  const [data, setData] = useState([]);
  const [searchList, setSearchTerm] = useState([]);
  ep = "search"
  if (searchTerm.startsWith('_')) {
    ep = "list-recommendations"
  }
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/' + ep,
    params: {
      term: searchTerm,
      locale: 'en-US',
      offset: '0',
      limit: '5'
    },
    headers: {
      'X-RapidAPI-Key': '1b3d3412e6mshc50174b14ecd377p13922bjsnb3ca73d9c5ee',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };

  const fetch = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data.tracks);
      console.log(response.data.tracks);
      setSearchTerm(response.data.tracks.hits);
    } catch (error) {
      console.error(error);
    }

  }
  useEffect(() => {
    console.log(searchTerm)
    fetch();
    console.log(Array.isArray(data));
    console.log(searchList);
    // const songs = data?.hits.map((song) => song.track);
    // setSearchTerm(songs);
    // console.log(songs);

  }, []);



  if (!data) return <Loader title={`Searching ${searchTerm}...`} />;


  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing results for <span className="font-black">{searchTerm}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {searchList?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song.track}
            data={data}
            id={song.key}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
