#encoding: utf-8

class Fingering < ActiveRecord::Base
  validates_length_of   :fingering_status, :minimum => 32
  validates_length_of   :note_tone, :minimum => 4
  validates_presence_of :note_tone, :fingering_status, :keytype
  #validates_format_of   :fingering_status, :with => regEx?, :message => "Fingering Status String Incorrect"
  #validates_format_of   :note_tone, :with => regEx?, :message => "Note Tone String Incorrect"
  
  def pretty_notes
    n     = self.note_tone[0].to_i
    notes = Array.new(n)
    tones = Array.new(n)
    
    # Parse Notes
    temp = Array.new(n);
    temp = self.note_tone[2..-1].split(',')

    for i in 0..(n - 1)
      notes[i] = temp[i][0..1]
    end
   
    # Parse Tones
    temp = Array.new(n); 
    temp = self.note_tone[2..-1].split(',');

    for i in 0..(n - 1)
      if temp[i][3..-1] == "natural"
        tones[i] = "♮"
      elsif temp[i][3..-1] == "flat"
        tones[i] = "♭"
      elsif temp[i][3..-1] == "sharp"
        tones[i] = "♯"
      end
    end

    # Pretify
    ret = (n == 1)?(tones[0] + notes[0]):(tones[0] + notes[0] + ' to ')
    for i in 1..n - 1
      ret = (i + 1 >= n)?(ret + tones[i] + notes[i]):(ret + tones[i] + notes[i] + ' to ')
    end

    return ret
  end

  def send_fingering_submitted
    FingeringMailer.fingering_submitted_email(self).deliver 
  end
end
