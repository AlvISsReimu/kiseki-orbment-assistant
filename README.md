<p align="center">
  <a href="https://www.orbment.io/" target="_blank" rel="noopener noreferrer">
    <img width="360" src="https://github.com/user-attachments/assets/52e1e59e-939f-4bfb-9124-1c3344307501" alt="logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://github.com/AlvISsReimu/kiseki-orbment-assistant/actions/workflows/ci-workflow.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/AlvISsReimu/kiseki-orbment-assistant/ci-workflow.yml?branch=main&style=flat&logo=github&label=CI&color=b66e1d" alt="GitHub Actions Workflow Status">
  </a>
  <a href="https://kiseki-orbment-assistant-front-end.vercel.app/">
    <img src="https://img.shields.io/github/deployments/AlvISsReimu/kiseki-orbment-assistant/Production?style=flat&logo=vercel&label=CD&color=0786e7" alt="GitHub deployments">
  </a>
  <a href="https://github.com/AlvISsReimu/kiseki-orbment-assistant/commits/main/">
    <img src="https://img.shields.io/github/last-commit/AlvISsReimu/kiseki-orbment-assistant?style=flat&color=c75d5c" alt="GitHub last commit">
  </a>
  <a href="https://github.com/AlvISsReimu/kiseki-orbment-assistant/graphs/commit-activity">
    <img src="https://img.shields.io/github/commit-activity/m/AlvISsReimu/kiseki-orbment-assistant?style=flat&label=commit&color=10af6d" alt="GitHub commit activity">
  </a>
  <a href="https://github.com/AlvISsReimu/kiseki-orbment-assistant/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/AlvISsReimu/kiseki-orbment-assistant?style=flat&color=5e5279" alt="GitHub contributors">
  </a>
  <a href="https://github.com/AlvISsReimu/kiseki-orbment-assistant/stargazers">
    <img src="https://img.shields.io/github/stars/AlvISsReimu/kiseki-orbment-assistant?style=flat&color=c7b960" alt="GitHub Repo stars">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/AlvISsReimu/kiseki-orbment-assistant?style=flat&color=c0bed0" alt="GitHub License">
  </a>
</p>



# <img src="/packages/front-end/public/favicon.ico" width="28px" height="28px"></img> Trails Orbment Assistant

An assistant tool to help user set up orbment in Trails Series games. (Only 'Kai no Kiseki' is supported for now)

## Live Link

[![orbment.io](https://img.shields.io/badge/ORBMENT.IO-193158?style=for-the-badge&logo=data:image/png;base64,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)](https://www.orbment.io/)

## Development

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![MaterialUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### Resolve dependencies

```shell
npm install
```

### Start a development server

```shell
npm run dev     # Run vite
```

### Code Linting

```shell
npm run lint    # Use ESLint for .js|.ts|.tsx
npm run format  # Use Prettier for code formatting
```

### Test

```shell
npm test        # Run vitest
```

### Build

```shell
npm run build   # Run vite build
```

## Contributors

This project is made possible by the following contributors. Feel free to contribute!

![Contributors](https://contrib.rocks/image?repo=AlvISsReimu/kiseki-orbment-assistant)

## License

[MIT](LICENSE)
