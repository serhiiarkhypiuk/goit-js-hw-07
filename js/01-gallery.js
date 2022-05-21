import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery")

gallery.addEventListener("click", originalImage)

const markup = galleryItems.map((galleryItem) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${galleryItem.original}">
            <img class="gallery__image" src="${galleryItem.preview}" 
                data-source="${galleryItem.original}" 
                alt="${galleryItem.description}"/>
        </a>
    </div>`)
    .join("")

gallery.insertAdjacentHTML("beforeend", markup)

const onKeyPress = (key) => {(key.code === "Escape") ? instance.close() : console.log("Try 'Escape' button :)")}
const onModalOpening = () => {window.addEventListener("keydown", onKeyPress)}
const onModalClosing = () => {window.removeEventListener("keydown", onKeyPress)}
let instance = {}

function originalImage(event) {
    event.preventDefault()

    if (event.target.nodeName === "IMG") {
        instance = basicLightbox.create(`
            <img src="${event.target.dataset.source}" alt="${event.target.alt}"/>
            `, {
            onShow: onModalOpening,
            onClose: onModalClosing
            })

        instance.show()
    }
    
}