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

	const genericModal = d.getElementById('generic-modal'); 
	const closeGenericModal = d.getElementById('modal-close-generic');
	const bodyGenericModal = d.getElementById('body-modal-generic'); 
	const nameGenericModal = d.getElementById('modal-name-generic'); 


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

    // Manejar los efectos en el header del modal
	closeModal.addEventListener('mouseover', function(){ closeModal.style.transform = 'rotate(90deg)'});
	closeModal.addEventListener('mouseleave', function(){ closeModal.style.transform = 'rotate(0)'});  

	closeContactModal.addEventListener('mouseover', function(){ closeContactModal.style.transform = 'rotate(90deg)'});
	closeContactModal.addEventListener('mouseleave', function(){ closeContactModal.style.transform = 'rotate(0)'});  

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

	skills.addEventListener('click', function(){
		
	}); 


	/*******************************    Skills    *******************************/
	animateEleTitles(skills,0,0); 

	/*******************************    Goals    *******************************/
	animateEleTitles(goals,0,0); 









	

	})(document);



})



