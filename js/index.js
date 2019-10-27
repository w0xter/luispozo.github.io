function navbarSpy(){
  $(document).ready(function(){
    let topWin = $(document).scrollTop();
    let bottomWin = topWin + $(window).innerHeight();
    let home = $("#home");
    let about = $("#about")
    let contact = $("#contactTitle");
    console.log("--------------------------------------------------------------------------")
    console.log("Home: H=" + home.height() + " OFT=" + home.offset().top);
    console.log("about: H=" + about.height() + " OFT=" + about.offset().top);
    console.log("contact: H=" + contact.height() + " OFT=" + contact.offset().top);
    console.log("TopWin: " + topWin + " BottomWin: " + bottomWin);
    console.log("--------------------------------------------------------------------------")
    if(topWin < about.offset().top){
     console.log("Home")
    }else if(topWin > about.offset().top && bottomWin < contact.offset() ){
      console.log("About");
    }else{
      console.log("Contact");
    }
   });
}