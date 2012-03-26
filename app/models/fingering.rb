class Fingering < ActiveRecord::Base
  validates_length_of   :fingering_status, :is => 30
  validates_presence_of :note_tone, :fingering_status
end
