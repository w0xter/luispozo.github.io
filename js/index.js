function navbarSpy(){
  $(document).ready(function(){
    let topWin = $(window).scrollTop();
    let bottomWin = $(window).scrollTop() + $(window).height();
    let home = $("#home");
    let about = $("#about")
    let aboutTitle = $("#aboutTitle");
    let contact = $("#contactTitle");
    let homeAct = false;
    let aboutAct = false
    let contacAct = false

    // console.log("--------------------------------------------------------------------------")
    // console.log("Home: H=" + home.height() + " OFT=" + home.offset().top);
    // console.log("about: H=" + about.height() + " OFT=" + about.offset().top);
    // console.log("aboutTitle: H=" + aboutTitle.height() + " OFT=" + aboutTitle.offset().top);
    // console.log("contact: H=" + contact.height() + " OFT=" + contact.offset().top);
    // console.log("TopWin: " + topWin + " BottomWin: " + bottomWin);
    // console.log("--------------------------------------------------------------------------")
    if(!homeAct && topWin >= 0 && topWin <= home.offset().top + home.height()*0.5){
      $(".homeNav").addClass('hovered');
      $(".aboutNav").removeClass('hovered');
      $(".contactNav").removeClass('hovered');
      homeAct  = true;
      contactAct = false;
      aboutAct  = false;
    }else if(!aboutAct && topWin > home.offset().top + home.height()*0.5 && topWin <= aboutTitle.offset().top + aboutTitle.height()){
      $(".aboutNav").addClass('hovered');
      $(".homeNav").removeClass('hovered');
      $(".contactNav").removeClass('hovered');
      homeAct  = false;
      contactAct = false;
      aboutAct  = true;
      }else if(!contactAct){
        $(".contactNav").addClass('hovered');
        $(".aboutNav").removeClass('hovered');
        $(".homeNav").removeClass('hovered');    
        homeAct  = false;
        contactAct = true;
        aboutAct  = false;
      }
   });
}