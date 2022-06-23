export function rutaHost() {

    let HOST

    switch (window.location.hostname) {
        case "localhost":
            HOST = "http://localhost:8080/"
            break;

        case "127.0.0.1":
            HOST = "http://127.0.0.1:8080/"
            break;

        default:
            HOST = "/"
            break;
    }
    return HOST;
}