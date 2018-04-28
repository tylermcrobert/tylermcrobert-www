import util from './util';


const loadSpotify = {

  enabled: false,

  init() {
    this.cacheDom();
    this.getData();
    this.bindEvents();
  },

  cacheDom() {
    this.dom = {};
    this.dom.root = document.querySelector('.nowPlaying');
    this.dom.icon = this.dom.root.querySelector('.nowPlaying__icon');
    this.dom.content = this.dom.root.querySelector('.nowPlaying__content');
    this.dom.value = this.dom.root.querySelector('.nowPlaying__content--value');
  },

  getData(callback) {
    const base = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks';
    const user = 'tyler-mcrobert';
    const apiKey = '1e87695de290cd017718696f211e84a4';
    const url = `${base}&limit=1&user=${user}&api_key=${apiKey}&format=json`;

    util.ajax(url, (response) => {
      this.response = JSON.parse(response);
      const track = this.response.recenttracks.track[0];

      this.render(track);
    });
  },

  toggleModule() {
    this.enabled = !this.enabled;
    this.render();
  },

  bindEvents() {
    this.dom.icon.addEventListener('click', () => {
      this.toggleModule();
    });
  },

  render(track) {
    if (track) {
      this.dom.value.innerHTML = `${track.name} - ${track.artist['#text']}`;
    }

    if (!this.enabled) {
      this.dom.content.classList.remove('-enabled');
    } else {
      this.dom.content.classList.add('-enabled');
    }
  },
};

export default loadSpotify;
