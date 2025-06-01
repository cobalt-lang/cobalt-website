<style>
:global(html) {
    display: table;
    margin: auto;
}

:global(body) {
    display: flex;
    justify-content: center;
    justify-items: center;
    flex-direction: column;
    font-size: 20px;
    font-family: "Lato", sans-serif;
    gap: 0.25rem;
}

button {
    color: white;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
}
  
button:hover {
    border-color: #284f76;
}

.flex-box {
    width: 100vw; 
}

@media (prefers-color-scheme: dark) {
    :global(body) {
        color: white;
        background-color: #15202b;
    }
}

@media (min-width: 1024px) {
    :global(body) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 20px;
        font-family: "Lato", sans-serif;
        gap: 0.25rem;
    }

    .flex-box {
        width: 50vw; 
    }
  }
</style>

<div class="flex-box">
    <h1>Cobalt</h1>
    <p>
        Cobalt is a speedy interpreted language written in Rust. Rust has fast performance, making the Cobalt language also very fast!
        Cobalt is currently a language that does not have many features, and is a functionnal programming language.
        We will introduce class-oriented features later.
    </p>

    <h2>Get Started</h2>
    <p>
        The quickest way is to download our language! This download comes with the CLI required to run your code!
    </p>
    <a href="/download"><button>Download Cobalt</button></a>
</div>
