const folderInput = document.getElementById('folderInput');
const convertBtn = document.getElementById('convertBtn');
const output = document.getElementById('output');
const outputMessage = document.getElementById('outputMessage');
const downloadLink = document.getElementById('downloadLink');

convertBtn.addEventListener('click', () => {
    const files = folderInput.files;

    if (!files.length) {
        alert('Please select a folder to convert.');
        return;
    }

    // Mock conversion process
    const folderName = files[0].webkitRelativePath.split('/')[0];
    outputMessage.textContent = `The folder \"${folderName}\" has been successfully converted to .RAR.`;
    downloadLink.href = '#'; // Simulating a converted .RAR file link
    downloadLink.style.display = 'block';
    output.style.display = 'block';
});
