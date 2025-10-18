// import React, { useState } from "react";
// import { AccordionItem } from "./Accordion.jsx";
// import { SwatchGrid } from "./Swatches.jsx";

// const tag = (group) => (arr) => arr.map((x) => ({ ...x, group }));

// const LEATHER = tag("leather")([
// 	{ label: "Leather Brown", color: "#6f524e" },
// 	{ label: "Olive", color: "#5a6b51" },
// 	{ label: "Forest", color: "#2e5a41" },
// 	{ label: "Navy", color: "#2e3f64" },
// 	{ label: "Slate", color: "#5a5f6e" },
// 	{ label: "Moss", color: "#466a4f" },
// 	{ label: "Brick", color: "#8e3e36" },
// 	{ label: "Deep Teal", color: "#1e5a55" },
// 	{ label: "Crimson", color: "#8b2b2b" },
// 	{ label: "Indigo", color: "#3a3d81" },
// 	{ label: "Pine", color: "#265f51" },
// 	{ label: "Aubergine", color: "#5c3b57" },
// 	{ label: "Saddle", color: "#7a5a45" },
// 	{ label: "Cedar", color: "#5a3a2a" },
// 	{ label: "Bottle", color: "#124c3a" },
// 	{ label: "Charcoal", color: "#3f3f46" },
// ]);

// const SILICON = tag("silicon")([
// 	{ label: "Ivory", color: "#ddd8cf" },
// 	{ label: "Rust", color: "#b65a49" },
// 	{ label: "Blue", color: "#3c68a0" },
// 	{ label: "Green", color: "#3c7a63" },
// 	{ label: "Plum", color: "#59415e" },
// 	{ label: "Grey", color: "#80818a" },
// 	{ label: "Olive", color: "#6e7f52" },
// 	{ label: "Stone", color: "#a5a6a9" },
// ]);

// const ALUMINIUM = tag("aluminium")([
// 	{ label: "Steel", color: "#9aa0a6" },
// 	{ label: "Graphite", color: "#70757a" },
// 	{ label: "Gunmetal", color: "#545860" },
// 	{ label: "Lilac Grey", color: "#7f7b8d" },
// 	{ label: "Olive Grey", color: "#6b7463" },
// 	{ label: "Sage", color: "#8ea197" },
// 	{ label: "Pewter", color: "#7b848b" },
// 	{ label: "Ash", color: "#adb5bd" },
// ]);

// function ColorIcon({ color }) {
// 	return (
// 		<div
// 			style={{
// 				width: 16,
// 				height: 16,
// 				borderRadius: 4,
// 				background: color,
// 				border: "1px solid #ddd",
// 			}}
// 		/>
// 	);
// }

// function MaterialSection({ selection, onChange }) {
// 	return (
// 		<div>
// 			<div className="mat-label">LEATHER</div>
// 			<SwatchGrid items={LEATHER} value={selection} onChange={onChange} />

// 			<div className="mat-label">SILICON</div>
// 			<SwatchGrid items={SILICON} value={selection} onChange={onChange} />

// 			<div className="mat-label">ALUMINIUM</div>
// 			<SwatchGrid items={ALUMINIUM} value={selection} onChange={onChange} />
// 		</div>
// 	);
// }

// export default function RightPanel() {
// 	// One selected swatch per accordion row (icon reflects this color)
// 	const [armsSel, setArmsSel] = useState(LEATHER[1]); // Olive-ish
// 	const [armsFinishSel, setArmsFinishSel] = useState(LEATHER[0]); // Leather Brown
// 	const [legsSel, setLegsSel] = useState(ALUMINIUM[0]); // Steel

// 	return (
// 		<aside className="panel">
// 			{/* Header */}
// 			<div className="panel-head">
// 				<div className="panel-title">Cozy Longe chair</div>
// 				<div className="panel-progress">
// 					<i />
// 				</div>
// 			</div>

// 			{/* "Customize your Chair" */}
// 			<div className="panel-subhead">
// 				<span>Customize your Chair</span>
// 				<span className="dots">
// 					<i />
// 				</span>
// 			</div>

// 			{/* 1. Arms (now with swatches; icon follows selection) */}
// 			<AccordionItem
// 				icon={<ColorIcon color={armsSel.color} />}
// 				title="1. Arms"
// 				subtitle="Fixed Arms"
// 				defaultOpen={false}
// 			>
// 				<MaterialSection selection={armsSel} onChange={setArmsSel} />
// 			</AccordionItem>

// 			{/* 2. Arms Finish (unchanged behavior, icon follows selection) */}
// 			<AccordionItem
// 				icon={<ColorIcon color={armsFinishSel.color} />}
// 				title="2. Arms Finish"
// 				subtitle={armsFinishSel.label}
// 				defaultOpen={true}
// 			>
// 				<MaterialSection
// 					selection={armsFinishSel}
// 					onChange={setArmsFinishSel}
// 				/>
// 			</AccordionItem>

// 			{/* 3. Legs Finish (now with swatches; icon follows selection) */}
// 			<AccordionItem
// 				icon={<ColorIcon color={legsSel.color} />}
// 				title="3. Legs Finish"
// 				subtitle={legsSel.label}
// 				defaultOpen={false}
// 			>
// 				<MaterialSection selection={legsSel} onChange={setLegsSel} />
// 			</AccordionItem>

// 			{/* Price Bar */}
// 			<div className="price-bar">
// 				<div className="price-meta">
// 					<small>Product Price</small>
// 					<div className="price">
// 						<span>$ 200</span>
// 						<span className="strike">$ 245</span>
// 					</div>
// 				</div>
// 				<button className="cta">Add to cart</button>
// 			</div>
// 		</aside>
// 	);
// }

