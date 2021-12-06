import React from 'react';
import NavBar from './NavBar';
import { UploadFiles } from './UploadFiles/UploadFiles';
import PlayMusic from './PlayMusic/PlayMusic';

function App() {
	return (
		<div className="app">
			<NavBar />
			<UploadFiles />
			<PlayMusic />
		</div>
	);
}

export default App;
