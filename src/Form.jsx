import memesData from "./memesData"
import { useState } from "react";

export default function Form(props) {

    const [urlMeme,setUrlMeme] = useState("")
	
	function selectRandomImage() {
		const index = Math.floor(Math.random() * memesData.data.memes.length);
		setUrlMeme(memesData.data.memes[index].url);
	}

	return(
        <div>
			<main>
				<div className="form">
					<input className="form-input" placeholder="Up text" type="text" name="input-top" id="input-top" />
					<input className="form-input" placeholder="Botton text" type="text" name="" id="input-bottom" />
					<button onClick={selectRandomImage} className="form-button">Get a new meme image 🤣</button>
					{urlMeme ? <img className="form-meme"src={urlMeme}/> : ""}
				</div>
			</main>
            
        </div>
    );
}