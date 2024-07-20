var checkbox = document.getElementById("checkbox1");
const card = document.querySelector('.card');
const image = document.getElementById('discord-1');
const image1 = document.getElementById('discord-2')
const image2 = document.getElementById('youtube-1')
const image3 = document.getElementById('youtube-2')
const image4 = document.getElementById('malware-1')
const image5 = document.getElementById('malware-2')
const image6 = document.getElementById('vmware-1')
const image7 = document.getElementById('vmware-2')

let isimageShowing = true; 
let isimage2Showing = true; 
let isimage4Showing = true;
let isimage6Showing = true;

document.getElementById('checkbox1').addEventListener('change', function() {
  if (this.checked) {
    localStorage.setItem('toggleState', 'on');
  }
  else{
    localStorage.removeItem('toggleState');
  }
});

if (localStorage.getItem('toggleState') === 'on') {
  var element = document.body;
  element.classList.toggle("white-mode");
  card.style.backgroundColor = "#05fca6";
}

function whitemode() {
    var element = document.body;
    element.classList.toggle("white-mode");
    card.style.backgroundColor = "#05fca6";
    const isLightMode = element.classList.contains("white-mode");
    card.style.backgroundColor = isLightMode ? "#05fca6" : "#023020";
    if (isimageShowing) {
        image.style.display = 'none';
        image1.style.display = 'block';
        isimageShowing = false;
      } else {
        image.style.display = 'block';
        image1.style.display = 'none';
        isimageShowing = true;
      }
      if (isimage2Showing) {
        image2.style.display = 'none';
        image3.style.display = 'block';
        isimage2Showing = false;
      } else {
        image2.style.display = 'block';
        image3.style.display = 'none';
        isimage2Showing = true;
      }
      if (isimage4Showing) {
        image4.style.display = 'none';
        image5.style.display = 'block';
        isimage4Showing = false;
      } else {
        image4.style.display = 'block';
        image5.style.display = 'none';
        isimage4Showing = true;
      }
      if (isimage6Showing) {
        image6.style.display = 'none';
        image7.style.display = 'block';
        isimage6Showing = false;
      } else {
        image6.style.display = 'block';
        image7.style.display = 'none';
        isimage6Showing = true;
      }
};

image.addEventListener('click', function() {
    window.location.href = "https://discord.gg/tsghUAH38R"
});
image1.addEventListener('click', function() {
    window.location.href = "https://discord.gg/tsghUAH38R"
});
image2.addEventListener('click', function() {
    window.location.href = "https://www.youtube.com/@Nguyenminhwang/featured"
});
image3.addEventListener('click', function() {
    window.location.href = "https://www.youtube.com/@Nguyenminhwang/featured"
});
image4.addEventListener('click', function() {
    window.location.href = "https://drive.google.com/file/d/1jr4MSEcrOVpfcLoEQM7lmJoy1FDH_-K1/view?usp=sharing"
});
image5.addEventListener('click', function() {
    window.location.href = "https://drive.google.com/file/d/1jr4MSEcrOVpfcLoEQM7lmJoy1FDH_-K1/view?usp=sharing"
});
image6.addEventListener('click', function() {
  window.location.href = "https://drive.google.com/file/d/1AVVgOw3eSFZEpEOwJN-Fd8LZ6MGcTrhu/view?usp=sharing"
});
image7.addEventListener('click', function() {
  window.location.href = "https://drive.google.com/file/d/1AVVgOw3eSFZEpEOwJN-Fd8LZ6MGcTrhu/view?usp=sharing"
});



image.addEventListener('mousemove', function(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  const scaleX = 1 + (x / image.offsetWidth) * 0.2;
  const scaleY = 1 + (y / image.offsetHeight) * 0.2;

  image.style.transform = `scale(${scaleX}, ${scaleY})`;
});

image.addEventListener('mouseout', function() {
  image.style.transform = 'scale(1, 1)';
});

image1.addEventListener('mousemove', function(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  const scaleX = 1 + (x / image1.offsetWidth) * 0.2;
  const scaleY = 1 + (y / image1.offsetHeight) * 0.2;

  image1.style.transform = `scale(${scaleX}, ${scaleY})`;
});

image1.addEventListener('mouseout', function() {
  image1.style.transform = 'scale(1, 1)';
});

image2.addEventListener('mousemove', function(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  const scaleX = 1 + (x / image2.offsetWidth) * 0.2;
  const scaleY = 1 + (y / image2.offsetHeight) * 0.2;

  image2.style.transform = `scale(${scaleX}, ${scaleY})`;
});

image2.addEventListener('mouseout', function() {
  image2.style.transform = 'scale(1, 1)';
});

image3.addEventListener('mousemove', function(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  const scaleX = 1 + (x / image3.offsetWidth) * 0.2;
  const scaleY = 1 + (y / image3.offsetHeight) * 0.2;

  image3.style.transform = `scale(${scaleX}, ${scaleY})`;
});

image3.addEventListener('mouseout', function() {
  image3.style.transform = 'scale(1, 1)';
});

image4.addEventListener('mousemove', function(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  const scaleX = 1 + (x / image4.offsetWidth) * 0.2;
  const scaleY = 1 + (y / image4.offsetHeight) * 0.2;

  image4.style.transform = `scale(${scaleX}, ${scaleY})`;
});

image4.addEventListener('mouseout', function() {
  image4.style.transform = 'scale(1, 1)';
});

image5.addEventListener('mousemove', function(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  const scaleX = 1 + (x / image5.offsetWidth) * 0.2;
  const scaleY = 1 + (y / image5.offsetHeight) * 0.2;

  image5.style.transform = `scale(${scaleX}, ${scaleY})`;
});

image5.addEventListener('mouseout', function() {
  image5.style.transform = 'scale(1, 1)';
});

image6.addEventListener('mousemove', function(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  const scaleX = 1 + (x / image6.offsetWidth) * 0.2;
  const scaleY = 1 + (y / image6.offsetHeight) * 0.2;

  image6.style.transform = `scale(${scaleX}, ${scaleY})`;
});

image6.addEventListener('mouseout', function() {
  image6.style.transform = 'scale(1, 1)';
});

image7.addEventListener('mousemove', function(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  const scaleX = 1 + (x / image7.offsetWidth) * 0.2;
  const scaleY = 1 + (y / image7.offsetHeight) * 0.2;

  image7.style.transform = `scale(${scaleX}, ${scaleY})`;
});

image7.addEventListener('mouseout', function() {
  image7.style.transform = 'scale(1, 1)';
});