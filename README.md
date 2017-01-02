
# @passmarked/crawlable

![NPM](https://img.shields.io/npm/dt/@passmarked/crawlable.svg)

[Passmarked](http://passmarked.com) is a suite of tests that can be run against any page/website to identify issues with parity to most online tools in one package.

The [@passmarked/crawlable](https://npmjs.com/package/@passmarked/crawlable) server was a quick solution to a problem we have. We wanted to able to test our accuraccy when crawling websites and finding new links.

The server is passed an amount of pages from which it builds out a "directory" that can be browsed/crawled with the specified amount of pages.

## Install

### NPM

```bash
npm install -g @passmarked/crawlable
```

View the project at [npmjs.com/package/@passmarked/crawlable](https://www.npmjs.com/package/@passmarked/crawlable).

### From Source

To build from source:

```bash
git clone git@github.com:passmarked/crawlable.git crawlable/
cd crawlable/
[yarn|npm] install
```

## Terminal Usage

```bash
# Start the server with the defaults,
# namely - 100 pages on port 8080
passmarked_crawlable

# Start the server, by default with 500 pages
passmarked_crawlable -c 500

# Start the server with 1000 pages on port 8181
passmarked_crawlable -c 1000 -p 8181
```

## Contributing

If you spot any area that could use help feel free to open a PR. This was a quick project we needed, so tests to follow next.

## License

Copyright 2016 Passmarked Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
