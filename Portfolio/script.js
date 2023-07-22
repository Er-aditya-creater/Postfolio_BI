var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
// -----------------------logic for ABOUT section---------------
function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab"); //it will take one of the three id at a time from the function opentab and display it
}
// ------------------------for sidemenu( for responsive)--------------
var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
// ---------------------making the form work for everyone whoever gives any input-----
const scriptURL = 'https://formsubmit.co/eraditya1507@gmail.com'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message sent successfully!";
                    setTimeout(function () {
                        msg.innerHTML = "";
                    }, 5000)
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message))
        })
