import React from "react";

export function SwatchGrid({ items = [], value, onChange }) {
	return (
		<div className="swatch-grid">
			{items.map((it, idx) => (
				<button
					key={idx}
					title={it.label}
					className={`swatch ${value === it.label ? "active" : ""}`}
					style={{ background: it.color }}
					data-title={it.label}
					onClick={() => onChange?.(it)}
				/>
			))}
		</div>
	);
}
