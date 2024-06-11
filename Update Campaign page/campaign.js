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


//update logic
function img1() {
    let img_after = document.getElementById('file-input-after-1');
    let img_before = document.getElementById('file-input-before-1');

    img_before.style.display = 'block';
    img_after.style.display = 'none';
}

function image_2_3() {
    let img_after = document.getElementById('file-input-after-2-3');
    let img_before = document.getElementById('file-input-before-2-3');

    img_before.style.display = 'block';
    img_after.style.display = 'none';
}
function image_2_2() {
    let img_after = document.getElementById('file-input-after-2-2');
    let img_before = document.getElementById('file-input-before-2-2');

    img_before.style.display = 'block';
    img_after.style.display = 'none';
}
function image_2_1() {
    let img_after = document.getElementById('file-input-after-2-1');
    let img_before = document.getElementById('file-input-before-2-1');

    img_before.style.display = 'flex';
    img_after.style.display = 'none';
}

function image_3_3() {
    let img_after = document.getElementById('file-input-after-3-3');
    let img_before = document.getElementById('file-input-before-3-3');

    img_before.style.display = 'block';
    img_after.style.display = 'none';
}
function image_3_2() {
    let img_after = document.getElementById('file-input-after-3-2');
    let img_before = document.getElementById('file-input-before-3-2');

    img_before.style.display = 'block';
    img_after.style.display = 'none';
}
function image_3_1() {
    let img_after = document.getElementById('file-input-after-3-1');
    let img_before = document.getElementById('file-input-before-3-1');

    img_before.style.display = 'flex';
    img_after.style.display = 'none';
}


// Function to add the image1 input content
function add_img1() {
    const image1 = document.getElementById('file-input-after-1');

    image1.innerHTML = `
        <div class="info">
            <div class="info-left">
                <i class="fa-regular fa-image"></i>
            </div>
            <div class="info-right">
                <p>Image Title</p>
                <p>1.3MB</p>
            </div>
            <div class="info-close">
                <i class="fa-solid fa-xmark" onclick="img1()"></i>
            </div>
        </div>
    `
}
add_img1();

// Function to add the image2-1 input content
function add_img2_1() {
    const image2_1 = document.getElementById('file-input-after-2-1');

    image2_1.innerHTML = `
        <div class="info">
            <div class="info-left">
                <i class="fa-regular fa-image"></i>
            </div>
            <div class="info-right">
                <p>Image1 Title</p>
                <p>1.3MB</p>
            </div>
            <div class="info-close">
                <i class="fa-solid fa-xmark" onclick="image_2_1()"></i>
            </div>
        </div>
    `
}
add_img2_1();


// Function to add the image2-2 input content
function add_img2_2() {
    const image2_2 = document.getElementById('file-input-after-2-2');

    image2_2.innerHTML = `
        <div class="info">
            <div class="info-left">
                <i class="fa-regular fa-image"></i>
            </div>
            <div class="info-right">
                <p>Image1 Title</p>
                <p>1.3MB</p>
            </div>
            <div class="info-close">
                <i class="fa-solid fa-xmark" onclick="image_2_2()"></i>
            </div>
        </div>
    `
}
add_img2_2();

// Function to add the image2-3 input content
function add_img2_3() {
    const image2_3 = document.getElementById('file-input-after-2-3');

    image2_3.innerHTML = `
        <div class="info">
            <div class="info-left">
                <i class="fa-regular fa-image"></i>
            </div>
            <div class="info-right">
                <p>Image1 Title</p>
                <p>1.3MB</p>
            </div>
            <div class="info-close">
                <i class="fa-solid fa-xmark" onclick="image_2_3()"></i>
            </div>
        </div>
    `
}
add_img2_3();


// Function to add the image2-1 input content
function add_img3_1() {
    const image3_1 = document.getElementById('file-input-after-3-1');

    image3_1.innerHTML = `
        <div class="info">
            <div class="info-left">
                <i class="fa-regular fa-circle-play"></i>
            </div>
            <div class="info-right">
                <p>Video1 Title</p>
                <p>1.3MB</p>
            </div>
            <div class="info-close">
                <i class="fa-solid fa-xmark" onclick="image_3_1()"></i>
            </div>
        </div>
    `
}
add_img3_1();


// Function to add the image3-2 input content
function add_img3_2() {
    const image3_2 = document.getElementById('file-input-after-3-2');

    image3_2.innerHTML = `
        <div class="info">
            <div class="info-left">
                <i class="fa-regular fa-circle-play"></i>
            </div>
            <div class="info-right">
                <p>Video2 Title</p>
                <p>1.3MB</p>
            </div>
            <div class="info-close">
                <i class="fa-solid fa-xmark" onclick="image_3_2()"></i>
            </div>
        </div>
    `
}
add_img3_2();

// Function to add the image3-3 input content
function add_img3_3() {
    const image3_3 = document.getElementById('file-input-after-3-3');

    image3_3.innerHTML = `
        <div class="info">
            <div class="info-left">
                <i class="fa-regular fa-circle-play"></i>
            </div>
            <div class="info-right">
                <p>Video3 Title</p>
                <p>1.3MB</p>
            </div>
            <div class="info-close">
                <i class="fa-solid fa-xmark" onclick="image_3_3()"></i>
            </div>
        </div>
    `
}
add_img3_3();