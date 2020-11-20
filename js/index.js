/* Updates the year in footer */
let today = new Date();
let year = today.getFullYear();
let el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy; ' + year + ' Lenar Gasimov</p>';