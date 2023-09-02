import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import Question from './components/Question';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const [value, setVal] = useState();
  useEffect(() => {
    setVal(localStorage.getItem('userEmail'));
  })

  return (
    <div className="relative flex">
      {/* {value && <Sidebar />} */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#58565c]">
        {/* {value && <Searchbar />} */}

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/recommendation" element={<Discover />} />
              <Route path='/' element={<Login />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path='/questions' element={<Question />} />
              {/* <Route path="/around-you" element={<AroundYou />} /> */}
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
        </div>
      </div>

      {/* {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )} */}
    </div>
  );
};

export default App;
