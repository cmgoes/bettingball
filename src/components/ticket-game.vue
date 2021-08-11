<template>
    <div>
        <div class="mainContent">
            <div class="orangeBar">
                <a href="" id="fstField">0</a>
                <a href="" id="sndField">0</a>
                <a href="" id="trdField">0</a>
                <a href="" id="frtField">0</a>
                <a href="" id="fthField">0</a>
                <a href="" id="sixField">0</a>
            </div>

            <div class="numberBar">
                <div>
                    <a class="stage" @click="getNumber(1)">
                        <figure class="ball purple">
                            <span class="numPad nOne"></span>
                        </figure>
                    </a>
                    <a class="stage" @click="getNumber(2)">
                        <figure class="ball blue">
                            <span class="numPad nTwo"></span>
                        </figure>
                    </a>
                    <a class="stage" @click="getNumber(3)">
                        <figure class="ball yellow">
                            <span class="numPad nThree"></span>
                        </figure>
                    </a>
                    <a class="stage" @click="getNumber(4)">
                        <figure class="ball darkRed">
                            <span class="numPad nFour"></span>
                        </figure>
                    </a>
                    <a class="stage" @click="getNumber(5)">
                        <figure class="ball green">
                            <span class="numPad nFive"></span>
                        </figure>
                    </a>
                </div>

                <div class="row2">
                    <a class="stage" @click="getNumber(6)">
                        <figure class="ball red">
                            <span class="numPad nSix"></span>
                        </figure>
                    </a>
                    <a class="stage" @click="getNumber(7)">
                        <figure class="ball">
                            <span class="numPad nSeven"></span>
                        </figure>
                    </a>
                    <a class="stage" @click="getNumber(8)">
                        <figure class="ball blue">
                            <span class="numPad nEight"></span>
                        </figure>
                    </a>
                </div>

                <div>
                    <a class="stage" @click="getNumber(9)">
                        <figure class="ball green">
                            <span class="numPad nNine"></span>
                        </figure>
                    </a>
                    <a class="stage" @click="getNumber(10)">
                        <figure class="ball yellow">
                            <span class="numPad nTen"></span>
                        </figure>
                    </a>
                    <a class="stage" @click="getNumber(11)">
                        <figure class="ball lightBlue">
                            <span class="numPad nEleven"></span>
                        </figure>
                    </a>
                    <a class="stage" @click="getNumber(12)">
                        <figure class="ball orange">
                            <span class="numPad nTwelve"></span>
                        </figure>
                    </a>
                    <a class="stage" @click="getNumber(13)">
                        <figure class="ball purple">
                            <span class="numPad nThirteen"></span>
                        </figure>
                    </a>
                </div>

                <div class="row4">
                    <a class="stage" @click="getNumber(14)">
                        <figure class="ball darkRed">
                            <span class="numPad nFourteen"></span>
                        </figure>
                    </a>
                    <a class="stage" @click="getNumber(15)">
                        <figure class="ball yellow">
                            <span class="numPad nFifteen"></span>
                        </figure>
                    </a>
                    <a class="stage" @click="getNumber(16)">
                        <figure class="ball">
                            <span class="numPad nSixteen"></span>
                        </figure>
                    </a>
                </div>

                <div class="row5">
                    <a class="stage" @click="getNumber(17)">
                        <figure class="ball green">
                            <span class="numPad nSeventeen"></span>
                        </figure>
                    </a>
                    <a class="stage" @click="getNumber(18)">
                        <figure class="ball lightBlue">
                            <span class="numPad nEighteen"></span>
                        </figure>
                    </a>
                    <a class="stage" @click="getNumber(19)">
                        <figure class="ball red">
                            <span class="numPad nNineteen"></span>
                        </figure>
                    </a>
                    <a class="stage" @click="getNumber(20)">
                        <figure class="ball purple">
                            <span class="numPad nTwenty"></span>
                        </figure>
                    </a>
                    <a class="stage" @click="getNumber(21)">
                        <figure class="ball blue">
                            <span class="numPad nTOne"></span>
                        </figure>
                    </a>
                </div>
            </div>

            <div class="row6">
                <a class="redBtn" @click="reset()">Reset</a>
                <a class="greenBtn" @click="getRandom()">Random</a>
                <a class="blueBtn" @click="sendData()">Submit</a>
            </div>
        </div>
        <div id="successMsg"></div>
        <div id="errorMsg"></div>
    </div>
