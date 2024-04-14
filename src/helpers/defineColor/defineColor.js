export function defineColorCell(arr, ind) {
    const colorId = arr[ind];
    const colors = {
        green: "#7dbd80",
        grey: "#a2a2a1",
        yellow: "#ece041",
    };
    return colors[colorId];
}
