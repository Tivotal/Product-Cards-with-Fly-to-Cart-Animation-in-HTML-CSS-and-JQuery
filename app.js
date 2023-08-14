/* Created by Tivotal */

let count = 0;

$(".cart-btn").on("click", function () {
  let cart = $(".cart-nav");

  //finding img of that card which button is clicked
  let imgtoDrop = $(this)
    .parent(".buttons")
    .parent(".content")
    .parent(".card")
    .find("img")
    .eq(0);

  if (imgtoDrop) {
    //duplicating the img
    var imgClone = imgtoDrop
      .clone()
      .offset({
        top: imgtoDrop.offset().top,
        left: imgtoDrop.offset().left,
      })
      .css({
        opacity: "0.8",
        position: "absolute",
        height: "150px",
        width: "150px",
        "z-index": "100",
      })
      .appendTo($("body"))
      .animate(
        {
          top: cart.offset().top + 20,
          left: cart.offset().left + 30,
          width: 75,
          height: 75,
        },
        1000,
        "easeInOutExpo"
      );

    setTimeout(() => {
      count++;
      $(".cart-nav .item-count").text(count);
    }, 1500);

    imgClone.animate(
      {
        width: 0,
        height: 0,
      },
      function () {
        $(this).detach();
      }
    );
  }
});
