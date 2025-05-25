const nenTypes = {
  Renforcement: {
    description:
      "Les Renforceurs incarnent la pure détermination et la simplicité efficace. Naturellement honnêtes et directs, ils croient en la force brute et la persévérance comme solutions à tous les problèmes. Leur approche straightforward cache une profondeur émotionnelle remarquable et une loyauté inébranlable envers leurs proches. Ils préfèrent l'action aux paroles et n'hésitent jamais à se mettre en danger pour protéger ce qui leur est cher. Leur optimisme naturel et leur capacité à rebondir après les échecs font d'eux des piliers sur lesquels les autres peuvent s'appuyer.",
    abilities:
      "• Augmentation drastique de la force physique et de l'endurance\n• Guérison accélérée et récupération rapide\n• Renforcement d'objets pour les rendre quasi-indestructibles\n• Techniques de combat au corps à corps dévastatrices\n• Défense exceptionnelle contre les attaques physiques et énergétiques\n• Résistance accrue aux poisons et maladies\n• Capacité à transférer leur force à d'autres",
    characters:
      "Personnages emblématiques : Gon Freecss (protagoniste déterminé), Uvogin (Brigade Fantôme), Wing (maître de Gon et Killua)",
    personality:
      "Traits dominants : Honnêteté, détermination, simplicité, loyauté, optimisme, courage physique",
  },
  Émission: {
    description:
      "Les Émetteurs sont des âmes libres qui valorisent leur indépendance par-dessus tout. Naturellement impatients et directs, ils détestent être contraints ou contrôlés et préfèrent agir selon leurs propres termes. Leur tendance à maintenir une distance émotionnelle et physique ne reflète pas un manque d'empathie, mais plutôt un besoin profond de liberté et d'autonomie. Ils excellent dans les situations où ils peuvent utiliser leur mobilité et leur capacité à frapper de loin, évitant les confrontations directes prolongées.",
    abilities:
      "• Projection d'aura à très longue distance\n• Attaques énergétiques dévastatrices (beams, orbes)\n• Téléportation personnelle ou d'objets\n• Communication télépathique à distance\n• Contrôle d'objets à distance sans contact\n• Création de portails ou de passages\n• Séparation de l'aura du corps pour des actions autonomes",
    characters:
      "Personnages emblématiques : Razor (maître de Greed Island), Leorio Paradinight (futur médecin), Franklin (Brigade Fantôme)",
    personality:
      "Traits dominants : Indépendance, impatience, franchise, mobilité, autonomie, esprit libre",
  },
  Manipulation: {
    description:
      "Les Manipulateurs sont des stratèges nés qui comprennent intuitivement les dynamiques de pouvoir et d'influence. Sociaux et charismatiques, ils excellent dans l'art de convaincre et de diriger les autres vers leurs objectifs. Leur nature argumentatrice et leur besoin de contrôle peuvent parfois les faire paraître dominateurs, mais ils utilisent généralement ces traits pour le bien du groupe. Ils voient le monde comme un grand échiquier où chaque pièce a son rôle à jouer, et ils excellent à orchestrer ces mouvements complexes.",
    abilities:
      "• Contrôle mental direct des personnes\n• Manipulation d'objets inanimés à volonté\n• Création de règles et conditions contraignantes\n• Influence émotionnelle subtile sur les groupes\n• Contrôle d'animaux et de créatures diverses\n• Implantation de suggestions post-hypnotiques\n• Création de systèmes de contrôle automatisés",
    characters:
      "Personnages emblématiques : Shalnark (Brigade Fantôme), Illumi Zoldyck (assassin manipulateur), Morel (Chasseur professionnel)",
    personality:
      "Traits dominants : Charisme, sens du contrôle, sociabilité, argumentation, leadership, stratégie",
  },
  Transmutation: {
    description:
      "Les Transmuteurs sont les caméléons du monde du Nen, capables de s'adapter à n'importe quelle situation avec une créativité déconcertante. Leur nature imprévisible et parfois trompeuse cache un esprit brillant capable de solutions innovantes. Ils aiment le changement et s'ennuient rapidement des routines, préférant explorer de nouvelles possibilités et repousser les limites de ce qui est possible. Leur approche flexible de la vie les rend parfois difficiles à cerner, mais toujours fascinants.",
    abilities:
      "• Modification des propriétés de l'aura (texture, température, densité)\n• Imitation parfaite d'éléments naturels (électricité, feu, caoutchouc)\n• Techniques d'illusion sophistiquées\n• Adaptation instantanée des capacités au combat\n• Création de substances aux propriétés impossibles\n• Camouflage et métamorphose de l'aura\n• Combinaison créative de plusieurs propriétés",
    characters:
      "Personnages emblématiques : Hisoka (magicien psychopathe), Killua Zoldyck (assassin électrisant), Machi (Brigade Fantôme)",
    personality:
      "Traits dominants : Créativité, imprévisibilité, adaptabilité, ruse, innovation, changement constant",
  },
  Matérialisation: {
    description:
      "Les Matérialisateurs sont les architectes du monde du Nen, alliant logique rigoureuse et imagination créatrice. Perfectionnistes dans l'âme, ils planifient méticuleusement chaque détail avant d'agir et n'acceptent jamais un travail à moitié fait. Leur approche méthodique et leur besoin d'ordre peuvent parfois les faire paraître rigides, mais cette discipline leur permet de créer des objets et des systèmes d'une complexité extraordinaire. Ils voient chaque problème comme un puzzle à résoudre avec les bons outils.",
    abilities:
      "• Création d'objets complexes aux propriétés uniques\n• Armes et outils spécialisés parfaitement adaptés\n• Espaces de stockage dimensionnels\n• Objets évolutifs qui s'améliorent avec l'usage\n• Constructions architecturales temporaires ou permanentes\n• Systèmes mécaniques autonomes\n• Réplication d'objets existants avec améliorations",
    characters:
      "Personnages emblématiques : Kurapika (vengeur aux chaînes), Shizuku (aspirateur vivant), Kortopi (copieur de la Brigade)",
    personality:
      "Traits dominants : Logique, organisation, perfectionnisme, méthode, planification, précision",
  },
  Spécialisation: {
    description:
      "Les Spécialisateurs sont les véritables énigmes du monde du Nen, possédant des capacités qui défient toute classification traditionnelle. Individualistes par nature, ils marchent sur leur propre chemin et développent des pouvoirs qui reflètent leur personnalité unique et souvent complexe. Leur charisme naturel et leur excentricité les distinguent dans toute foule, mais leur vraie force réside dans leur capacité à transcender les règles normales du Nen. Ils sont souvent des visionnaires incompris, capables de réalisations que personne d'autre ne pourrait accomplir.",
    abilities:
      "• Capacités totalement uniques défiant la logique\n• Pouvoirs évoluant de manière imprévisible\n• Techniques impossibles à reproduire ou comprendre\n• Abilities liées à des conditions ou émotions spéciales\n• Manipulation de concepts abstraits (temps, destin, mémoire)\n• Fusion de plusieurs types de Nen en une seule technique\n• Création de phénomènes surnaturels inexplicables",
    characters:
      "Personnages emblématiques : Chrollo Lucilfer (voleur de talents), Neon Nostrade (prophétesse), Meruem (Roi des Chimères), Kurapika (yeux écarlates)",
    personality:
      "Traits dominants : Individualisme, charisme, excentricité, vision unique, mystère, transcendance",
  },
};

export default nenTypes;
