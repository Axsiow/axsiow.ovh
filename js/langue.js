var arrLang = {
    "en": {

        // Navbar
		"about": "About Us",
		"experience": "Experiences",
		"education": "Educations",
		"certifications": "Certifications",
		"skills": "Skills",
		"interests": "Interests",
		"works": "Works",

		// About
		"desc": "Passionate about science, and new technologies! Graduated from Baccalauréat Graphic Design / Printing. I am currently a student at EPSI in computer engineering school in Grenoble.",

		//Experiences
		"exp01": "Web Developer and Designer",
		"exp02": "Internship of 8 weeks as Web Developer and Designer, with the creation of www.auphys.axsiow.ovh and www.labelepicerie.axsiow.ovh!",
		"exp03": "July - August 2019",

		"exp11": "Network Engineering",
		"exp12": "6 weeks internship in the engineering department in collaboration with the network teams of the operator Leonix Telecom",
		"exp13": "May - June 2019",

		"exp21": "Creation of the platform www.tema.axsiow.ovh to inform visitors about donating blood. Users can answer a questionnaire to know their eligibility for donation, know the next date they can donate if they have already donated or find a facility available in Grenoble where they can make their donation.",
		"exp22": "March 2018 - Today",

		"exp31": "Translator English> French",
		"exp32": "Translator from English to French on the Twitter translation platform",
		"exp33": "January 2016 - November 2017",

		"exp41": "Graphic Designer",
		"exp42": "Graphic designer in the Coquand Imprimeur company ",
		"exp43": "May - June 2016",

		// Education
		"edu01": "Bachelor in computing science",
		"edu02": "DevOps",

		"edu11": "Baccalauréat Professional RPIP (Realization of printed products and plurimedias)",

		// Certifications
		"cert01": "October 2019",

		// Skills
		"ski01": "Programming languages",
		"ski02": "Operating System",
		"ski03": " Integrated Development Environment",
		"ski04": "Graphic Design",

		// interests
		"int01": "Scuba diving, roller-hockey, hiking, skiing, martial art : judo, sabre laser",
		"int02": "Hobbies",
		"int03": "Cinema, theater, games, travel, science",
		"int04": "Diverse",
		"int05": "Participation at the Shaker Coding Battle 2018 and the BattleDev of the BlogDuModerator, the Scientific Game Jam grenoble 2019. And an exhibitor at the Grenoble Maker Faire 2017",
		
	},
	
    "fr": {

        // Navbar
        "about": "À Propos",
        "experience": "Expériences",
        "education": "Parcours",
        "certifications": "Certifications",
        "skills": "Compétences",
        "interests": "Centres d'intrérêt",
        "works": "Travaux",

        // About
        "desc": "Passionné par la science, et les nouvelles technologies ! Passé par un Baccalauréat Design Graphique / Imprimerie. Je suis actuellement étudiant en école d'ingénierie informatique à l'EPSI Grenoble. ",
        
		// Experiences
		"exp01": "Web Développeur et Designer",
		"exp02": "Stage de 8 semaines en tant que Web Développeur et Designer, avec notament la création de www.auphys.axsiow.ovh et www.labelepicerie.axsiow.ovh !",
		"exp03": "Juillet - Août 2019",

		"exp11": "Ingénierie Réseau",
		"exp12": "Stage de 6 semaines dans le pôle ingénierie en collaboration avec les équipes réseaux de l'opérateur Leonix Telecom",
		"exp13": "Mai - Juin 2019",

		"exp21": "Création de la platforme www.tema.axsiow.ovh ayant pour but d'informer les visiteurs sur le don de sang. Les utilisateurs peuvent répondre à un questionnaire pour savoir leur éligibilité au don, connaître la prochaine date à laquelle ils pourront faire un don s'ils ont déjà donné ou encore trouver un établissement disponible à Grenoble où ils pourront effectuer leur don.",
		"exp22": "Mars 2018 - Aujourd'hui",
		
		"exp31": "Traducteur Anglais > Français",
		"exp32": "Traducteur de l'anglais vers le français sur la plateforme de traduction de Twitter",
		"exp33":  "Janvier 2016 - Novembre 2017",

		"exp41": "Graphiste",
		"exp42": "Graphiste dans l'entreprise Coquand Imprimeur",
		"exp43": "Mai -  Juin 2016",

		// Education
		"edu01": "Bachelor en informatique",
		"edu02": "Concepteur intégrateur DEVOPS",
		
		"edu11": "Baccalauréat Professionnel RPIP (Réalisation de produits imprimés et plurimédias)",

		// Certifications
		"cert01": "Octobre 2019",

		// Skills
		"ski01": "Langages de programmations",
		"ski02": "Système d'exploitation",
		"ski03": "Environnement de développement",
		"ski04": "Graphisme",

		// interests
		"int01": "Plongée sous-marine, roller-hockey, randonnées, ski, art martial : judo, sabre laser",
		"int02": "Loisirs",
		"int03": "Cinéma, théatre, jeux, voyage, sciences",
		"int04": "Divers",
		"int05": "Participation a la Coding Battle 2018 du Shaker et la BattleDev du BlogDuModerateur, la Scientific Game Jam 2019 de Grenoble. Et en tant qu’exposant a la Maker Faire Grenoble 2017",
		
    }
  };

  // Process translation
  $(function() {
    $('.translate').click(function() {
      var lang = $(this).attr('id');

      $('.lang').each(function(index, item) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });