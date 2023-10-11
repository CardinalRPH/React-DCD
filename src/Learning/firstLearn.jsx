import { createElement } from "react"

const FirstLearn = () => {
    const heading = createElement('h1', null, 'Bio');

    const listItem1 = createElement('li', null, 'Nama: Dicoding Indonesia');
    const listItem2 = createElement('li', null, 'Bidang: Education');
    const listItem3 = createElement('li', null, 'Tagline: Decode Ideas, Discover Potential.');

    const unorderedList = createElement('ul', null, [listItem1, listItem2, listItem3]);

    const containerer = createElement('div', null, [heading, unorderedList]);

    return containerer
}

export default FirstLearn