let main = document.getElementById("main");

let cofeeArr = ["coffeeB.jpg","Coffee",1]
let beerArr = ["beerB.jpg","Beer",2]
let other = [1,"Drink",3]


function dropdown(inp){
    
    let leadCon = document.createElement("div");
    let secendaryCon = document.createElement("div");
    let btnPM = document.createElement("button");
    let textBtn = document.createElement("p");
    let imgPlus = document.createElement("img");
    let imgMinus = document.createElement("img");

    main.append(leadCon);
    leadCon.append(btnPM);
    leadCon.append(secendaryCon);

    btnPM.addEventListener("click" , () => {
        secendaryCon.classList.toggle("show");
        imgPlus.classList.toggle("hide");
        imgMinus.classList.toggle("show");
    })

    leadCon.classList.add("dropdown");
    btnPM.classList.add("dropbtn");
    textBtn.classList.add("textBtnClass");
    textBtn.append(`${inp[1]}`);
    btnPM.append(textBtn);
    secendaryCon.classList.add("dropdown-content");

    let table = document.createElement("table");

    secendaryCon.append(table);

    for (let i = 0; i < inp.length; i++) {

        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let imgTable = document.createElement("img");
        let textTable = document.createElement("p");
        let numTable = document.createElement("p");

        imgTable.setAttribute("src" , "coffee-cup.png")
        imgTable.classList.add("imgTable")
        table.append(tr)
        tr.append(td1)
        td1.append(imgTable)
        td1.classList.add("tdBot")
        td1.classList.add("td1")

        textTable.append("Drink")
        textTable.classList.add("textTable")
        tr.append(td2)
        td2.append(textTable)
        td2.classList.add("tdLeft")
        td2.classList.add("tdBot")
        td2.classList.add("td2")

        numTable.append("50 den")
        numTable.classList.add("numTable")
        tr.append(td3)
        td3.append(numTable)
        td3.classList.add("tdLeft")
        td3.classList.add("tdBot")
        td3.classList.add("td3")
        
        let b = i
        let d = b + 1

        

        if (d == inp.length) {
            td1.classList.remove("tdBot")
            td2.classList.remove("tdBot")
            td3.classList.remove("tdBot")
        }

        btnPM.style.backgroundImage = `url(${inp[0]})`;

        btnPM.append(imgPlus);
        imgPlus.setAttribute("src", "plus.png")
        imgPlus.classList.add("imgPlusClass")

        btnPM.append(imgMinus);
        imgMinus.setAttribute("src", "minus.png")
        imgMinus.classList.add("imgMinusClass")
    }

    // window.onclick = function(event) {
    //     if (!event.target.matches('.dropbtn')) {
    //         let dropdowns = document.getElementsByClassName("dropdown-content");
    //         for (let i = 0; i < dropdowns.length; i++) {
    //             let openDropdown = dropdowns[i];
    //             if (openDropdown.classList.contains('show')) {
    //                 openDropdown.classList.remove('show');                
    //             }
    //         }
    //     }
    // }

}

dropdown(cofeeArr)
dropdown(beerArr)
dropdown(other)
dropdown(other)
dropdown(other)
dropdown(other)
dropdown(other)
