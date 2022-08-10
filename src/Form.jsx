// import memesData from "./memesData"
import { useState, useEffect } from "react";

export default function Form(props) {

	const [dataForm, setDataForm] = useState({
		topText: "",
		bottonText: "",
		urlMeme: "http://i.imgflip.com/1bij.jpg"
	})

	const [memesData, setMemesData] = useState({
		memes: []
	})

	function handleChange(event) {
		const { name, value } = event.target;
		setDataForm(prevFormData => ({
			...prevFormData,
			[name]: value
		}));
	}

	useEffect(() => {
		fetch("https://api.imgflip.com/get_memes")
			.then(res => res.json())
			.then(data => setMemesData(data.data.memes))
	}, []);

	function selectRandomImage() {
		console.log(memesData)
		const index = Math.floor(Math.random() * memesData.length);
		const url = memesData[index].url;
		setDataForm(prevMeme => ({
			...prevMeme,
			urlMeme: url
		}));
	}

	function handleSubmit(event) {
		event.preventDefault()
	}

	return (
		<div>
			<main>
				<form className="form" onSubmit={handleSubmit}>
					<input onChange={handleChange} value={dataForm.topText} name="topText" className="form-input" placeholder="Up text" type="text" id="input-top" />
					<input onChange={handleChange} value={dataForm.bottonText} name="bottonText" className="form-input" placeholder="Botton text" type="text" id="input-bottom" />
					<button onClick={selectRandomImage} className="form-button">Get a new meme image 🤣</button>
				</form>
				<div className="contenedor">
					<p className="meme--text">{dataForm.topText}</p>
					<img className="form-meme" src={dataForm.urlMeme} />
					<p className="meme--text">{dataForm.bottonText}</p>
				</div>
			</main>

		</div>
	);
}