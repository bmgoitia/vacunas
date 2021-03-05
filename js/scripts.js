


/* DATA */

/*let totalEsp = 54;  // fake data
let totalEsp2 = 3;*/  // fake data

let dataES = {
	id: "ES",
	name: "España",
	/*perc: 53, // fake data
	perc2: 7,*/ // fake data
	pop: 47351567,
	persVac1: 4471577,  /* Ojo, hay que restar persVac2 */
	persVac2: 1342485, /* Personas con la pauta completa*/
	dosEntr: 5583955, 
	dosAdmin: 4471577, 
	dosAdminPerc: "80%", // no decimal!!
	dosPfi: 3755447,  
	dosMod: 176792,
	dosAst: 539338,
	dosJJ: 0,
	dosSan: 0,

};

let dataCA = [
	
	{id: "AN",
		name: "Andalucía",
		/*perc: 7,*/ // fake data
		pop: 8464411, 
		persVac1: 878194,
		persVac2: 244049,
		dosEntr: 1021430, 
		dosAdmin: 878194,
		dosAdminPerc: "86%",  // no decimal!!
		dosPfi: 739530,
		dosMod: 73300,
		dosAst: 208600,
		dosJJ: 0,
		dosSan: 0,
	},

	{id: "AR",
		name: "Aragón",
		/*perc: 15,*/
		pop: 1329391,
		persVac1: 150631,
		persVac2: 49532,
		dosEntr: 175485,
		dosAdmin: 150631,
		dosAdminPerc: "85%",
		dosPfi: 130185,
		dosMod: 12600,
		dosAst: 32700,
		dosJJ: 0,
		dosSan: 0,

	},
	{id: "AS",
		name: "Asturias",
		/*perc: 22,*/
		pop: 1018784,
		persVac1: 128729,
		persVac2: 43690,
		dosEntr: 166335,
		dosAdmin: 128729,
		dosAdminPerc: "77%",
		dosPfi: 128435,
		dosMod: 12700,
		dosAst: 25200,
		dosJJ: 0,
		dosSan: 0,

	},
	{id: "BA",
		name: "Baleares",
		/*perc: 41,*/
		pop: 1171543,
		persVac1: 74598,
		persVac2: 23934,
		dosEntr: 101180,
		dosAdmin: 74598,
		dosAdminPerc: "73%",
		dosPfi: 65880,
		dosMod: 6500,
		dosAst: 28800,
		dosJJ: 0,
		dosSan: 0,

	},
	{id: "IC",
		name: "Canarias",
		/*perc: 93,*/
		pop: 2175952,
		persVac1: 167802,
		persVac2: 54601,
		dosEntr: 216560,
		dosAdmin: 167802,
		dosAdminPerc: "77%",
		dosPfi: 148560,
		dosMod: 14300,
		dosAst: 53700,
		dosJJ: 0,
		dosSan: 0,

	},
	{id: "CN",
		name: "Cantabria",
		/*perc: 30,*/
		pop: 582905,
		persVac1: 66555,
		persVac2: 20759,
		dosEntr: 82945,
		dosAdmin: 66555,
		dosAdminPerc: "80%",
		dosPfi: 62745,
		dosMod: 5900,
		dosAst: 14300,
		dosJJ: 0,
		dosSan: 0,

	},
	{id: "CL",
		name: "Castilla León",
		/*perc: 18,*/
		pop: 2394918	,
		persVac1: 293772,
		persVac2: 97774,
		dosEntr: 371495,
		dosAdmin: 293772,
		dosAdminPerc: "79%",
		dosPfi: 285195,
		dosMod: 27300,
		dosAst: 59000,
		dosJJ: 0,
		dosSan: 0,

	},
	{id: "CM",
		name: "Castilla La-Mancha",
		/*perc: 42,*/
		pop: 2045221,
		persVac1: 195716,
		persVac2: 71960,
		dosEntr: 259575,
		dosAdmin: 195716,
		dosAdminPerc: "75%",
		dosPfi: 190575,
		dosMod: 18600 ,
		dosAst: 50400,
		dosJJ: 0,
		dosSan: 0,

	},
	{id: "CT",
		name: "Catalunya",
		/*perc: 9,*/
		pop: 7780479,
		persVac1: 734794,
		persVac2: 192984,
		dosEntr: 906440,
		dosAdmin: 734794,
		dosAdminPerc: "81%",
		dosPfi: 651140,
		dosMod: 63400,
		dosAst: 191900,
		dosJJ: 0,
		dosSan: 0,

	},
	{id: "CV",
		name: "C. Valenciana",
		/*perc: 44,*/
		pop: 5057353,
		persVac1: 394016,
		persVac2: 113075,
		dosEntr: 497060,
		dosAdmin: 394016,
		dosAdminPerc: "79%",
		dosPfi: 340660,
		dosMod: 31700,
		dosAst: 124700,
		dosJJ: 0,
		dosSan: 0,

	},
	{id: "EX",
		name: "Extremadura",
		/*perc: 22,*/
		pop: 1063987,
		persVac1: 125191,
		persVac2: 43176,
		dosEntr: 152425,
		dosAdmin: 125191,
		dosAdminPerc: "82%",
		dosPfi: 115325,
		dosMod: 10900,
		dosAst: 26200,
		dosJJ: 0,
		dosSan: 0,

	},
	{id: "GA",
		name: "Galicia",
		/*perc: 67,*/
		pop: 2701819,
		persVac1: 255614,
		persVac2: 68562,
		dosEntr: 309015,
		dosAdmin: 255614,
		dosAdminPerc: "82%",
		dosPfi: 222415,
		dosMod: 19900,
		dosAst: 66700,
		dosJJ: 0,
		dosSan: 0,

	},
	{id: "LR",
		name: "La Rioja",
		/*perc: 51,*/
		pop: 319914,
		persVac1: 33316,
		persVac2: 10329,
		dosEntr: 42155,
		dosAdmin: 33316,
		dosAdminPerc: "79%",
		dosPfi: 31655,
		dosMod: 2700,
		dosAst: 7800,
		dosJJ: 0,
		dosSan: 0,

	},
	{id: "MA",
		name: "Madrid",
		/*perc: 18,*/
		pop: 6779888,
		persVac1: 598738,
		persVac2: 177916,
		dosEntr: 748435,
		dosAdmin: 598738,
		dosAdminPerc: "80%",
		dosPfi: 529935,
		dosMod: 51300,
		dosAst: 167200,
		dosJJ: 0,
		dosSan: 0,

	},
	{id: "MU",
		name: "Murcia",
		/*perc: 73,*/
		pop: 1511251,
		persVac1: 137200,
		persVac2: 51169,
		dosEntr: 184705,
		dosAdmin: 137200,
		dosAdminPerc: "74%",
		dosPfi: 134105,
		dosMod: 13400,
		dosAst: 37200,
		dosJJ: 0,
		dosSan: 0,
	},
	{id: "NA",
		name: "Navarra",
		/*perc: 21,*/
		pop: 661197,
		persVac1: 68249,
		persVac2: 23670,
		dosEntr: 84845,
		dosAdmin: 68249,
		dosAdminPerc: "80%",
		dosPfi: 62745,
		dosMod: 5900,
		dosAst: 16200,
		dosJJ: 0,
		dosSan: 0,

	},
	{id: "PV",
		name: "País Vasco",
		/*perc: 38,*/
		pop: 2220504,
		persVac1: 155955,
		persVac2: 52452,
		dosEntr: 248460,
		dosAdmin: 155955,
		dosAdminPerc: "62%",
		dosPfi: 177660,
		dosMod: 16000,
		dosAst: 54800,
		dosJJ: 0,
		dosSan: 0,

	},


	
];



