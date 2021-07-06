const fs = require('fs');

const VERSION = process.argv.slice(2);

fs.readFile('../CHANGELOG.md', 'utf8', (err, data) => {
    const separator = '## v';
    const releases = data.split(separator);
    for (const release of releases) {
        if (release.includes(VERSION)) {
            fs.writeFile('TAG_CHANGELOG.md', `## v${release}`, err => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log('Successfully written TAG_CHANGELOG.md');
            })
        }
    }
});