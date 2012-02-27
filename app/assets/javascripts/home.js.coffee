# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
window.Interface = {};

class Staff
  b_loc: 0
  
  constructor: (@x, @y, @width, @height) ->
    b_loc = height / 2.0
    
  draw: ->
    draw_staff(@x, @y, @width, @height)

class Note
  width: 0
  height: 0
  note_type: 'quater'
  
  constructor: (@note_type, @x, @y) ->
    if @note_type == 'quater'
      width = 10
      height = 20
    
  draw: ->
     draw_note(@note_type, @x, @y, @width, @height)

window.Interface.draw = -> 
  @ctx = document.getElementById("note_view").getContext('2d')
  staff = new Staff(0, 0, 200, 100)
  staff.draw()
  note1 = new Note('quater', 15, 15)
  note1.draw()
