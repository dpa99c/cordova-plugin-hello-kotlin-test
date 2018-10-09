function log(msg){
    document.body.innerHTML += '<p>' + msg + '</p>';
}

function onDeviceReady() {
    log("deviceready");

    hellokotlin.hello("Hello Kotlin!", function(msg){
        log(msg);
    },function(err){
        log(err);
    });
}
document.addEventListener('deviceready', onDeviceReady, false);