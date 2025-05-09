<script lang="ts">
    export const csr = false;
    export const prerender = true;

    // make OS type, if not then access to the architectures array like this: architectures[selectedOS] will return an error unless written like architectures[selectedOS as keyof typeof architectures], this type simplifies that
    type OS = "linux" | "windows" | "darwin";

    let selectedVersion: string = "v0.1.0";
    let selectedOS: OS = "linux";
    let selectedArchitecture: string = "x86_64";

    let downloadLink = "";
    let fileex = "";

    const architectures = {
        windows: [
            { label: "64-bit", value: "x86_64" },
            { label: "ARM64", value: "aarch64" }
        ],
        linux: [
            { label: "64-bit", value: "x86_64" },
            { label: "ARM64", value: "aarch64" },
            { label: "RISC-V 64", value: "riscv64"}
        ],
        darwin: [
            { label: "ARM64", value: "aarch64" },
            { label: "64-bit", value: "x86_64" }
        ]
    };

    $: {
        fileex = selectedOS === "windows" || selectedOS === "darwin" ? ".zip" : ".tar.gz";
        downloadLink = `https://github.com/cobalt-lang/cobalt-lang/releases/download/${selectedVersion}/cobalt-${selectedVersion}-${selectedOS}-${selectedArchitecture}${fileex}`;
    }

    $: {
        const validArchitectures = architectures[selectedOS];
        if (!validArchitectures.some(arch => arch.value === selectedArchitecture)) {
            selectedArchitecture = validArchitectures[0].value; // Auto-select the first valid option
        }
    }
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

<style>
    :global(html) {
        display: table;
        margin: auto;
    }

    :global(body) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-size: 20px;
        font-family: "Lato", sans-serif;
        gap: 0.25rem;
    }
    button {
        display: inline-block;
        background-color: #2d9c2d;
        padding: 0.5rem 1rem;
        font-size: 20px;
        color: white;
        border-width: 1px;
        border-color: #2d9c2d;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    button:hover {
        background-color: #267e26;
    }
    .download-preferences-select {
        font-size: 20px;
        background-color: #000000;
        color: white;
        border-radius: 5px;
    }
    a {
        color: #7393B3;
    }
    .footer-text {
        font-size: 14px;
        color: #919191;
    }
    .download-method-tabs {
        display: flex;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        border-bottom: 1px solid rgb(85, 96, 102);
    }
    .download-tabs-item {
        font-size: 20px;
        padding-left: 10px;
        padding-right: 15px;
        color: black;
        text-decoration: none;
        padding-bottom: 5px;
    }
    .download-tabs-item.active {
        border-bottom: 2px solid #7393B3;
        color: #7393B3;
    }
    @media (prefers-color-scheme: dark) {
        :global(body) {
            color: white;
            background-color: #15202b;
        }
        .download-tabs-item {
            color: white;
        }
    }
</style>

<!-- Main Page Content -->
<h1>Cobalt Download</h1>
<p>Select your options for download!</p>

<div class="download-method-tabs">
    <a href="#" class="download-tabs-item active">Prebuilt Binaries</a>
    <a href="#" class="download-tabs-item">Source Code</a>
</div>

<p>Install Cobalt
    <select id="download-version" class="download-preferences-select" bind:value={selectedVersion}>
        <!-- ADD NEW VERSIONS HERE!!! -->
        <option value="v0.1.0">v0.1.0 (latest)</option>
    </select>
    for
    <select id="download-os" class="download-preferences-select" bind:value={selectedOS}>
        <option value="windows">Windows</option>
        <option value="linux">Linux</option>
        <option value="darwin">MacOS</option>
    </select>
    running
    <select id="download-architecture" class="download-preferences-select" bind:value={selectedArchitecture}>
        {#each architectures[selectedOS] as { label, value }}
        <option value={value}>{label}</option>
    {/each}
    </select>
</p>

<a href="{downloadLink}" target="_blank" style="display: inline-block; text-decoration: none;">
    <button><i class="fa fa-download" style="padding-right: 5px;"></i> Download Cobalt</button>
</a>

<p class="footer-text">Learn more about Cobalt's <a href="https://www.gnu.org/licenses/gpl-3.0.en.html#license-text" target="_blank">GPL-v3.0</a> license.</p>
