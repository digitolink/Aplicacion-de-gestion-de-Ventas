export function rutaHost() {

    let HOST;

    switch (window.location.hostname) {
        case "localhost":
            HOST = "http://localhost:3001/";
            break;

        case "127.0.0.1":
            HOST = "http://127.0.0.1:3001/";
            break;

        default:
            HOST = "/"
            break;
    }
    return HOST;
}