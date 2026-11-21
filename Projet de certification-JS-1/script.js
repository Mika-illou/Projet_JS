// 1. On déclare la fonction convertMarkdown
function convertMarkdown() {
  // On récupère le texte entré par l'utilisateur
  const markdownInput = document.getElementById('markdown-input');
  const text = markdownInput.value;

  let html = text;

  // 2. Conversion des titres (H1, H2, H3)
  // ^\s* permet de gérer les espaces au début
  // gm permet de traiter toutes les lignes
  html = html.replace(/^\s*#\s+(.*)$/gm, '<h1>$1</h1>');
  html = html.replace(/^\s*##\s+(.*)$/gm, '<h2>$1</h2>');
  html = html.replace(/^\s*###\s+(.*)$/gm, '<h3>$1</h3>');

  // 3. Conversion des citations (Blockquotes)
  html = html.replace(/^\s*>\s+(.*)$/gm, '<blockquote>$1</blockquote>');

  // 4. Conversion des images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');

  // 5. Conversion des liens
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // 6. Conversion du texte en gras (strong)
  // On gère **texte** et __texte__
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');

  // 7. Conversion du texte en italique (em)
  // On gère *texte* et _texte_
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.*?)_/g, '<em>$1</em>');

  // 8. Retourner le résultat HTML
  return html;
}

// 9. Écouter l'événement 'input' pour mettre à jour l'affichage en temps réel
document.getElementById('markdown-input').addEventListener('input', () => {
  // Appeler la fonction de conversion
  const htmlResult = convertMarkdown();
  
  // Afficher le code HTML brut
  document.getElementById('html-output').innerText = htmlResult;
  
  // Afficher le rendu HTML (preview)
  document.getElementById('preview').innerHTML = htmlResult;
});