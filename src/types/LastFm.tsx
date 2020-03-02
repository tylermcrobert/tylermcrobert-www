export interface ITrack {
  artist: {
    ["#text"]: string
  }
  name: string
  ["@attr"]:
    | {
        nowplaying: boolean
      }
    | undefined
}

export interface ILastFMRes {
  recenttracks: {
    track: ITrack[]
  }
}
