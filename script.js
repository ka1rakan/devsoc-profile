const discord = document.querySelector('.discord');


discord.addEventListener('click', () => {
    navigator.clipboard.writeText("spideysuhan");
    discord.innerHTML = `<img src="images/clipboard-check-fill.svg" alt="Copied to clipboard">`
    setTimeout(() => {
        discord.innerHTML = `<img src="images/discord.svg" alt="Discord">`
    }, 2000);
});