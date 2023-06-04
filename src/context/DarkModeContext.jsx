import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext(null);

export const DarkModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setDarkMode((mode) => !mode);
		updateDarkMode(!darkMode);
	};

	return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};

export const useDarkMode = () => useContext(DarkModeContext);

function updateDarkMode(darkMode) {
	const element = document.documentElement.classList;
	if (darkMode) element.add('dark');
	else element.remove('dark');
}
