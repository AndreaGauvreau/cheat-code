window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors= document.querySelector('a');

    setTimeout(() => {
        transition_el.classList.remove('.is-active');
    },500);
    for(let i = 0; i<anchors.length; i++) {
        const anchors= anchors[i]
        anchors.addEventListener('click', e => {
            e.preventDefault();
            let target= e.target.href;
            console.log(target);
        })
    }
}