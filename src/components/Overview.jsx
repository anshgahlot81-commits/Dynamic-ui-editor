// import React from "react";

// /* small helper mini card used in the right column */
// function MiniCard({
// 	title = "Cozy Longe chair",
// 	subtitle = "Customize your Chair",
// 	tone = "light",
// }) {
// 	const leather = [
// 		"#6f524e",
// 		"#5a6b51",
// 		"#2e5a41",
// 		"#2e3f64",
// 		"#5a5f6e",
// 		"#466a4f",
// 		"#8e3e36",
// 		"#1e5a55",
// 	];
// 	const silicon = [
// 		"#ddd8cf",
// 		"#b65a49",
// 		"#3c68a0",
// 		"#3c7a63",
// 		"#59415e",
// 		"#80818a",
// 		"#6e7f52",
// 		"#a5a6a9",
// 	];
// 	const aluminium = [
// 		"#9aa0a6",
// 		"#70757a",
// 		"#545860",
// 		"#7f7b8d",
// 		"#6b7463",
// 		"#8ea197",
// 		"#7b848b",
// 		"#adb5bd",
// 	];

// 	return (
// 		<div className={`mini-card ${tone === "light" ? "" : "mini-card--peach"}`}>
// 			<div className="mini-head">
// 				<div className="mini-title">{title}</div>
// 			</div>
// 			<div className="mini-sub">{subtitle}</div>

// 			<div className="mini-row">
// 				<div className="mini-pill" />
// 				<div className="mini-row-text">
// 					<div className="mini-row-title">1. Arms</div>
// 					<div className="mini-row-sub">Fixed Arms</div>
// 				</div>
// 				<div className="mini-chevron">▾</div>
// 			</div>

// 			<div className="mini-row mini-row--peach">
// 				<div className="mini-swatch-square" />
// 				<div className="mini-row-text">
// 					<div className="mini-row-title">2. Arms Finish</div>
// 					<div className="mini-row-sub">Leather Brown</div>
// 				</div>
// 				<div className="mini-chevron">▾</div>
// 			</div>

// 			<div className="mini-label">LEATHER</div>
// 			<div className="mini-swatches">
// 				{leather.map((c, i) => (
// 					<span
// 						key={i}
// 						className="swatch swatch--sm"
// 						style={{ background: c }}
// 					/>
// 				))}
// 			</div>

// 			<div className="mini-label">SILICON</div>
// 			<div className="mini-swatches">
// 				{silicon.map((c, i) => (
// 					<span
// 						key={i}
// 						className="swatch swatch--sm"
// 						style={{ background: c }}
// 					/>
// 				))}
// 			</div>

// 			<div className="mini-label">ALUMINIUM</div>
// 			<div className="mini-swatches">
// 				{aluminium.map((c, i) => (
// 					<span
// 						key={i}
// 						className="swatch swatch--sm"
// 						style={{ background: c }}
// 					/>
// 				))}
// 			</div>

// 			<div className="mini-footer">
// 				<div className="mini-price">
// 					<strong>$ 200</strong> <span className="strike">$ 245</span>
// 				</div>
// 				<button className="mini-cta">Add to cart</button>
// 			</div>
// 		</div>
// 	);
// }

// export default function Overview() {
// 	return (
// 		<div className="overview">
// 			<h1>Customizable UI Elements</h1>

// 			<div className="overview-grid">
// 				{/* Left: bulleted spec like your screenshot */}
// 				<div className="spec">
// 					<section>
// 						<h3>Typography</h3>
// 						<ul>
// 							<li>Font Family (Inter, Roboto, Poppins)</li>
// 							<li>Font Weight (400, 500, 600, 700)</li>
// 							<li>Font Size (10px–60px)</li>
// 						</ul>
// 					</section>

// 					<section>
// 						<h3>Button</h3>
// 						<ul>
// 							<li>Border Radius</li>
// 							<li>Shadow (none, small, medium, large)</li>
// 							<li>Alignment (left, center, right)</li>
// 							<li>Background & Text Color (HEX/RGB)</li>
// 						</ul>
// 					</section>

// 					<section>
// 						<h3>Galleries/Images</h3>
// 						<ul>
// 							<li>Gallery Alignment (grid left, grid center, grid right)</li>
// 							<li>Spacing between images</li>
// 							<li>Image border radius</li>
// 						</ul>
// 					</section>

// 					<section>
// 						<h3>General Layout</h3>
// 						<ul>
// 							<li>Card Corner Radius (menu)</li>
// 							<li>Container Padding</li>
// 							<li>Section Background Color</li>
// 						</ul>
// 					</section>

// 					<section>
// 						<h3>Stroke/Border</h3>
// 						<ul>
// 							<li>Stroke Color</li>
// 							<li>Stroke Weight</li>
// 						</ul>
// 					</section>

// 					<section>
// 						<h3>Layout Switching</h3>
// 						<p>Ability to switch between two different design layouts.</p>
// 					</section>
// 				</div>

// 				{/* Right: two mini product cards (mirrors your red-boxed area and cards) */}
// 				<div className="spec-cards">
// 					<MiniCard tone="light" />
// 					<MiniCard tone="peach" />
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
