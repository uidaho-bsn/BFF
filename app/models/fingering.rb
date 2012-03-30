class Fingering < ActiveRecord::Base
  validates_length_of   :fingering_status, :minimum => 32
#  validates_format_of 
  validates_presence_of :note_tone, :fingering_status
end
