#!/bin/bash

# Luo __tests__-kansio, jos ei ole olemassa
mkdir -p __tests__

# Käy läpi kaikki src-kansion .js-tiedostot
for file in src/*.js; do
  filename=$(basename "$file" .js)           # esim. add
  testfile="__tests__/${filename}.test.js"

  # Luo testitiedosto vain jos sitä ei ole jo olemassa
  if [ ! -f "$testfile" ]; then
    echo "Luo testitiedosto $testfile"

    cat > "$testfile" <<EOL
import ${filename} from '../src/${filename}.js';

describe('${filename}', () => {
  test('perustesti', () => {
    expect(typeof ${filename}).toBe('function');
  });
});
EOL
  else
    echo "$testfile on jo olemassa, ohitetaan"
  fi
done

echo "Valmiina! Tarkista __tests__-kansio."
