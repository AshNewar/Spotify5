import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

import { Error, Loader, Searchbar, Sidebar, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { genres } from '../assets/constants';

const Discover = () => {

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
  // const dispatch = useDispatch();
  // const { genreListId } = useSelector((state) => state.player);
  // const { activeSong, isPlaying } = useSelector((state) => state.player);
  // const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');

  if (!data) return <Loader title="Loading songs..." />;

  // if (error) return <Error />;
  // useEffect(() => {
  //   console.log(data);

  // }, []);

  // const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="relative flex"  >
      <Sidebar />
      <div className="flex flex-col">
        <Searchbar title={"Search"} />
        <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
          <Searchbar title={"Enter Song Id for Recommendation"} />

          <h2 className="font-bold text-3xl text-white text-left">Recommendations</h2>

          {/* <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select> */}
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {data?.map((song, i) => (
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

export default Discover;
