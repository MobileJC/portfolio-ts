// import images
import songtraxSongPreview from '../assets/songtrax-song-preview.png';
import discutsLogin from '../assets/discuts-login.png';
import songtraxMobileProf from '../assets/songtrax-mobile-prof.png';
import connect4 from '../assets/connect4.png';
import intoTheBreach from '../assets/into-the-breach.png';

/**
 * Define the type for the image object
 * @param {string} src The image source URL
 * @param {string} alt The alt text for the image
 * @param {string} title The title of the image
 * @param {string} description The description of the image
 * export the type so the type Image can be used globally
 */
export type Image = {
	src: string;
	alt: string;
	title: string;
	description: string;
}

/**
 * 
 */
const ImageList: Image[] = [
	{
		src: songtraxSongPreview,
		alt: 'Screenshot of SongTrax song preview page',
		title: 'SongTrax Web App',
		description: 'Web-based music synthesis app built with React and Node.js.'
	  },
	  {
		src: songtraxMobileProf,
		alt: 'Screenshot of SongTrax Mobile user profile page',
		title: 'SongTrax Mobile',
		description: 'Cross-platform version built with React Native.'
	  },
	  {
		src: discutsLogin,
		alt: 'Screenshot of DisCUTS Login page',
		title: 'DisCUTS!',
		description: 'Full-stack forum deployed with Docker on GCP.'
	  },
	  {
		src: connect4,
		alt: 'Screenshot of Connect4 game',
		title: 'Connect4',
		description: 'In-line Connect4 game built with Python.'
	  },
	  {
		src: intoTheBreach,
		alt: 'DisCUTS Login',
		title: 'DisCUTS!',
		description: 'Simplified version of Into the Breach built with Python and tkinter.'
	  }
];

export default ImageList;