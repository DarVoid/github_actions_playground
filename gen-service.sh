#!/bin/bash

if [[ $# -lt 1 ]]; then
    printf "Error: missing package name"
    exit;
fi

root=$(pwd)
services_root="src/services/"

echo "Creating directory"
mkdir -p $services_root$1
cd $services_root$1

echo "Creating package.json"
npm init -y 

echo "Setting up npm scripts"
npx -y npm-add-script \
    -k "build" \
    -v "tsc" \
    --force

echo "Installing TypeScript"
npm i typescript --save-dev

echo "Creating tsconfig.json"
rm -f tsconfig.json
tsc --init --rootDir src/ --outDir dist/

echo "Creating .gitignore"
echo -e "node_modules/\ndist/" > .gitignore

echo "Setting up project structure"
mkdir -p src
touch src/index.ts
echo -e "const foo = () => 'bar';\nexport { foo };" > src/index.ts

echo "Building"
npm run build
cd $root

echo "Installing service into parent project"
npm i $services_root$1

echo "Done."
