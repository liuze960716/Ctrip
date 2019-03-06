
$(function(){
    $(".add").children("img").click(function(){
        $(".hide").slideDown("fast",function(){
            $(".hideDiv").animate({"opacity":"1"},500)
        });
        $(".x").children("img").click(function(){
            $(".hideDiv").animate({"opacity":"0"},500)
            $(".hide").slideUp("slow");
        })
    })
})
// export default xx(){
//
// }
