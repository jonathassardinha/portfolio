import { useState, useEffect } from "react";

export const useDelayedShow = () => {
	const [showing, setShowing] = useState(false);

	useEffect(() => {
		setShowing(true);
	}, []);

	return showing;
};
