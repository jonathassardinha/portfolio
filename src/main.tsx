import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/300-italic.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
