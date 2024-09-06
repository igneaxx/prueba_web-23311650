
window.addEventListener('beforeunload', function (alerta){
    alerta.preventDefault();
    alerta.returnValue = ''; 
});