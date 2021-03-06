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
        tones[i] = ""#"♮"
      elsif temp[i][3..-1] == "flat"
        tones[i] = "♭"
      elsif temp[i][3..-1] == "sharp"
        tones[i] = "♯"
      end
    end

    # Prettify
    ret = (n == 1)?(notes[0][0] + tones[0] + notes[0][1]):(notes[0][0] + tones[0] + notes[0][1] + ' to ')
    for i in 1..n - 1
      ret = (i + 1 >= n)?(ret + notes[i][0] + tones[i] + notes[i][1]):(ret + notes[i][0] + tones[i] + notes[i][1] + ' to ')
    end

    if((ret[0] == "a" && ret[1] == "♯") || (ret[0] == "b" && ret[1] == "♭"))
     return "a♯" + ret[2] + "/b♭" + ret[2..-1]
    elsif((ret[0] == "c" && ret[1] == "♯") || (ret[0] == "d" && ret[1] == "♭"))
     return "c♯" + ret[2] + "/d♭" + ret[2..-1]
    elsif((ret[0] == "d" && ret[1] == "♯") || (ret[0] == "e" && ret[1] == "♭"))
     return "d♯" + ret[2] + "/e♭" + ret[2..-1]
    elsif((ret[0] == "f" && ret[1] == "♯") || (ret[0] == "g" && ret[1] == "♭"))
     return "f♯" + ret[2] + "/g♭" + ret[2..-1]
    elsif((ret[0] == "g" && ret[1] == "♯") || (ret[0] == "a" && ret[1] == "♭"))
     return "g♯" + ret[2] + "/a♭" + ret[2..-1]
    else
     return ret
    end
  end

  def send_fingering_submitted
    @admins = User.where(admin: true);
    @admins.each do |admin|
      FingeringMailer.fingering_submitted_email(self, admin).deliver 
    end
  end
end
