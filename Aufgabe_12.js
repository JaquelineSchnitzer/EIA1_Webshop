var Aufgabe12;
(function (Aufgabe12) {
    // Artikel 1
    var racoon = {
        bezeichnung: "Watercolor painting - racoon",
        text: "Mit Aquarell gezeichneter Waschbaer von Kuenstler Mr. Aqua.",
        size: ["DIN A4", "DIN A3", "DIN A2"],
        prize: 100,
        available: 35,
        delivery: 3,
        release: "07/17",
        height: 60,
        width: 40,
        depth: 10,
        imgSrc: "imgs/1.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mr. Aqua",
    };
    // Artikel 2 
    var blueEye = {
        bezeichnung: "Watercolor painting - blue eye",
        text: "Mit Aquarell gezeichnetes Auge von Kuenstler Mr. Aqua.",
        size: ["DIN A4", "DIN A3", "DIN A2"],
        prize: 80,
        available: 40,
        delivery: 2,
        release: "01/17",
        height: 80,
        width: 60,
        depth: 5,
        imgSrc: "imgs/2.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mr. Aqua",
    };
    // Artikel 3 
    var woman = {
        bezeichnung: "Watercolor painting - woman",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mrs. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 95,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/3.jpg",
        weitereInfos: "Weitere Info's",
        special: "- 5%",
        kuenstler: "Mrs. Aqua",
    };
    //Artikel 4
    var lakeside = {
        bezeichnung: "Watercolor painting - lakeside",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mrs. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 85,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/4.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mrs. Aqua",
    };
    //Artikel 5
    var twoFish = {
        bezeichnung: "Watercolor painting - two fish",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mrs. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 75,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/5.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mrs. Aqua",
    };
    //Artikel 6
    var nightsky = {
        bezeichnung: "Watercolor painting - nightsky",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mrs. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 100,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/6.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mrs. Aqua",
    };
    //Artikel 7
    var girlOne = {
        bezeichnung: "Watercolor painting - girl one",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mrs. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 110,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/7.jpg",
        weitereInfos: "Weitere Info's",
        special: "noch 10",
        kuenstler: "Mrs. Aqua",
    };
    //Artikel 8
    var monkey = {
        bezeichnung: "Watercolor painting - monkey",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mr. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 90,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/8.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mr. Aqua",
    };
    //Artikel 9
    var inLove = {
        bezeichnung: "Watercolor painting - in love",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mr. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 70,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/9.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mr. Aqua",
    };
    //Artikel 10
    var camelion = {
        bezeichnung: "Watercolor painting - camelion",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mr. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 80,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/10.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mr. Aqua",
    };
    //Artikel 11
    var girlTwo = {
        bezeichnung: "Watercolor painting - girl two",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mr. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 85,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/11.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mr. Aqua",
    };
    //Artikel 12
    var faceOne = {
        bezeichnung: "Watercolor painting - face one",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mrs. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 95,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/12.jpg",
        weitereInfos: "Weitere Info's",
        special: "NEU!",
        kuenstler: "Mrs. Aqua",
    };
    //Artikel 13
    var faceTwo = {
        bezeichnung: "Watercolor painting - face two",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mr. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 90,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/13.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mr. Aqua",
    };
    //Artikel 14
    var girlThree = {
        bezeichnung: "Watercolor painting - girl three",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mrs. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 85,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/14.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mrs. Aqua",
    };
    //Artikel 15
    var autumnPath = {
        bezeichnung: "Watercolor painting - autumn path",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mrs. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 80,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/15.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mrs. Aqua",
    };
    //Artikel 16
    var justBeYou = {
        bezeichnung: "Watercolor painting - just be you",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mr. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 40,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/16.jpg",
        weitereInfos: "Weitere Info's",
        special: "- 10%",
        kuenstler: "Mr. Aqua",
    };
    //Artikel 17
    var zebraStreak = {
        bezeichnung: "Watercolor painting - zebra streak",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mr. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 95,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/17.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mr. Aqua",
    };
    //Artikel 18
    var feathers = {
        bezeichnung: "Watercolor painting - feathers",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mrs. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 70,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/18.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mrs. Aqua",
    };
    //Artikel 19
    var giraffe = {
        bezeichnung: "Watercolor painting - giraffe",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mrs. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 100,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/19.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mrs. Aqua",
    };
    //Artikel 20
    var babyDeer = {
        bezeichnung: "Watercolor painting - baby deer",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mrs. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 95,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/20.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mrs. Aqua",
    };
    //Artikel 21
    var elephant = {
        bezeichnung: "Watercolor painting - elephant",
        text: "Mit Aquarell gezeichnete Frau von Kuenstlerin Mr. Aqua.",
        size: ["DINA4 ", "DIN A3", "DIN A2"],
        prize: 110,
        available: 10,
        delivery: 3,
        release: "09/17",
        height: 100,
        width: 80,
        depth: 15,
        imgSrc: "imgs/21.jpg",
        weitereInfos: "Weitere Info's",
        special: "",
        kuenstler: "Mr. Aqua",
    };
    // Array aus Aufgabe 9.4
    var artikel = [racoon, blueEye, woman, lakeside, twoFish, nightsky, girlOne, monkey, inLove, camelion, girlTwo, faceOne, faceTwo, girlThree, autumnPath, justBeYou, zebraStreak, feathers, giraffe, babyDeer, elephant];
    // Aufgabe 12.1
    console.log("Aufgabe 11.3, 11.4 und 12.1");
    function generateProductOverview() {
        var node = document.getElementById("content");
        var childNodeHTML;
        var i = 0;
        while (i < artikel.length) {
            childNodeHTML = "";
            childNodeHTML += "<div class='article' id='filter" + i + "'>";
            if (artikel[i].special != "") {
                childNodeHTML += "<div class='image'>";
                childNodeHTML += "<div class='stoerer'>" + artikel[i].special + "</div>";
                childNodeHTML += "<img alt='" + artikel[i].bezeichnung + "' src=" + artikel[i].imgSrc + ">";
                childNodeHTML += "</div>";
                childNodeHTML += "<h2>";
                childNodeHTML += artikel[i].bezeichnung;
                childNodeHTML += "</h2>";
                childNodeHTML += "<div class=>";
                childNodeHTML += artikel[i].prize + "Euro";
                childNodeHTML += "</div>";
                childNodeHTML += "<div class=>";
                childNodeHTML += artikel[i].weitereInfos;
                childNodeHTML += "</div>";
                childNodeHTML += "<button>";
                childNodeHTML += "Jetzt kaufen!";
                childNodeHTML += "</button>";
                childNodeHTML += "</div>";
                console.log(artikel[i].bezeichnung);
                console.log(artikel[i].text);
                console.log(artikel[i].prize);
                console.log("");
            }
            else {
                console.log(artikel[i].bezeichnung);
                console.log(artikel[i].text);
                console.log(artikel[i].prize);
                console.log("");
                childNodeHTML += "<div class='image'>";
                childNodeHTML += "<img alt='" + artikel[i].bezeichnung + "' src=" + artikel[i].imgSrc + ">";
                childNodeHTML += "</div>";
                childNodeHTML += "<h2>";
                childNodeHTML += artikel[i].bezeichnung;
                childNodeHTML += "</h2>";
                childNodeHTML += "<div class=>";
                childNodeHTML += artikel[i].prize + "Euro";
                childNodeHTML += "</div>";
                childNodeHTML += "<div class=>";
                childNodeHTML += artikel[i].weitereInfos;
                childNodeHTML += "</div>";
                childNodeHTML += "<button>";
                childNodeHTML += "Jetzt kaufen!";
                childNodeHTML += "</button>";
                childNodeHTML += "</div>";
            }
            node.innerHTML += childNodeHTML;
            i++;
        }
        // Eventlistener f�r Filter 
        document.getElementById("guenstig").addEventListener('click', function () {
            filterByPrize(0, 50);
        });
        document.getElementById("mittel").addEventListener('click', function () {
            filterByPrize(50, 70);
        });
        document.getElementById("teuer").addEventListener('click', function () {
            filterByPrize(70, 100);
        });
        document.getElementById("sehrTeuer").addEventListener('click', function () {
            filterByPrize(100, 150);
        });
        document.getElementById("alle").addEventListener('click', function () {
            filterByPrize(0, 150);
        });
        document.getElementById("mrsAqua").addEventListener('click', function () {
            filterByKuenstler("Mrs. Aqua");
        });
        document.getElementById("mrAqua").addEventListener('click', function () {
            filterByKuenstler("Mr. Aqua");
        });
        document.getElementById("sale").addEventListener('click', function () {
            filterBySale("- 10%", "- 5%");
        });
    }
    // Aufgabe 12.2 - Preisfilter 
    function filterByPrize(prize1, prize2) {
        for (var i = 0; i < artikel.length; i++) {
            var node = document.getElementById("filter" + i);
            if (artikel[i].prize > prize1 && artikel[i].prize <= prize2) {
                node.style.display = "initial";
            }
            else {
                node.style.display = "none";
            }
        }
    }
    // Aufgabe 12.3 - Filter f�r K�nstler
    function filterByKuenstler(kuenstler) {
        for (var i = 0; i < artikel.length; i++) {
            var node = document.getElementById("filter" + i);
            if (artikel[i].kuenstler == kuenstler) {
                node.style.display = "initial";
            }
            else {
                node.style.display = "none";
            }
        }
    }
    function filterBySale(special1, special2) {
        for (var i = 0; i < artikel.length; i++) {
            var node = document.getElementById("filter" + i);
            if (artikel[i].special == special1 || artikel[i].special == special2) {
                node.style.display = "initial";
            }
            else {
                node.style.display = "none";
            }
        }
    }
    document.addEventListener('DOMContentLoaded', generateProductOverview);
})(Aufgabe12 || (Aufgabe12 = {}));
//# sourceMappingURL=Aufgabe_12.js.map