import { handleFetchRes } from '../util'
import { ISpotifyPlaylist } from 'types'

type SpotifyReqConstructor = { clientId: string; clientSecret: string }

/**
 * Connect to Spotify
 * @param {object} Options `{ clientId: string, clientSecret: string }`
 */

export class SpotifyReq {
  clientId: string
  clientSecret: string
  authToken: string | null

  constructor({ clientId, clientSecret }: SpotifyReqConstructor) {
    this.clientId = clientId
    this.clientSecret = clientSecret
    this.authToken = null

    this.getAuthToken()
  }

  /**
   * Get Auth token from Spotify
   */
  private async getAuthToken(): Promise<string> {
    console.log('____________GETTING TOKEN')

    if (this.authToken) return this.authToken

    if (!this.clientId) throw Error('Client ID missing')
    if (!this.clientSecret) throw Error('Client ID missing')

    const authFormatted = `${this.clientId}:${this.clientSecret}`

    const base64Auth = Buffer.from(authFormatted).toString('base64')

    const data = await fetch(
      'https://accounts.spotify.com/api/token?grant_type=client_credentials',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${base64Auth}`,
        },
      }
    ).then(res => handleFetchRes(res, 'Cannot get access token'))

    return data.access_token
  }

  /**
   * Fetches data on a Playlist given its ID
   * @param id Id of Spotify Playlist
   */

  async getPlaylistById(id: string) {
    const authToken = await this.getAuthToken()

    const data: Promise<ISpotifyPlaylist> = await fetch(
      `https://api.spotify.com/v1/playlists/${id}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    ).then(res => handleFetchRes(res, 'Error fetching Playlist'))

    return data
  }
}

export const spotifyController = new SpotifyReq({
  clientId: process.env.SPOTIFY_CLIENT_ID as string,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
})
