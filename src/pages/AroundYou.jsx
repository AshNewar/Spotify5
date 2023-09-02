import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const CountryTracks = () => {

  const options = {
    method: 'GET',
    url: 'https://spotify23.p.rapidapi.com/recommendations/',
    params: {
      limit: '20',
      seed_tracks: '0c6xIDDpzE81m2q797ordA',
      seed_artists: '4NHQUGzhtTLFvgF5SZesLK',
      seed_genres: 'classical,country'
    },
    headers: {
      'X-RapidAPI-Key': '1b3d3412e6mshc50174b14ecd377p13922bjsnb3ca73d9c5ee',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  // try {
  // 	const response = await axios.request(options);
  // 	console.log(response.data);
  // } catch (error) {
  // 	console.error(error);
  // }

  // const options = {
  //   method: 'GET',
  //   url: 'https://shazam.p.rapidapi.com/songs/list-artist-top-tracks',
  //   params: {
  //     id: '420368335',
  //     locale: 'en-US'
  //   },
  //   headers: {
  //     'X-RapidAPI-Key': '1b3d3412e6mshc50174b14ecd377p13922bjsnb3ca73d9c5ee',
  //     'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
  //   }
  // };
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
  // const [country, setCountry] = useState('');
  // const [loading, setLoading] = useState(true);
  // const { activeSong, isPlaying } = useSelector((state) => state.player);
  // const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  // useEffect(() => {
  //   axios
  //     .get(`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_GEO_API_KEY}`)
  //     .then((res) => setCountry(res?.data?.location.country))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, [country]);

  // if (isFetching && loading) return <Loader title="Loading Songs around you..." />;

  // if (error && country !== '') return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around you <span className="font-black"></span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            // isPlaying={isPlaying}
            // activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;
