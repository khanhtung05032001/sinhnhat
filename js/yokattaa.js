
    $(".gui").click(function (){
        $(".popup").show();
        $(".trang-chu-3").hide();
    })

    $(".chon4").click(function (){
        $(".pupp4").show();
        $(".popup").hide();

    })
    $("ipnhap").keypress(function (){
        $(this).text("tung");
    })

    var ttu =["t","u","n","g"]
    for (var i=0;i<ttu.length;i++){
        console.log(i);
    }
    document.querySelector(".son").oninput = () =>{
        document.querySelector(".st").innerHTML =   ttu[1] + ttu[2];
    }

// $(".son").click(function (){
//     $(this).innerHTML="utng";
// })




// const danhsach = document.getElementById("#kk")
// const con = danhsach.children

// function keydownHandler(evt)  {
//     appendLog("Keydown!");
// }
//
// function keyupHandler(evt)  {
//     appendLog("Keyup!");
// }

// function keypressHandler(evt)  {
//     appendLog("tung");
//
// }
//
//
//
// function appendLog(text)  {
//     var oldText = document.getElementById("log-div").value;
//     document.getElementById("log-div").value = oldText+ text;
// }

// function clearLog()  {
//     document.getElementById("log-div").value = "";
// }


