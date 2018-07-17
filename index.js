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
	var s_id = Math.floor(Math.random()*5);
	switch(s_id){
		case 1: str = "There's a reason coming..."; break;
		case 2: str = "Don't look down..."; break;
		case 3: str = "There's only one way to be..."; break;
		case 4: str = "What's decided will happen..."; break;
		default:
		case 5: str = "Watch yourself..."; break;
	}
	set_text("txt_tagline", str);
}