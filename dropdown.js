function open(id) {
    const allBodies = document.querySelectorAll(".body");

    allBodies.forEach(body => {
        body.style.maxHeight = null;
    }); // closes all

    const sect = document.getElementById(id);
    if (!sect) return;

    const body = sect.querySelector(".body");
    body.style.maxHeight = body.scrollHeight + "px";
    sect.scrollIntoView({ behavior: "smooth" });
}
function toggle(header) {
    const allBodies = document.querySelectorAll(".body");

    allBodies.forEach(body => {
    if (body !== header.nextElementSibling) {
        body.style.maxHeight = null;
    }
    }); // closes all

    const body = header.nextElementSibling;
    body.style.maxHeight = body.style.maxHeight ? null : body.scrollHeight + "px";
}
