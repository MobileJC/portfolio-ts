// Import type ReactNode from React as we want to accept
// children as props, so we can allow content to be passed in
// import { type ReactNode } from 'react';
import { type Image } from '../data/ImageList.tsx';

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
	return (
		<section className="container py-5">
			<h2 className="text-center mb-4">Projects</h2>
			<div className="row gy-4">
				{images.map((image, index) => (
					<div key={index} className="col-md-4">
						<div className="card h-100 shadow-sm">
							<img src={image.src} alt={image.alt} className="card-img-top" />
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
