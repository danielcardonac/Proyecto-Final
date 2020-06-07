document.addEventListener("keydown", function(event){
    var letraPresionada = event.key;
    menu(letraPresionada);
  });

function menu(key){
  switch (key) {
    case "1":
      console.log(this.innerHTML);
      break;

    case "2":
      console.log(this.innerHTML);
      break;

    case "3":
      console.log(this.innerHTML);
      break;

    //case "4":
      //audio3.play();
      //break;

    //case "0":
      //audio5.play();
      //break;


    default: console.log(this.innerHTML);

  }
}
