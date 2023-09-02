import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";


import { Error, Loader, Searchbar, Sidebar, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import Search from './Search';

const TopCharts = () => {
  const [data, setData] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/charts/track',
    params: {
      locale: 'en-US',
      pageSize: '20',
      startFrom: '0'
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
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

  }
  useEffect(() => {
    fetch();
    console.log(Array.isArray(data));
  }, []);
  // const { data, isFetching, error } = useGetTopChartsQuery();
  // const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (!data) return <Loader title="Loading Top Charts" />;


  return (
    <div className='relative flex'>
      <Sidebar />
      <div className="flex flex-col">
        <Searchbar />
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Top Charts</h2>

        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {data.map((song, i) => (
            <SongCard
              key={song.key}
              song={song}
              data={data}
              i={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCharts;
