<h1 align="center">Insight OS - AI Enabled Writing OSS</h1>

<p align="center"><em>Empowering writers with intelligent assistance for better content creation</em></p>

<p align="center">
  <a href="https://github.com/abdurmasood/vswrite/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc">
    <img alt="Feature Requests" src="https://img.shields.io/github/issues/abdurmasood/vswrite/feature-request.svg">
  </a>
  <a href="https://github.com/abdurmasood/vswrite/issues?utf8=✓&q=is%3Aissue+is%3Aopen+label%3Abug">
    <img alt="Bugs" src="https://img.shields.io/github/issues/abdurmasood/vswrite/bug.svg">
  </a>
  <a href="https://gitter.im/abdurmasood/vswrite">
    <img alt="Chat on Gitter" src="https://img.shields.io/badge/chat-on%20gitter-yellow.svg">
  </a>
</p>

## About Insight OS

Insight OS is an open-source, AI-powered writing platform designed to help writers of all levels create better content. Built on a foundation of advanced language models and intuitive design, Insight OS provides intelligent writing assistance, real-time feedback, and collaborative tools to enhance your writing process.

This repository contains the core platform where our community of writers, developers, and AI researchers collaborate to build the future of intelligent writing assistance. We publish our [development roadmap](https://github.com/abdurmasood/vswrite/wiki/Roadmap), [feature releases](https://github.com/abdurmasood/vswrite/releases), and maintain open communication about our vision for AI-assisted writing.

The platform is available under the [MIT license](LICENSE.txt), ensuring it remains free and accessible to writers everywhere.


## Contributing

Join our community of writers, developers, and AI researchers in building the future of intelligent writing assistance. There are many ways to contribute:

**For Writers & Content Creators:**
* [Test new writing features](https://github.com/abdurmasood/vswrite/issues?q=is%3Aopen+is%3Aissue+label%3Atesting) and provide feedback
* [Share feature requests](https://github.com/abdurmasood/vswrite/issues/new?template=feature_request.md) for writing tools you'd like to see
* Contribute to our [writing style guides](https://github.com/abdurmasood/vswrite/wiki/Style-Guides) and best practices documentation
* Help improve AI training data through writing samples and feedback

**For Developers & AI Researchers:**
* [Submit bug reports](https://github.com/abdurmasood/vswrite/issues/new?template=bug_report.md) and help us verify fixes
* Review [code changes](https://github.com/abdurmasood/vswrite/pulls) and contribute improvements
* Work on [AI model improvements](https://github.com/abdurmasood/vswrite/wiki/AI-Models) and language processing features
* Develop new writing tools and integrations

**Getting Started:**
For detailed contribution guidelines, see our [Contributing Guide](CONTRIBUTING.md), which covers:
* Setting up the development environment
* Code style and testing requirements  
* Submitting pull requests and feature proposals
* Working with AI models and training data
* Community guidelines and communication channels

## How to Run

### Prerequisites
- Node.js (version 16.x or higher)
- npm (comes with Node.js)
- Git

### Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abdurmasood/vswrite.git
   cd vswrite
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Development Commands:**

   **Start development mode with hot reloading:**
   ```bash
   npm run watch
   ```

   **Compile TypeScript:**
   ```bash
   npm run compile
   ```
   
   **Compile with increased memory (for large builds):**
   ```bash
   NODE_OPTIONS="--max-old-space-size=8192" npm run compile
   ```

   **Run tests:**
   ```bash
   npm test
   ```

   **Launch the application:**
   ```bash
   ./scripts/code.sh
   ```

4. **Build for production:**
   ```bash
   npm run compile-build
   ```

### Development Workflow

- Use `npm run watch` for active development with automatic rebuilding
- Extensions are located in the `/extensions/` folder
- Core platform code is in `/src/vs/`
- Refer to [CLAUDE.md](CLAUDE.md) for detailed development guidance

## Code of Conduct

This project has adopted the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). We are committed to providing a welcoming and inclusive environment for all contributors, regardless of background or writing experience. For more information see our [Code of Conduct](CODE_OF_CONDUCT.md) or contact [community@insightos.org](mailto:community@insightos.org) with any questions or concerns.

## License

Copyright (c) Insight OS Contributors. All rights reserved.

Licensed under the [MIT](LICENSE.txt) license.
