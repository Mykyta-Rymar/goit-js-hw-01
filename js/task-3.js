function getElementWidth(content, padding, border) {
     let con = Number.parseFloat(content);
     let pad = Number.parseFloat(padding);
     let bor = Number.parseFloat(border);
     const all = con + pad * 2 + bor * 2;
     return all;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
// console.log(getElementWidth("42px", "32px", "10px"))
