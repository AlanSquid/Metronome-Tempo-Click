const tempoDisplay = document.querySelector('.tempo')
const decreaseTempoBtn = document.querySelector('.decrease-tempo')
const increaseTempoBtn = document.querySelector('.increase-tempo')
const tempoSlider = document.querySelector('.slider')
const subtractBeats = document.querySelector('.subtract-beats')
const addBeats = document.querySelector('.add-beats')
const measureCount = document.querySelector('.measure-count')


let bpm = 140
let beatsPerMeasure = 4

// 減號按鈕
decreaseTempoBtn.addEventListener('click', () => {
  if (bpm <= 20) { return }
  bpm--
  validateTempo()
  updateMetronome()
})

// 加號按鈕
increaseTempoBtn.addEventListener('click', () => {
  if (bpm >= 280) { return }
  bpm++
  validateTempo()
  updateMetronome()
})

// 滑軌設定
tempoSlider.addEventListener('input', () => {
  bpm = tempoSlider.value
  validateTempo()
  updateMetronome()
})

// 減少小節拍數
subtractBeats.addEventListener('click', () => {
  if (beatsPerMeasure <= 2) { return }
  beatsPerMeasure--
  measureCount.textContent = beatsPerMeasure
})

// 增加小節拍數
addBeats.addEventListener('click', () => {
  if (beatsPerMeasure >= 12) { return }
  beatsPerMeasure++
  measureCount.textContent = beatsPerMeasure
})



// 更新BPM數值
function updateMetronome() {
  tempoDisplay.textContent = bpm
  tempoSlider.value = bpm
}