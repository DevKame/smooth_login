"use strict";

let inputs = document.querySelectorAll("input");

inputs.forEach(inp => {


    inp.addEventListener("focus", e => {
        e.target.parentElement.classList.add("focussed");
        let label = e.target.nextElementSibling;
        if(!label.classList.contains("labelfocus"))
        {
            label.classList.add("labelfocus");
        }
    });



    inp.addEventListener("blur", e => {
        let parent = e.target.parentElement;
        parent.classList.remove("focussed");
        let label = e.target.nextElementSibling;
        if(e.target.value === "")
        {
            label.classList.remove("labelfocus");
        }
    });
});