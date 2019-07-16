 $(function () {
   $('.div-menu a').on("click", function (e) {
     e.preventDefault()
     const url = this.getAttribute('href').toString()
     $("#content").load(url)
   })
 })
