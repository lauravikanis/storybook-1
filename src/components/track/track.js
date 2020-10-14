import PlayButtonImg from "../../assets/play-active.svg";
import PauseButtonImg from "../../assets/pause-active.svg";

export function createTrackElement(track) {
  // !ADD HTML Elements
  const UL = document.createElement("ul");
  const listElement = document.createElement("li");
  const trackImg = document.createElement("img");
  const songBox = document.createElement("div");
  const songInfo = document.createElement("div");
  const title = document.createElement("h6");
  const artist = document.createElement("span");
  const playButton = document.createElement("img");

  // !ADD Classes
  UL.classList.add("playlist");
  trackImg.classList.add("song-pic");
  songBox.classList.add("song");
  songInfo.classList.add("song-info");
  title.classList.add("song-title");
  artist.classList.add("song-artist");
  playButton.classList.add("play-pic");

  // !ADD Song
  const audioObj = new Audio(track.url);

  // !ADD Eventlisteners

  let isPlaying = false;

  playButton.onclick = () => {
    isPlaying
      ? (audioObj.pause(), showPlayButton())
      : (audioObj.play(), showPauseButton());
    switchIsPlaying();
  };

  // !Extracted Functions

  const switchIsPlaying = () => {
    isPlaying = !isPlaying;
  };
  const showPlayButton = () => {
    playButton.src = PlayButtonImg;
    playButton.alt = "Pause Button";
  };

  const showPauseButton = () => {
    playButton.src = PauseButtonImg;
    playButton.alt = "Play Button";
  };

  // !ADD Sources
  title.innerText = track.title;
  artist.innerText = track.artist;
  playButton.src = PlayButtonImg;
  playButton.alt = "Play Button";
  trackImg.src = `https://source.unsplash.com/100x100/?${track.imgSrc}`;
  trackImg.alt = `Album Cover ${track.artist}`;

  // !Link HTML Elements together
  UL.append(listElement);
  listElement.append(trackImg, songBox);
  songInfo.append(title, artist);
  songBox.append(songInfo, playButton);

  // !Returning Outer HTML Element
  return UL;

  /* //! HTML of Storybook/Pages/navigation/navSongs.html
   <li>
  <img
    src="https://source.unsplash.com/100x100/?artist,music"
    alt=""
    class="song-pic"
  />
  <div class="song">
    <div class="song-info">
      <h6 class="song-title">Song-Titel</h6>
      <span class="song-artist">Song-Artist</span>
    </div>
    <img src="../../assets/play-active.svg" alt="" class="play-pic" />
  </div>
  </li> */
}
