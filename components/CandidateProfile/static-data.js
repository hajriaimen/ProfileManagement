const STATIC_PROFILE = {
  personalInfo: {
    civility: {
      avatar: 'https://i2.wp.com/rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png?resize=300%2C300',
      title: 'Mr',
      identity: {
        firstName: 'Ali',
        lastName: 'Benhzez',
        birthday: '02-01-1991',
      },
    },
    familySituation: 'Marié',
    childrenNumber: 2,
    birthCountry: { name: 'Tunisie', iso: 'TN' },
    contactInfo: {
      address: 'rue 1',
      city: 'Tunis',
      country: { name: 'Tunisie', iso: 'TN' },
      mobile: '0145565588',
      deskPhonePerso: '0345565588',
      deskPhonePro: '0945565588',
      socialMedias: [{ id: 1, label: 'https://fr-fr.facebook.com/' }, { id: 2, label: 'https://fr.linkedin.com' }],
    },
    speciality: {
      handicap: 'Oui',
      workstationAdaptation: 'Oui',
      medicalContraindicationType: [{ id: 1, label: 'Nuisances sonores' }, { id: 2, label: 'nuisances thermiques' }],
      discriminationPopulationSubject: [{ id: 1, label: 'ethnicité (minorité visible)' }, { id: 2, label: 'orientation sexuelle' }],
      status: 'contremaitre/ Employé',
    },
  },
  myTalents: {
    currentStatus: 'Developpeur web',
    experiences: [
      {
        id: 1,
        postTitle: 'Titre de poste 1',
        status: 'status',
        contractType: 'type de contrat',
        duration: 2,
        responsability: 'responsabilité',
        postEntitySize: 4,
        groupSize: 3,
        fixSalary: 5,
        variableSalary: 5,
        avantages: [{ id: 1, label: 'vehicule de fonction', value: 1 }, { id: 2, label: 'Logement', value: 2 }],
      },
      {
        id: 2,
        postTitle: 'Titre de poste 2',
        status: 'status',
        contractType: 'type de contrat',
        duration: 2,
        responsability: 'responsabilité',
        postEntitySize: 4,
        groupSize: 3,
        fixSalary: 5,
        variableSalary: 5,
        avantages: [{ id: 1, label: 'vehicule de fonction', value: 1 }, { id: 2, label: 'Logement', value: 2 }],
      }],
    capitalSkill: {
      expertiseLevel: {
        metier: 'metier',
        level: 'level',
        duration: 1,
      },
      hierarchicalManagement: 'Oui',
      responsibilitiesDimension: {
        managedAnnualBudgets: 1,
        AnnualCA: 2,
      },
      complexityManagement: {
        problemResolution: 'problemResolution',
        jobContent: 'jobContent',
        interpersonalRelationship: 'interpersonalRelationship',
        changeContext: 'changeContext',
        organizationLevel: 'organizationLevel',
      },
    },
    capitalKnowledge: {
      diplomes: [{
        id: 1,
        dateStart: '01/2015',
        dateEnd: '01/2016',
        domaine: 'informatique',
        level: 'level 1',
        title: 'Titre de diplome 1',
        etablissementType: 'etablissementType',
        country: 'country',
      },
      {
        id: 2,
        dateStart: '02/2016',
        dateEnd: '02/2017',
        domaine: 'informatique',
        level: 'level 2',
        title: 'Titre de diplome 2',
        etablissementType: 'etablissementType',
        country: 'country',
      },
      ],
      formations: [{
        id: 1,
        dateStart: '01/2010',
        dateEnd: '01/2011',
        domaine: 'informatique',
        level: 'level 1',
        title: 'Titre de formation 1',
        etablissementType: 'etablissementType',
        country: 'country',
      },
      {
        id: 2,
        dateStart: '02/2012',
        dateEnd: '02/2013',
        domaine: 'informatique',
        level: 'level 1',
        title: 'Titre de formation 2',
        etablissementType: 'etablissementType',
        country: 'country',
      },
      ],
    },
    intellectualTalent: {
      interculturalCommunication: [
        {
          langague: 'langague 1',
          level: 'level 1',
        },
        {
          langague: 'langague 2',
          level: 'level 2',
        },
      ],
      interculturalDimension: {
        livedCountry: [{
          country: { name: 'pays 1', iso: 'iso1' },
          duration: 2,
          region: 'region',
        },
        {
          country: { name: 'pays 2', iso: 'iso2' },
          duration: 2,
          region: 'region',
        }],
        visitedCounrty: [{
          country: { name: 'pays 3', iso: 'iso3' },
          duration: 3,
          region: 'region3',
        }],
        workCountry: [{
          country: { name: 'pays 4', iso: 'iso 4' },
          duration: 4,
          region: 'region4',
        }],
      },

    },
    otherKnowledges: {
      softwareLevel: 'debutant1',
      internet: 'debutant2',
      socialMedia: 'debutant3',
      collaborativeTools: 'collaborativeTools',
    },
  },
  professionalProject: {
    ProjetAmbition: {
    /* begin poste */
      poste: {
        titre: 'titre',
        metier: [{ id: 1, label: 'metier1' }, { id: 2, label: 'metier2' }],
        secteur: 'secteur',
        taille_entreprise: 'taille_entreprise',
        niveau_management: 'niveau_management',
        responsabilite_geographique: 'responsabilite_geographique',
      },
      /* end poste */

      /* begin niveau_expertise_visee */
      expertiseLevel: {
        metiers: [{ id: 4, label: 'metier4' }, { id: 5, label: 'metier5' }],
        level: 'level',
        sector: 'sector',
      },

      /* end niveau_expertise_visee */

      /* begin Management hiérarchique */
      managee_equipe: true,
      hierarchicalManagement: {
        level: 'level',
        teamSize: 'teamSize',
        annualBudgets: '101',
        annualCA: '100',
        BeCommitteeMember: 'true',
        entite_bu_filiale: 'false',
        entite_bu_corporate: 'true',
      },
      /* end Management hiérarchique */

      /* begin Management de projet */
      management_projet: 'true',
      projectManagement: {
        level: 'level',
        nombre_personne_coordonnees: '11',
        budgets_annuels_geres: '12',
        ca_annuel_generes: '10',
      },
      /* end Management de projet */

      /* begin manaegement de la complexité */
      complexityManagement: {
        resolution_probleme: 'resolution_probleme',
        contenu_travail: 'contenu_travail',
        relations_interpersonnelles: 'relations_interpersonnelles',
        contexte_changement: 'contexte_changement',
        niveau_organisation: 'niveau_organisation',
      },
      /* end manaegement de la complexité */

      /* begin CES */
      ces: {
        secteur: 'secteur',
        actionnariat: 'actionnariat',
        organisation: 3,
        management: 'management',
        politique_RH: 2,
        climat_travail: 1,
      },
      /* end CES */

      /* begin CFSH */
      cfsh: {
        titre_poste_n1: 'titre_poste_n1',
        style_management: [{ id: 20, label: 'style1' }, { id: 21, label: 'style2' }],
        organisation: 2,
        management: [{ id: 22, label: 'management1' }, { id: 23, label: 'management2' }],
        integration_nouveaux: 3,
        mentoring: 'mentoring',
      },
      /* end CFSH */
      duree_realisation: '', // TO DO
    },
    capitalKnowledge: {
      diplomes: [{
        id: 1,
        dateStart: '01/2015',
        dateEnd: '01/2016',
        domaine: 'informatique',
        level: 'level 1',
        title: 'Titre de diplome 1',
        etablissementType: 'etablissementType',
        country: 'country',
      },
      {
        id: 2,
        dateStart: '02/2016',
        dateEnd: '02/2017',
        domaine: 'informatique',
        level: 'level 2',
        title: 'Titre de diplome 2',
        etablissementType: 'etablissementType',
        country: 'country',
      },
      ],
      formations: [{
        id: 1,
        dateStart: '01/2010',
        dateEnd: '01/2011',
        domaine: 'informatique',
        level: 'level 1',
        title: 'Titre de formation 1',
        etablissementType: 'etablissementType',
        country: 'country',
      },
      {
        id: 2,
        dateStart: '02/2012',
        dateEnd: '02/2013',
        domaine: 'informatique',
        level: 'level 1',
        title: 'Titre de formation 2',
        etablissementType: 'etablissementType',
        country: 'country',
      },
      ],
    },
  },
};

export default STATIC_PROFILE;