/* Calc ESP data (initial load) */

var popEs = parseInt(dataES.pop); // total population

var pers1Es = parseInt(dataES.persVac1);
var pers2Es = parseInt(dataES.persVac2);
var p1PercEs = parseFloat((pers1Es / popEs) * 100).toFixed(1); //

var p2PercEs = parseFloat((pers2Es / popEs) * 100).toFixed(1);

var dAdminEs = parseInt(dataES.dosAdmin);

var dPfiEs = parseInt(dataES.dosPfi);
var dModEs = parseInt(dataES.dosMod);
var dAstEs = parseInt(dataES.dosAst);
var dJJEs = parseInt(dataES.dosJJ);
var dSanEs = parseInt(dataES.dosSan);

var dPfiPercEs = parseFloat((dPfiEs / dAdminEs) * 100).toFixed(1);
var dModPercEs = parseFloat((dModEs / dAdminEs) * 100).toFixed(1);
var dAstPercEs = parseFloat((dAstEs / dAdminEs) * 100).toFixed(1);
var dJJPercEs = parseFloat((dJJEs / dAdminEs) * 100).toFixed(1);
var dSanPercEs = parseFloat((dSanEs / dAdminEs) * 100).toFixed(1);




window.onload = function() {


	/* FAKE initial data */

	/*setTitle(dataES.name, totalEsp);
	fillUp(totalEsp * 0.01);
	setDouble(totalEsp2);
	setProgressBar(dataES.dosAdminPerc);
	setTotalVac(dAdminEs);*/
	





/* Initial data */
	
	setTitle(dataES.name, p1PercEs);
	fillUp(p1PercEs * 0.01);
	setDouble(p2PercEs);
	setProgressBar(dataES.dosAdminPerc);
	setTotalVac(dAdminEs);
	


	/* Select */

	$("select").on("change",getCAValue);
	$("select").on("change",function(){
		$("#backArrow").css("display", "none");
	});


	/* Show Dummy Modal */

	$("#moreInfo").on("click", function(){
		$("#dummyModal").css("display", "block");
		$("#dummyModal").css("z-index", "17");

		/* Set initial data (ESP)*/

		/* FAKE DATA!!!! */

		/*$("#vac1 .progress-bar").text("76%");
		$("#vac1 .progress-bar").animate({
      width: "76%"
    }, 2500);

		$("#vac2 .progress-bar").text("24%");
    $("#vac2 .progress-bar").animate({
      width: "24%"
    }, 2500);*/


    /* END OF FAKE DATA */

		/* REAL DATA */
		$("#vac1 .progress-bar").text(`${dPfiPercEs}%`);
		$("#vac1 .progress-bar").animate({
      width: (`${dPfiPercEs}%`)
    }, 2500);

		$("#vac2 .progress-bar").text(`${dModPercEs}%`);
    $("#vac2 .progress-bar").animate({
      width: (`${dModPercEs}%`)
    }, 2500);

    $("#vac3 .progress-bar").text(`${dAstPercEs}%`);
    $("#vac3 .progress-bar").animate({
      width: (`${dAstPercEs}%`)
    }, 2500);

    $("#vac4 .progress-bar").text(`${dJJPercEs}%`);
    $("#vac4 .progress-bar").animate({
      width: (`${dJJPercEs}%`)
    }, 2500);

    $("#vac5 .progress-bar").text(`${dSanPercEs}%`);
    $("#vac5 .progress-bar").animate({
      width: (`${dSanPercEs}%`)
    }, 2500);

	})


	/* Hide Dummy Modal */
	$(".dummyModalClose span").on("click", function(){
		$("#dummyModal").css("display", "none");
		$("#dummyModal").css("z-index", "0");
	})



	/* Dummy to map */

	$("#mapButton").on("click", hideDummy);
	$("#mapButton").on("click", setRadials);
	$("#mapButton").on("click", function(){
		$("#backArrow").css("display", "block");
		$("#vacAdmin").css("display", "none");
	});

	$("#backArrow").on("click", hideMap);
	$("#backArrow").on("click", function(){
		$(this).css("display", "none");
		$("#vacAdmin").css("display", "block");
	});




 
};





