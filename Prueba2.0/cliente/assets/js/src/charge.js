export const charge = (info) => {
    console.log(info);
    let position = info;
    if (position.length != 0) {
        position.forEach(element => {
            document.getElementById(element.tabla).appendChild(document.getElementById(element.carta));
        });
    }
}