// Import type ReactNode from React as we want to accept
// children as props, so we can allow content to be passed in
import { useState } from 'react';
import { type Image, type jobTitles, jobTitleOptions } from '../data/ImageList.tsx';

//Import relative file names stored the temp file in data folder

/**
 * Define interface for the list of image objects contains src and alt
 * @param {string} src The image src should be in type string
 */
interface ImageProps {
	// Project without screenshot:
	// 1. Translink-parser
	images: Image[];
}

function Projects({ images }: ImageProps) {
	const [activeTab, setActiveTab] = useState<jobTitles>('Full-Stack Developer');

	return (
		<section className="container py-5 bg-black bg-gradient">
			<h2 className="text-center mb-4 text-primary">Projects</h2>
				<div className='d-flex justify-content-center'>
					<ul className="nav nav-tabs mb-3 list-inline">
						<li className="nav-item">
							<button
								className={`nav-link ${activeTab === jobTitleOptions[0] ? 'active' : ''}`}
								onClick={() => setActiveTab(jobTitleOptions[0])}>
								Full-Stack Developer
							</button>
						</li>
						<li className="nav-item">
							<button
								className={`nav-link ${activeTab === jobTitleOptions[1] ? 'active' : ''}`}
								onClick={() => setActiveTab(jobTitleOptions[1])}
							>
								Software Engineer
							</button>
						</li>
					</ul>
				</div>
			<div className="row gy-4">
				{images
				.filter((image) => image.category === activeTab)
				.map((image, index) => (
					<div key={index} className="col-md-6 mb-4">
						<div className="card h-100 shadow-sm">
							<a href={image.giturl} target="_blank" rel="noopener noreferrer">
							<img src={image.src} alt={image.alt} className="project-image" />
							</a>
							<div className="card-body">
								<h5 className="card-title">{image.title}</h5>
								<p className="card-text">{image.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Projects;
