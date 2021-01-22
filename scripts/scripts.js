document.addEventListener('DOMContentLoaded', function() {

	/*
	“The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of star stuff”.
		– Carl Sagan
	*/

	(function(d){
	/*******************************    Variables    *******************************/
	const portfolio = d.getElementById('portfolio'); 
	const contact = d.getElementById('contact'); 
	const skills = d.getElementById('skills'); 
	const goals = d.getElementById('goals'); 
	const closeModal = d.getElementById('modal-close');
	const modal = d.getElementById('modal'); 
	const nameModal = d.getElementById('modal-name'); 
	const bodyModal = d.getElementById('body-modal'); 

	const contactModal = d.getElementById('contact-modal'); 
	const closeContactModal = d.getElementById('modal-close-contact');
	const bodyContactModal = d.getElementById('body-modal-contact'); 
	const nameContactModal = d.getElementById('modal-name-contact'); 

	// const genericModal = d.getElementById('generic-modal'); 
	// const closeGenericModal = d.getElementById('modal-close-generic');
	// const bodyGenericModal = d.getElementById('body-modal-generic'); 
	// const nameGenericModal = d.getElementById('modal-name-generic'); 

	const skillsModal = d.getElementById('skills-modal'); 
	const closeSkillsModal = d.getElementById('modal-close-skills');
	const bodySkillsModal = d.getElementById('body-modal-skills'); 
	const nameSkillsModal = d.getElementById('modal-name-skills');

	const goalsModal = d.getElementById('goals-modal'); 
	const closeGoalsModal = d.getElementById('modal-close-goals');
	const bodyGoalsModal = d.getElementById('body-modal-goals'); 
	const nameGoalsModal = d.getElementById('modal-name-goals');  

	// let contentSkills = null, contentGoals = null; 


	/*******************************    Functions    *******************************/
	//Animar los textos en cada sección
	function animateEleTitles(el, firstChild, lastChild) {

		if(lastChild > 0) {

			el.addEventListener('mouseover', function(e){
				el.children[firstChild].children[0].style.transform = 'translateX(20px)';
				el.children[lastChild].children[0].style.transform = 'translateX(-20px)'; 

				el.children[1].children[0].style.textShadow = '-10px -10px 5px var(--coffee-dark)'; 
				el.children[1].children[1].style.textShadow = '10px 10px 5px var(--coffee-dark)'; 
			}); 

			el.addEventListener('mouseleave', function(e){
				el.children[firstChild].children[0].style.transform = 'translateX(0px)'; 
				el.children[lastChild].children[0].style.transform = 'translateX(0px)'; 

				el.children[1].children[0].style.textShadow = 'none'; 
				el.children[1].children[1].style.textShadow = 'none'; 
			}); 

		}else {

			el.addEventListener('mouseover', function(e){
				el.children[firstChild].children[0].style.transform = 'translateX(20px)';

				el.children[1].children[0].style.textShadow = '-10px -10px 5px var(--coffee-dark)'; 
				el.children[1].children[1].style.textShadow = '10px 10px 5px var(--coffee-dark)'; 
				
			}); 

			el.addEventListener('mouseleave', function(e){

				el.children[firstChild].children[0].style.transform = 'translateX(0px)'; 

				el.children[1].children[0].style.textShadow = 'none'; 
				el.children[1].children[1].style.textShadow = 'none';  
				
			}); 

		}

		
	}


	/*******************************    Generales    *******************************/
	// Manetener oculto el modal
	modal.style.transform = 'scale(0)';
	contactModal.style.transform = 'scale(0)';
	skillsModal.style.transform = 'scale(0)';
	goalsModal.style.transform = 'scale(0)';
	// genericModal.style.transform = 'scale(0)';

    // Manejar los efectos en el header del modal
	closeModal.addEventListener('mouseover', function(){ closeModal.style.transform = 'rotate(90deg)'});
	closeModal.addEventListener('mouseleave', function(){ closeModal.style.transform = 'rotate(0)'});  

	closeContactModal.addEventListener('mouseover', function(){ closeContactModal.style.transform = 'rotate(90deg)'});
	closeContactModal.addEventListener('mouseleave', function(){ closeContactModal.style.transform = 'rotate(0)'}); 

	closeSkillsModal.addEventListener('mouseover', function(){ closeSkillsModal.style.transform = 'rotate(90deg)'});
	closeSkillsModal.addEventListener('mouseleave', function(){ closeSkillsModal.style.transform = 'rotate(0)'}); 

	closeGoalsModal.addEventListener('mouseover', function(){ closeGoalsModal.style.transform = 'rotate(90deg)'});
	closeGoalsModal.addEventListener('mouseleave', function(){ closeGoalsModal.style.transform = 'rotate(0)'}); 

	// closeGenericModal.addEventListener('mouseover', function(){ closeGenericModal.style.transform = 'rotate(90deg)'});
	// closeGenericModal.addEventListener('mouseleave', function(){ closeGenericModal.style.transform = 'rotate(0)'}); 

	/*******************************    Portfolio    *******************************/
	animateEleTitles(portfolio,0,2); 

	portfolio.addEventListener('click', function(e){

		setTimeout(function(){
		
			d.querySelector('.content-modal').style.overflowY = 'scroll';
			
		},900);

		portfolio.children[0].style.transform = 'translateX(-50%)';
		portfolio.children[2].style.transform = 'translateX(120%)'; 

		portfolio.children[1].children[0].style.transform = 'translateY(-200%)'
		portfolio.children[1].children[1].style.transform = 'translateY(200%)'


		setTimeout(function(){

			modal.style.display = 'grid';
			modal.style.opacity = '1'; 
			modal.style.transform = 'scale(1)'; 

			setTimeout(function(){

				bodyModal.style.transform = 'translateX(0)';
				nameModal.style.transform ='translateX(0)';
				closeModal.style.transform ='translateX(0)';

				 
			},1000);

		},250);

	

	}); 

	closeModal.addEventListener('click', function(e){

	

		setTimeout(function(){

			bodyModal.style.transform = 'translateX(-100%)';
			nameModal.style.transform ='translateX(-120%)';
			closeModal.style.transform ='translateX(150%)';

			
		},500);



		setTimeout(function(){

			modal.style.overflowX = 'hidden'; 
			d.querySelector('.content-modal').style.overflowY = 'hidden';
			d.querySelector('.content-modal').style.overflowX = 'hidden';
			
		},700);

	
		setTimeout(function(){
				
			modal.style.transform = 'scale(0)';

		},1000);

		

		setTimeout(function(){
			portfolio.children[0].style.transform = 'translateX(0)';
			portfolio.children[2].style.transform = 'translateX(0)';

			portfolio.children[1].children[0].style.transform = 'translateY(0)'
			portfolio.children[1].children[1].style.transform = 'translateY(0)'
		},1500);
	
	}); 


	/*******************************    Contact    *******************************/
	animateEleTitles(contact,0,0); 

	contact.addEventListener('click', function(e) {

		contact.children[0].style.transform = 'translateX(-50%)';
	
		contact.children[1].children[0].style.transform = 'translateY(-200%)'
		contact.children[1].children[1].style.transform = 'translateY(200%)'
		

		setTimeout(function(){

			contactModal.style.display = 'grid';
			contactModal.style.opacity = '1'; 
			contactModal.style.transform = 'scale(1)'; 

			setTimeout(function(){

				bodyContactModal.style.transform = 'translateX(0)';
				nameContactModal.style.transform ='translateX(0)';
				closeContactModal.style.transform ='translateX(0)';

				 
			},1000);

		},250);

	}); 

	closeContactModal.addEventListener('click', function() {

		setTimeout(function(){

			bodyContactModal.style.transform = 'translateX(-150%)';
			nameContactModal.style.transform ='translateX(-120%)';
			closeContactModal.style.transform ='translateX(150%)';

			
		},500);

		setTimeout(function(){
				
			contactModal.style.transform = 'scale(0)';

		},1000);

		setTimeout(function(){
			contact.children[0].style.transform = 'translateX(0)';
			// contact.children[2].style.transform = 'translateX(0)';

			contact.children[1].children[0].style.transform = 'translateY(0)'
			contact.children[1].children[1].style.transform = 'translateY(0)'
		},1500);
	
	}); 


	/*******************************    Modal Generic (skills and goals)    *******************************/

	// function openModalGeneric(x,y,color,content,sectionType, sectionName) {

			
	// 	genericModal.style.transformOrigin = `${x}% ${y}`;

	// 	nameGenericModal.textContent = sectionName; 
	// 	d.querySelector('.content-modal-generic').style.backgroundColor = `var(${color})`;
		
	// 	sectionType.children[0].style.transform = 'translateX(-100%)';
	
	// 	sectionType.children[1].children[0].style.transform = 'translateY(-200%)'; 
	// 	sectionType.children[1].children[1].style.transform = 'translateY(200%)'; 

	// 	bodyGenericModal.innerHTML = `${content}`; 

	// 	setTimeout(function(){

	// 		genericModal.style.display = 'grid';
	// 		genericModal.style.opacity = '1'; 
	// 		genericModal.style.transform = 'scale(1)'; 

	// 		setTimeout(function(){

	// 			bodyGenericModal.style.transform = 'translateX(0)';
	// 			nameGenericModal.style.transform ='translateX(0)';
	// 			closeGenericModal.style.transform ='translateX(0)';

				 
	// 		},1000);

	// 	},250);
	// 	x = 0; 
	// }

	// function closeModalGeneric(sectionType,x,y) {
		
	// 	setTimeout(function(){

	// 		bodyGenericModal.style.transform = 'translateX(-150%)';
	// 		nameGenericModal.style.transform ='translateX(-120%)';
	// 		closeGenericModal.style.transform ='translateX(150%)';


			
	// 	},500);

	// 	setTimeout(function(){
				
	// 		genericModal.style.transform = 'scale(0)';

	// 	},1000);


	// 	setTimeout(function(){
	// 		sectionType.children[0].style.transform = 'translateX(0)';
	// 		// sectionType.children[2].style.transform = 'translateX(0)';

	// 		sectionType.children[1].children[0].style.transform = 'translateY(0)'
	// 		sectionType.children[1].children[1].style.transform = 'translateY(0)'


	// 	},1500);

	// }


	

	/*******************************    Skills    *******************************/
	animateEleTitles(skills,0,0); 

	skills.addEventListener('click', function(e) {

		skills.children[0].style.transform = 'translateX(-200%)';
	
		skills.children[1].children[0].style.transform = 'translateY(-200%)'
		skills.children[1].children[1].style.transform = 'translateY(200%)'
		

		setTimeout(function(){

			skillsModal.style.display = 'grid';
			skillsModal.style.opacity = '1'; 
			skillsModal.style.transform = 'scale(1)'; 

			setTimeout(function(){

				bodySkillsModal.style.transform = 'translateX(0)';
				nameSkillsModal.style.transform ='translateX(0)';
				closeSkillsModal.style.transform ='translateX(0)';

				 
			},1000);

		},250);

	}); 

	closeSkillsModal.addEventListener('click', function() {

		setTimeout(function(){

			bodySkillsModal.style.transform = 'translateX(-150%)';
			nameSkillsModal.style.transform ='translateX(-120%)';
			closeSkillsModal.style.transform ='translateX(150%)';

			
		},500);

		setTimeout(function(){
				
			skillsModal.style.transform = 'scale(0)';

		},1000);

		setTimeout(function(){
			skills.children[0].style.transform = 'translateX(0)';
			// skills.children[2].style.transform = 'translateX(0)';

			skills.children[1].children[0].style.transform = 'translateY(0)'
			skills.children[1].children[1].style.transform = 'translateY(0)'
		},1500);
	
	}); 

	// skills.addEventListener('click', function() {

	// 	contentSkills = `
	// 	<h4>Frontend: </h4>
	// 	<p>Manejo de la sintaxis básica de <i>HTML, basic SEO, API'S </i> y plantillas de <i>HTML 5</i></p>
	// 	<p>Vanilla Javascript, sintaxis básica, manejo del DOM, POO, asíncrono y plugins como <i>GSAP, anime.js, chart.js</i>, 
	// 	 entre otros según el tipo o necesidades de proyecto.</p>
	// 	<p>CSS, uso de variables y sintaxis básica para todos los navegadores, responsive web desing y librerias o frameworks
	// 	como <i>Sass, Bootstrap y Tailwind CSS</i>. 
	// 	</p>
	// 	<p>Manejo de de herrmaientas como Adobe Illustrator, Adobo Photoshop y Figma</p>

	// 	<h4>Backend: </h4>
	// 	<p>Conocimiento de php en cuanto a creación de sitios sencillos y mysql. Manejo de plantillas Blade de Laravel</p>
	// 	`; 

	// 	openModalGeneric(35, 'bottom', '--light-black', contentSkills, skills, 'Habilidades');

	// }); 

	// closeGenericModal.addEventListener('click', function(){
	// 	closeModalGeneric(skills,35,'bottom'); 
	// }); 

	


	/*******************************    Goals    *******************************/
	animateEleTitles(goals,0,0); 

	goals.addEventListener('click', function(e) {

		goals.children[0].style.transform = 'translateX(-200%)';
	
		goals.children[1].children[0].style.transform = 'translateY(-200%)'
		goals.children[1].children[1].style.transform = 'translateY(200%)'
		

		setTimeout(function(){

			goalsModal.style.display = 'grid';
			goalsModal.style.opacity = '1'; 
			goalsModal.style.transform = 'scale(1)'; 

			setTimeout(function(){

				bodyGoalsModal.style.transform = 'translateX(0)';
				nameGoalsModal.style.transform ='translateX(0)';
				closeGoalsModal.style.transform ='translateX(0)';

				 
			},1000);

		},250);

	}); 

	closeGoalsModal.addEventListener('click', function() {

		setTimeout(function(){

			bodyGoalsModal.style.transform = 'translateX(-150%)';
			nameGoalsModal.style.transform ='translateX(-120%)';
			closeGoalsModal.style.transform ='translateX(150%)';

			
		},500);

		setTimeout(function(){
				
			goalsModal.style.transform = 'scale(0)';

		},1000);

		setTimeout(function(){
			goals.children[0].style.transform = 'translateX(0)';
			// goals.children[2].style.transform = 'translateX(0)';

			goals.children[1].children[0].style.transform = 'translateY(0)'
			goals.children[1].children[1].style.transform = 'translateY(0)'
		},1500);
	
	}); 

	// goals.addEventListener('click', function() {

	// 	contentGoals = `
	// 	<h4>Frontend: </h4>
	// 	<ul>
	// 		<li>Incorporar mejoras en cuanto UX/UI a futuros proyectos.</li>
	// 		<li>Estudiar sobre estruturas de datos y algoritmos.</li>
	// 		<li>Aprender sobre programación reactiva con Javascript y realizar proyectos con React.</li>
	// 	</ul>

	// 	<h4>Backend: </h4>
	// 	<p>Conocimiento de php en cuanto a creación de sitios sencillos y mysql. Manejo de plantillas Blade de Laravel</p>
	// 	`; 

	// 	openModalGeneric(100, 'bottom', '--black', contentGoals, goals, 'Metas');

	// }); 

	// closeGenericModal.addEventListener('click', function(){
	// 	closeModalGeneric(goals, 100, 'bottom'); 
	// });

	

	})(document);



})



