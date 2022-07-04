import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import db25ft from './environments/TwentyFiveFt'
import axios from 'axios';

//components

export interface IProfile {
  id: number
  // setId: (id: string) => void;
  name: string
  // setName: (name: string) => void;
  email: string
  // setEmailAddress: (email:string) => void;
  password: string
}

export interface IPlayer {
  id: number
  fg3_pct: number
  fg3a: number
  fg3m: number
  game_id: number
  date: string
  season: number
  player_id: number
  first_name: string
  last_name: string
  team_id: number
  team_full_name: string
}


const App = () => {

  // const [id, setId] = useState<IProfile['id']>();
  
  // const fetchDb = async (): Promise<void> => {
  //   await fetch(`${db25ft}/auth/profile`, {
  //     method: 'Post',
  //   }


  // }
  const [profile, setProfile] = useState([] as IProfile[])

  const [player, setPlayer] = useState([] as IPlayer[])

  useEffect(() => {
    getProfile();
    getPlayer();
}, []);

const getProfile = async (): Promise<void> => {
  const profiles = await axios.get('https://twentyfiveftfromtherim.herokuapp.com/profile');
  // const players = await axios.get('https://www.balldontlie.io/api/v1/stats');
  setProfile(profiles.data);
  console.log(profiles)
}

const getPlayer = async (): Promise<void> => {
  const players = await axios.get('https://www.balldontlie.io/api/v1/stats');
  setPlayer(players.data);
  console.log(players)
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>25ft From The Rim</h1>
      </header>
    </div>
  );
}


export default App;

// export interface {
//   userName: string;
//   lang: string;

// }

// const App = (props: HelloProps) => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>{props.userName}</h1>
//       </header>
//     </div>
//   );
// }
