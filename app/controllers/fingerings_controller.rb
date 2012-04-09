class FingeringsController < ApplicationController
  before_filter :login_required
  
  def index
    @fingerings = Fingering.all

    respond_to do |format|
      format.html
      format.json { render json: @fingerings }
    end
  end
  
  def search
    @fingering = Fingering.new(params[:fingering])
    @note_tone = @fingering.note_tone
    respond_to do |format|
      format.html
      format.json { render json: @fingering }
    end
  end
  
  def search_results
    
      @Results = Fingering.where(:note_tone => params[:fingering][:note_tone])
      debugger
      if @Results != []
        @fingerings = @Results.paginate(:page => params[:page], :per_page => 1)
      else
        flash[:notice] = "No fingerings match that note."
      end

    # @Page_results = @Results.paginate(:page => params[:page], :per_page => 1)
    
  #  if fingering
  #    @fingering = fingering
 #     @fingering_status = @fingering.fingering_status
 #     @note_tone = @fingering.note_tone
      
      
      
      #respond_to do |format|
      #  format.html
      #  format.json { render json: @fingering } 
      #end
   # else
     # flash[:notice] = "No fingerings match that note."
   #  end

       #@note_tone = @fingering.note_tone
     
       
       #session[:query] = @Results.map(&:id)
     
       #@next_fingering = session[:query]
       #@prev_fingering = session[:query]
    
  end
 
 
  def show
    @fingering        = Fingering.find(params[:id])
    @fingering_status = @fingering.fingering_status
    @note_tone        = @fingering.note_tone
    
    respond_to do |format|
      format.html
      format.json { render json: @fingering }
    end
  end

  def new
    @fingering = Fingering.new(params[:fingering])

    respond_to do |format|
      format.html
      format.json { render json: @fingering }
    end
  end

  def create
    @fingering = Fingering.create!(params[:fingering])
    @fingering.votes_beginner     = 0
    @fingering.votes_intermediate = 0
    @fingering.votes_advanced     = 0
    @fingering.votes_professional = 0
    @fingering.user_name = current_user.login
    @fingering.approved  = false
    
    flash[:notice] = "Fingering submitted for approval."

    respond_to do |format|
      if @fingering.save
        format.html { redirect_to fingerings_url, notice: 'Fingering was successfully created.' }
        format.json { render json: @fingering, status: :created, location: @fingering }
      else
        format.html { render action: "new" }
        format.json { render json: @fingering.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
    @fingering        = Fingering.find(params[:id])
    @fingering_status = @fingering.fingering_status
    @note_tone        = @fingering.note_tone
  end

  def update
    @fingering = Fingering.find(params[:id])

    respond_to do |format|
      if @fingering.update_attributes(params[:fingering])
        format.html { redirect_to @fingering, notice: 'Fingering was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @fingering.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @fingering = Fingering.find(params[:id])
    @fingering.destroy

    respond_to do |format|
      format.html { redirect_to fingerings_url }
      format.json { head :no_content }
    end
  end
  
  def approve
    @fingering = Fingering.find(params[:id])
    
    @fingering.approved = !@fingering.approved
    
    respond_to do |format|
      if @fingering.update_attributes(params[:fingering])
        format.html { redirect_to @fingering, notice: "Fingering was approved." }
        format.json { head :no_content }
      else
        format.html { redirect_to @fingering, notice: "Fingering approval failed." }
        format.json { head :no_content }
      end
    end
  end
  
  def like
    @fingering = Fingering.find(params[:id])
    
    if current_user.skill == "professional" 
      @fingering.votes_professional += 1
    elsif current_user.skill == "advanced"
      @fingering.votes_advanced += 1
    elsif current_user.skill == "intermediate"
      @fingering.votes_intermediate += 1
    else
      @fingering.votes_beginner += 1
    end
    
    respond_to do |format|
      if @fingering.save
        format.html { redirect_to @fingering, notice: "Fingering was liked." }
        format.json { head :no_content }
      else 
        format.html { redirect_to @fingering, notice: "Fingering was not liked." }
        format.json { head :no_content }
      end
    end
  end
  
  def dislike
    @fingering = Fingering.find(params[:id])
    
    if current_user.skill == "professional" 
      @fingering.votes_professional -= 1
    elsif current_user.skill == "advanced"
      @fingering.votes_advanced -= 1
    elsif current_user.skill == "intermediate"
      @fingering.votes_intermediate -= 1
    else
      @fingering.votes_beginner -= 1
    end
    
    respond_to do |format|
      if @fingering.save
        format.html { redirect_to @fingering, notice: "Fingering was disliked." }
        format.json { head :no_content }
      else 
        format.html { redirect_to @fingering, notice: "Fingering was not disliked." }
        format.json { head :no_content }
      end
    end
  end
end
