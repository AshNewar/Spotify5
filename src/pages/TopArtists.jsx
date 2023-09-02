import React, { useEffect, useState } from 'react';
import axios from "axios";

import { ArtistCard, Error, Loader, Searchbar, Sidebar } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import Search from './Search';

const TopArtists = () => {
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/list-recommendations',
    params: {
      key: '484129036',
      locale: 'en-US'
    },
    headers: {
      'X-RapidAPI-Key': '1b3d3412e6mshc50174b14ecd377p13922bjsnb3ca73d9c5ee',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  const [data, setData] = useState([]);
  const fetch = async () => {
    try {
      const response = await axios.request(options);
      setData(response.data.tracks);
      console.log(response.data.tracks);
    } catch (error) {
      console.error(error);
    }

  }
  useEffect(() => {
    fetch();
    console.log(Array.isArray(data));
  }, []);

  if (!data) return <Loader title="Loading artists..." />;


  return (
    <div className='relative flex'>
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />
        <div className="flex flex-col">
          <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Top artists</h2>

          <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {data?.map((track) => <ArtistCard key={track.key} track={track} />)}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopArtists;
