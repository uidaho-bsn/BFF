# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
window.Interface = {};

window.Interface.draw = () -> 
  @ctx = document.getElementById("canvas").getContext('2d')
  
  @ctx.fillStyle = "rgb(200, 0, 0)"
  @ctx.fillRect(10, 10, 55, 50)
  @ctx.fillStyle = "rgba(0, 0, 200, 0.5)"
  @ctx.fillRect(30, 30, 55, 50)
  
  #Home.DrawStaff()
  #test()

#window.Interface.DrawStaff = ->
#  @ctx = document.getElementById('note_view').getContext('2d')
#  @img = new Image()
#  @img.onload = ->
#    @ctx.beginPath()
#    @ctx.drawImage img, 10, 10
#    @ctx.closePath()
#  @ctx.stroke()
#  @img.src = 'images/music_staff.png'
