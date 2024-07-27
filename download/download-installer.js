function updateDownloadLink() {
    const version = document.getElementById("download-version").value;
    const os = document.getElementById('download-os').value;
    const arch = document.getElementById('download-architecture').value;

    const downloadButton = document.getElementById("download-link");

    // make sure anything added to dist is formatted this way
    let link;
    if (os === "linux") {
        link = `../dist/${version}/cobalt-${version}-${arch}-${os}.deb`;
    }
    downloadButton.href = link;
}

document.getElementById('download-os').addEventListener("change", function() {
    updateArchitectureOptions();
    updateDownloadLink();
});

document.getElementById("download-version").addEventListener("change", updateDownloadLink);
document.getElementById("download-architecture").addEventListener("change", updateDownloadLink);
document.getElementById("download-os").addEventListener("change", updateDownloadLink);

updateDownloadLink();