</template>

<script>
    export default {
        name: "ticket-game",
        data() {
            return {
                arr:[]
        }
        },
        methods: {

            getNumber(num) {
                if (this.arr.length < 6)
                    this.arr.push(num);
                if (this.arr.length === 1)
                    document.getElementById("fstField").innerHTML = this.arr[0];
                if (this.arr.length === 2)
                    document.getElementById("sndField").innerHTML = this.arr[1];
                if (this.arr.length === 3)
                    document.getElementById("trdField").innerHTML = this.arr[2];
                if (this.arr.length === 4)
                    document.getElementById("frtField").innerHTML = this.arr[3];
                if (this.arr.length === 5)
                    document.getElementById("fthField").innerHTML = this.arr[4];
                if (this.arr.length === 6) {
                    document.getElementById("sixField").innerHTML = this.arr[5];

                    var sMsg = document.getElementById("successMsg");
                    sMsg.style.display = "block";
                    sMsg.innerHTML = "Great! You've selected your 6 numbers"

                    let timer = setTimeout(() => {
                        sMsg.style.display = "none";
                        sMsg.innerHTML = ""
                        clearInterval(timer);
                    }, 3000);
                }
            },

            reset() {
                this.arr = [];
                document.getElementById("fstField").innerHTML = 0;
                document.getElementById("sndField").innerHTML = 0;
                document.getElementById("trdField").innerHTML = 0;
                document.getElementById("frtField").innerHTML = 0;
                document.getElementById("fthField").innerHTML = 0;
                document.getElementById("sixField").innerHTML = 0;
            },

            sendData() {
                if (this.arr.length !== 6) {
                    var eMsg = document.getElementById("errorMsg");
                    eMsg.style.display = "block";
                    eMsg.innerHTML = "Please select all 6 numbers"

                    let timer = setTimeout(() => {
                        eMsg.style.display = "none";
                        eMsg.innerHTML = ""
                        clearInterval(timer);
                    }, 3000);
                } else {
                    var sMsg = document.getElementById("successMsg");
                    sMsg.style.display = "block";
                    sMsg.innerHTML = "Looks perfect!"

                    let timer = setTimeout(() => {
                        sMsg.style.display = "none";
                        sMsg.innerHTML = ""
                        clearInterval(timer);
                    }, 3000);
                }
            },

            randomNum() {
                return Math.floor((Math.random() * 21) + 1);
            },

            getRandom() {
                this.arr = [];
                for (let index = 0; index < 6; index++) {
                    this.getNumber(this.randomNum())
                }
            }
        }
    }
</script>

<style scoped>
.mainContent {
    max-width: 380px;
    margin: auto;
    border-radius: 0;
    padding: 20px;
}

.mainContent .orangeBar {
    background-color: #314682;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 4px 0 #969696;
    box-shadow: 0 1px 4px 0 #969696;
    margin-bottom: 10px;
}

