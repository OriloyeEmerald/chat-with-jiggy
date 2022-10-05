
let theme = $("#theme");
theme.click(function() {
   $("#customize-theme").css("display", "grid");
});


let customize_theme = document.getElementById("customize-theme");
 window.addEventListener("click", closeModal);
 function closeModal(e) {
  if (e.target.classList.contains("customize-theme")) {
   customize_theme.style.display = "none";
  }
}

/* **************ACTIVE CLASS********************* */
let menuItem = $(".menu-item");

menuItem.click(function() {
   $(this).addClass("active");
   menuItem.not(this).removeClass("active");
})

  

/* **************SIDEBAR********************* */

let notifications = $("#notifications");
let notification_count = $("#notification-count");
let notifications_popup = $("#notifications-popup");
   notifications.click(function () {
    notifications_popup.toggle();
    notification_count.hide(); 
 })

/* **************MESSAGES********************* */
  let messages = $("#messages");
  let notification_cnt = $("#notification-cnt")
  let messages_div = $("#messages-div")
  messages.click(function() {
   messages_div.css("box-shadow", "0 0 1rem var(--color-pry")
   setTimeout(() => {
      messages_div.css("box-shadow", "none")
   }, 2000);
   notification_cnt.hide();
 
  })

  /* **************FONT SIZE********************* */
const html = document.querySelector("html");

    function changeFont(font_size) {
      if(font_size === "font-size-1") {
          html.style.fontSize = "10px"; 
          root.style.setProperty("--sticky-top-left", "5.4rem");
          root.style.setProperty("--sticky-top-right", "5.4rem");
      }
      else if (font_size === "font-size-2") {
         html.style.fontSize = "13px"; 
         root.style.setProperty("--sticky-top-left", "5.4rem");
         root.style.setProperty("--sticky-top-right", "-7rem");
      }
      else if (font_size === "font-size-3") {
         html.style.fontSize = "16px"; 
         root.style.setProperty("--sticky-top-left", "-2rem");
          root.style.setProperty("--sticky-top-right", "-17rem");
      }
      else if (font_size === "font-size-4") {
         html.style.fontSize = "19px"; 
         root.style.setProperty("--sticky-top-left", "-5rem");
          root.style.setProperty("--sticky-top-right", "-25rem");
      }
      else if (font_size === "font-size-5") {
         html.style.fontSize = "22px"; 
         root.style.setProperty("--sticky-top-left", "-12rem");
          root.style.setProperty("--sticky-top-right", "-35rem");
      }
    }

    let font_span = $(".choose-size span");
    
    font_span.click(function() {
       $(this).addClass("active");
       font_span.not(this).removeClass("active");
    })
    



     /* **************COLOR********************* */
      var root = document.querySelector(":root");

      const colorPalette = document.getElementsByClassName("color-s");
     
      for(let i = 0; i < colorPalette.length; i++) {
         colorPalette[i].addEventListener("click", colorBack)
         let primaryHue;
          function colorBack() {
            if (colorPalette[i].classList.contains("color-1")) {
                primaryHue = 252;
            } else if(colorPalette[i].classList.contains("color-2")) {
                primaryHue = 52;
            } else if(colorPalette[i].classList.contains("color-3")) {
               primaryHue = 352;
            } else if(colorPalette[i].classList.contains("color-4")) {
               primaryHue = 152;
           } else if(colorPalette[i].classList.contains("color-5")) {
               primaryHue = 202;
           }

           root.style.setProperty("--primary-color-hue", primaryHue);
          }
      }


      let color_span = $(".choose-color span");
    
      color_span.click(function() {
         $(this).addClass("active");
         color_span.not(this).removeClass("active");
      })
   



   const bgDiv = document.getElementsByClassName("bg-div");
   
     
      for(let i = 0; i < bgDiv.length; i++) {
         bgDiv[i].addEventListener("click", changeBg)
         let lightColorLightness;
         let whiteColorLightness;
         let darkColorLightness;

          function changeBg() {
            if (bgDiv[i].classList.contains("bg-1")) {
                window.location.reload();
            } else if(bgDiv[i].classList.contains("bg-2")) {
               lightColorLightness = "15%";
               whiteColorLightness = "20%";
               darkColorLightness  = "95%";
               root.style.color = "white";
            } else if(bgDiv[i].classList.contains("bg-3")) {
               lightColorLightness = "0%";
               whiteColorLightness = "10%";
               darkColorLightness  = "95%";
            } 


           root.style.setProperty("--dark-color-lightness", darkColorLightness);
           root.style.setProperty("--light-color-lightness", lightColorLightness);
           root.style.setProperty("--white-color-lightness", whiteColorLightness);
          }
      }


      let bg_div = $(".choose-bg div");
    
      bg_div.click(function() {
         $(this).addClass("active");
         bg_div.not(this).removeClass("active");
      })













  