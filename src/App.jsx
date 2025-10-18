import React from "react";
import DesktopFrame from "./components/DesktopFrame.jsx";
import ProductCustomizer from "./components/ProductCustomizer.jsx";

export default function App() {
	return (
		<DesktopFrame title="Desktop UI" sub="UI">
			<ProductCustomizer />
		</DesktopFrame>
	);
}
