// © 2018 MustardPlus
// General ---------------------------------------------------------
function class_change(elmnt, prev, next){
	elmnt.classList.remove(prev);
	elmnt.classList.add(next);
}

function getByID(str){
	return document.getElementById(str);
}

function set_text(id, text){
	getByID(id).innerHTML = text;
}

function get_text(id){
	return String(getByID(id).value);
}

function set_img(id, path){
	getByID(id).src = path;
}

function generate_tagline(){
	var s_id = Math.floor(Math.random()*4);
	switch(s_id){
		case 1: str = "THERE'S A REASON COMING..."; break;
		case 2: str = "THERE'S ONLY ONE WAY TO BE..."; break;
		case 3: str = "WHAT'S DECIDED WILL HAPPEN..."; break;
		default:
		case 4: str = "WATCH YOURSELF..."; break;
	}
	set_text("txt_tagline", str);
}

function fade_in_handle(){
	class_change(getByID("txt_tagline"), "fade_in_start", "fade_in_end");
	class_change(getByID("ico_scroll"), "fade_in_start", "fade_in_end");
}
