// Source - https://stackoverflow.com/a/39914235
// Posted by Dan Dascalescu, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-31, License - CC BY-SA 4.0

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startTypingMore() {
    var main_text = document.getElementById("main2");

    var text = "I'm currently working on ClientWarden, a secure, visually appealing, well designed, lightweight and platform specific alternative to the default Bitwarden Client.";

    for (const char of text) {
        await sleep(60);
        main_text.textContent += char;
    }
}

async function startTyping() {
    var main_text = document.getElementById("main1");

    var text = "Hi, I'm CT5!";

    for (const char of text) {
        await sleep(20);
        main_text.textContent += char;
    }

    startTypingMore();
}

startTyping();
