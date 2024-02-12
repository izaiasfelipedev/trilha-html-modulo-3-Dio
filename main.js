var searchField = document.getElementById('searchContent');
var descriptionObject = document.getElementById('aboutContent');
var textToSearch = descriptionObject.innerHTML;

function performSearch(searchContent) {
const regex = new RegExp(`(${search-content}) (?!(.(?!<mark)) *</mark>)+`, 'ig');
const ocurrences = textToSearch.match(regex);
aboutContentObj.innerHTML = textToSearch. replace(regex, `<mark>${searchContent}</mark>`)
searchField.addEventListener('keyup', (e) => performSearch(e.target.value));
}