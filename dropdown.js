
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
