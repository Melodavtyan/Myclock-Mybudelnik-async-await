class Clock {
    constructor(hour, min, sec) {
        this.hour = hour
        this.min = min
        this.sec = sec

    }


    delay(ms) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(ms)
            }, ms);
        })
    }

    async tick() {
        for (let i = 0; i < 60; i++) {
            await this.delay(1000)
            this.sec += 1
            if (this.sec === 60) {
                this.min += 1
                this.sec = 0
            }
            if (this.min === 60) {
                this.hour += 1
                this.min = 0
            }
            if (this.hour === 24) {
                this.hour = 0

            }
            
            console.clear();
            console.log(`${this.hour}:${this.min}:${this.sec}`);
        }
    }
    // budelniki messagei anun@/haur/minute/secunds

    async setAlert(name, h, min, sec) {

        //s @ setAlerti h min sec veratsel em varkyani

        let s = (((h * 60) + min) * 60) + sec

        //s2 clocki hour min  sec veracel em  varkyani

        let s2 = (((this.hour * 60) + this.min) * 60) + this.sec

        if (s < s2) {

            alert(new Error(name + "-" + "Այս անունով բուդելնիկի Ժամն արդեն անցել է"))

        }

        while (true) {
            await this.delay(1000)
            if (h === this.hour && min === this.min && sec === this.sec) {

                alert(name)
            }
        }

    }
}

let clock = new Clock(11, 11, 58)
clock.tick()
clock.setAlert("Զարթնի բուդելնիկը խփեց", 11, 12, 8)
clock.setAlert("սխալ բուդելնիկ", 11, 11, 2)