import fs from 'fs';
import path from 'path';



function getDirName(problemName) {
    let str = problemName.toLowerCase();
    str = str.replace(/\./g, "");
    str = str.replace(/-/g, "_");
    str = str.replace(/ /g, "_");

    return str;
}

function main() {
    const problem = "1046. Last Stone Weight";

    const dirName = getDirName(problem);

    fs.mkdir(dirName, { recursive: true }, (err) => {
        if (err) {
            console.error(err);
            return;
        }

        const parts = dirName.split("_");
        const fileName = parts[0];
         const pkg = parts.slice(1).join("");

        fs.writeFile(path.join(dirName, fileName + ".js"), "//problem name "+pkg, (err) => {
            if (err) {
                console.error(err);
            }
        });

        fs.writeFile(path.join(dirName, fileName + "_test.js"), "//problem name " +pkg, (err) => {
            if (err) {
                console.error(err);
            }
        });
    });
}

main();
