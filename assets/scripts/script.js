// $('#section-one').click(function() {
//     $(this).addClass("fill-onclick")
//     $("#section-two").removeClass("one-fill-onclick");
//     $("#section-three").removeClass("one-fill-onclick");
// });

// document.getElementById("myDIV").style.width = "500px";

function SectionOne() {
    document.getElementById("section-container").classList.add("section-clicked-action"); // Changes height of container elements
    document.getElementById("background-container").classList.add("background-container-clicked-action");
    document.getElementById("text-cursor").classList.add("text-cursor-clicked-action");
    document.getElementById("section-one").classList.add("fill-onclick"); // Changes height of elements
    document.getElementById("section-two").classList.add("fill-onclick");
    document.getElementById("section-three").classList.add("fill-onclick");
    document.getElementsById("bounding-box").classList.remove("not-clicked"); // Makes sure initial hover effect works
    document.getElementsById("bounding-box").classList.remove("not-clicked"); // Makes sure initial hover effect works
}