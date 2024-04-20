const res = () => {
    const button = document.querySelector('button');
    button.classList.add("animate");
    setTimeout(() => {
        button.classList.remove("animate");
    }, 600) //1s = 1000ms
}