class FingeringsController < ApplicationController
  before_filter :require_login
  before_filter :require_admin, :only => [:edit, :destroy]
  
  def index
    @fingerings = Fingering.all

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
      @Results = Fingering.where(:note_tone => params[:fingering][:note_tone])
      debugger
      if @Results != []
        @fingerings = @Results.paginate(:page => params[:page], :per_page => 1)
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
    @fingering.user_name = current_user.login
    @fingering.approved  = false

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
      
      redirect_to @fingering, :notice => "Fingering was liked."
    else 
      redirect_to @fingering, :notice => "Fingering was not liked."
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
    
    if @fingering.save
      if cookies[:votes] != nil
        @votes = Array.new()
        @votes = cookies[:votes]
        @votes << @fingering.id.to_s()
        cookies[:votes] = @votes
      else 
        cookies[:votes] = @fingering.id.to_s()
      end
      
      redirect_to @fingering, :notice => "Fingering was disliked."
    else 
      redirect_to @fingering, :notice => "Fingering was not disliked."
    end
  end
end
