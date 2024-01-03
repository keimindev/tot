// stopwatch.js
export class Stopwatch {
    constructor() {
        this.startTime = null;
        this.running = false;
        this.elapsedTime = 0;
        this.lastTimestamp = 0;
    }

    start() {
        if (!this.running) {
            this.startTime = performance.now();
            this.running = true;
            this.animate();
        }
    }

    stop() {
        this.running = false;
    }

    animate(timestamp) {
        if (!this.lastTimestamp) this.lastTimestamp = timestamp;
        if (this.running) {
            this.elapsedTime += timestamp - this.lastTimestamp;
            this.lastTimestamp = timestamp;
            requestAnimationFrame((timestamp) => this.animate(timestamp));
        }
    }

    getTime() {
        return this.elapsedTime;
    }
}
