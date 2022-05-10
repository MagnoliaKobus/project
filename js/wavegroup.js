import { Wave } from "/js/wave.js";

export class WaveGroup {
  constructor() {
    this.totalWaves = 4;
    this.totalPoints = 6;

    this.color = [
      "rgba(100,199,255,0.8)",
      "rgba(174,228,255,0.8)",
      "rgba(196,244,254,0.8)",
      "rgba(196,255,255,0.8)",
    ];
    this.waves = [];

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }
  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }
  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}
