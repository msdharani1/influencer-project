document.addEventListener('DOMContentLoaded', () => {
    const uploadBoxes = [
      { buttonId: 'file-input-button-1', inputId: 'file-inputs-1', boxId: 'upload-box-1' },
      { buttonId: 'file-input-button-2-1', inputId: 'file-inputs-2-1', boxId: 'upload-box-2-1' },
      { buttonId: 'file-input-button-2-2', inputId: 'file-inputs-2-2', boxId: 'upload-box-2-2' },
      { buttonId: 'file-input-button-2-3', inputId: 'file-inputs-2-3', boxId: 'upload-box-2-3' },
      { buttonId: 'file-input-button-3-1', inputId: 'file-inputs-3-1', boxId: 'upload-box-3-1' },
      { buttonId: 'file-input-button-3-2', inputId: 'file-inputs-3-2', boxId: 'upload-box-3-2' },
      { buttonId: 'file-input-button-3-3', inputId: 'file-inputs-3-3', boxId: 'upload-box-3-3' }
    ];
  
    uploadBoxes.forEach(({ buttonId, inputId, boxId }) => {
      const button = document.getElementById(buttonId);
      const fileInput = document.getElementById(inputId);
      const uploadBox = document.getElementById(boxId);
  
      button.addEventListener('click', () => fileInput.click());
  
      fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
  
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            const beforeElement = uploadBox.querySelector('.before');
            const afterElement = uploadBox.querySelector('.after');
            const infoRightElement = afterElement.querySelector('.info-right');
  
            // Show boxes only for upload-box-2-1
            if (buttonId === 'file-input-button-2-1') {
                document.getElementById('upload-box-2-2').style.display = 'block';
                document.getElementById('upload-box-2-3').style.display = 'block';
            }else{
                document.getElementById('upload-box-2-2').style.display = 'none';
                document.getElementById('upload-box-2-3').style.display = 'none';
            }
            if (buttonId === 'file-input-button-3-1') {
                document.getElementById('upload-box-3-2').style.display = 'block';
                document.getElementById('upload-box-3-3').style.display = 'block';
            }else{
                document.getElementById('upload-box-3-2').style.display = 'none';
                document.getElementById('upload-box-3-3').style.display = 'none';
            }
  
            beforeElement.style.display = 'none';
            afterElement.style.display = 'block';
  
            infoRightElement.innerHTML = `
              <p>${file.name}</p>
              <p>${(file.size / (1024 * 1024)).toFixed(2)} MB</p>
            `;
  
            afterElement.querySelector('.info-close i').addEventListener('click', () => {
              beforeElement.style.display = 'flex';
              afterElement.style.display = 'none';
              fileInput.value = '';
              anyImageUploaded = false; // Reset flag for subsequent uploads
            });
          };
          reader.readAsDataURL(file);
        }
      });
    });
  });
  