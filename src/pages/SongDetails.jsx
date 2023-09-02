import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import axios from "axios";


import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  // const { activeSong, isPlaying } = useSelector((state) => state.player);
  const options = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/songs/get-details',
    params: {
      key: '501844142',
      locale: 'en-US'
    },
    headers: {
      'X-RapidAPI-Key': '1b3d3412e6mshc50174b14ecd377p13922bjsnb3ca73d9c5ee',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  const options2 = {
    method: 'GET',
    url: 'https://shazam.p.rapidapi.com/artists/get-top-songs',
    params: {
      id: '567072',
      l: 'en-US'
    },
    headers: {
      'X-RapidAPI-Key': '1b3d3412e6mshc50174b14ecd377p13922bjsnb3ca73d9c5ee',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };
  const [data, setData] = useState([]);
  const [artistData, setARtistData] = useState([]);

  const fetch = async () => {
    try {
      const response = await axios.request(options);
      const response2 = await axios.request(options2);
      const res = [response.data]
      setData(res);
      console.log(response2);
    } catch (error) {
      console.error(error);
    }

  }
  useEffect(() => {
    fetch();
    console.log(Array.isArray(data));
    console.log(data);
  }, []);


  // const { data, isFetching: isFetchinRelatedSongs, error } = useGetSongRelatedQuery({ songid });
  // const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });

  if (!data) return <Loader title="Searching song details" />;



  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistId={420368335}
        songData={data}
      />

      <RelatedSongs
        data={artistData}
        artistId={420368335}
      // isPlaying={isPlaying}
      // activeSong={activeSong}
      // handlePauseClick={handlePauseClick}
      // handlePlayClick={handlePlayClick}
      />

    </div>
  );
};

export default SongDetails;
