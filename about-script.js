let currentSection = 1;

function changeSection(newSection) {
    document.getElementById(`section${currentSection}`).style.display = 'none';
    document.getElementById(`section${newSection}`).style.display = 'block';
    currentSection = newSection;
}
