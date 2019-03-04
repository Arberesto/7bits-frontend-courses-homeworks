const elements = [
    {   name:"email",
        cssname: "email"
    },
    {
        name:"lastName",
        cssname: "last-name"
    },
    {
        name:"firstName",
        cssname: "first-name"
    },
    {
        name:"gender",
        cssname: "gender-"
    }

];


document.addEventListener("DOMContentLoaded", function() {
    /**
     * Place your code here
     */
    let url = location.href;
    let parts = url.split('?');
    var searchParams = new URLSearchParams(parts[1]);
    let searchKeys = searchParams.keys();
    elements.forEach(element => {
        if( searchParams.has(element.name)) {
            let form;
            if (element.cssname != "gender-") {
                form = document.getElementById(element.cssname);
                form.value = searchParams.get(element.name);
            } else {
                form = document.getElementById(element.cssname + searchParams.get(element.name));
                form.click();
            }

        }
    });

});