/* FUNCTIONS */

/* GET */

/* Get select value */

function getCAValue(){ 
	$(this).find("option:selected").each(function(){ 
     optionValue = $(this).attr("value"); 
  });
    
    sessionStorage.setItem('CA', optionValue);

    getData(optionValue);
    hideMap();

}



/* Get CA DATA */

function getData(value){
	dataCA.forEach(function(item,pos){
		if(value == item.id){
			var pop = parseInt(item.pop);
			var pers1 = parseInt(item.persVac1);
			var p1Perc = parseFloat((pers1 / pop) * 100).toFixed(1); // 3.3 (string)


			/* FAAAAAKEEEEE */
			/*setTitle(item.name, item.perc); 
			fillUp(item.perc * 0.01);*/

			/* REEEAAAALLLL */

			setTitle(item.name, p1Perc); 
			fillUp(p1Perc * 0.01);

			var pDouble = parseInt(item.persVac2);
			var p2Perc = parseFloat((pDouble / pop) * 100).toFixed(1);

			setDouble(p2Perc);
			setTotalVac(item.dosAdmin);

			var dEntr = parseInt(item.dosEntr);
			var dPfi = parseInt(item.dosPfi);
			var dMod = parseInt(item.dosMod);
			var dAst = parseInt(item.dosAst);
			var dJJ = parseInt(item.dosJJ);
			var dSan = parseInt(item.dosSan);

			var dPfiPerc = parseFloat((dPfi / dEntr) * 100).toFixed(1);
			var dModPerc = parseFloat((dMod / dEntr) * 100).toFixed(1);
			var dAstPerc = parseFloat((dAst / dEntr) * 100).toFixed(1);
			var dJJPerc = parseFloat((dJJ / dEntr) * 100).toFixed(1);
			var dSanPerc = parseFloat((dSan / dEntr) * 100).toFixed(1);
			
			setDummyModal(dPfiPerc, dModPerc, dAstPerc, dJJPerc, dSanPerc);

			setProgressBar(item.dosAdminPerc);

		}
	});

}



