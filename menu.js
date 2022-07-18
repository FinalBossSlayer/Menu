let main = document.getElementById("main");

// let cofeeArr = ["coffeeB.jpg","Coffee",1]
// let beerArr = ["beerB.jpg","Beer",2]
// let other = [1,"Drink",3]
// let test = ["coffeeB.jpg","Naslov",1,1,1]

// The function that generates all the rows on the menu
function dropdown(inp){
    
    // Generating all the html elements we need
    let leadCon = document.createElement("div");
    let secendaryCon = document.createElement("div");
    let btnPM = document.createElement("button");
    let textBtn = document.createElement("p");
    let imgPlus = document.createElement("img");
    let imgMinus = document.createElement("img");

    // All the main containers are appended here
    main.append(leadCon);
    leadCon.append(btnPM);
    leadCon.append(secendaryCon);

    // The Dropdown of every row
    btnPM.addEventListener("click" , () => {
        secendaryCon.classList.toggle("show");
        imgPlus.classList.toggle("hide");
        imgMinus.classList.toggle("show");
    })

    // Adding classes
    leadCon.classList.add("dropdown");
    btnPM.classList.add("dropbtn");
    textBtn.classList.add("textBtnClass");

     // Name of the row and appending it
    for (const i in inp) {
        let arrName = Object.keys(inp)
        let nm = arrName[i]
        textBtn.append(`${nm.constructor.name}`);
    }

    btnPM.append(textBtn);

    // The Secondary container
    secendaryCon.classList.add("dropdown-content");
    let table = document.createElement("table");
    secendaryCon.append(table);

    // All the elements for the secondary container
    for (const s in inp) {

        let arr1 = Object.keys(inp).length
        let arr2 = Object.keys(inp)
        let seocondArr = Object.keys(arr2[s])
        for (let i = 0; i < arr1; i++) {

            // Generating elements
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let imgTable = document.createElement("img");
            let textTable = document.createElement("p");
            let numTable = document.createElement("p");
    
            // Image for the menu item
            for (const imgT in seocondArr) {
                imgTable.setAttribute("src" , `images/${seocondArr[imgT].image}`)
            }
    
            imgTable.classList.add("imgTable")
            table.append(tr)
            tr.append(td1)
            td1.append(imgTable)
            td1.classList.add("tdBot")
            td1.classList.add("td1")
    
            // Name of the menu item
            for (const snm in seocondArr) {
                textTable.append(seocondArr.constructor.name)
            }
    
            textTable.classList.add("textTable")
            tr.append(td2)
            td2.append(textTable)
            td2.classList.add("tdLeft")
            td2.classList.add("tdBot")
            td2.classList.add("td2")
    
            // Price of the menu item
            for (const pr in seocondArr) {
                numTable.append(seocondArr[pr].price)
            }
    
            numTable.classList.add("numTable")
            tr.append(td3)
            td3.append(numTable)
            td3.classList.add("tdLeft")
            td3.classList.add("tdBot")
            td3.classList.add("td3")
    
            // To make the last element in the row not have a line under neeth (aka select the last element)
            let b = i
            let d = b + 1
    
            if (d == inp.length) {
                td1.classList.remove("tdBot")
                td2.classList.remove("tdBot")
                td3.classList.remove("tdBot")
            }
    
            // For a backrownd image on the row
            // btnPM.style.backgroundImage = `url(${inp[0]})`;
    
            // The plus and minus icons
            btnPM.append(imgPlus);
            imgPlus.setAttribute("src", "plus.png")
            imgPlus.classList.add("imgPlusClass")
    
            btnPM.append(imgMinus);
            imgMinus.setAttribute("src", "minus.png")
            imgMinus.classList.add("imgMinusClass")
        }
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

// The place where we get all the items from the json
fetch("https://d5dagtlfjigi7.cloudfront.net/items.json")
.then((a) =>{
   return a.json();
})
.then((data) =>{
    // for (const times in data) {
    //     dropdown(data)
    // }
    console.log(data)
});

// var counter = 0
// $.getJSON("items.json", function(json) {
//     for (const property in json) {
//         for (const item in json[property])
//         {
//             var name = item
//             var price = json[property][item]["price"]
//             var image = `images/${json[property][item]["image"]}`

//             var tag = document.createElement("p");
//             var imgtag = document.createElement("img")
//             var text = document.createTextNode(name + " " + price);
//             imgtag.setAttribute(
//                 'src',
//                 image,
//                 );
//             tag.appendChild(text);
//             var element = document.getElementById("b");
//             element.appendChild(tag);
//             element.appendChild(imgtag)
//             counter++;
//         }    
//     }    
// });
