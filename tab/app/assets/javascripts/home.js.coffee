# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

DrawStaff = (width, height) ->
  @ctx = document.getElementById('note_view').getContext('2d')
  @img = new Image()
  @img.onload = () ->
    @ctx.drawImage(img, 0, 0)
  @img.src = 'music_staff.png'
  
  @ctx.beginPath()
  @ctx.moveTo(75,50)
  @ctx.lineTo(100,75)
  @ctx.lineTo(100,25)
  @ctx.closePath()
  @ctx.stroke()
