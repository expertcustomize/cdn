/*!
* Copyright (c) 2013 Profoundis Labs Pvt. Ltd., and individual contributors.
*
* All rights reserved.
*/
;function AutoSuggestControl(a){this.provider=new wordSuggestions();this.textbox=typeof a=="string"?document.getElementById(a):a;this.init()}AutoSuggestControl.prototype.autosuggest=function(a){if(a.length>0){this.typeAhead(a[0])}};AutoSuggestControl.prototype.handleKeyUp=function(a){var c=a.keyCode;var b=a;window.eventobj=b;if((c!=16&&c<32)||(c>=33&&c<=46)||(c>=112&&c<=123)||(c==65&&b.ctrlKey)||(c==90&&b.ctrlKey)){if(c==90&&b.ctrlKey){}}else{this.provider.requestSuggestions(this)}};AutoSuggestControl.prototype.init=function(){var a=this;lastDate=new Date();a.textbox.onkeyup=function(b){if(!b){b=window.event}newDate=new Date();if(newDate.getTime()>lastDate.getTime()+200){a.handleKeyUp(b);lastDate=newDate}}};AutoSuggestControl.prototype.selectRange=function(a,b){if(this.textbox.createTextRange){var c=this.textbox.createTextRange();c.moveStart("character",a);c.moveEnd("character",b);c.select()}else{if(this.textbox.setSelectionRange){this.textbox.setSelectionRange(a,b)}}this.textbox.focus()};AutoSuggestControl.prototype.typeAhead=function(c){if(this.textbox.createTextRange||this.textbox.setSelectionRange){var k=this.textbox.value.lastIndexOf(" ");var j=this.textbox.value.lastIndexOf("'");var h=this.textbox.value.lastIndexOf("-");var e=this.textbox.value.lastIndexOf('"');var g=this.textbox.value.lastIndexOf("\n");var f=Math.max(k,g,j,h,e)+1;var b=this.textbox.value.substring(0,f);var i=this.textbox.value.substring(f,this.textbox.value.length);this.textbox.value=b+c;var a=this.textbox.value.length-c.replace(i,"").length;var d=this.textbox.value.length;this.selectRange(a,d)}};wordSuggestions.prototype.requestSuggestions=function(g){var e=[];var a=g.textbox.value;var c=a.split(/[\s,]+/);var d=c[c.length-1];var f=d;if(f.length>0){for(var b=0;b<this.words.length;b++){if(this.words[b].indexOf(f.toLowerCase())==0){if(this.words[b].indexOf(f)==0){e.push(this.words[b])}else{if(this.words[b].indexOf(f.charAt(0).toLowerCase()+f.slice(1))==0){e.push(this.words[b].charAt(0).toUpperCase()+this.words[b].slice(1))}}}}}g.autosuggest(e)};function wordSuggestions(){this.words=["the","and","that","for","with","yo","are","your","from","have","more","but","new","not","will","what","about","all","one","they","get","like","out","their","who","people","been","can","how","there","which","were","apple","time","when","just","into","said","our","here","also","year","view","these","comment","had","would","other","now","than","she","see","after","most","some","make","points","her","mobile","day","insider","point","company","over","twitter","use","right","say","could","them","way","first","why","ago","world","thing","only","login","even","before","because","any","two","million","please","device","service","phone","made","topic","while","best","work","last","know","network","read","him","much","want","those","where","follow","user","friend","may","then","going","still","well","look","being","post","think","photo","hour","many","take","image","back","got","video","should","off","very","site","come","good","recently","need","down","did","show","email","open","around","really","week","policy","using","through","big","today","game","alert","article","stock","too","media","next","product","find","android","own","during","free","market","story","lot","reading","term","social","feel","technology","share","every","able","shared","since","question","life","state","inc","home","few","told","never","president","data","something","job","house","report","used","better","another","window","city","according","content","system","via","part","government","same","help","man","let","both","disrupt","privacy","top","software","tech","number","percent","long","each","such","inside","car","line","month","three","actually","doe","live","end","money","might","billion","without","experience","little","found","future","great","school","put","information","between","already","must","case","quote","feature","though","ever","page","plan","including","tags","call","called","making","police","copyright","web","mean","change","password","seem","white","serving","powered","ask","reserved","idea","logged","tell","against","problem","give","working","learn","full","startup","continue","doing","team","acceptance","constitute","forgot","national","set","tablet","run","consumer","fact","yet","love","different","name","far","cant","women","registration","place","least","disclaimer","sale","directly","become","getting","real","update","party","play","advertising","writer","high","group","turn","keep","public","enough","ready","second","republican","health","everyone","once","away","pay","under","years","browser","five","past","buy","deal","old","left","store","former","small","early","computer","law","based","guy","looking","bad","office","covered","price","design","kind","bit","support","offer","search","note","person","start","likely","advertise","reason","guest","having","sure","took","hardware","per","screen","bill","respect","blog","space","taking","probably","platform","war","key","john","power","again","someone","seen","later","men","watch","family","hand","important","website","employee","version","however","care","believe","pretty","marketing","went","issue","official","trying","until","started","night","course","china","alway","intelligence","add","guideline","customer","instead","everything","security","current","building","asked","sign","anonymity","brand","hard","whether","country","coming","digital","revenue","manually","mac","scoop","amazon","wont","examples","gun","strong","four","hit","include","thought","latest","submitting","review","huge","launch","order","student","available","following","word","markup","coded","pro","especially","death","done","children","style","maybe","daily","credit","camera","talk","kid","control","below","among","came","example","event","blackberry","street","cost","fire","woman","picture","yahoo","industry","model","developer","black","running","source","anything","together","simply","major","this","commerce","book","allow","quarter","growth","behind","biggest","member","pap","business","chart","move","provide","court","face","almost","tax","stop","music","create","given","several","recent","university","project","map","display","lead","head","try","air","popular","thank","young","result","known","gay","program","account","side","invest","cut","star","wanted","release","images","possible","list","act","college","anyone","history","often","earlier","link","focused","sheet","saw","shot","clear","either","worked","message","area","dead","center","human","build","six","movie","north","saying","true","whole","itself","along","morning","happen","operating","announced","local","released","sex","campaign","worth","sound","sell","interview","taken","bring","rather","reported","park","galaxy","news","code","minute","food","devices","ability","record","tool","half","require","age","research","nothing","mark","final","meet","claim","girl","currently","attack","win","finally","statement","march","consider","couple","check","nearly","light","investor","wrong","mini","says","parent","military","within","reporter","conference","august","led","room","study","broker","personal","text","leave","large","easy","wrote","level","posted","lost","due","single","hope","value","art","drive","founder","covering","force","third","fan","offering","department","capital","test","remain","cover","general","fox","partner","else","published","front","moment","close","outside","united","executive","appear","wall","hold","matter","seconds","sense","sold","stand","mind","soon","moving","simple","forward","federal","water","killed","body","leader","secret","senate","democratic","global","expect","near","original","similar","film","player","board","private","fast","financial","action","became","red","beyond","potential","exactly","science","talking","worker","development","send","quickly","editor","quite","himself","entire","eye","shooting","late","spent","drug","answer","yes","short","desktop","sandy","added","charge","total","explain","smart","responsible","international","step","form","cloud","type","director","low","dollar","created","companies","trial","expected","track","startups","built","mother","users","ill","medical","doctor","decision","piece","officer","application","surface","completely","community","annual","redirected","cash","amount","longer","spending","silicon","interesting","vote","die","boy","write","effect","detail","arm","rate","enterprise","award","spend","stuff","dad","largest","turned","server","bar","mitt","lie","sort","above","launched","began","save","child","chief","increase","suspect","dog","marathon","hot","although","stay","growing","fall","visual","political","race","option","heard","sent","chance","super","electronic","location","worst","retail","analyst","response","effort","copy","thousand","road","firm","gave","strategy","laptop","date","communication","figure","despite","prior","previously","died","owner","evidence","debate","newsletter","sometime","fun","rest","tap","south","average","times","tip","happened","break","amazing","rule","speak","common","lab","paid","understand","solution","yourself","battery","risk","bottom","town","presidential","interest","individual","favorite","jay","cat","designed","tried","raised","heart","son","economy","remember","guide","toward","sport","performance","won","position","starting","rap","carrier","fund","meeting","click","decided","photos","wait","giving","gone","writing","sept","scene","further","debt","massive","living","relationship","agency","fix","management","nice","staff","thinking","god","special","perfect","traffic","written","author","return","box","sit","sites","received","victim","updated","hundred","expensive","hate","inch","knew","powerful","mile","size","met","weekend","raise","paper","multiple","tweet","standard","cup","touch","marriage","leading","buying","eat","certain","attention","letter","external","legal","choice","crazy","middle","reader","driver","playing","oil","successful","east","whose","selling","shutdown","reveal","senior","ten","pad","services","maker","rich","changed","television","weapon","season","cable","hear","suggest","candidate","specific","kill","higher","west","iii","role","cool","valley","lap","expert","addition","looked","range","clearly","viewed","focus","energy","culture","happy","enabled","speech","file","voice","nation","learned","investment","gaming","lee","fit","mom","cause","felt","restaurant","opportunity","card","pop","reach","months","budget","driving","certainly","politic","lad","hosted","round","challenge","unit","martin","eventually","log","div","hospital","venture","wed","compared","machine","trend","mayer","door","defense","hey","wife","sad","rep","begin","sea","poll","decade","overall","ton","held","conservative","earning","enabling","stage","upon","needed","square","pie","rim","pep","period","download","baby","feed","profile","whatever","demand","target","things","par","election","tea","sharing","funding","ahead","ban","mostly","goal","payment","walk","involved","japan","attempt","rise","patient","benefit","audience","lower","features","request","provided","reportedly","quality","father","pick","fee","reports","net","fight","jobs","products","asking","immediately","giant","ground","holding","speaker","friends","alone","song","mph","hell","generation","present","fiscal","ran","changing","significant","apparently","seeing","production","grow","additional","upgrading","revealed","calling","journal","situation","sen","showing","hub","education","senator","patent","games","crime","related","officially","brought","earth","joining","days","networking","bought","document","administration","bank","visit","yesterday","drop","island","bowl","bush","speed","contact","reality","awesome","difference","summer","journalist","associated","difficult","pat","prison","inspired","played","color","watching","myself","magazine","cook","weight","paste","explained","included","majority","physical","advantage","bin","sleep","computing","helped","beat","convention","killing","embed","complete","career","allowed","rip","highly","arrested","basic","approach","oracle","kindle","ecosystem","named","bigger","noted","base","definitely","match","ended","button","character","economic","training","beautiful","judge","function","pin","researcher","democrat","gap","nor","shit","fine","interested","trip","smaller","leaving","instance","justice","charged","etc","profit","loading","active","delivered","pet","title","pit","corporate","bid","handset","located","main","condition","brain","lose","worse","becoming","surveillance","onto","practice","hearing","coverage","connected","sum","connection","manager","showed","continued","was","imagine","murder","totally","particular","block","concept","ship","green","era","mar","creating","paying","conversation","aid","purchase","holiday","impact","professional","spy","reporting","receive","aim","actual","football","deliver","bunch","gadget","push","scientist","advice","basically","easily","cancer","amp","bet","host","produce","count","foreign","seemed","brother","pope","radio","arrive","king","entirely","normal","meanwhile","bag","fear","newspaper","skill","fat","phones","investigation","exchange","identity","limited","travel","founded","truth","sponsored","larger","storage","dozen","measure","rob","knowledge","innovation","speaking","bay","mistake","discussion","deep","operation","peter","brief","easier","poor","telling","waiting","systems","prove","surprise","threat","army","clean","beginning","station","field","seven","reached","gold","competition","fed","putting","core","hook","lack","resident","chip","table","keyboard","winner","attorney","alternative","required","fair","meant","aha","confirmed","animal","egg","sun","advertiser","committee","ram","alp","club","blood","traditional","material","shut","bpi","truly","particularly","bob","unique","words","northern","issues","finding","mike","church","hip","possibly","mix","serve","bed","safe","willing","engine","strike","avoid","eight","pew","pea","activity","plenty","thoughts","language","organization","factor","sorry","tiny","channel","income","direct","baa","acquisition","wonder","joke","ppr","est","battle","designer","cap","adding","scale","path","joy","feeling","gift","cliff","ice","insurance","offered","dark","ppm","trouble","river","tag","choose","quick","flight","impressive","pull","others","exploding","subject","cell","pee","join","specifically","failed","hill","episode","generally","none","protect","older","pen","words","lip","brown","indeed","worldwide","engineer","teen","disaster","teacher","moved","usually","opened","pal","pry","odd","distribution","ray","pair","nap","daughter","learning","keeping","pressure","manufacturer","providing","leg","chi","rock","losing","broke","woe","fired","described","behavior","surprising","cab","missing","straight","collection","forget","caught","agree","aka","alt","console","cannot","spot","describe","rat","dip","modern","husband","tablets","concern","returned","rape","damage","feet","tom","rose","extra","dab","pup","useful","seriously","eating","absolutely","hat","lit","walking","county","bah","mad","virtual","enter","professor"]};
(function ($) {
	'use strict';

	/**
	 * @param {Event} event
	 * @returns {String}
	 */
	function getWordFromEvent(event) {
		var range, word;
		// IE
		if (document.body && document.body.createTextRange) {
			range = document.body.createTextRange();
			range.moveToPoint(event.clientX, event.clientY);
			range.expand('word');
			return range.text;
		// Firefox
		} else if (event.rangeParent && document.createRange) {
			range = document.createRange();
			range.setStart(event.rangeParent, event.rangeOffset);
			range.setEnd(event.rangeParent, event.rangeOffset);
			expandRangeToWord(range);
			word = range.toString();
			return word;
		// Webkit
		} else if (document.caretRangeFromPoint) {
			range = document.caretRangeFromPoint(event.clientX, event.clientY);
			expandRangeToWord(range);
			word = range.toString();
			return word;
		// Firefox for events without rangeParent
		} else if (document.caretPositionFromPoint) {
			var caret = document.caretPositionFromPoint(event.clientX, event.clientY);
			range = document.createRange();
			range.setStart(caret.offsetNode, caret.offset);
			range.setEnd(caret.offsetNode, caret.offset);
			expandRangeToWord(range);
			word = range.toString();
			range.detach();
			return word;
		} else {
			return null;
		}
	}

	/**
	 *
	 * @param {Range} range
	 * @returns {String}
	 */
	function expandRangeToWord(range) {
		while (range.startOffset > 0) {
			if (range.toString().indexOf(' ') === 0) {
				range.setStart(range.startContainer, range.startOffset + 1);
				break;
			}
			range.setStart(range.startContainer, range.startOffset - 1);
		}
		while (range.endOffset < range.endContainer.length && range.toString().indexOf(' ') == -1) {
			range.setEnd(range.endContainer, range.endOffset + 1);
		}
		return range.toString().trim();
	}

	/**
	 * Attach/detach event(s) to element and call handler when event is triggered
	 * @param {String} event
	 * @param {Function|Boolean} handler function(Event event, String word)
	 */
	$.fn.getWordByEvent = function(event, handler) {
		// Save last coordinates for events which does not have coordinates info (such as taphold)
		var coordinates = {};

		function handleCoordinates(e) {
			coordinates = { x: e.clientX, y: e.clientY };
		}

		function handle(e) {
			e = e.originalEvent || e;
			if (!e.clientX) {
				e.clientX = coordinates.x;
				e.clientY = coordinates.y;
			}
			handler.call(this, e, getWordFromEvent(e));
		}

		if (handler) {
			this.data('getWordByEvent.handleCoordinates', handleCoordinates);
			this.data('getWordByEvent.handler', handle);
			this.on('mousedown', handleCoordinates);
			this.on(event, handle);
		} else {
			this.off('mousedown', this.data('getWordByEvent.handleCoordinates'));
			this.off(event, this.data('getWordByEvent.handler'));
		}
	};
})(jQuery);
function showMessage(html) {
$('#ajaxmeaning').html(html+"<input type='button' id='hideshow' onclick='$(\"#ajaxmeaning\").animate( { bottom:\"-500\" } , 500);' value='X'>");
          $('#ajaxmeaning').animate( { bottom:"0" } , 500);

}

$(function() {

$('a.word').getWordByEvent('mousemove', function(event, xword) {

$.ajax({
    url: websiteurl+'dic.php',
	 cache: true,
    jsonp: "callback",
	jsonpCallback: "callback",
    dataType: "jsonp",
data: { q : xword },
 
    // Work with the response
    success: function( response ) {
	showMessage(response[0]);

    }
});


});

var oTextbox = new AutoSuggestControl("key");
});
