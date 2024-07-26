function updateDownloadLink() {
    const version = document.getElementById("download-version").value;

    const downloadButton = document.getElementById("download-link");

    // make sure anything added to dist is formatted this way
    const link = `../dist/${version}/cobalt-${version}-src.zip`;
    downloadButton.href = link;
}

document.getElementById("download-version").addEventListener("change", updateDownloadLink);

updateDownloadLink();