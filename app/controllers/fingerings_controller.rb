class FingeringsController < ApplicationController
  before_filter :require_login
  before_filter :require_admin, :only => [:edit, :destroy]
  
  def index
    @fingerings = Fingering.all.sort_by(&:created_at)

    respond_to do |format|
      format.html { }
      if current_user.isAdmin
        format.json { render json: @fingerings }
      end
    end
  end
  
  def search
    @user = session[:user]
    @fingering = Fingering.new(params[:fingering])
    @note_tone = @fingering.note_tone
    
    respond_to do |format|
      format.html { }
      if current_user.isAdmin
        format.json { render json: @fingering }
      end
    end
  end
  
  def search_results
      @Results = Fingering.where(:note_tone => params[:fingering][:note_tone]).order('score DESC') 
      debugger
      if @Results != []
        @fingerings = @Results.paginate(:page => params[:page], :per_page => 1)#, :order => 'score DESC')
      else
        flash[:notice] = "No fingerings match that note(s)."
      end
    
  end
  def show
    @fingering        = Fingering.find(params[:id])
    @fingering_status = @fingering.fingering_status
    @note_tone        = @fingering.note_tone
    
    respond_to do |format|
      format.html { }
      if current_user.isAdmin
        format.json { render json: @fingering }
      end
    end
  end

  def new
    @fingering = Fingering.new(params[:fingering])
  end

  def create
    @fingering = Fingering.create!(params[:fingering])
    @fingering.votes_beginner     = 0
    @fingering.votes_intermediate = 0
    @fingering.votes_advanced     = 0
    @fingering.votes_professional = 0
    @fingering.dvotes_beginner     = 0
    @fingering.dvotes_intermediate = 0
    @fingering.dvotes_advanced     = 0
    @fingering.dvotes_professional = 0
    @fingering.user_name = current_user.login
    @fingering.approved  = false
    @fingering.score = 0

    if @fingering.save
      redirect_to fingerings_url, :notice => 'Fingering was successfully created.'
    else
      render action: "new"
    end
  end

  def edit
    @fingering        = Fingering.find(params[:id])
    @fingering_status = @fingering.fingering_status
    @note_tone        = @fingering.note_tone
  end

  def update
    @fingering = Fingering.find(params[:id])

    if @fingering.update_attributes(params[:fingering])
      redirect_to @fingering, :notice => 'Fingering was successfully updated.'
    else
      render action: "edit"
    end
  end

  def destroy
    @fingering = Fingering.find(params[:id])
    @fingering.destroy

    redirect_to fingerings_url
  end
  
  def approve
    @fingering = Fingering.find(params[:id])
    
    @fingering.approved = !@fingering.approved
    
    if @fingering.update_attributes(params[:fingering])
      redirect_to @fingering, :notice => "Fingering was approved."
    else
      redirect_to @fingering, :notice => "Fingering approval failed."
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
    
    if @fingering.save
      if cookies[:votes] != nil
        @votes = Array.new()
        @votes = cookies[:votes]
        @votes << @fingering.id.to_s()
        cookies[:votes] = @votes
      else 
        cookies[:votes] = @fingering.id.to_s()
      end
      debugger
      @fingering.score = self.rating # re-rate the fingering every time it is liked or disliked
      @fingering.save
      redirect_to @fingering, :notice => "Fingering was liked."
    else 
      redirect_to @fingering, :notice => "Fingering was not liked."
    end
  end
  
  def dislike
    @fingering = Fingering.find(params[:id])
    
    if current_user.skill == "professional" 
      @fingering.dvotes_professional += 1
    elsif current_user.skill == "advanced"
      @fingering.dvotes_advanced += 1
    elsif current_user.skill == "intermediate"
      @fingering.dvotes_intermediate += 1
    else
      @fingering.dvotes_beginner += 1
    end
    
    if @fingering.save
      if cookies[:votes] != nil
        @votes = Array.new()
        @votes = cookies[:votes]
        @votes << @fingering.id.to_s()
        cookies[:votes] = @votes
      else 
        cookies[:votes] = @fingering.id.to_s()
      end
      @fingering.score = self.rating # re-rate the fingering every time it is liked or disliked
      @fingering.save
      redirect_to @fingering, :notice => "Fingering was disliked."
    else 
      redirect_to @fingering, :notice => "Fingering was not disliked."
    end
  end
  
  def rating
    likes = @fingering.votes_professional + @fingering.votes_advanced + @fingering.votes_intermediate + @fingering.votes_beginner
    dislikes = @fingering.dvotes_professional + @fingering.dvotes_advanced + @fingering.dvotes_intermediate + @fingering.dvotes_beginner
    total = likes + dislikes
    if total == 0
      return 0
    end
    z = 1.96 # z-score for 95% CI
    phat = 1.0*likes/total
    return ( phat + (z*z) / (2*total) - z * Math.sqrt( (phat * (1-phat) + z*z/(4*total) ) / total) )/ ((1+(z*z))/total )
    
  end
  
  
end
