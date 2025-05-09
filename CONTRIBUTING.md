# CONTRIBUTING

It is similar to other projects, here is all you need to know. Here are the requirements that you need to know before getting started.

## Requirements

- **Node.js** version **22** is required for development.
- The **latest** version of **pnpm** is highly prefered.
- Make sure that the website functions properly before creating a pull request.
- All pull requests should be made to the `dev` branch.
    - The `main` branch is **reserved** for Cloudflare builds.

## Getting Started

1. Fork the repository and create a new branch
    - Use the prefix `feature/` for new features or `fix/` for bug fixes followed by a short descriptive name. Such as `fix/download-not-working`
2. Implement the features/fixes in the new branch.
3. Run `pnpm run lint` and then `pnpm run dev` to make sure the code doesn't have style issues and the feature or fix you are implementing works as intended.
4. Make a pull request to the `dev` branch and wait to be apprroved!