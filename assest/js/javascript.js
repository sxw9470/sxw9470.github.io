 /**
	Name:ShunYong Weng  
	Date:November 6,2018
	ISTE340 Project2 – javascript File
*/

/** This is a function for make a nav bar**/
	var fab = new Fab({
    // container element
    selector: "#cont",
    // button options
    button: {
      style: "huge orange",
      html: ""
    },
    // custom styles of the floating menu toggle button
    icon:{
      style: "",
      html: "RIT"
    },
    // "top-left" || "top-right" || "bottom-left" || "bottom-right"
    position: "top-right",

    // "horizontal" || "vertical"
    direction: "vertical",

    // an array of custom action buttons
    buttons:[
      {
        button: {
          style: "big yellow",
          html: ""
        },
        icon:{
          style: "",
          html: "NAVIGATE"
        },
        onClick: function(){
          console.log("fire");
        }
      },
      {
        button: {
          style: "big red",
          html: ""
        },
        icon:{
          style: "",
          html: "News"
        },
        onClick: function(){
          console.log("ice");
        }
      },
      {
        button: {
          style: "big blue",
          html: ""
        },
        icon:{
          style: "",
          html: "Contact"
        },
        onClick: function(){
          console.log("ice");
        }
      },
      {
        button: {
          style: "big orange",
          html: ""
        },
        icon:{
          style: "",
          html: "Apply"
        },
        onClick: function(){
          console.log("ice");
        }
      }
	  
    ],
    // callback functions
    onOpen: function(){},
    onClose: function(){}
});



	//This is function for getting the about information
	//api:  http://www.ist.rit.edu/api/
	$(document).ready(function(){
		
		myXhr('get',{path:'/about/'},'#about').done(function(json){
				var x="<h2>"+json.title+"</h2>";
				x+="<p>"+json.description+"</p>";
				x+="<p><i class='fas fa-2x fa-quote-left fa-border'></i>" +json.quote+ "<i class='fas fa-2x fa-quote-right fa-border'></i></p>";
				x+="<p class='aboutText3'>"+json.quoteAuthor+"</p>";
				$('#about').html(x);
		});
		
	
	//This is function for getting the undergraduate information
		myXhr('get',{path:'/degrees/undergraduate/'},'#content1').done(function(json){
			//got good data back in json
			//dump out all of the degree titles
			
			$('#underHeader').append('<h2>Our Undergraduate Degrees</h2>');
			
			$('#content1').append('<div class="p_body js__p_body js__fadeout"></div>');
			$('#under1').append('<h2><i class="fas fa-2x fa-globe-americas"></i></h2>');
			$('#under2').append('<h2><i class="fas fa-2x fa-helicopter"></i></h2>');
			$('#under3').append('<h2><i class="fas fa-2x fa-desktop"></i></h2>');

	
			$.each(json.undergraduate,function(i, item){
				$('#under'+(i+1)).append('<h3>'+item.title+'</h3>'+'<p>'+item.description+'</p>');

				$('#under'+(i+1)).append('<button class="' + 'js__p_another' + (i+1) + '_start"><i class="fas fa-2x fa-plus-square"></i></button>');
				$(".js__p_another1_start, .js__p_another2_start, .js__p_another3_start").simplePopup();
				//$('#under'+(i+1)).append('<div class="p_body js__p_body js__fadeout"></div>');
				
				var $userDiv = $('<div class="popup js__another' + (i+1) + '_popup js__slide_top"></div>');
				
				$userDiv.append('<a href="#" class="p_close js__p_close"><span></span><span></span></a>');
				$userDiv.append('<h3>'+item.title+'</h3>');

				for(var j=0;j<item.concentrations.length;j++){
					var $message = $('<p>'+item.concentrations[j]+'</p>');
					$userDiv.append($message);
				}
				$userDiv.append('<p>To learn more about this degree, visit our website</p>');
				$('#under'+(i+1)).append($userDiv);
				var $text = $('<p class="opci">Click to find out more</p>');
				$('#under'+(i+1)).append($text);
				if(i==2){
					$(".js__p_another1_start, .js__p_another2_start, .js__p_another3_start").simplePopup();
				}
			});
		});
		
		//This is function for getting the graduate information
		myXhr('get',{path:'/degrees/graduate/'},'#content2').done(function(json){
			//got good data back in json
			//dump out all of the degree titles
			$('#graHeader').append('<h2>Our Graduate Degrees</h2>');
			
			//$('#content2').append('<div class="p_body js__p_body js__fadeout"></div>');
			
			$('#gra1').append('<h2><i class="fas fa-2x fa-chalkboard-teacher"></i></h2>');
			$('#gra2').append('<h2><i class="far fa-2x fa-handshake"></i></h2>');
			$('#gra3').append('<h2><i class="fas fa-2x fa-network-wired"></i></h2>');
			
			$.each(json.graduate,function(i, item){
				if(i == 3){
					var $graText = $('<div class="graText"></div>');
					$graText.append('<h3>'+item.degreeName+'</h3>');
					$graText.append('<a class="aClass" href="https://www.rit.edu/programs/web-development-adv-cert" target="_blank"><i class="fas fa-2x fa-certificate"></i></a>');
					$graText.append('<a class="bClass" href="https://www.rit.edu/programs/web-development-adv-cert" target="_blank">'+item.availableCertificates[0]+'</a>');

					$graText.append('<a class="aClass" href="https://www.rit.edu/programs/networking-planning-and-design-adv-cert" target="_blank"><i class="fas fa-2x fa-server"></i></a>');
					$graText.append('<a class="cClass" href="https://www.rit.edu/programs/networking-planning-and-design-adv-cert" target="_blank">'+item.availableCertificates[1]+'</a>');

					$('#content2').append($graText);
				}else{
					$('#gra'+(i+1)).append('<h3>'+item.title+'</h3>'+'<p class="textBlack">'+item.description+'</p>');

					$('#gra'+(i+1)).append('<button class="' + 'js__p_another' + (i+4) + '_start"><i class="fas fa-2x fa-plus-square"></i></button>');
					$(".js__p_another4_start, .js__p_another5_start, .js__p_another6_start").simplePopup();
				
					var $userDiv = $('<div class="popup js__another' + (i+4) + '_popup js__slide_top"></div>');
				
					$userDiv.append('<a href="#" class="p_close js__p_close"><span></span><span></span></a>');
					$userDiv.append('<h4>'+item.title+'</h4>');

					for(var j=0;j<item.concentrations.length;j++){
						var $message = $('<p>'+item.concentrations[j]+'</p>');
						$userDiv.append($message);
					}
					$userDiv.append('<p>To learn more about this degree, visit our website</p>');
					$('#gra'+(i+1)).append($userDiv);
					var $text = $('<p class="opci">Click to find out more</p>');
					$('#gra'+(i+1)).append($text);
					if(i==2){
						$(".js__p_another4_start, .js__p_another5_start, .js__p_another6_start").simplePopup();
					}
				}
			});

		});

		//This is a function for getting the minors information
		myXhr('get',{path:'/minors/'},'#content3').done(function(json){
			//got good data back in json
			//dump out all of the degree titles
			$('#content3').append('<h2>Our Undergraduate Minors</h2>');
			$('#content3').append('<p>Expand your field of study</p>');
			

			$('#content3').append('<button class="js__p_another7_start" id="m1"><h2><i class="fas fa-2x fa-database"></i></h2></button>');
			$('#content3').append('<button class="js__p_another8_start" id="m2"><h2><i class="fas fa-2x fa-compass"></i></h2></button>');
			$('#content3').append('<button class="js__p_another9_start" id="m3"><h2><i class="fas fa-2x fa-university"></i></h2></button>');
			$('#content3').append('<button class="js__p_another10_start" id="m4"><h2><i class="fas fa-2x fa-pencil-alt"></i></h2></button>');
			$('#content3').append('<button class="js__p_another11_start" id="m5"><h2><i class="fas fa-2x fa-mobile-alt"></i></h2></button>');
			$('#content3').append('<button class="js__p_another12_start" id="m6"><h2><i class="fas fa-2x fa-hdd"></i></h2></button>');
			$('#content3').append('<button class="js__p_another13_start" id="m7"><h2><i class="fas fa-2x fa-laptop-code"></i></h2></button>');
			$('#content3').append('<button class="js__p_another14_start" id="m8"><h2><i class="fas fa-2x fa-database"></i></h2></button>');

			$.each(json.UgMinors,function(i, item){
				
				$('#m'+(i+1)).append('<h3>' + item.title + '</h3>');

				$(".js__p_another7_start, .js__p_another8_start, .js__p_another9_start, .js__p_another10_start, .js__p_another11_start, .js__p_another12_start,.js__p_another13_start,.js__p_another14_start").simplePopup();
				
				var $userDiv = $('<div class="popup js__another' + (i+7) + '_popup js__slide_top"></div>');
				$userDiv.append('<a href="#" class="p_close js__p_close"><span></span><span></span></a>');
				$userDiv.append('<h4>Minors: '+item.title+'</h4>');
				$userDiv.append('<p>'+item.description+'</p>');
				$userDiv.append('<h5>Courses</h5>');
				for(var j=0;j<item.courses.length;j++){
					var $course = $('<div class="js__p_another' + (j+15) + '_start"' + ' id="m' + (j+9) + '"><h4>'+item.courses[j]+'</h4></div>');
					$userDiv.append($course);
				}
				$userDiv.append('<p class="c3pTag">'+item.note+'</p>');
				$('#m'+(i+1)).append($userDiv);
				if(i==7){
				$(".js__p_another7_start, .js__p_another8_start, .js__p_another9_start, .js__p_another10_start, .js__p_another11_start, .js__p_another12_start,.js__p_another13_start,.js__p_another14_start").simplePopup();
				}
			});
		});
		
		//This is a function for getting the employment introduction information
		myXhr('get',{path:'/employment/introduction/'},'#content4').done(function(json){
			//got good data back in json
			//dump out all of the degree titles
			$.each(json.introduction,function(i, item){
				
				if(i=='title'){
					$('#content4').append('<h2>' + item + '</h2>');
				}
				else if(i=='content'){
					$('#content4').append('<h3>' + item[0].title + '<h3>');
					$('#content4').append('<hr class="hrClass">');
					$('#content4').append('<p>' + item[0].description + '<p>');
					
					//$('#content4').append('<div class="statistics" id="s1" data-animate-scroll=' + "'" + '{"x": "-200","rotationY":"150", "duration": "2.5"}' + "'" +'></div>');
					$('#content4').append('<div class="statistics" id="s1" data-animate-scroll=' + "'" + '{"x": "-300", "y": "-200", "scaleX": "0.45","scaleY": "0.45",  "alpha": "0", "duration": "2","rotationY":"360", "rotationX":"45","rotation":"45"}' + "'" +'></div>');
					$('#content4').append('<div class="statistics" id="s2"></div>');
					$('#content4').append('<div class="statistics" id="s3"></div>');
					$('#content4').append('<div class="statistics" id="s4"></div>');
					
					$('#content4').append('<h3>' + item[1].title + '<h3>');
					$('#content4').append('<hr class="hrClass">');
					$('#content4').append('<p>' + item[1].description + '<p>');
				}
			});
		});
		
		//This is a function for getting the employment degreeStatistics information
		myXhr('get',{path:'/employment/degreeStatistics/'},'#content4').done(function(json){
			//got good data back in json
			//dump out all of the degree titles
			$.each(json.degreeStatistics,function(i, item){
				if(i=='statistics'){
					for(var i=0;i<item.length;i++){
						if(i==2){
							$('#s'+(i+1)).append('<h4>' + item[i].value + '%</h4>');
							$('#s'+(i+1)).append('<p>' + item[i].description + '</p>');
						}else{
						$('#s'+(i+1)).append('<h4>' + item[i].value + '</h4>');
						$('#s'+(i+1)).append('<p>' + item[i].description + '</p>');
						}
					}
				}
			});
			
		});
		
		//This is a function for getting the employment employers information
		myXhr('get',{path:'/employment/employers/'},'#content4').done(function(json){
			//got good data back in json
			//dump out all of the degree titles
			$.each(json.employers,function(i, item){
				if(i=='title'){
					$('#content4').append('<h5>' + item + '<h5>');
					$('#content4').append('<hr class="hrClass">');
				}
				else if(i=='employerNames'){
					$('#content4').append('<div class ="nameNameDiv"></div>');
					for(var i=0;i<item.length;i++){
						$('.nameNameDiv').append('<div class="nameDiv"><p class="namePtag">' + item[i] + '</p></div>');
					}
				}
				
			});
			
		});
		
		//This is a function for getting the employment careers information
		myXhr('get',{path:'/employment/careers/'},'#content4').done(function(json){
			//got good data back in json
			//dump out all of the degree titles
			$.each(json.careers,function(i, item){
				if(i=='title'){
					$('#content4').append('<h5>' + item + '<h5>');
					$('#content4').append('<hr class="hrClass">');
				}
				
				else if(i=='careerNames'){
					$('#content4').append('<div class ="careerCareerDiv"></div>');
					for(var i=0;i<item.length;i++){
						$('.careerCareerDiv').append('<div class="careerDiv"><p class="namePtag">' + item[i] + '</p></div>');
					}
				}
			});
			$('#content4').append('<p>*Employers/Careers are randomly pulled from our recent graduates</p>');
			
		});
		
		//This is a function for getting the employment coopTable information
		myXhr('get',{path:'/employment/coopTable/'},'#content5').done(function(json){
			//got good data back in json
			//dump out all of the degree titles
			$('#content5').append('<button class="js__p_another120_start" id="ct1"></button>');
			
			
			$.each(json.coopTable,function(i, item){

				if(i=='title'){
					$('#ct1').append('<h5>' + item + '<h5>');
					$('#ct1').append('<hr class="hrClass">');
					$('#ct1').append('<p><i class="fas fa-4x fa-table"></i><p>');
					$('#ct1').append('<h5>Recent Student Coop Jobs (6/2013-9/2015)<h5>');
				}
				else if(i=='coopInformation'){
					$(".js__p_another120_start").simplePopup();
				
					var $userDiv = $('<div class="popup js__another120_popup js__slide_top"></div>');
					$userDiv.append('<a href="#" class="p_close js__p_close"><span></span><span></span></a>');
					
					var $tableDiv = $('<div class="tableD"></div>');
					
					var $table = $('<table class="ctTable"><caption>Recent Student Coop Jobs (6/2013-9/2015)</caption><tr><th>DEGREE</th><th>EMPLOYER</th><th>LOCATION</th><th>TERM</th></tr></table>');
					for(var j=0; j<item.length;j++){
						$table.append('<tr><td>' + item[j].degree + '</td><td>' + item[j].employer + '</td><td>' + item[j].city + '</td><td>' + item[j].term + '</td></tr>');
					}
					$tableDiv.append($table);
					$userDiv.append($tableDiv);
					
					$('#ct1').append($userDiv);
					
					if(i=='coopInformation'){
						$(".js__p_another120_start").simplePopup();
					}
				}
			});
			
		});
		
		//This is a function for getting the employment employmentTable information
		myXhr('get',{path:'/employment/employmentTable/'},'#content5').done(function(json){
			//got good data back in json
			//dump out all of the degree titles
			$('#content5').append('<button class="js__p_another121_start" id="et1"></button>');
			$.each(json.employmentTable,function(i, item){

				if(i=='title'){
					$('#et1').append('<h5>' + item + '<h5>');
					$('#et1').append('<hr class="hrClass">');
					$('#et1').append('<p><i class="fas fa-4x fa-database"></i><p>');
					$('#et1').append('<h5>Graduating Student Employment (12/2010-01/2017)<h5>');
				}
				else if(i=='professionalEmploymentInformation'){
					$(".js__p_another121_start").simplePopup();
				
					var $userDiv = $('<div class="popup js__another121_popup js__slide_top"></div>');
					$userDiv.append('<a href="#" class="p_close js__p_close"><span></span><span></span></a>');

					var $tableDiv = $('<div class="tableD"></div>');
					
					var $table = $('<table class="ctTable"><caption>Graduating Student Employment (12/2010-01/2017)</caption><tr><th>DEGREE</th><th>EMPLOYER</th><th>LOCATION</th><th>Title</th><th>DATE</th></tr></table>');
					for(var j=0; j<item.length;j++){
						$table.append('<tr><td>' + item[j].degree + '</td><td>' + item[j].employer + '</td><td>' + item[j].city + '</td><td>' + item[j].title + '</td><td>' + item[j].startDate +'</td></tr>');
					}
					$tableDiv.append($table);
					$userDiv.append($tableDiv);
					
					$('#et1').append($userDiv);
					
					if(i=='professionalEmploymentInformation'){
						$(".js__p_another121_start").simplePopup();
					}
				}
			});
			
		});
		
		//This is a function for getting the people information
		myXhr('get',{path:'/people/'},'#content6').done(function(json){
			// do something...
			var $tabDiv = $('<div id="tabs-1"></div>');
			$.each(json.faculty,function(i, item){
				var $tabButton = $('<button class="js__p_another' + (i+70) +'_start"><h3>'+ item.name +'</h3><p>' + item.title + '</p></button>');
				
				var $userDiv = $('<div class="popup js__another' + (i+70) +'_popup js__slide_top"></div>');
				$userDiv.append('<a href="#" class="p_close js__p_close"><span></span><span></span></a>');
	
				$userDiv.append('<h3>' + item.name + ', <span class="spanClass">' + item.title + '</span></h3>');
				$userDiv.append('<img src="' + item.imagePath + '">');
				
				var $contentDiv = $('<div class="contentDiv"></div>');
				$contentDiv.append('<h6><i class="fas fa-1x fa-map-marker-alt"></i>  ' + item.office +'</h6>');
				$contentDiv.append('<h6><i class="fas fa-1x fa-phone"></i>  ' + item.phone +'</h6>');
				$contentDiv.append('<h6><i class="fas fa-1x fa-envelope"></i> ' + item.email +'</h6>');
				$contentDiv.append('<h6>' + item.website +'</h6>');
				
				$userDiv.append($contentDiv);
				$tabButton.append($userDiv);
				$tabDiv.append($tabButton);
				$('#tabs').append($tabDiv);
				$(".js__p_another70_start, .js__p_another71_start, .js__p_another72_start,.js__p_another73_start,.js__p_another74_start,.js__p_another75_start,.js__p_another76_start,.js__p_another77_start,.js__p_another78_start,.js__p_another79_start,.js__p_another80_start,.js__p_another81_start,.js__p_another82_start,.js__p_another83_start,.js__p_another84_start,.js__p_another85_start,.js__p_another86_start,.js__p_another87_start,.js__p_another88_start,.js__p_another89_start,.js__p_another90_start,.js__p_another91_start,.js__p_another92_start,.js__p_another93_start,.js__p_another94_start,.js__p_another95_start,.js__p_another96_start,.js__p_another97_start,.js__p_another98_start,.js__p_another99_start,.js__p_another100_start,.js__p_another101_start,.js__p_another102_start,.js__p_another103_start").simplePopup();
			});
			
		});
		
		//This is a function for getting the people information
		myXhr('get',{path:'/people/'},'#content6').done(function(json){
			// do something...
			var $tabDiv = $('<div id="tabs-2"></div>');
			$.each(json.staff,function(i, item){
				
				var $tabButton = $('<button class="js__p_another' + (i+50) +'_start"><h3>'+ item.name +'</h3><p>' + item.title + '</p></button>');
				
				var $userDiv = $('<div class="popup js__another' + (i+50) +'_popup js__slide_top"></div>');
				$userDiv.append('<a href="#" class="p_close js__p_close"><span></span><span></span></a>');
	
				$userDiv.append('<h3>' + item.name + ', <span class="spanClass">' + item.title + '</span></h3>');
				$userDiv.append('<img src="' + item.imagePath + '">');
				
				var $contentDiv = $('<div class="contentDiv"></div>');
				$contentDiv.append('<h6><i class="fas fa-1x fa-map-marker-alt"></i>  ' + item.office +'</h6>');
				$contentDiv.append('<h6><i class="fas fa-1x fa-phone"></i>  ' + item.phone +'</h6>');
				$contentDiv.append('<h6><i class="fas fa-1x fa-envelope"></i> ' + item.email +'</h6>');
				$contentDiv.append('<h6>' + item.website +'</h6>');
				
				$userDiv.append($contentDiv);
				$tabButton.append($userDiv);
				$tabDiv.append($tabButton);
				$('#tabs').append($tabDiv);
				
				$(".js__p_another50_start,.js__p_another51_start,.js__p_another52_start,.js__p_another53_start,.js__p_another54_start,.js__p_another55_start,.js__p_another56_start,.js__p_another57_start,.js__p_another58_start,.js__p_another59_start,.js__p_another60_start,.js__p_another61_start,.js__p_another62_start,.js__p_another63_start,.js__p_another64_start,.js__p_another65_start,.js__p_another66_start,.js__p_another67_start").simplePopup();
				/*
				$tabDiv.append('<button><h3>'+ item.name +'</h3><p>' + item.title + '</p></button>');
				$('#tabs').append($tabDiv);*/
			});
			
		});
		
		//This is a function for getting the research byInterestArea information
		myXhr('get',{path:'/research/'},'#content7').done(function(json){
			// do something...
			$('#content7').append('<h2>Faculty Research: Areas of Interest</h2>');
			$('#content7').append('<p>Click the area you’re interested in to explore our faculty publications</p>');
			
			
			$.each(json.byInterestArea,function(i, item){
				var $tabButton = $('<button class="js__p_another' + (i+30) +'_start" id="r' + (i+1) + '"><h3>' + item.areaName +'</h3></button>');
				
				var $userDiv = $('<div class="popup js__another' + (i+30) +'_popup js__slide_top"></div>');
				$userDiv.append('<a href="#" class="p_close js__p_close"><span></span><span></span></a>');
				//$userDiv.append('<h3>' + item.areaName +'</h3>');

				var $researchDiv = $('<div class="researchDiv"></div');
				
				$researchDiv.append('<h4>Research By Domain Area: ' + item.areaName + '</h4>');
				var $ul = $('<ul></ul');
				for(var j=0; j<item.citations.length;j++){
					var $liTag = $('<li>' + item.citations[j] + '</li><');
					$ul.append($liTag);
				}
				$researchDiv.append($ul);
				$userDiv.append($researchDiv);
				
				$tabButton.append($userDiv);
				$('#content7').append($tabButton);
				
				$(".js__p_another30_start,.js__p_another31_start,.js__p_another32_start,.js__p_another33_start,.js__p_another34_start,.js__p_another35_start,.js__p_another36_start,.js__p_another37_start,.js__p_another38_start,.js__p_another30_start,.js__p_another39_start,.js__p_another40_start,.js__p_another41_start").simplePopup();
			});
			$('#r1').append('<p><i class="fas fa-3x fa-user-alt"></i></p>');
			$('#r2').append('<p><i class="fas fa-3x fa-graduation-cap"></i></p>');
			$('#r3').append('<p><i class="fas fa-3x fa-map"></i></p>');
			$('#r4').append('<p><i class="fas fa-3x fa-database"></i></p>');
			$('#r5').append('<p><i class="fas fa-3x fa-chart-pie"></i></p>');
			$('#r6').append('<p><i class="fas fa-3x fa-laptop"></i></p>');
			$('#r7').append('<p><i class="fas fa-3x fa-network-wired"></i></p>');
			$('#r8').append('<p><i class="fas fa-3x fa-mobile-alt"></i></p>');
			$('#r9').append('<p><i class="fas fa-3x fa-briefcase-medical"></i></p>');
			$('#r10').append('<p><i class="far fa-3x fa-hand-paper"></i></p>');
			$('#r11').append('<p><i class="fas fa-3x fa-memory"></i></p>');
			$('#r12').append('<p><i class="fas fa-3x fa-keyboard"></i></p>');
		
		});
		
	
		//This is a function for getting the research byFaculty information
		myXhr('get',{path:'/research/'},'#content8').done(function(json){
			// do something...
			$('#content8').append('<h2>Faculty Research: Lookup by Faculty</h2>');
			$('#content8').append('<p>Click the faculty member to explore their recent publications</p>');
	
			var x = [];
			var name =[];
			var citations = [];
			var fullCitations = [];
			var a =0;
			var count =0;
			$.each(json.byFaculty,function(i, item){
				citations = [];
				x.push(item.username);
				name.push(item.facultyName);
				
				for(var b=0;b<item.citations.length;b++){
					citations.push(item.citations[b]);
				}
				fullCitations.push(citations);
		
				myXhr('get',{path:'/people/'},'#content8').done(function(json){
					if(a==0){
					$.each(json.faculty,function(i, item){
						for(var j=0;j<x.length;j++){
							if(x[j] == item.username){
								var $imgButton = $('<button class="js__p_another' + (count+300) +'_start"' +'><img src="' + item.imagePath + '"></button>');
								//$('#content8').append('<img class="js__p_another' + (count+300) +'_start"' +' src="' + item.imagePath + '">');
								
								var $userDiv = $('<div class="popup js__another' + (count+300) +'_popup js__slide_top"></div>');
								$userDiv.append('<a href="#" class="p_close js__p_close"><span></span><span></span></a>');
								
								$userDiv.append('<h3>' + name[j] + '</h3>');
								
								var $ul = $('<ul></ul>');
								for(var n=0; n<fullCitations[j].length;n++){
									$ul.append('<li>' + fullCitations[j][n] + '</li>');
								}
								
								$userDiv.append($ul);
								$imgButton.append($userDiv);
								$('#content8').append($imgButton);
								$(".js__p_another300_start,.js__p_another301_start,.js__p_another302_start,.js__p_another303_start,.js__p_another304_start,.js__p_another305_start,.js__p_another306_start,.js__p_another307_start,.js__p_another308_start,.js__p_another309_start,.js__p_another310_start,.js__p_another311_start,.js__p_another312_start,.js__p_another313_start,.js__p_another314_start,.js__p_another315_start,.js__p_another316_start,.js__p_another317_start,.js__p_another318_start").simplePopup();
								count++;
							}
						}
						a=1;
					});
					}
				});	
			});
		});

		//This is a function for getting the resources information
		myXhr('get',{path:'/resources/'},'#content9').done(function(json){
			//got good data back in json
			//dump out all of the degree titles
			$('#content9').append('<h2>' + json.title + '</h2>');
			$('#content9').append('<p>' + json.subTitle + '</p>');
			
			$('#content9').append('<h3>Our Student</h3>');
			
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Co-op Enrollment</h4></button>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Forms</h4></button>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Tutors/Lab Information</h4></button>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Course Enrollment</h4></button>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Minors & Immersions</h4></button>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Student Advising Services</h4></button>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Student Ambassadors</h4></button>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Study Abroad</h4></button>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Commencement</h4></button>');
			
			
			$('#content9').append('<h3>Prospective Students</h3>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Study Abroad</h4></button>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Student success</h4></button>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Tutors/Lab Information</h4></button>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Transferring Course Credit</h4></button>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Visit IST</h4></button>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>How to Apply</h4></button>');
			
			$('#content9').append('<h3>Change of Program Students</h3>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Switching Majors Out of IST</h4></button>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Switching Majors into IST</h4></button>');
			$('#content9').append('<button><i class="fas fa-4x fa-bookmark"></i><h4>Switching Within IST</h4></button>');
			
			$('#content9').append('<h6>Our Social Presence</h6>');
			$('#content9').append('<p class="c9Ptags">WE ARE READY! ARE YOU? #RIT https://t.co/NXHaXKjBWu</p>');
			$('#content9').append('<p class="c9Ptags2">@ISTatRIT via Twitter</p>');
			
			var $aTag = $('<a class="dClass" href="https://twitter.com/istatrit" target="_blank"><i class="fab fa-3x fa-twitter"></i></a>');
			
			$('#content9').append($aTag);
			$('#content9').append('<a class="eClass" href="https://www.facebook.com/ISTatRIT" target="_blank"><i class="fab fa-3x fa-facebook"></i></a>');
			$.each(json.coopEnrollment,function(i, item){
				
			});
			
			
		});
		
		//This is a function for getting the resources information
		myXhr('get',{path:'/resources/'},'#content10').done(function(json){
			$('#content10').append('<div class="applyDiv"><button><a style="text-decoration:none" href="http://www.rit.edu/admission.html" target="_blank">Apply Now</a></button></div>');
			
			$footer = $('<footer></footer>');
			$footer.append('<p>Copyright © <a href="http://www.rit.edu/admission.html">Rochester Institute of Technology</a>. All Rights Reserved .</p>');
			
			$footer.append('<p><a href="http://www.rit.edu/copyright.html">Copyright Infringement</a> |  <a href="http://www.rit.edu/privacystatement.html">Privacy Statement</a> |  <a href="http://www.rit.edu/disclaimer.html">Disclaimer</a> |  <a href="http://www.rit.edu/nondiscrimination.html">Nondiscrimination</a></p>');
			
			$footer.append('<p>One Lomb Memorial Drive, Rochester, NY 14623-5603</p>');
			$footer.append('<p>Questions or comments? Send us feedback. Telephone: 585-475-2700</p>');

			$('#content10').append($footer);
		});
});
	///////////////////////////////////////////////////
	//utilities...
	//data - {path:'/about/'}
	//(getOrPost, data, idForSpinner)
	function myXhr(t, d, id){
		return $.ajax({
			type:t,
			url:'proxy.php',
			dataType:'json',
			data:d,
			cache:false,
			async:true,
			beforeSend:function(){
				//PLEASE - get your own spinner that 'fits' your site.
				//$(id).append('<img src="gears.gif" class="spin"/>');
			}
		}).always(function(){
			//kill spinner
			$(id).find('.spin').fadeOut(1000,function(){
				$(this).remove();
			});
		}).fail(function(){
			//handle failure
		});
	}
		$(function(){
			$("#tabs").tabs();
		});
	/** This is jquery plugin for generated a anime-scroll*/
		$(document).animateScroll(); 