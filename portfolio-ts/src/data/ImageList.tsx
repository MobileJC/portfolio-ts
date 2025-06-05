// import images
import translinkParserCodeSnippet from '../assets/translink-parser-code-snippet.png';
import songtraxSongPreview from '../assets/songtrax-song-preview.png';
import discutsLogin from '../assets/discuts-login.png';
import songtraxMobileProf from '../assets/songtrax-mobile-prof.png';
import connect4 from '../assets/connect4.png';
import intoTheBreach from '../assets/into-the-breach.png';

export const jobTitleOptions = ["Full-Stack Developer", "Software Engineer"] as const;
/**
 * Define the type for the job titles
 * @param {string} jobTitles The job title
 * export the type so the type jobTitles can be used globally
 */
export type jobTitles = typeof jobTitleOptions[number];

/**
 * Define the type for the image object
 * @param {string} src The image source URL
 * @param {string} alt The alt text for the image
 * @param {string} title The title of the image
 * @param {string} description The description of the image
 * @param {string} giturl The URL to the corresponding GitHub repository
 * @param {jobTitles} category The category of the image grouped by job title
 * export the type so the type Image can be used globally
 */
export type Image = {
	src: string;
	alt: string;
	title: string;
	description: string;
	giturl: string;
	category: jobTitles;
}

/**
 * 
 */
const ImageList: Image[] = [
	{
		src: translinkParserCodeSnippet,
		alt: 'Code snippet of Translink Parser',
		title: 'Translink Parser',
		description: 'JavaScript command line tool for parsing Translink GTFS data.',
		giturl: 'https://github.com/MobileJC/COMP2140-UQ-GTFS-Translink-Parser',
		category: jobTitleOptions[0]

	},
	{
		src: songtraxSongPreview,
		alt: 'Screenshot of SongTrax song preview page',
		title: 'SongTrax Web App',
		description: 'Web-based music synthesis app built with React and Node.js.',
		giturl: "https://github.com/MobileJC/songtrax",
		category: jobTitleOptions[0]
	},
	  {
		src: songtraxMobileProf,
		alt: 'Screenshot of SongTrax Mobile user profile page',
		title: 'SongTrax Mobile',
		description: 'Cross-platform version built with React Native.',
		giturl: 'https://github.com/MobileJC/songtrax_mobile',
		category: jobTitleOptions[0]
	  },
	  {
		src: discutsLogin,
		alt: 'Screenshot of DisCUTS Login page',
		title: 'DisCUTS!',
		description: 'Full-stack forum written in PHP deployed with Docker on GCP.',
		giturl: 'https://github.com/MobileJC/infs3202_MJC',
		category: jobTitleOptions[0]
	  },
	  {
		src: connect4,
		alt: 'Screenshot of Connect4 game',
		title: 'Connect4',
		description: 'In-line Connect4 game built with Python.',
		giturl: 'https://github.com/MobileJC/csse1001_2024_s1_a1',
		category: jobTitleOptions[1]
	  },
	  {
		src: intoTheBreach,
		alt: 'Screenshot of Into The Breach game',
		title: 'Into The Breach',
		description: 'Simplified version of Into the Breach built with Python and tkinter.',
		giturl: 'https://github.com/MobileJC/csse1001_2024_s1_a2',
		category: jobTitleOptions[1]
	  }
];

export default ImageList;