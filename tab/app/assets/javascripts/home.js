/**
 * @author Sverk
 */

function test() 
{
    var ctx = document.getElementById('note_view').getContext('2d');
    var img = new Image();
    img.onload = function()
    {
      ctx.beginPath()
        ctx.drawImage(img, 10, 10, 150, 150);
      ctx.closePath();
      ctx.stroke();
    };
    img.src = 'images/music_staff.png';
}