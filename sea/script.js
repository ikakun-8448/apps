// 人形をクリックしたときの処理
function dollClick() {
    // 人形の顔をフェードアウト
    const dollFace = document.getElementById("doll-face");
    dollFace.style.opacity = 0;
  
    // 血のエフェクトをフェードイン
    const bloodEffect = document.getElementById("blood-effect");
    bloodEffect.style.opacity = 1;
  
    // 1秒後にフェードアウト
    setTimeout(function() {
      dollFace.style.opacity = 1;
      bloodEffect.style.opacity = 0;
    }, 1000);
  
    // 音声を再生
    const audio = document.getElementById("audio-element");
    audio.play();
  }
  
  // 画像選択ボタンをクリックしたときの処理
  function imageUploadClick() {
    document.getElementById("image-upload").click();
  }
  
  // ファイル選択の変更イベント
  function handleImageUpload() {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
      const image = document.getElementById("doll-face");
      image.src = e.target.result;
    };
  
    reader.readAsDataURL(file);
  }
  
  // 画面が読み込まれたときの処理
  window.onload = function() {
    // 人形をクリックしたときのイベントリスナーを追加
    document.getElementById("doll").addEventListener("click", dollClick);
  
    // 画像選択ボタンをクリックしたときのイベントリスナーを追加
    document.getElementById("image-upload-btn").addEventListener("click", imageUploadClick);
  
    // ファイル選択の変更イベントリスナーを追加
    document.getElementById("image-upload").addEventListener("change", handleImageUpload);
  };
  