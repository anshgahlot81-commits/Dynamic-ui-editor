// import React, { useCallback, useState } from "react";
// import RightPanel from "./RightPanel.jsx";

// /** Each thumb has a primary and a fallback image */
// // const thumbs = [
// // 	"https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80",
// // 	"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=400&q=80",
// // 	"https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=400&q=80",
// // 	"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80",
// // 	"https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80",
// // ];
// const IMAGES = [
// 	{
// 		src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80",
// 		fallback:
// 			"https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80",
// 		alt: "decor room",
// 	},
// 	{
// 		src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
// 		fallback:
// 			"https://images.unsplash.com/photo-1600585154340-1e198ba36db0?auto=format&fit=crop&w=1600&q=80",
// 		alt: "modern house",
// 	},
// 	{
// 		src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
// 		fallback:
// 			"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80",
// 		alt: "crowd lights",
// 	},
// 	{
// 		src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80",
// 		fallback:
// 			"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80",
// 		alt: "green sofa",
// 	},
// 	{
// 		src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
// 		fallback:
// 			"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
// 		alt: "workspace",
// 	},
// ];

// function Icon({ d, viewBox = "0 0 24 24" }) {
// 	return (
// 		<svg
// 			viewBox={viewBox}
// 			fill="none"
// 			stroke="currentColor"
// 			strokeWidth="2"
// 			strokeLinecap="round"
// 			strokeLinejoin="round"
// 		>
// 			<path d={d} />
// 		</svg>
// 	);
// }

// export default function ProductCustomizer() {
// 	const [selected, setSelected] = useState(3); // start on the sofa shot
// 	const hero = IMAGES[selected];

// 	const onStageError = useCallback(
// 		(e) => {
// 			if (e.currentTarget.dataset.fallback !== "1") {
// 				e.currentTarget.dataset.fallback = "1";
// 				e.currentTarget.src = hero.fallback || "https://picsum.photos/1600/900";
// 			}
// 		},
// 		[hero]
// 	);

// 	return (
// 		<div className="customizer">
// 			{/* left thumbnails */}
// 			<div className="thumb-col">
// 				{IMAGES.map((img, i) => (
// 					<button
// 						key={i}
// 						className={`thumb ${selected === i ? "active" : ""}`}
// 						aria-pressed={selected === i}
// 						aria-label={`View image ${i + 1}`}
// 						onClick={() => setSelected(i)}
// 					>
// 						<img src={img.src} alt={img.alt} loading="lazy" />
// 					</button>
// 				))}
// 			</div>

// 			{/* center stage */}
// 			<div className="stage">
// 				<img
// 					key={selected} /* forces re-load when selection changes */
// 					src={hero.src}
// 					alt="product"
// 					loading="eager"
// 					onError={onStageError}
// 				/>

// 				<div className="tools">
// 					<button className="tool-btn" title="Zoom">
// 						<Icon d="M11 19a8 8 0 1 1 8-8m-2 10 4 4" />
// 					</button>
// 					<button className="tool-btn" title="Rotate">
// 						<Icon d="M21 12a9 9 0 1 1-9-9v4" />
// 					</button>
// 					<button className="tool-btn" title="Fit">
// 						<Icon d="M3 8V3h5M16 3h5v5M21 16v5h-5M8 21H3v-5" />
// 					</button>
// 					<button className="tool-btn" title="Share">
// 						<Icon d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v14" />
// 					</button>
// 				</div>

// 				<button className="room-cta" title="View in your room">
// 					<Icon d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9z" />
// 					View in your room
// 				</button>
// 			</div>

// 			{/* right panel */}
// 			<RightPanel />
// 		</div>
// 	);
// }
import React, { useCallback, useState } from "react";
import RightPanel from "./RightPanel.jsx";

const IMAGES = [
	{
		src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1600&q=80",
		fallback:
			"https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
		alt: "decor room",
	},
	{
		src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
		fallback:
			"https://images.unsplash.com/photo-1600585154340-1e198ba36db0?auto=format&fit=crop&w=1600&q=80",
		alt: "modern house",
	},
	{
		src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
		fallback:
			"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80",
		alt: "crowd lights",
	},
	{
		src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80",
		fallback:
			"https://images.unsplash.com/photo-1600585154340-1e198ba36db0?auto=format&fit=crop&w=1600&q=80",
		alt: "green sofa",
	},
	{
		src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80",
		fallback:
			"https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
		alt: "workspace",
	},
];

function Icon({ d, viewBox = "0 0 24 24" }) {
	return (
		<svg
			viewBox={viewBox}
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d={d} />
		</svg>
	);
}

export default function ProductCustomizer() {
	const [selected, setSelected] = useState(3);
	const [photosOpen, setPhotosOpen] = useState(false);
	const hero = IMAGES[selected];

	const onStageError = useCallback(
		(e) => {
			if (e.currentTarget.dataset.fallback !== "1") {
				e.currentTarget.dataset.fallback = "1";
				e.currentTarget.src = hero.fallback || "https://picsum.photos/1600/900";
			}
		},
		[hero]
	);

	return (
		<div className="customizer">
			{/* left thumbnails (desktop/tablet) */}
			<div className="thumb-col">
				{IMAGES.map((img, i) => (
					<button
						key={i}
						className={`thumb ${selected === i ? "active" : ""}`}
						aria-pressed={selected === i}
						aria-label={`View image ${i + 1}`}
						onClick={() => setSelected(i)}
					>
						<img src={img.src} alt={img.alt} loading="lazy" />
					</button>
				))}
			</div>

			{/* center stage */}
			<div className="stage">
				<img
					key={selected}
					src={hero.src}
					alt="product"
					loading="eager"
					onError={onStageError}
				/>

				{/* Mobile-only: View photos chip */}
				<button
					className="photos-chip"
					title="View photos"
					onClick={() => setPhotosOpen(true)}
				>
					<span className="film" /> View photos
				</button>

				{/* Mobile-only: photos overlay */}
				{photosOpen && (
					<div className="photos-overlay" role="dialog" aria-modal="true">
						<div className="photos-panel">
							<div className="photos-header">
								<strong>Photos</strong>
								<button
									className="photos-close"
									onClick={() => setPhotosOpen(false)}
									aria-label="Close"
								>
									×
								</button>
							</div>
							<div className="photos-grid">
								{IMAGES.map((img, i) => (
									<button
										key={i}
										className={`photos-thumb ${selected === i ? "active" : ""}`}
										onClick={() => {
											setSelected(i);
											setPhotosOpen(false);
										}}
										aria-label={`Choose photo ${i + 1}`}
									>
										<img src={img.src} alt={img.alt} />
									</button>
								))}
							</div>
						</div>
					</div>
				)}

				<div className="tools">
					<button className="tool-btn" title="Zoom">
						<Icon d="M11 19a8 8 0 1 1 8-8m-2 10 4 4" />
					</button>
					<button className="tool-btn" title="Rotate">
						<Icon d="M21 12a9 9 0 1 1-9-9v4" />
					</button>
					<button className="tool-btn" title="Fit">
						<Icon d="M3 8V3h5M16 3h5v5M21 16v5h-5M8 21H3v-5" />
					</button>
					<button className="tool-btn" title="Share">
						<Icon d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v14" />
					</button>
				</div>

				<button className="room-cta" title="View in your room">
					<Icon d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9z" />
					View in your room
				</button>
			</div>

			{/* right panel / bottom sheet */}
			<RightPanel />
		</div>
	);
}
