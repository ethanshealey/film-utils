class ShutterSpeedUtilties {

    static convertSpeedToDecimal = (speed: string): number => {
        const speedList = speed.split("/")

        if(speedList.length === 1)
            // 1 second+
            return parseInt(speed)

        else if(speedList.length === 2) {
            return parseInt(speedList[0]) / parseInt(speedList[1])
        }
        else return -1
    }

    static getPossibleDecimalShutterSpeeds = (): number[] => {
        return this.getPossibleShutterSpeeds().map((s: string) => this.convertSpeedToDecimal(s))
    }

    static getPossibleShutterSpeeds = (): string[] => [
        "1/8000",
        "1/5000",
        "1/4000",
        "1/3200",
        "1/2500",
        "1/2000",
        "1/1600",
        "1/1250",
        "1/1000",
        "1/800",
        "1/640",
        "1/500",
        "1/400",
        "1/320",
        "1/250",
        "1/200",
        "1/160",
        "1/125",
        "1/100",
        "1/80",
        "1/60",
        "1/50",
        "1/40",
        "1/30",
        "1/25",
        "1/20",
        "1/15",
        "1/13",
        "1/10",
        "1/8",
        "1/6",
        "1/5",
        "1/4",
        "1/3",
        "1/2",
        "1",
        "2",
        "4",
        "8",
        "15",
        "30"
    ]

}

export default ShutterSpeedUtilties