import Timer from './timer.js'

const tempoDisplay = document.querySelector('.tempo')
const decreaseTempoBtn = document.querySelector('.decrease-tempo')
const increaseTempoBtn = document.querySelector('.increase-tempo')
const tempoSlider = document.querySelector('.slider')
const subtractBeats = document.querySelector('.subtract-beats')
const addBeats = document.querySelector('.add-beats')
const measureCount = document.querySelector('.measure-count')
const startStopBtn = document.querySelector('.start-stop')

const click1 = new Audio('./sounds/click1.mp3')
const click2 = new Audio('./sounds/click2.mp3')

let bpm = 140
let beatsPerMeasure = 4
let beatCount = 0
let isRunning = false

// 減號按鈕
decreaseTempoBtn.addEventListener('click', () => {
  if (bpm <= 20) { return }
  bpm--
  updateMetronome()
})

// 加號按鈕
increaseTempoBtn.addEventListener('click', () => {
  if (bpm >= 280) { return }
  bpm++
  updateMetronome()
})

// 滑軌設定
tempoSlider.addEventListener('input', () => {
  bpm = tempoSlider.value
  updateMetronome()
})

// 減少小節拍數
subtractBeats.addEventListener('click', () => {
  if (beatsPerMeasure <= 2) { return }
  beatsPerMeasure--
  measureCount.textContent = beatsPerMeasure
  beatCount = 0
})

// 增加小節拍數
addBeats.addEventListener('click', () => {
  if (beatsPerMeasure >= 12) { return }
  beatsPerMeasure++
  measureCount.textContent = beatsPerMeasure
  beatCount = 0
})

// start-stop
startStopBtn.addEventListener('click', () => {
  beatCount = 0
  if (!isRunning) {
    metronome.start()
    isRunning = true
    startStopBtn.textContent = 'STOP'
  } else {
    metronome.stop()
    isRunning = false
    startStopBtn.textContent = 'START'
  }
})


// 更新BPM數值
function updateMetronome() {
  tempoDisplay.textContent = bpm
  tempoSlider.value = bpm
  metronome.timeInterval = 60000 / bpm
}

// 播放
function playClick() {
  if (beatCount === beatsPerMeasure) {
    beatCount = 0
  }
  if (beatCount === 0) {
    click1.play()
    click1.currentTime = 0
  } else {
    click2.play()
    click2.currentTime = 0
  }
  beatCount++
}

const metronome = new Timer(playClick, 60000 / bpm, { immediate: true })
