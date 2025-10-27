// ====================== ICONS ======================
export function icons(){
    const icons = document.createElement("div");
    icons.classList.add("icons");
    maincon.appendChild(icons);

    const iconlist = [
        [["fa-brands", "fa-github", "fa-4x"],  "https://github.com/fnzh-i"],
    ];

    iconlist.forEach(([iconlists, linkHref]) => {
        const anchor = document.createElement("a");
        anchor.href = linkHref;
        anchor.target = "_blank";

        const icon = document.createElement("i");
        icon.classList.add(...iconlists);

        anchor.appendChild(icon);
        icons.appendChild(anchor);
        // console.log("icon added");
    });

    return icons;
}