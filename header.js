const header = document.querySelector("header")

const links = header.querySelectorAll("a")

const nav = header.querySelector("nav")

const closeBtn = document.querySelector("#header-close")

const openBtn = document.querySelector("#header-open")

closeBtn.classList.add("!hidden")
nav.classList.remove("pr-16")
links.forEach(link => {
    link.classList.add("!hidden", "xl:!block")
})

const handleCloseBtnClick = () => {
    links.forEach(link => {
        link.classList.add("!hidden", "xl:!block")
    })

    closeBtn.classList.add("!hidden", "xl:!block")
    openBtn.classList.remove("!hidden", "xl:!block")
    nav.classList.remove("pr-16")

}

const handleOpenBtnClick = () => {
    links.forEach(link => {
        link.classList.remove("!hidden", "xl:!block")
    })

    closeBtn.classList.remove("!hidden", "xl:!block")
    openBtn.classList.add("!hidden", "xl:!block")
    nav.classList.add("pr-16")
}

closeBtn.addEventListener("click", handleCloseBtnClick);
openBtn.addEventListener("click", handleOpenBtnClick)