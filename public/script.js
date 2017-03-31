$(document).ready(()=>{
  $.getJSON('http://localhost:8000/posts', (data)=>{
    data.map(x =>{
      console.log(x.id)
      $("body").append(`<div>${x.inp}<button id = "${x.id}">yo</button></div>`)
    })
    $("form").on("submit", (e)=>{
      e.preventDefault();
      var input = $("textarea").val();
      if (input === ""){alert("fill something in!"); return}
      var newObj = {
        id: Math.round(Math.random() * 100000000000000000),
        inp: input
      };
      $('form').trigger('reset')

      $.post('http://localhost:8000/posts',newObj, (posted)=>{
        console.log(posted[posted.length -1].id)
        $('body').append(`<div>${posted[posted.length -1].inp}<button id= "${posted[posted.length-1].id}">yo</button></div>`)
      })

    })


  })
})
