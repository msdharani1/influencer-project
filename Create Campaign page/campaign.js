document.addEventListener('DOMContentLoaded', () => {
  const uploadBoxes = [
      { buttonId: 'file-input-button-1', inputId: 'file-inputs-1', boxId: 'upload-box-1', nextIds: [] },
      { buttonId: 'file-input-button-2-1', inputId: 'file-inputs-2-1', boxId: 'upload-box-2-1', nextIds: ['upload-box-2-2', 'upload-box-2-3'] },
      { buttonId: 'file-input-button-2-2', inputId: 'file-inputs-2-2', boxId: 'upload-box-2-2', nextIds: [] },
      { buttonId: 'file-input-button-2-3', inputId: 'file-inputs-2-3', boxId: 'upload-box-2-3', nextIds: [] },
      { buttonId: 'file-input-button-3-1', inputId: 'file-inputs-3-1', boxId: 'upload-box-3-1', nextIds: ['upload-box-3-2', 'upload-box-3-3'] },
      { buttonId: 'file-input-button-3-2', inputId: 'file-inputs-3-2', boxId: 'upload-box-3-2', nextIds: [] },
      { buttonId: 'file-input-button-3-3', inputId: 'file-inputs-3-3', boxId: 'upload-box-3-3', nextIds: [] }
  ];

  const uploadedFiles = {
      images: [],
      videos: []
  };

  uploadBoxes.forEach(({ buttonId, inputId, boxId, nextIds }) => {
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

                  beforeElement.style.display = 'none';
                  afterElement.style.display = 'block';

                  infoRightElement.innerHTML = `
                      <p>${file.name}</p>
                      <p>${(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                  `;

                  if (boxId.startsWith('upload-box-2')) {
                      uploadedFiles.images.push(file);
                  } else if (boxId.startsWith('upload-box-3')) {
                      uploadedFiles.videos.push(file);
                  }

                  afterElement.querySelector('.info-close i').addEventListener('click', () => {
                      beforeElement.style.display = 'flex';
                      afterElement.style.display = 'none';
                      fileInput.value = '';
                      
                      if (boxId.startsWith('upload-box-2')) {
                          const index = uploadedFiles.images.indexOf(file);
                          if (index > -1) uploadedFiles.images.splice(index, 1);
                          nextIds.forEach(id => document.getElementById(id).style.display = 'none');
                      } else if (boxId.startsWith('upload-box-3')) {
                          const index = uploadedFiles.videos.indexOf(file);
                          if (index > -1) uploadedFiles.videos.splice(index, 1);
                          nextIds.forEach(id => document.getElementById(id).style.display = 'none');
                      }
                  });

                  if (fileInput.id === 'file-inputs-2-1') {
                      nextIds.forEach(id => document.getElementById(id).style.display = 'block');
                  } else if (fileInput.id === 'file-inputs-3-1') {
                      nextIds.forEach(id => document.getElementById(id).style.display = 'block');
                  }
              };
              reader.readAsDataURL(file);
          }
      });
  });
});
