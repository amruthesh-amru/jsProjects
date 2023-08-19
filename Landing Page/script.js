
const { annotate } = RoughNotation;


const e = document.querySelector(".content_1")
const annotation = annotate(e, {
    type: 'highlight', color: '#FFF176'
});
annotation.show();