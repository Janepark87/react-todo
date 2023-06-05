import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext(null);

export const DarkModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setDarkMode((mode) => !mode);
		updateDarkMode(!darkMode);
	};

	useEffect(() => {
		const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
		setDarkMode(isDark);
		updateDarkMode(isDark);
	}, []);

	return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};

export const useDarkMode = () => useContext(DarkModeContext);

function updateDarkMode(darkMode) {
	const element = document.documentElement.classList;
	if (darkMode) {
		element.add('dark');
		localStorage.theme = 'dark';
	} else {
		element.remove('dark');
		localStorage.theme = 'light';
	}
}