.mainContent .orangeBar a {
    width: 35px;
    height: 35px;
    display: inline-block;
    border-radius: 100%;
    background: radial-gradient(circle at 60% 160%, #9a9a9a, #f9f9f9 80%, #ffffff 100%);
    margin-right: 6px;
    line-height: 35px;
    text-decoration: none;
    color: #000;
}

.mainContent .numberBar .row4,
.mainContent .numberBar .row2 {
    padding: 20px 0;
}

.mainContent .numberBar .row5{
    padding-bottom: 30px;
}


.mainContent .numberBar a:last-child,
.mainContent .orangeBar a:last-child {
    margin-right: 0px;
}

.mainContent .numberBar {
    padding-top: 15px;
}

.mainContent .numberBar div {
    display: flex;
    justify-content: center;
}

.mainContent .numberBar a {
    margin: 0 10px;
    /* width: 55px;
    height: 55px;
    display: inline-block;
    border-radius: 100%;
    background-color: #ffffff;
    margin-right: 19px;
    font-size: 22px;
    font-weight: 900;
    line-height: 50px;
    text-decoration: none;
    color: rgb(0, 0, 0); */
}

.mainContent .row6 {
    text-align: center;
    display: flex;
    justify-content: space-between;
}

.mainContent .row6 a {
    width: calc((100% - 40px) / 3);
    height: 40px;
    display: inline-block;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 900;
    line-height: 40px;
    text-decoration: none;
    color: #fff;
    text-align: center;
    cursor: pointer;
    transition: 0.2s all linear;
}

.mainContent .row6 a.redBtn {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#e76843+0,e2491f+39,790d0a+100 */
    background: rgb(231,104,67); /* Old browsers */
    background: -moz-linear-gradient(top,  rgba(231,104,67,1) 0%, rgba(226,73,31,1) 39%, rgba(121,13,10,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(231,104,67,1) 0%,rgba(226,73,31,1) 39%,rgba(121,13,10,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(231,104,67,1) 0%,rgba(226,73,31,1) 39%,rgba(121,13,10,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e76843', endColorstr='#790d0a',GradientType=0 ); /* IE6-9 */
}

.mainContent .row6 a.redBtn:hover {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#790d0a+0,e2491f+61,e76843+100 */
    background: rgb(121,13,10); /* Old browsers */
    background: -moz-linear-gradient(top,  rgba(121,13,10,1) 0%, rgba(226,73,31,1) 61%, rgba(231,104,67,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(121,13,10,1) 0%,rgba(226,73,31,1) 61%,rgba(231,104,67,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(121,13,10,1) 0%,rgba(226,73,31,1) 61%,rgba(231,104,67,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#790d0a', endColorstr='#e76843',GradientType=0 ); /* IE6-9 */

}

.mainContent .row6 a.greenBtn {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#3dc462+0,169039+47,034d28+100 */
    background: rgb(61,196,98); /* Old browsers */
    background: -moz-linear-gradient(top,  rgba(61,196,98,1) 0%, rgba(22,144,57,1) 47%, rgba(3,77,40,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(61,196,98,1) 0%,rgba(22,144,57,1) 47%,rgba(3,77,40,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(61,196,98,1) 0%,rgba(22,144,57,1) 47%,rgba(3,77,40,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3dc462', endColorstr='#034d28',GradientType=0 ); /* IE6-9 */
}

.mainContent .row6 a.greenBtn:hover {
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#034d28+0,169039+53,3dc462+100 */
    background: rgb(3,77,40); /* Old browsers */
    background: -moz-linear-gradient(top,  rgba(3,77,40,1) 0%, rgba(22,144,57,1) 53%, rgba(61,196,98,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(3,77,40,1) 0%,rgba(22,144,57,1) 53%,rgba(61,196,98,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(3,77,40,1) 0%,rgba(22,144,57,1) 53%,rgba(61,196,98,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#034d28', endColorstr='#3dc462',GradientType=0 ); /* IE6-9 */

}

.mainContent .row6 a.blueBtn {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1ba2d2+0,0e6ba0+47,05497f+100 */
    background: rgb(27,162,210); /* Old browsers */
    background: -moz-linear-gradient(top,  rgba(27,162,210,1) 0%, rgba(14,107,160,1) 47%, rgba(5,73,127,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(27,162,210,1) 0%,rgba(14,107,160,1) 47%,rgba(5,73,127,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(27,162,210,1) 0%,rgba(14,107,160,1) 47%,rgba(5,73,127,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1ba2d2', endColorstr='#05497f',GradientType=0 ); /* IE6-9 */
}

.mainContent .row6 a.blueBtn:hover {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#05497f+0,0e6ba0+53,1ba2d2+100 */
    background: rgb(5,73,127); /* Old browsers */
    background: -moz-linear-gradient(top,  rgba(5,73,127,1) 0%, rgba(14,107,160,1) 53%, rgba(27,162,210,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  rgba(5,73,127,1) 0%,rgba(14,107,160,1) 53%,rgba(27,162,210,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  rgba(5,73,127,1) 0%,rgba(14,107,160,1) 53%,rgba(27,162,210,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#05497f', endColorstr='#1ba2d2',GradientType=0 ); /* IE6-9 */
}

#successMsg,
#errorMsg {
    width: 380px;
    margin: 10px auto;
    border-left: #000 solid 5px;
    padding: 15px 20px;
    background-color: #000;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    display: none;
}

#successMsg {
    background-color: #169039;
    border-left-color: #034D28;
}

#errorMsg {
    background-color: #BE131D;
    border-left-color: #790D0A;
}

.ball {
    display: block;
    background: black;
    margin: 0;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background: radial-gradient(circle at 60% 160%, #000000, #0a0a0a 80%, #323232 100%);
    transition: 0.1s all linear;
}

.ball:hover {
    transform: scale(1.1);
}

.ball.yellow {
    background: radial-gradient(circle at 60% 160%, #F76208, #F0B83D 80%, #FBEA6D 100%);
}

.ball.orange {
    background: radial-gradient(circle at 60% 160%, #FE6748, #F69046 80%, #F9AC5E 100%);
}

.ball.red {
    background: radial-gradient(circle at 60% 160%, #790D0A, #E2491F 80%, #E76843 100%);
}

.ball.darkRed {
    background: radial-gradient(circle at 60% 160%, #7C0615, #BE131D 80%, #EB3825 100%);
}

.ball.purple {
    background: radial-gradient(circle at 60% 160%, #470A72, #5B1882 80%, #7840BC 100%);
}

.ball.blue {
    background: radial-gradient(circle at 60% 160%, #1F2543, #1E3984 80%, #4C6EC7 100%);
}

.ball.lightBlue {
    background: radial-gradient(circle at 60% 160%, #05497F, #0E6BA0 80%, #1BA2D2 100%);
}

.ball.green {
    background: radial-gradient(circle at 60% 160%, #034D28, #169039 80%, #3DC462 100%);
}

.ball:before {
    content: "";
    position: absolute;
    background: radial-gradient(circle at 50% 120%, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
    bottom: 2.5%;
    left: 5%;
    opacity: 0.6;
    height: 100%;
    width: 90%;
    filter: blur(5px);
    z-index: 2;
}



.stage {
    position: relative;
    cursor: pointer;
    display: block;
    width: 50px;
    height: 50px;
    -webkit-perspective: 1200px;
    -moz-perspective: 1200px;
    -ms-perspective: 1200px;
    -o-perspective: 1200px;
    perspective: 1200px;
    -webkit-perspective-origin: 50% 50%;
    -moz-perspective-origin: 50% 50%;
    -ms-perspective-origin: 50% 50%;
    -o-perspective-origin: 50% 50%;
    perspective-origin: 50% 50%;
}


.ball .numPad {
    width: 20px;
    height: 20px;
    margin: 30%;
    background: white;
    border-radius: 50%;
    transform: translateX(6px) translateY(-2px) skewX(3deg) skewY(2deg);
    position: absolute;
}
.ball .numPad:before {
    display: block;
    position: absolute;
    text-align: center;
    height: 15px;
    width: 15px;
    left: 43px;
    margin-left: -40px;
    top: 43px;
    margin-top: -40px;
    color: black;
    font-family: Arial,serif;
    font-size: 16px;
    line-height: 14px;
    font-weight: bold;
}

.ball .numPad.nOne:before {
    content: "1";
}

.ball .numPad.nTwo:before {
    content: "2";
}

.ball .numPad.nThree:before {
    content: "3";
}

.ball .numPad.nFour:before {
    content: "4";
}

.ball .numPad.nFive:before {
    content: "5";
}

.ball .numPad.nSix:before {
    content: "6";
}

.ball .numPad.nSeven:before {
    content: "7";
}

.ball .numPad.nEight:before {
    content: "8";
}

.ball .numPad.nNine:before {
    content: "9";
}

.ball .numPad.nTen:before {
    left: 41px;
    content: "10";
}
.ball .numPad.nEleven:before {
    left: 41px;
    content: "11";
}
.ball .numPad.nTwelve:before {
    left: 41px;
    content: "12";
}
.ball .numPad.nThirteen:before {
    left: 41px;
    content: "13";
}
.ball .numPad.nFourteen:before {
    left: 41px;
    content: "14";
}
.ball .numPad.nFifteen:before {
    left: 41px;
    content: "15";
}
.ball .numPad.nSixteen:before {
    left: 41px;
    content: "16";
}
.ball .numPad.nSeventeen:before {
    left: 41px;
    content: "17";
}
.ball .numPad.nEighteen:before {
    left: 41px;
    content: "18";
}
.ball .numPad.nNineteen:before {
    left: 41px;
    content: "19";
}
.ball .numPad.nTwenty:before {
    left: 42px;
    content: "20";
}
.ball .numPad.nTOne:before {
    left: 42px;
    content: "21";
}
</style>