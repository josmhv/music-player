// import { playlistData } from './UploadFiles/UploadFiles';

async function postData(playlistData, url = 'http://localhost:9000/songs') {
	// POST data
	const { urls, userName, PLName } = playlistData;
	await fetch(url, {
		method: 'POST',
		body: JSON.stringify({
			urls: urls,
			userName: userName,
			PLName: PLName,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.catch((err) => console.error('Error: ', err));
}

let urlArrDB = '';
async function getData(url = 'http://localhost:9000/songs') {
	// GET data
	await fetch(url)
		.then((res) => res.json())
		.then((res) => {
			urlArrDB = res.urls;
		})
		.catch((err) => {
			new Error(err);
		});
}

export { postData, getData };
export { urlArrDB };
