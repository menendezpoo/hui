
# Simple Typescript/Browser code stub 

To setup after cloning (or copying), run:
```bash
npm install
```

## Features

Where things go:
- Source code on /src
- Test sources on /test
- Resources on /html

## Configuring Idea IDE Unit Testing: 

- Run > 
- Edit Configuration > 
- Extra mocha options:
```
--require ts-node/register --require jsdom-global/register
```

### Test on Idea IDE 
- Useful for Webstorm, etc.
- A green arrow should be displayed on the `.spec` files, to run tests locally.

### Run tests on command line
Execute the following to run tests:

```bash
npm run test
```

### Run coverage using Istanbul
Execute the following to run coverage:
```bash
npm run coverage
```
This will generate a `./.nyc_output` and a `./coverage` folders, where the coverage
data is saved.

### Build single file for browser
Execute the following to build the file:
```bash
npm run build
```

## Mark Idea IDE folders:
Recommendation of (Right Click > Mark directory as > ...)

- `html`: Resource Root
- `html/static`: Excluded
- `src`: Sources Root
- `test`: Test Sources Root
