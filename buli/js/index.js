function myFunction() {
    let b = "ארבל ברקו מאפרת ומעצבת שיער מקצועית  ";
    let txt = b.split("");
    $.each(txt, function (k, v) {
        let a = document.createElement("b");
        a.append(v);
        console.log(v)
        $("b").hover(function () {
            $(this).css({
                "color": "white",
                "textShadow": "0 0 5px hsl(20, 100%, 60%),0 0 5px hsl(20, 100%, 60%)"
            });
        }, function () {
            $(this).css({
                "color": "white",
                "textShadow": "0 0 0"
            });
        });
        $("h1").append(a);


    })

}
myFunction();