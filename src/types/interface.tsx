//___________________
//All the interfaces
//___________________

export interface IProfile {
    id: number
    setId: (id: string) => void;
    name: string
    setName: (name: string) => void;
    email: string
    setEmailAddress: (email:string) => void;
    password: string
}

export interface IPlayer {
    id: number
    fg3_pct: number
    fg3a: number
    fg3m: number
    game_id: number
    date: []
    season: []
    player_id: number
    first_name: string
    last_name: string
    team_id: number
    team_full_name: string
}

export interface IState {
    players: Array<IPlayer>
    favourites: Array<IPlayer>
  }

  export interface IAction {
    type: string
    payload: Array<IPlayer> | any
  }

export type Dispatch = React.Dispatch<IAction>
export type FavAction = (
  state: IState,
  dispatch: Dispatch,
  player: IPlayer
) => IAction

export interface IPlayerProps {
    players: Array<IPlayer>
    store: { state: IState; dispatch: Dispatch }
    toggleFavAction: FavAction
    favourites: Array<IPlayer>
  }

  export interface IProps {
    players: Array<IPlayer>
    store: { state: IState; dispatch: Dispatch }
    toggleFavAction: FavAction
    favourites: Array<IPlayer>
  }