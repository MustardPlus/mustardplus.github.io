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
		case 1: str = "There's a reason coming..."; break;
		case 2: str = "There's only one way to be..."; break;
		case 3: str = "What's decided will happen..."; break;
		default:
		case 4: str = "Watch yourself..."; break;
	}
	set_text("txt_tagline", str);
}

function fade_in_handle(){
	class_change(getByID("txt_tagline"), "fade_in_start", "fade_in_end");
	class_change(getByID("ico_scroll"), "fade_in_start", "fade_in_end");
}
