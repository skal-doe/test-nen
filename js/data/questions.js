const questions = [
  {
    question:
      "Dans une situation de combat, quelle est votre première réaction ?",
    options: [
      {
        text: "Foncer directement sur l'ennemi avec force",
        type: "Renforcement",
      },
      {
        text: "Analyser la situation et créer un plan détaillé",
        type: "Matérialisation",
      },
      {
        text: "Utiliser la ruse et manipuler l'environnement",
        type: "Manipulation",
      },
      { text: "Attaquer à distance en restant mobile", type: "Émission" },
      {
        text: "Adapter ma stratégie selon l'adversaire",
        type: "Transmutation",
      },
      {
        text: "Faire confiance à mon instinct unique",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Quel type d'entraînement préférez-vous ?",
    options: [
      {
        text: "Entraînement physique intensif et répétitif",
        type: "Renforcement",
      },
      {
        text: "Étude théorique et création d'outils",
        type: "Matérialisation",
      },
      {
        text: "Exercices de concentration et de contrôle mental",
        type: "Manipulation",
      },
      {
        text: "Entraînement de précision et de projection",
        type: "Émission",
      },
      {
        text: "Exercices de flexibilité et d'adaptation",
        type: "Transmutation",
      },
      {
        text: "Méditation et développement de capacités uniques",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Comment résolvez-vous les problèmes complexes ?",
    options: [
      {
        text: "En persévérant jusqu'à trouver une solution",
        type: "Renforcement",
      },
      {
        text: "En créant des outils ou systèmes pour m'aider",
        type: "Matérialisation",
      },
      {
        text: "En influençant les autres pour qu'ils m'aident",
        type: "Manipulation",
      },
      { text: "En gardant mes distances et observant", type: "Émission" },
      {
        text: "En changeant d'approche selon la situation",
        type: "Transmutation",
      },
      {
        text: "En utilisant des méthodes peu conventionnelles",
        type: "Spécialisation",
      },
    ],
  },
  {
    question:
      "Si vous pouviez avoir un animal de compagnie, lequel choisiriez-vous ?",
    options: [
      { text: "Un chien loyal et protecteur", type: "Renforcement" },
      {
        text: "Un chat indépendant et observateur",
        type: "Matérialisation",
      },
      {
        text: "Un perroquet intelligent qui peut parler",
        type: "Manipulation",
      },
      { text: "Un faucon libre et rapide", type: "Émission" },
      {
        text: "Un caméléon qui s'adapte à son environnement",
        type: "Transmutation",
      },
      { text: "Une créature mythique unique", type: "Spécialisation" },
    ],
  },
  {
    question: "Quelle est votre plus grande force ?",
    options: [
      {
        text: "Ma détermination et ma force de volonté",
        type: "Renforcement",
      },
      {
        text: "Ma capacité à planifier et organiser",
        type: "Matérialisation",
      },
      {
        text: "Mon charisme et ma capacité d'influence",
        type: "Manipulation",
      },
      { text: "Mon indépendance et ma précision", type: "Émission" },
      {
        text: "Ma créativité et ma capacité d'adaptation",
        type: "Transmutation",
      },
      {
        text: "Mon intuition et ma vision unique",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Quelle couleur vous attire le plus ?",
    options: [
      { text: "Rouge - passion et énergie", type: "Renforcement" },
      { text: "Bleu - logique et stabilité", type: "Matérialisation" },
      { text: "Violet - mystère et influence", type: "Manipulation" },
      { text: "Vert - indépendance et nature", type: "Émission" },
      { text: "Jaune - créativité et changement", type: "Transmutation" },
      {
        text: "Noir/Blanc - contraste et unicité",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Dans un groupe, quel rôle jouez-vous naturellement ?",
    options: [
      {
        text: "Le protecteur qui défend le groupe",
        type: "Renforcement",
      },
      {
        text: "Le stratège qui planifie les actions",
        type: "Matérialisation",
      },
      { text: "Le leader qui guide et motive", type: "Manipulation" },
      { text: "L'éclaireur qui agit en solitaire", type: "Émission" },
      {
        text: "Le support qui s'adapte aux besoins",
        type: "Transmutation",
      },
      {
        text: "Le spécialiste avec des compétences uniques",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Comment préférez-vous apprendre de nouvelles compétences ?",
    options: [
      {
        text: "Par la pratique répétée jusqu'à la maîtrise",
        type: "Renforcement",
      },
      {
        text: "En étudiant d'abord la théorie en détail",
        type: "Matérialisation",
      },
      {
        text: "En demandant à d'autres de m'enseigner",
        type: "Manipulation",
      },
      { text: "En observant et expérimentant seul", type: "Émission" },
      { text: "En essayant différentes méthodes", type: "Transmutation" },
      {
        text: "En développant ma propre approche",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Quelle approche préférez-vous face à l'inconnu ?",
    options: [
      {
        text: "Affronter directement sans hésitation",
        type: "Renforcement",
      },
      {
        text: "Préparer tous les outils nécessaires avant",
        type: "Matérialisation",
      },
      {
        text: "Rassembler des alliés et des informations",
        type: "Manipulation",
      },
      {
        text: "Observer d'abord depuis une position sûre",
        type: "Émission",
      },
      { text: "Rester flexible et improviser", type: "Transmutation" },
      {
        text: "Faire confiance à mon instinct particulier",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Quel environnement vous inspire le plus ?",
    options: [
      {
        text: "Une salle d'entraînement ou un gymnase",
        type: "Renforcement",
      },
      {
        text: "Une bibliothèque ou un laboratoire",
        type: "Matérialisation",
      },
      {
        text: "Un lieu de rassemblement social animé",
        type: "Manipulation",
      },
      { text: "Un endroit isolé dans la nature", type: "Émission" },
      { text: "Un lieu qui change constamment", type: "Transmutation" },
      {
        text: "Un endroit mystérieux et inexploré",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Quel est votre style de vie idéal ?",
    options: [
      {
        text: "Simple et direct, axé sur l'essentiel",
        type: "Renforcement",
      },
      {
        text: "Organisé et méthodique avec des routines",
        type: "Matérialisation",
      },
      {
        text: "Social et entouré de personnes influentes",
        type: "Manipulation",
      },
      {
        text: "Indépendant avec beaucoup d'espace personnel",
        type: "Émission",
      },
      {
        text: "Varié et plein de nouvelles expériences",
        type: "Transmutation",
      },
      {
        text: "Unique et en marge des conventions",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Face à la critique, comment réagissez-vous ?",
    options: [
      {
        text: "Je m'entraîne plus dur pour m'améliorer",
        type: "Renforcement",
      },
      {
        text: "J'analyse objectivement les points à corriger",
        type: "Matérialisation",
      },
      {
        text: "Je cherche à comprendre les motivations du critique",
        type: "Manipulation",
      },
      {
        text: "Je prends du recul et évalue calmement",
        type: "Émission",
      },
      {
        text: "Je change d'approche si nécessaire",
        type: "Transmutation",
      },
      {
        text: "Je reste fidèle à ma vision personnelle",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Comment gérez-vous le stress ?",
    options: [
      { text: "Par l'activité physique intense", type: "Renforcement" },
      {
        text: "En organisant et planifiant davantage",
        type: "Matérialisation",
      },
      {
        text: "En parlant avec d'autres personnes",
        type: "Manipulation",
      },
      { text: "En m'isolant pour réfléchir seul", type: "Émission" },
      {
        text: "En changeant d'environnement ou d'activité",
        type: "Transmutation",
      },
      {
        text: "Par des méthodes personnelles peu communes",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Quel type de défi vous motive le plus ?",
    options: [
      {
        text: "Tester mes limites physiques et mentales",
        type: "Renforcement",
      },
      { text: "Résoudre des énigmes complexes", type: "Matérialisation" },
      { text: "Convaincre quelqu'un de difficile", type: "Manipulation" },
      {
        text: "Atteindre un objectif en totale autonomie",
        type: "Émission",
      },
      {
        text: "S'adapter à des situations imprévisibles",
        type: "Transmutation",
      },
      {
        text: "Accomplir quelque chose d'impossible",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Quelle est votre philosophie de vie ?",
    options: [
      {
        text: "La force et la persévérance triomphent toujours",
        type: "Renforcement",
      },
      {
        text: "Tout peut être compris et amélioré",
        type: "Matérialisation",
      },
      {
        text: "Les relations humaines sont la clé du succès",
        type: "Manipulation",
      },
      {
        text: "La liberté personnelle est sacrée",
        type: "Émission",
      },
      {
        text: "Le changement est la seule constante",
        type: "Transmutation",
      },
      {
        text: "Chacun a sa propre voie unique à suivre",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Comment vous préparez-vous pour un examen important ?",
    options: [
      {
        text: "En étudiant de manière intensive et répétitive",
        type: "Renforcement",
      },
      {
        text: "En créant des fiches et des plans d'étude détaillés",
        type: "Matérialisation",
      },
      {
        text: "En formant un groupe d'étude avec d'autres",
        type: "Manipulation",
      },
      {
        text: "En étudiant seul dans un endroit calme",
        type: "Émission",
      },
      {
        text: "En alternant différentes méthodes d'apprentissage",
        type: "Transmutation",
      },
      {
        text: "En suivant mon propre rythme naturel",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Quel type de film ou livre préférez-vous ?",
    options: [
      {
        text: "Action et aventure avec des héros courageux",
        type: "Renforcement",
      },
      {
        text: "Science-fiction avec des concepts complexes",
        type: "Matérialisation",
      },
      {
        text: "Drames psychologiques sur les relations humaines",
        type: "Manipulation",
      },
      {
        text: "Westerns ou récits de voyage en solitaire",
        type: "Émission",
      },
      {
        text: "Fantasy avec des mondes en constante évolution",
        type: "Transmutation",
      },
      {
        text: "Histoires mystérieuses et surnaturelles",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Comment réagissez-vous face à l'échec ?",
    options: [
      {
        text: "Je redouble d'efforts et recommence",
        type: "Renforcement",
      },
      {
        text: "J'analyse mes erreurs pour mieux les comprendre",
        type: "Matérialisation",
      },
      {
        text: "Je cherche du soutien auprès d'autres personnes",
        type: "Manipulation",
      },
      {
        text: "Je prends du temps pour réfléchir en solitude",
        type: "Émission",
      },
      {
        text: "Je change complètement d'approche",
        type: "Transmutation",
      },
      {
        text: "Je considère que c'est une leçon unique",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Quel est votre rapport au temps ?",
    options: [
      {
        text: "Je vis intensément le moment présent",
        type: "Renforcement",
      },
      {
        text: "Je planifie méticuleusement l'avenir",
        type: "Matérialisation",
      },
      {
        text: "J'investis du temps dans mes relations",
        type: "Manipulation",
      },
      {
        text: "Je valorise mon temps personnel",
        type: "Émission",
      },
      {
        text: "Je m'adapte selon les circonstances",
        type: "Transmutation",
      },
      {
        text: "J'ai ma propre perception du temps",
        type: "Spécialisation",
      },
    ],
  },
  {
    question: "Si vous étiez un élément naturel, lequel seriez-vous ?",
    options: [
      {
        text: "Le feu - puissant et destructeur",
        type: "Renforcement",
      },
      {
        text: "La terre - stable et constructive",
        type: "Matérialisation",
      },
      {
        text: "L'eau - fluide et influente",
        type: "Manipulation",
      },
      {
        text: "L'air - libre et insaisissable",
        type: "Émission",
      },
      {
        text: "La foudre - imprévisible et changeante",
        type: "Transmutation",
      },
      {
        text: "L'éther - mystérieux et unique",
        type: "Spécialisation",
      },
    ],
  },
];

export default questions;