import React, { useState } from "react";
import { AccordionItem } from "./Accordion.jsx";
import { SwatchGrid } from "./Swatches.jsx";

const tag = (group) => (arr) => arr.map((x) => ({ ...x, group }));

const LEATHER = tag("leather")([
	{ label: "Leather Brown", color: "#6f524e" },
	{ label: "Olive", color: "#5a6b51" },
	{ label: "Forest", color: "#2e5a41" },
	{ label: "Navy", color: "#2e3f64" },
	{ label: "Slate", color: "#5a5f6e" },
	{ label: "Moss", color: "#466a4f" },
	{ label: "Brick", color: "#8e3e36" },
	{ label: "Deep Teal", color: "#1e5a55" },
	{ label: "Crimson", color: "#8b2b2b" },
	{ label: "Indigo", color: "#3a3d81" },
	{ label: "Pine", color: "#265f51" },
	{ label: "Aubergine", color: "#5c3b57" },
	{ label: "Saddle", color: "#7a5a45" },
	{ label: "Cedar", color: "#5a3a2a" },
	{ label: "Bottle", color: "#124c3a" },
	{ label: "Charcoal", color: "#3f3f46" },
]);

const SILICON = tag("silicon")([
	{ label: "Ivory", color: "#ddd8cf" },
	{ label: "Rust", color: "#b65a49" },
	{ label: "Blue", color: "#3c68a0" },
	{ label: "Green", color: "#3c7a63" },
	{ label: "Plum", color: "#59415e" },
	{ label: "Grey", color: "#80818a" },
	{ label: "Olive", color: "#6e7f52" },
	{ label: "Stone", color: "#a5a6a9" },
]);

const ALUMINIUM = tag("aluminium")([
	{ label: "Steel", color: "#9aa0a6" },
	{ label: "Graphite", color: "#70757a" },
	{ label: "Gunmetal", color: "#545860" },
	{ label: "Lilac Grey", color: "#7f7b8d" },
	{ label: "Olive Grey", color: "#6b7463" },
	{ label: "Sage", color: "#8ea197" },
	{ label: "Pewter", color: "#7b848b" },
	{ label: "Ash", color: "#adb5bd" },
]);

function ColorIcon({ color }) {
	return (
		<div
			style={{
				width: 16,
				height: 16,
				borderRadius: 4,
				background: color,
				border: "1px solid #ddd",
			}}
		/>
	);
}

function MaterialSection({ selection, onChange }) {
	return (
		<div>
			<div className="mat-label">LEATHER</div>
			<SwatchGrid items={LEATHER} value={selection} onChange={onChange} />
			<div className="mat-label">SILICON</div>
			<SwatchGrid items={SILICON} value={selection} onChange={onChange} />
			<div className="mat-label">ALUMINIUM</div>
			<SwatchGrid items={ALUMINIUM} value={selection} onChange={onChange} />
		</div>
	);
}

export default function RightPanel() {
	// selections for icons & subtitles
	const [armsSel, setArmsSel] = useState(LEATHER[1]);
	const [armsFinishSel, setArmsFinishSel] = useState(LEATHER[0]);
	const [legsSel, setLegsSel] = useState(ALUMINIUM[0]);

	// mobile bottom-sheet open/close
	const [sheetOpen, setSheetOpen] = useState(false);

	return (
		<aside className={`panel ${sheetOpen ? "sheet-open" : "sheet-closed"}`}>
			{/* Head */}
			<div className="panel-head">
				<div className="row-between">
					<div className="panel-title">Cozy Longe chair</div>
					<div className="panel-actions">
						<button className="ar-chip" title="View in AR">
							<svg
								viewBox="0 0 24 24"
								width="16"
								height="16"
								fill="none"
								stroke="#6b7280"
								strokeWidth="2"
							>
								<path d="M12 2l9 5v10l-9 5-9-5V7l9-5zM12 22V12" />
							</svg>
							AR
						</button>
						<button
							className="sheet-toggle"
							aria-expanded={sheetOpen}
							onClick={() => setSheetOpen((v) => !v)}
							title={sheetOpen ? "Collapse" : "Expand"}
						>
							<svg
								viewBox="0 0 24 24"
								width="16"
								height="16"
								fill="none"
								stroke="#6b7280"
								strokeWidth="2"
							>
								<path d={sheetOpen ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
							</svg>
						</button>
					</div>
				</div>
				<div className="panel-progress">
					<i />
				</div>
			</div>

			<div className="panel-subhead">
				<span>Customize your Chair</span>
				<span className="dots">
					<i />
				</span>
			</div>

			{/* Body (hidden when collapsed on mobile) */}
			<div className="sheet-body">
				<AccordionItem
					icon={<ColorIcon color={armsSel.color} />}
					title="1. Arms"
					subtitle="Fixed Arms"
					defaultOpen={false}
				>
					<MaterialSection selection={armsSel} onChange={setArmsSel} />
				</AccordionItem>

				<AccordionItem
					icon={<ColorIcon color={armsFinishSel.color} />}
					title="2. Arms Finish"
					subtitle={armsFinishSel.label}
					defaultOpen={true}
				>
					<MaterialSection
						selection={armsFinishSel}
						onChange={setArmsFinishSel}
					/>
				</AccordionItem>

				<AccordionItem
					icon={<ColorIcon color={legsSel.color} />}
					title="3. Legs Finish"
					subtitle={legsSel.label}
					defaultOpen={false}
				>
					<MaterialSection selection={legsSel} onChange={setLegsSel} />
				</AccordionItem>

				<div className="price-bar">
					<div className="price-meta">
						<small>Product Price</small>
						<div className="price">
							<span>$ 200</span>
							<span className="strike">$ 245</span>
						</div>
					</div>
					<button className="cta">Add to cart</button>
				</div>
			</div>
		</aside>
	);
}
