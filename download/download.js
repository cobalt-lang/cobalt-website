function updateArchitectureOptions() {
    const os = document.getElementById("download-os").value;
    const archSelect = document.getElementById("download-architecture");
    archSelect.outerHTML

    const armOption = archSelect.querySelector('option[value="aarch64"]');
    if (armOption) {
        archSelect.removeChild(armOption);
    }

    if (os !== 'windows') {
        const armOptionElement = document.createElement('option');
        armOptionElement.value = 'aarch64';
        armOptionElement.textContent = 'ARM64';
        archSelect.appendChild(armOptionElement);
        if (archSelect.value === 'aarch64') {
            archSelect.value = 'aarch64';
        }
    }
}

function updateDownloadLink() {
    const version = document.getElementById("download-version").value;
    const os = document.getElementById('download-os').value;
    const arch = document.getElementById('download-architecture').value;

    const downloadButton = document.getElementById("download-link");

    // make sure anything added to dist is formatted this way
    let link;
    if (os === "windows") {
        link = `../dist/${version}/cobalt-${version}-${arch}-${os}.zip`;
    } else if (os === "linux") {
        link = `../dist/${version}/cobalt-${version}-${arch}-${os}.tar.gz`;
    }
    downloadButton.href = link;
}

document.getElementById('download-os').addEventListener("change", function() {
    updateArchitectureOptions();
    updateDownloadLink();
});

document.getElementById("download-version").addEventListener("change", updateDownloadLink);
document.getElementById("download-architecture").addEventListener("change", updateDownloadLink);


// init everything upon page opening, causes bugs if not done
updateArchitectureOptions();
updateDownloadLink();