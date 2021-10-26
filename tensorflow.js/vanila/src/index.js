import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import './lib/styles/styles.css';

function index() {
  const root = document.getElementById('root');

  const createTitle = () => {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = 'Object Detection';
    root.appendChild(title);
  };

  const approveWebcam = (video) => {
    const handleSuccess = (stream) => {
      video.srcObject = stream;
    };
    navigator.mediaDevices.getUserMedia({ video: true }).then(handleSuccess);
  };

  const createWebcam = () => {
    const video = document.createElement('video');
    video.classList.add('webcam');
    video.style.width = 320;
    video.style.height = 240;
    video.autoplay = true;
    video.playsInline = true;
    video.muted = true;
    root.appendChild(video);

    approveWebcam(video);
  };

  const createButtonBox = (buttonList) => {
    const buttonBox = document.createElement('div');
    buttonBox.classList.add('button-box');

    buttonList.map((item) => {
      const button = document.createElement('button');
      button.classList.add('webcam-button');
      if (item === 'capture') {
        button.classList.add('capture-button');
      }
      button.innerText = item;
      buttonBox.appendChild(button);
    });

    root.appendChild(buttonBox);
  };

  const createResult = () => {
    const display = document.createElement('div');
    const prediction = document.createElement('p');
    const probability = document.createElement('p');

    display.classList.add('result-box');
    prediction.classList.add('prediction');
    probability.classList.add('probability');

    prediction.innerText = 'prediction : none';
    probability.innerText = 'probability : none';
    display.appendChild(prediction);
    display.appendChild(probability);
    root.appendChild(display);
  };

  const tensorControl = () => {
    const cpatureButton = document.querySelector('.capture-button');
    cpatureButton.addEventListener('click', async () => {
      const player = document.querySelector('.webcam');

      if (!player) {
        console.log('not exist player');
        return;
      }

      const webcam = await tf.data.webcam(player, {
        resizeWidth: 224,
        resizeHeight: 224,
      });

      const img = await webcam.capture();
      document.getElementById('console');

      await mobilenet.load().then((model) => {
        model.classify(img).then((result) => {
          console.log(result);
        });
      });
    });
  };

  const init = () => {
    createTitle();
    createWebcam();
    createResult();
    createButtonBox(['capture', 'stop']);
    tensorControl();
  };
  init();
}

index();
