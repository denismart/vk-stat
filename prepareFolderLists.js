const fs = require('fs');

const scanFolder = './src/';

// Получаем все подкатегории
const folders = fs.readdirSync(scanFolder);

// Получаем все функции каждой подкатегории
const allSubdirs = [];
folders.forEach((folder) => {
    const subdirs = fs.readdirSync(scanFolder + folder).filter((dir) => dir !== 'index.js');
    allSubdirs.push({ [folder]: subdirs });
});

// Создаем файлы и сохраняем их
allSubdirs.forEach((subdir) => {
    const folder = Object.keys(subdir)[0];
    const functionsList = Object.values(subdir)[0];

    if (folder !== '') {
        let fileContent = '';
        functionsList.forEach((file) => {
            fileContent += `export { default as ${file} } from './${file}/index';\n`;
        });

        if (fileContent !== '') {
            fs.writeFileSync(`./src/${folder}/index.js`, fileContent);
        }
    }
});
