/********************************************* Animacion del Portafolio *********************************************/

    const portfolio = document.getElementById('portfolio'); 

    const portfolioModal = document.getElementById('modal-portfolio'); 
    const closeModal = document.getElementById('modal-close'); 
    const bodyModal = document.getElementById('body-modal'); 
    const contentModal = document.getElementById('content-modal');
    const modalName = document.getElementById('name-modal')

    closeModal.addEventListener('mouseover', function() { closeModal.style.transform = 'rotate(90deg)'}); 
    closeModal.addEventListener('mouseleave', function() { closeModal.style.transform = 'rotate(0)'}); 

    function openPortfolioModal() {


        portfolioModal.style.transform = 'scale(1)'; 

        setTimeout(function () {

            contentModal.style.overflowY = 'scroll'; 
            bodyModal.style.transform = 'translateX(0)'; 

        }, 600);

        setTimeout(function () {

            closeModal.style.transform = 'translateX(0)'; 
            modalName.style.transform = 'translateX(0)'; 
            
        }, 800);
    }

         
    function closePortfolioModal() {

        bodyModal.style.transform = 'translateX(-100%)'; 

        setTimeout(function () {

            closeModal.style.transform = 'translateX(200%)'; 
            modalName.style.transform = 'translateX(-200%)'; 
            
        }, 600);

        setTimeout(function () {    

            contentModal.style.overflowY = 'hidden';
            portfolioModal.style.transform = 'scale(0)'; 

        }, 1000);
    }

    // Animar el portfolio desde 1025 hasta 2560
    const mediaQueryModal = window.matchMedia('(min-width: 1025px) and (max-width: 2560px)')
    function modalChange(e) {
      
      if (e.matches) {
       
        closeModal.addEventListener('click', closePortfolioModal); 
        portfolio.addEventListener('click',  openPortfolioModal); 

      }else {
        closeModal.removeEventListener('click', closePortfolioModal); 
        portfolio.removeEventListener('click',  openPortfolioModal); 
      }

    }

    mediaQueryModal.addListener(modalChange)
    modalChange(mediaQueryModal)


    // Animar el portfolio desde 769 hasta 1024


    function openPortfolioModalMid() {

        // window.scrollTo(0, 0); 
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth'
        });

        document.body.style.overflow = 'hidden'; 
        portfolioModal.style.transform = 'scale(1)'; 

        setTimeout(function () {

            contentModal.style.overflowY = 'scroll'; 
            bodyModal.style.transform = 'translateX(0)'; 

        }, 800);

        setTimeout(function () {

            closeModal.style.transform = 'translateX(0)'; 
            modalName.style.transform = 'translateX(0)'; 
            
        }, 600);
    }

         
    function closePortfolioModalMid() {

    
        bodyModal.style.transform = 'translateX(-100%)'; 

        setTimeout(function () {

            closeModal.style.transform = 'translateX(200%)'; 
            modalName.style.transform = 'translateX(-200%)'; 
            
        }, 600);

        setTimeout(function () {    

            contentModal.style.overflowY = 'hidden';
            portfolioModal.style.transform = 'scale(0)'; 

            document.body.style.overflow = 'auto'; 

        }, 1000);
    }


    
    const mqPortfolioModalMid = window.matchMedia('(min-width: 769px) and (max-width: 1024px)')
    function mcPortfolioModalMid(e) {
      
      if (e.matches) {

        
        closeModal.addEventListener('click', closePortfolioModalMid); 
        portfolio.addEventListener('click',  openPortfolioModalMid); 

      }else {
        closeModal.removeEventListener('click', closePortfolioModalMid); 
        portfolio.removeEventListener('click',  openPortfolioModalMid); 
      }

    }

    mqPortfolioModalMid.addListener(mcPortfolioModalMid)
    mcPortfolioModalMid(mqPortfolioModalMid)



    // Animar el portfolio hasta 768

    function openPortfolioModalMin() {

        document.body.style.overflow = 'hidden'; 
        // window.scrollTo(0, 0); 

        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth'
        });

        // portfolio.scrollIntoView(); 

        portfolioModal.style.transform = 'scale(1)'; 

        setTimeout(function () {

            contentModal.style.overflowY = 'scroll'; 
            bodyModal.style.transform = 'translateX(0)'; 

        }, 800);

        setTimeout(function () {

            closeModal.style.transform = 'translateX(0)'; 
            modalName.style.transform = 'translateX(0)'; 
            
        }, 600);
    }

         
    function closePortfolioModalMin() {

    
        bodyModal.style.transform = 'translateX(-100%)'; 

        setTimeout(function () {

            closeModal.style.transform = 'translateX(200%)'; 
            modalName.style.transform = 'translateX(-200%)'; 
            
        }, 600);

        setTimeout(function () {    

            contentModal.style.overflowY = 'hidden';
            portfolioModal.style.transform = 'scale(0)'; 

            document.body.style.overflow = 'auto'; 

        }, 1000);
    }


    
    const mqPortfolioModalMin = window.matchMedia('(max-width: 768px)')
    function mcPortfolioModalMin(e) {
      
      if (e.matches) {

        
        closeModal.addEventListener('click', closePortfolioModalMin); 
        portfolio.addEventListener('click',  openPortfolioModalMin); 

      }else {
        closeModal.removeEventListener('click', closePortfolioModalMin); 
        portfolio.removeEventListener('click',  openPortfolioModalMin); 
      }

    }

    mqPortfolioModalMin.addListener(mcPortfolioModalMin)
    mcPortfolioModalMin(mqPortfolioModalMin)






    /****************** Animacion de las secciones *****************/

    function animateEleTitles(el, firstChild, lastChild, colorSombra, closeModal) {

        if(lastChild > 0) {
            //La seccion tiene más de tres partes (solo portafolio cumple esto)
            el.addEventListener('mouseover', function(e){
                el.children[firstChild].children[0].style.transform = 'translateX(20px)';
                el.children[lastChild].children[0].style.transform = 'translateX(-20px)'; 

                el.children[1].children[0].style.textShadow = `-10px -10px 5px var(${colorSombra})`; 
                el.children[1].children[1].style.textShadow = `10px 10px 5px var(${colorSombra})`; 
            }); 

            el.addEventListener('mouseleave', function(e){
                el.children[firstChild].children[0].style.transform = 'translateX(0px)'; 
                el.children[lastChild].children[0].style.transform = 'translateX(0px)'; 

                el.children[1].children[0].style.textShadow = 'none'; 
                el.children[1].children[1].style.textShadow = 'none'; 
            }); 

            //Animacion de las letras centrales al cerrar

            el.addEventListener('click', function() {

                setTimeout(function() {
                    el.children[firstChild].style.transform = 'translate(-200%)'; 
                    el.children[lastChild].style.transform = 'translate(200%)';

                    el.children[1].children[0].style.transform = `translate(-2000%)`; 
                    el.children[1].children[1].style.transform = `translate(2000%)`;

                }, 50);

            
            });


        }else {


            el.addEventListener('mouseover', function(e){

                el.children[firstChild].children[0].style.transform = 'translateX(20px)';

                el.children[1].children[0].style.textShadow = `-10px -10px 5px var(${colorSombra})`; 
                el.children[1].children[1].style.textShadow = `10px 10px 5px var(${colorSombra})`; 
                
            }); 

            el.addEventListener('mouseleave', function(e){

                el.children[firstChild].children[0].style.transform = 'translateX(0px)'; 

                el.children[1].children[0].style.textShadow = 'none'; 
                el.children[1].children[1].style.textShadow = 'none';  
                
            }); 

            //Animacion de las letras centrales al abrir

            el.addEventListener('click', function() {

                setTimeout(function() {
                    el.children[firstChild].style.transform = 'translate(-200%)'; 
                    // el.children[lastChild].style.transform = 'translate(200%)';

                    el.children[1].children[0].style.transform = `translate(-2000%)`; 
                    el.children[1].children[1].style.transform = `translate(2000%)`;

                }, 50);

            
            });

        }

        //Animacion de las letras centrales al cerrar

        closeModal.addEventListener('click', function() {

            setTimeout(function(){

                el.children[firstChild].style.transform = 'translate(0)'; 
                el.children[lastChild].style.transform = 'translate(0)';

            }, 1500);

            setTimeout(function(){

                el.children[1].children[0].style.transform = `translate(0)`; 
                el.children[1].children[1].style.transform = `translate(0)`;
                
            }, 1350);

    
        }); 

            
    }

    animateEleTitles(portfolio,0,2, '--coffee-dark', closeModal); 


















    /********************************************* Animacion de Contacto *********************************************/


    const contact = document.getElementById('contact'); 

    const contactModal = document.getElementById('modal-contact'); 
    const closeContactModal = document.getElementById('modal-close-contact'); 
    const bodyContactModal = document.getElementById('body-modal-contact'); 
    const contentContactModal = document.getElementById('content-modal-contact');
    const modalContactName = document.getElementById('modal-name-contact'); 

    closeContactModal.addEventListener('mouseover', function() { closeContactModal.style.transform = 'rotate(90deg)'}); 
    closeContactModal.addEventListener('mouseleave', function() { closeContactModal.style.transform = 'rotate(0)'}); 

    animateEleTitles(contact, 0,0, '--colorSectionletterContact', closeContactModal); 
    
    // Animar el portfolio desde 1025 hasta 2560

    function openContactModal() {


        contactModal.style.transform = 'scale(1)'; 

        setTimeout(function () {

            
            bodyContactModal.style.transform = 'translateX(0)'; 

        }, 600);

        setTimeout(function () {

            closeContactModal.style.transform = 'translateX(0)'; 
            modalContactName.style.transform = 'translateX(0)'; 
            
        }, 800);
    }

         
    function cContactModal() {

        bodyContactModal.style.transform = 'translateX(-100%)'; 

        setTimeout(function () {

            closeContactModal.style.transform = 'translateX(200%)'; 
            modalContactName.style.transform = 'translateX(-200%)'; 
            
        }, 600);

        setTimeout(function () {    

            contentContactModal.style.overflowY = 'hidden';
            contactModal.style.transform = 'scale(0)'; 

        }, 1000);
    }

    const mediaQueryModalContact = window.matchMedia('(min-width: 1025px) and (max-width: 2560px)')

    function modalChangeContact(e) {
      
      if (e.matches) {
       
        closeContactModal.addEventListener('click', cContactModal); 
        contact.addEventListener('click',  openContactModal); 

      }else {
        closeContactModal.removeEventListener('click', cContactModal); 
        contact.removeEventListener('click',  openContactModal); 
      }

    }

    mediaQueryModalContact.addListener(modalChangeContact)
    modalChangeContact(mediaQueryModalContact)



    // Animar el portfolio desde 769 hasta 1024


    function openContactModalMid() {


        // window.scrollTo(0, 0); 

        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth'
        });



        document.body.style.overflow = 'hidden'; 
        contactModal.style.transform = 'scale(1)'; 

        setTimeout(function () {

            // contentContactModal.style.overflowY = 'scroll'; 
            bodyContactModal.style.transform = 'translateX(0)'; 

        }, 800);

        setTimeout(function () {

            closeContactModal.style.transform = 'translateX(0)'; 
            modalContactName.style.transform = 'translateX(0)'; 
            
        }, 600);
    }

         
    function closeContactModalMid() {

    
        bodyModal.style.transform = 'translateX(-100%)'; 

        setTimeout(function () {

            closeContactModal.style.transform = 'translateX(200%)'; 
            modalContactName.style.transform = 'translateX(-200%)'; 

            bodyContactModal.style.transform = 'translateX(-200%)'; 
            
        }, 600);

        setTimeout(function () {    

            contentContactModal.style.overflowY = 'hidden';
            contactModal.style.transform = 'scale(0)'; 

            document.body.style.overflow = 'auto'; 

        }, 1000);
    }


    
    const mqContactModalMid = window.matchMedia('(min-width: 769px) and (max-width: 1024px)')
    function mcContactModalMid(e) {
      
      if (e.matches) {

        
        closeContactModal.addEventListener('click', closeContactModalMid); 
        contact.addEventListener('click',  openContactModalMid); 

      }else {
        closeContactModal.removeEventListener('click', closeContactModalMid); 
        contact.removeEventListener('click',  openContactModalMid); 
      }

    }

    mqContactModalMid.addListener(mcContactModalMid)
    mcContactModalMid(mqContactModalMid)


    // Animar el portfolio hasta 768


    function openContactModalMin() {

        document.body.style.overflow = 'hidden'; 

        //mover el modal a la posicion actual en la pantalla        
        let value = -1 * contactModal.getBoundingClientRect().y; 
        contactModal.style.transform = `scale(1) translateY(${value}px)`; 

        setTimeout(function () {

            // contentContactModal.style.overflowY = 'scroll'; 
            bodyContactModal.style.transform = 'translateX(0)'; 

        }, 800);

        setTimeout(function () {

            closeContactModal.style.transform = 'translateX(0)'; 
            modalContactName.style.transform = 'translateX(0)'; 
            
        }, 600);
    }

         
    function closeContactModalMin() {

        

        bodyContactModal.style.transform = 'translateX(-100%)'; 

        setTimeout(function () {

            closeContactModal.style.transform = 'translateX(200%)'; 
            modalContactName.style.transform = 'translateX(-200%)'; 
            
        }, 600);

        setTimeout(function () {    

    
            contentContactModal.style.overflowY = 'hidden';
            contactModal.style.transform = 'scale(0)'; 


            document.body.style.overflow = 'auto'; 

        }, 1000);


    }


    
    const mqContactModalMin = window.matchMedia('(max-width: 768px)')
    function mcContactModalMin(e) {
      
      if (e.matches) {

        
        closeContactModal.addEventListener('click', closeContactModalMin); 
        contact.addEventListener('click',  openContactModalMin); 

      }else {
        closeContactModal.removeEventListener('click', closeContactModalMin); 
        contact.removeEventListener('click',  openContactModalMin); 
      }

    }

    mqContactModalMin.addListener(mcContactModalMin)
    mcContactModalMin(mqContactModalMin)

















    /********************************************* Animacion de Habilidades *********************************************/

    const skills = document.getElementById('skills'); 

    const skillsModal = document.getElementById('modal-skills'); 
    const closeSkillsModal = document.getElementById('modal-close-skills'); 
    const bodySkillsModal = document.getElementById('body-modal-skills'); 
    const contentSkillsModal = document.getElementById('content-modal-skills');
    const modalSkillsName = document.getElementById('modal-name-skills')

    closeSkillsModal.addEventListener('mouseover', function() { closeSkillsModal.style.transform = 'rotate(90deg)'}); 
    closeSkillsModal.addEventListener('mouseleave', function() { closeSkillsModal.style.transform = 'rotate(0)'}); 

    animateEleTitles(skills, 0, 0, '--colorSectionletterBlack', closeSkillsModal); 


    // Animar el portfolio desde 1025 hasta 2560

    function openSkillsModal() {


        skillsModal.style.transform = 'scale(1)'; 

        setTimeout(function () {

            
            bodySkillsModal.style.transform = 'translateX(0)'; 

        }, 600);

        setTimeout(function () {

            closeSkillsModal.style.transform = 'translateX(0)'; 
            modalSkillsName.style.transform = 'translateX(0)'; 
            
        }, 800);
    }

         
    function cSkillsModal() {

        bodySkillsModal.style.transform = 'translateX(-100%)'; 

        setTimeout(function () {

            closeSkillsModal.style.transform = 'translateX(200%)'; 
            modalSkillsName.style.transform = 'translateX(-200%)'; 
            
        }, 600);

        setTimeout(function () {    

            // contentSkillsModal.style.overflowY = 'hidden';
            skillsModal.style.transform = 'scale(0)'; 

        }, 1000);
    }

    const mediaQueryModalSkills = window.matchMedia('(min-width: 1025px) and (max-width: 2560px)')

    function modalChangeSkills(e) {
      
      if (e.matches) {
       
        closeSkillsModal.addEventListener('click', cSkillsModal); 
        skills.addEventListener('click',  openSkillsModal); 

      }else {
        closeSkillsModal.removeEventListener('click', cSkillsModal); 
        skills.removeEventListener('click',  openSkillsModal); 
      }

    }

    mediaQueryModalSkills.addListener(modalChangeSkills)
    modalChangeSkills(mediaQueryModalSkills)



    // Animar el portfolio desde 769 hasta 1024


    function openSkillsModalMid() {


        window.scrollTo({
          top: window.screen.height, 
          left: 0, 
          behavior: 'smooth'
        });

        skills.scrollIntoView();

        document.body.style.overflow = 'hidden'; 
        skillsModal.style.transform = 'scale(1)'; 

        setTimeout(function () {

            // contentContactModal.style.overflowY = 'scroll'; 
            bodySkillsModal.style.transform = 'translateX(0)'; 

        }, 800);

        setTimeout(function () {

            closeSkillsModal.style.transform = 'translateX(0)'; 
            modalSkillsName.style.transform = 'translateX(0)'; 
            
        }, 600);
    }

         
    function closeSkillsModalMid() {

    
        bodySkillsModal.style.transform = 'translateX(-100%)'; 

        setTimeout(function () {

            // contentSkillsModal.style.overflowX = 'hidden';

            closeSkillsModal.style.transform = 'translateX(200%)'; 
            modalSkillsName.style.transform = 'translateX(-200%)'; 
            bodySkillsModal.style.transform = 'translateX(-200%)'; 
            
        }, 600);

        setTimeout(function () {    

            skillsModal.style.transform = 'scale(0)'; 

            document.body.style.overflow = 'auto'; 
            document.body.style.overflowX = 'hidden';

        }, 1000);
    }


    
    const mqSkillsModalMid = window.matchMedia('(min-width: 769px) and (max-width: 1024px)')
    function mcSkillsModalMid(e) {
      
      if (e.matches) {
        
        closeSkillsModal.addEventListener('click', closeSkillsModalMid); 
        skills.addEventListener('click',  openSkillsModalMid); 

      }else {
        closeSkillsModal.removeEventListener('click', closeSkillsModalMid); 
        skills.removeEventListener('click',  openSkillsModalMid); 
      }

    }

    mqSkillsModalMid.addListener(mcSkillsModalMid)
    mcSkillsModalMid(mqSkillsModalMid)

    
    // Animar el portfolio hasta 768

    function openSkillsModalMin() {

        

        window.scrollTo({
          top: document.body.scrollHeight, 
          left: 0, 
          behavior: 'smooth'
        });

        skills.scrollIntoView();
        //mover el modal a la posicion actual en la pantalla        
        // let value = window.scrollY; 
        // skillsModal.style.transform = `scale(1) translateY(${value}px)`; 
        document.body.style.overflow = 'hidden';
        skillsModal.style.transform = `scale(1)`;

        setTimeout(function () {

            // contentContactModal.style.overflowY = 'scroll'; 
            bodySkillsModal.style.transform = 'translateX(0)'; 

        }, 800);

        setTimeout(function () {

            closeSkillsModal.style.transform = 'translateX(0)'; 
            modalSkillsName.style.transform = 'translateX(0)'; 
            
        }, 600);
    }

         
    function closeSkillsModalMin() {

        

        bodySkillsModal.style.transform = 'translateX(-100%)'; 

        setTimeout(function () {

            closeSkillsModal.style.transform = 'translateX(200%)'; 
            modalSkillsName.style.transform = 'translateX(-200%)'; 
            
        }, 600);

        setTimeout(function () {    

    
            skillsModal.style.transform = 'scale(0)'; 
            document.body.style.overflow = 'auto'; 
            document.body.style.overflowX = 'hidden'; 

        }, 1000);


    }


    
    const mqSkillsModalMin = window.matchMedia('(max-width: 768px)')
    function mcSkillsModalMin(e) {
      
      if (e.matches) {

        
        closeSkillsModal.addEventListener('click', closeSkillsModalMin); 
        skills.addEventListener('click',  openSkillsModalMin); 

      }else {
        closeSkillsModal.removeEventListener('click', closeSkillsModalMin); 
        skills.removeEventListener('click',  openSkillsModalMin); 
      }

    }

    mqSkillsModalMin.addListener(mcSkillsModalMin)
    mcSkillsModalMin(mqSkillsModalMin)















    /********************************************* Animacion de Metas *********************************************/

    const goals = document.getElementById('goals'); 

    const goalsModal = document.getElementById('modal-goals'); 
    const closeGoalsModal = document.getElementById('modal-close-goals'); 
    const bodyGoalsModal = document.getElementById('body-modal-goals'); 
    const contentGoalsModal = document.getElementById('content-modal-goals');
    const modalGoalsName = document.getElementById('modal-name-goals')

    closeGoalsModal.addEventListener('mouseover', function() { closeGoalsModal.style.transform = 'rotate(90deg)'}); 
    closeGoalsModal.addEventListener('mouseleave', function() { closeGoalsModal.style.transform = 'rotate(0)'}); 

    animateEleTitles(goals, 0, 0, '--colorSectionletterBlack', closeGoalsModal); 

    // Animar el portfolio desde 1025 hasta 2560

    function openGoalsModal() {


        goalsModal.style.transform = 'scale(1)'; 

        setTimeout(function () {

            
            bodyGoalsModal.style.transform = 'translateX(0)'; 

        }, 600);

        setTimeout(function () {

            closeGoalsModal.style.transform = 'translateX(0)'; 
            modalGoalsName.style.transform = 'translateX(0)'; 
            
        }, 800);
    }

         
    function cGoalsModal() {

        bodyGoalsModal.style.transform = 'translateX(-100%)'; 

        setTimeout(function () {

            closeGoalsModal.style.transform = 'translateX(200%)'; 
            modalGoalsName.style.transform = 'translateX(-200%)'; 
            
        }, 600);

        setTimeout(function () {    

            // contentSkillsModal.style.overflowY = 'hidden';
            goalsModal.style.transform = 'scale(0)'; 

        }, 1000);
    }

    const mediaQueryModalGoals = window.matchMedia('(min-width: 1025px) and (max-width: 2560px)')

    function modalChangeGoals(e) {
      
      if (e.matches) {
       
        closeGoalsModal.addEventListener('click', cGoalsModal); 
        goals.addEventListener('click',  openGoalsModal); 

      }else {
        closeGoalsModal.removeEventListener('click', cGoalsModal); 
        goals.removeEventListener('click',  openGoalsModal); 
      }

    }

    mediaQueryModalGoals.addListener(modalChangeGoals);
    modalChangeGoals(mediaQueryModalGoals);


    // Animar el portfolio desde 769 hasta 1024

    function openGoalsModalMid() {


        window.scrollTo({
          top: window.screen.height, 
          left: 0, 
          behavior: 'smooth'
        });

        goals.scrollIntoView(); 


        document.body.style.overflow = 'hidden'; 
        goalsModal.style.transform = 'scale(1)'; 

        setTimeout(function () {

            // contentGoalsModal.style.overflowY = 'scroll'; 
            bodyGoalsModal.style.transform = 'translateX(0)'; 

        }, 800);

        setTimeout(function () {

            closeGoalsModal.style.transform = 'translateX(0)'; 
            modalGoalsName.style.transform = 'translateX(0)'; 
            
        }, 600);
    }

         
    function closeGoalsModalMid() {

    
        bodyGoalsModal.style.transform = 'translateX(-100%)'; 

        setTimeout(function () {

            closeGoalsModal.style.transform = 'translateX(200%)'; 
            modalGoalsName.style.transform = 'translateX(-200%)'; 

            bodyGoalsModal.style.transform = 'translateX(-200%)'; 
            
        }, 600);

        setTimeout(function () {    

            // contentSkillsModal.style.overflowY = 'hidden';
            goalsModal.style.transform = 'scale(0)'; 

            document.body.style.overflow = 'auto'; 
            document.body.style.overflowX = 'hidden';

        }, 1000);
    }


    
    const mqGoalsModalMid = window.matchMedia('(min-width: 769px) and (max-width: 1024px)')
    function mcGoalsModalMid(e) {
      
      if (e.matches) {
        
        closeGoalsModal.addEventListener('click', closeGoalsModalMid); 
        goals.addEventListener('click',  openGoalsModalMid); 

      }else {
        closeGoalsModal.removeEventListener('click', closeGoalsModalMid); 
        goals.removeEventListener('click',  openGoalsModalMid); 
      }

    }

    mqGoalsModalMid.addListener(mcGoalsModalMid)
    mcGoalsModalMid(mqGoalsModalMid)


    // Animar el portfolio hasta 768

    function openGoalsModalMin() {

        window.scrollTo({
          top: document.body.scrollHeight, 
          left: 0, 
          behavior: 'smooth'
        });

        goals.scrollIntoView(); 

        //mover el modal a la posicion actual en la pantalla        
        // let value = window.scrollY; 
        // skillsModal.style.transform = `scale(1) translateY(${value}px)`; 
        document.body.style.overflow = 'hidden';
        goalsModal.style.transform = `scale(1)`;

        setTimeout(function () {
            // console.log(contentGoalsModal);
            contentGoalsModal.style.overflowY = 'scroll'; 
            bodyGoalsModal.style.transform = 'translateX(0)'; 

        }, 800);

        setTimeout(function () {

            closeGoalsModal.style.transform = 'translateX(0)'; 
            modalGoalsName.style.transform = 'translateX(0)'; 
            
        }, 600);
    }

         
    function closeGoalsModalMin() {

        

        bodyGoalsModal.style.transform = 'translateX(-100%)'; 

        setTimeout(function () {

            closeGoalsModal.style.transform = 'translateX(200%)'; 
            modalGoalsName.style.transform = 'translateX(-200%)'; 
            
        }, 600);

        setTimeout(function () {    

    
            contentGoalsModal.style.overflowY = 'hidden';
            goalsModal.style.transform = 'scale(0)'; 
            document.body.style.overflow = 'auto'; 
            document.body.style.overflowX = 'hidden';
        }, 1000);


    }


    
    const mqGoalsModalMin = window.matchMedia('(max-width: 768px)')
    function mcGoalsModalMin(e) {
      
      if (e.matches) {

        
        closeGoalsModal.addEventListener('click', closeGoalsModalMin); 
        goals.addEventListener('click',  openGoalsModalMin); 

      }else {
        closeGoalsModal.removeEventListener('click', closeGoalsModalMin); 
        goals.removeEventListener('click',  openGoalsModalMin); 
      }

    }

    mqGoalsModalMin.addListener(mcGoalsModalMin)
    mcGoalsModalMin(mqGoalsModalMin)


    /* ********** Contact Form ********** */

        const $form = document.querySelector(".contact-form"); 
        const name = document.getElementById('nombre');
        const email = document.getElementById('email');
        const modalConfirm = document.querySelector('.modal-confirm'); 

        const expresionName = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;   
        const expresionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        $form.addEventListener("submit", (e) => {

            e.preventDefault();

            if(email.value !== '') {

                if(!expresionEmail.test(email.value)){
                    
                    return false;
                }

            }else {
                return false;
            }


            if(!expresionName.test(name.value)){
                
                return false;
            }


            // $loader.classList.remove("none");

              fetch("https://formsubmit.co/ajax/bymarcant@gmail.com", {
                  method: "POST",
                  body: new FormData(e.target),
              })
              .then((res) => (res.ok ? res.json() : Promise.reject(res)))
              .then((json) => {

                console.log(json);
                // location.hash = "#gracias";
                modalConfirm.classList.remove('close');
                modalConfirm.classList.toggle('open'); 

                $form.reset();

              })
              .catch((err) => {

                console.log(err);
                let message =
                  err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
                // $response.querySelector(
                //   "h3"
                // ).innerHTML = `Error ${err.status}: ${message}`;
              })
              .finally(() => {
                // $loader.classList.add("none");
                setTimeout(() => {
                    modalConfirm.classList.remove('open'); 
                    modalConfirm.classList.toggle('close'); 
                }, 3000);
              });
          });
