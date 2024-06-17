let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('button')
window.onload =function() {
    if (window.navigator.onLine){
        online();
    }else{
        offline();
    }
}
window.addEventListener('online',online)
window.addEventListener('offline',offline);
function online (){
    title.innerHTML = 'Online now';
    title.style.color = 'green';
    ul.style.display = 'none';
    reload.style.display = 'none';
}
function offline (){
    title.innerHTML = 'Offline now';
    title.style.color = '#666';
    ul.style.display = 'block';
    reload.style.display = 'block';
}
reload.onclick = function(){
    window.location.reload();
}