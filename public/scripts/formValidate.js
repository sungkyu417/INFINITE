/**
 * Created by Administrator on 2016/5/11.
 */
if(window.addEventListener){
    window.addEventListener("load",setupEvents,false);
}else if(window.attachEvent){
    window.attachEvent("onload",setupEvents);
}else {
    window.onload=setupEvents;
}
function setupEvents(ev){
    if(document.form.addEventListener){
        document.form.addEventListener("submit",validateForm,false);
    }else if(document.form.attachEvent){
        document.form.attachEvent("submit",validateForm);
    }else {
        document.form.onsubmit=validateForm;
    }
}
function validateForm(ev){
    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
    var email=document.getElementById("email").value;
    if(name===null||name===""||password===null||password===""||email===null||email===""){
        if(name===null||name===""){
            document.getElementById("warningName").innerText="Name Required";
            document.getElementById("warningName").style.color="red";
        }
        if(password===null||password===""){
            document.getElementById("warningPass").innerText="Password Required";
            document.getElementById("warningPass").style.color="red";
        }
        if(email===null||email===""){
            document.getElementById("warningEmail").innerText="Email Required";
            document.getElementById("warningEmail").style.color="red";
        }
        if(ev.preventDefault){
            ev.preventDefault();
        }else if(ev.cancelBubble){
            ev.cancelBubble=true;
        }
    }
}