/* SET */

/* 1- Set Title*/

function setTitle(name, value){
	$("#mainTitle h3").text(`${name}`);
	$("#Vac1Perc").text(`${value}%`);
}


/* 2 - SVG filling */
	function fillUp(perc){      /*Ex: setPerc(0.33);*/
	  gsap.to("#statsPerc stop", 1, {
     attr: { offset: perc },
     ease: "none"
    });
	}



/* 3- Set double dose perc. */

function setDouble(val){
	$(".Vac2Perc").text(`${val}%`);

}


/* 4- Set Dummy Modal */
function setDummyModal(pfi, mod, ast, jj, san){
	console.log("dummy clicked");
	console.log(sessionStorage.CA);  // AS, EX, MU...
	$("#vac1 .progress-bar").text(`${pfi}%`);
	$("#vac1 .progress-bar").animate({
    width: (`${pfi}%`)
  }, 2500);

	$("#vac2 .progress-bar").text(`${mod}%`);
	$("#vac2 .progress-bar").animate({
    width: (`${mod}%`)
  }, 2500);

	$("#vac3 .progress-bar").text(`${ast}%`);
	$("#vac3 .progress-bar").animate({
    width: (`${ast}%`)
  }, 2500);

	$("#vac4 .progress-bar").text(`${jj}%`);
	$("#vac4 .progress-bar").animate({
    width: (`${jj}%`)
  }, 2500);

	$("#vac5 .progress-bar").text(`${san}%`);
	$("#vac5 .progress-bar").animate({
    width: (`${san}%`)
  }, 2500);

	
}


/* 5- Set Total Vaccinated */

function setTotalVac(val){
  val = formatNumber(val);
	$(".totalVac").text(val);
}




/* 6- Set progress bar */

function setProgressBar(val){
	$("#adminBar .progress-bar").text(val);
	$("#adminBar .progress-bar").animate({
		width: val
	}, 2500);


}




/* 6 -  Set radials */

function setRadials(){
	dataCA.forEach(function(item,pos){

		/* FAKE DATA */
		/*var fakeR = item.perc;*/

		/* END OF FAKE DATA */

		var nameR = item.id;
		var popR = parseInt(item.pop);
		var pers1R = parseInt(item.persVac1);
		var p1PercR = parseFloat((pers1R / popR) * 100).toFixed(); // 3 (string)
		console.log(p1PercR); 


		$("#" + nameR + " .donut-percent").text(`${p1PercR}%`);  // replace fakeR with p1PercR all around

		$("#" + nameR + " .donut-segment").attr("stroke-dasharray", `${p1PercR} ${100 - p1PercR}`);

		$("#" + nameR + " .donut-segment").css("animation-name", `${nameR}`);


	 
			$.keyframe.define([{
		    name: nameR,
		    '0%': {'stroke-dasharray': '0, 100'},
		    '100%': {'stroke-dasharray': (`${p1PercR}, ${100 - p1PercR}`)}
		  }]);

  });

}






/* ------------------------------*/


function hideDummy(){
	$("#dummy").css("display", "none");
	$("#mapCA").css("display", "block");
}


function hideMap(){
	$("#mapCA").css("display", "none");
	$("#dummy").css("display", "block");
}
 

/* ------------------------------*/

function formatNumber(num) {
    if (!num || num == 'NaN') return '-';
    if (num == 'Infinity') return '&#x221e;';
    num = num.toString().replace(/\$|\,/g, '');
    
    if (isNaN(num))
        num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    cents = num % 100;
    num = Math.floor(num / 100).toString();
    if (cents < 10)
        cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3) ; i++)
        num = num.substring(0, num.length - (4 * i + 3)) + '.' + num.substring(num.length - (4 * i + 3));
    return num;
}


/*Andalucía - AN
Aragón - AR
Asturias - AS
Baleares - BA
Canarias - IC
Cantabria - CN
Castilla y León - CL
Castilla La Mancha - CM
Catalunya - CT
C. Valenciana - CV
Extremadura - EX
Galicia - GA
La Rioja - LR
Madrid - MA
Murcia - MU
Navarra - NA
País Vasco - PV*/