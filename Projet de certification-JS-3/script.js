// 1. Initialiser le sondage avec un objet Map
const poll = new Map();

// 2. Fonction pour ajouter une option
function addOption(option) {

  // Vérifier si l'option est vide
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }

  // Vérifier si l'option existe déjà
  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }

  // Ajouter l'option avec un Set vide
  poll.set(option, new Set());

  return `Option "${option}" added to the poll.`;
}

// 3. Fonction pour voter
function vote(option, voterId) {

  // Vérifier si l'option existe
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  // Récupérer le Set des électeurs
  const voters = poll.get(option);

  // Vérifier si l'électeur a déjà voté
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  // Ajouter l'identifiant de l'électeur
  voters.add(voterId);

  return `Voter ${voterId} voted for "${option}".`;
}

// 4. Ajouter au moins trois options
addOption("Turkey");
addOption("Morocco");
addOption("Spain");
addOption("Algeria");
addOption("Malaysia");

// 5. Effectuer au moins trois votes
vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");
vote("Algeria", "traveler1");
vote("Malaysia", "traveler4");

// 6. Fonction pour afficher les résultats
function displayResults() {

  let results = "Poll Results:";

  for (const [option, voters] of poll) {
    results += `\n${option}: ${voters.size} votes`;
  }

  return results;
}

// 7. Afficher les résultats
console.log(displayResults());