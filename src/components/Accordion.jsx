import React, { useState } from "react";

export function AccordionItem({
	icon,
	title,
	subtitle,
	children,
	defaultOpen = false,
}) {
	const [open, setOpen] = useState(defaultOpen);
	return (
		<div className="acc-item">
			<button
				className="acc-head"
				onClick={() => setOpen((o) => !o)}
				aria-expanded={open}
			>
				<div className="acc-icon">{icon || <span />}</div>
				<div>
					<div className="acc-title">{title}</div>
					{subtitle && <div className="acc-sub">{subtitle}</div>}
				</div>
				<svg
					className="chev"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
				>
					<path d={open ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
				</svg>
			</button>
			{open && <div className="acc-body">{children}</div>}
		</div>
	);
}
