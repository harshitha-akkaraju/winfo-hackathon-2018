


(function () {
    // let now = [];
    // let taken = [];

    let medicines = [{ name: "Breakfast at 8:30am", done: true }, { name: "Lunch at 12:30pm", done: false }, { name: "Snack at 3:30pm", done: false }, { name: "Dinner at 6:30pm", done: false }];

    // 
    makeList();

    window.addEventListener("click", function (e) {
        console.log(e.target.getAttribute("class"));
        if (e.target.getAttribute("class") === "card-body bg-success") {
            makeList();
        }
    });

    function makeList() {
        let now = [];
        let taken = [];
        medicines.forEach(function (med) {
            let card = document.createElement("div");
            let inner = document.createElement("div");
            card.classList.add("card");
            card.setAttribute("style", "width: 90%; margin: 1%");
            inner.classList.add("card-body");
            inner.textContent = med.name;
            card.appendChild(inner);
            // changes color
            card.addEventListener("click", function () {
                med.done = !med.done ? true : true;
                card.classList.add("border", "border-success");
            });

            if (med.done === true) {
                card.classList.add("border", "border-success");
                taken.push(card);
            } else {
                now.push(card);
            }
            console.log(taken);
            flag = true;
        })
        updateUI("#toEat", now);
        updateUI("#eaten", taken);
    }

    function updateState() {
        let result = [];
        medicines.forEach(function (med) {
            if (!med.done) {
                result.push(med);
            }
        });
        now = result;
    }



    function updateUI(section, list) {
        let div = document.querySelector(section);
        div.innerHTML = "";
        list.forEach(function (elem) {
            div.appendChild(elem);
        })
    }

    // updateUI("#now", now);
    // updateUI("#taken", taken);

})();

/*
<div class="card" style="width: 90%; margin: 1%">
    <div class="card-body">
        Medication 1
    </div>
</div>

*/